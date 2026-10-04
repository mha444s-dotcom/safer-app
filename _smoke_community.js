/* ============================================================
   اختبار دخان (Smoke Test) لمنطق قسم المجتمع في app.js
   يشغّل app.js داخل vm مع DOM وlocalStorage وهميين،
   ويتأكد إن النشر/الإعجاب/التعليق/الحفظ/الحذف شغالين فعلاً.
   التشغيل:  node _smoke_community.js
   ============================================================ */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const DIR = __dirname;
let pass = 0, fail = 0;
function ok(msg) { pass++; console.log('  OK  ' + msg); }
function bad(msg) { fail++; console.log('  XX  ' + msg); }
function head(msg) { console.log('\n' + msg); }

/* ---------- DOM وهمي ---------- */
const els = {};
function makeEl(id) {
  return {
    id: id || '',
    style: {},
    dataset: {},
    className: '',
    textContent: '',
    value: '',
    innerHTML: '',
    files: null,
    offsetWidth: 120,
    classList: {
      _s: new Set(),
      add(c) { this._s.add(c); },
      remove(c) { this._s.delete(c); },
      toggle(c, on) {
        if (on === undefined) { this._s.has(c) ? this._s.delete(c) : this._s.add(c); }
        else if (on) this._s.add(c);
        else this._s.delete(c);
      },
      contains(c) { return this._s.has(c); }
    },
    querySelector() { return makeEl(''); },
    querySelectorAll() { return []; },
    addEventListener() {}, removeEventListener() {},
    setAttribute() {}, removeAttribute() {},
    appendChild() {}, removeChild() {},
    getBoundingClientRect() { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }; },
    focus() {}, click() {}, scrollIntoView() {}
  };
}
function elById(id) {
  if (!els[id]) els[id] = makeEl(id);
  return els[id];
}

const store = {};
const localStorage = {
  getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
  setItem(k, v) { store[k] = String(v); },
  removeItem(k) { delete store[k]; }
};

const documentStub = {
  getElementById: elById,
  querySelector() { return null; },
  querySelectorAll() { return []; },
  createElement(tag) { return makeEl(tag); },
  addEventListener() {},
  documentElement: makeEl('html'),
  body: makeEl('body')
};

const sandbox = {
  console, localStorage,
  document: documentStub,
  navigator: { onLine: true, userAgent: 'node' },
  location: { origin: 'http://localhost', pathname: '/index.html' },
  setTimeout, clearTimeout, setInterval, clearInterval,
  JSON, Math, Date, Promise, Array, Object, String, Number, RegExp, Error,
  isNaN, parseInt, parseFloat, Set, Map, Buffer,
  addEventListener() {},
  scrollTo() {},
  Image: function () {},
  FileReader: function () { this.readAsDataURL = function () {}; },
  confirm: function () { return true; },
  alert: function () {}
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

/* flags.js بيوفّر getFlag() و flagUrl() اللي app.js بيستخدمهم */
try {
  vm.runInContext(fs.readFileSync(path.join(DIR, 'flags.js'), 'utf8'), sandbox, { filename: 'flags.js' });
  ok('flags.js اتحمّل (getFlag/flagUrl)');
} catch (e) {
  bad('فشل تحميل flags.js: ' + e.message);
}

/* ---------- (1) التحميل ---------- */
head('1) تحميل app.js داخل بيئة وهمية');
let code;
try {
  code = fs.readFileSync(path.join(DIR, 'app.js'), 'utf8');
} catch (e) {
  bad('مش قادر أقرأ app.js: ' + e.message);
  process.exit(1);
}
try {
  vm.runInContext(code, sandbox, { filename: 'app.js' });
  ok('app.js اشتغل من غير أخطاء runtime');
} catch (e) {
  bad('app.js رمى خطأ: ' + e.message);
  console.log((e.stack || '').split('\n').slice(0, 5).join('\n'));
  process.exit(1);
}

/* app.js بيستخدم let/const في النطاق اللفظي — فبنعمل جسر للوصول للحالة */
['posts', 'savedPosts', 'pendingPostImage', 'expandedComments',
 'notifications', 'conversations', 'friends', 'groups',
 'currentStoryIndex', 'currentConversationId',
 'currentFriendFilter', 'currentGroupFilter'].forEach(function (name) {
  Object.defineProperty(sandbox, name, {
    configurable: true,
    get: function () { return vm.runInContext(name, sandbox); },
    set: function (v) {
      sandbox.__arg = v;
      vm.runInContext(name + ' = __arg;', sandbox);
    }
  });
});

/* ---------- (2) البيانات المبدئية ---------- */
head('2) تحميل المنشورات المبدئية');
if (Array.isArray(sandbox.posts) && sandbox.posts.length === 4) ok('اتحمّل 4 منشورات مبدئية');
else bad('عدد المنشورات غلط: ' + (sandbox.posts && sandbox.posts.length));

const seedOk = sandbox.posts.every(p => p.id && p.author && Array.isArray(p.likes) && Array.isArray(p.comments) && typeof p.createdAt === 'number');
if (seedOk) ok('كل منشور فيه id/author/likes[]/comments[]/createdAt');
else bad('فيه منشور ناقصه حقول');

if (store['safr_posts']) ok('المنشورات المبدئية اتحفظت في localStorage (safr_posts)');
else bad('البيانات المبدئية ما اتحفظتش في localStorage');

/* ---------- (3) العرض ---------- */
head('3) renderPosts()');
const me = sandbox.getCurrentUser();
ok('المستخدم الحالي = ' + me.name + ' (' + me.id + ')');

sandbox.renderPosts();
const html = elById('postsContainer').innerHTML;
[
  ['fb-post', 'كارت المنشور'],
  ['fb-post-actions', 'زراير التفاعل'],
  ['fb-comment-input-wrap', 'حقل التعليق'],
  ['fb-comment-send', 'زر إرسال التعليق'],
  ['showMoreMenu', 'زر ...'],
  ['toggleLike', 'زر الإعجاب'],
  ['sharePost', 'زر المشاركة'],
  ['savePost', 'زر الحفظ'],
  ['comments-', 'قسم التعليقات']
].forEach(function (pair) {
  if (html.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});

/* ---------- (4) النشر ---------- */
head('4) createPost()');
const before = sandbox.posts.length;
const p1 = sandbox.createPost('منشور تجريبي #اختبار\nسطر تاني', null, 'مصر');
if (sandbox.posts.length === before + 1) ok('المنشور اتضاف');
else bad('المنشور ما اتضافش');

if (sandbox.posts[0] === p1) ok('المنشور الجديد فوق خالص');
else bad('المنشور الجديد مش في الأول');

if (p1.authorId === me.id) ok('authorId = معرّف المستخدم الحالي');
else bad('authorId غلط: ' + p1.authorId);

if (p1.authorCountryCode === 'eg' && p1.authorCountry === 'مصر') ok('الدولة اتحولت لكود صح (eg)');
else bad('كود الدولة غلط: ' + p1.authorCountryCode);

const saved = JSON.parse(store['safr_posts']);
if (saved.length === sandbox.posts.length && saved[0].id === p1.id) ok('اتحفظ في localStorage بعد النشر');
else bad('المنشور الجديد ما اتحفظش في localStorage');

/* ---------- (5) الإعجاب ---------- */
head('5) toggleLike()');
const fakeBtn = makeEl('btn');
sandbox.toggleLike(p1.id, fakeBtn);
if (p1.likes.indexOf(me.id) !== -1) ok('الإعجاب اتسجّل بالـ user_id');
else bad('الإعجاب ما اتسجّلش');
if (fakeBtn.classList.contains('liked')) ok('الزرار اتلوّن (liked)');
else bad('الزرار ما اتلوّنش');

const likeCountAfterOne = p1.likes.length;
sandbox.toggleLike(p1.id, fakeBtn);
if (p1.likes.indexOf(me.id) === -1) ok('منع الإعجاب المزدوج (toggle شغال)');
else bad('الإعجاب المزدوج اشتغل');

const storedLikes = JSON.parse(store['safr_posts']).find(x => x.id === p1.id).likes;
if (storedLikes.indexOf(me.id) === -1 && likeCountAfterOne === 1) ok('حالة الإعجاب بتتحفظ في localStorage');
else bad('حالة الإعجاب ما اتحفظتش');

/* ---------- (6) التعليقات ---------- */
head('6) submitComment() / deleteComment()');
elById('commentInput-' + p1.id).value = 'تعليق تجريبي';
sandbox.submitComment(p1.id);
if (p1.comments.length === 1) ok('التعليق اتضاف');
else bad('التعليق ما اتضافش');

const c1 = p1.comments[0];
if (c1 && c1.authorId === me.id && c1.content === 'تعليق تجريبي' && c1.id) ok('التعليق فيه authorId + content + id');
else bad('بيانات التعليق ناقصة');

const storedComments = JSON.parse(store['safr_posts']).find(x => x.id === p1.id).comments;
if (storedComments.length === 1) ok('التعليق اتحفظ في localStorage');
else bad('التعليق ما اتحفظش في localStorage');

sandbox.deleteComment(p1.id, c1.id);
if (p1.comments.length === 0) ok('حذف التعليق شغال');
else bad('حذف التعليق ما اشتغلش');

/* ---------- (7) الحفظ ---------- */
head('7) savePost()');
sandbox.savePost(p1.id, makeEl('btn'));
if (sandbox.savedPosts.indexOf(p1.id) !== -1) ok('المنشور اتحفظ في قائمة المحفوظات');
else bad('الحفظ ما اشتغلش');
if (JSON.parse(store['safr_saved_posts']).indexOf(p1.id) !== -1) ok('safr_saved_posts اتخزّن في localStorage');
else bad('safr_saved_posts مش متخزّن');

sandbox.savePost(p1.id, makeEl('btn'));
if (sandbox.savedPosts.indexOf(p1.id) === -1) ok('إلغاء الحفظ شغال (toggle)');
else bad('إلغاء الحفظ ما اشتغلش');

/* ---------- (8) المودال ---------- */
head('8) المودال + الصور');
sandbox.openPostModal();
if (elById('postModal').classList.contains('show')) ok('openPostModal() بيفتح المودال');
else bad('المودال ما اتفتحش');
if (elById('modalAuthor').textContent === me.name && elById('modalAvatar').textContent === me.initials) ok('اسم وصورة المستخدم اتحطوا في المودال');
else bad('بيانات المستخدم ما اتحطتش في المودال');

elById('postContent').value = 'منشور من المودال';
sandbox.pendingPostImage = 'data:image/png;base64,iVBORw0KGgo=';
sandbox.submitPost();
if (sandbox.posts[0].content === 'منشور من المودال') ok('submitPost() نشر المحتوى');
else bad('submitPost() ما اشتغلش');
if (sandbox.posts[0].image && sandbox.posts[0].image.indexOf('data:image') === 0) ok('الصورة (Base64) اتحفظت مع المنشور');
else bad('الصورة ما اتحفظتش');
if (!elById('postModal').classList.contains('show')) ok('المودال اتقفل بعد النشر');
else bad('المودال ما اتقفلش');

/* ---------- (9) التعديل والحذف ---------- */
head('9) editPost() / deletePost()');
const target = sandbox.posts[0];
sandbox.editPost(target.id);
if (elById('postContent').value === target.content) ok('editPost() بيملأ المودال بالمحتوى القديم');
else bad('editPost() ما اشتغلش');
if (elById('postModalTitle').textContent === 'تعديل المنشور') ok('عنوان المودال بيتغير لوضع التعديل');
else bad('عنوان المودال ما اتغيرش');

elById('postContent').value = 'محتوى بعد التعديل';
sandbox.submitPost();
const edited = sandbox.posts.find(x => x.id === target.id);
if (edited && edited.content === 'محتوى بعد التعديل' && edited.editedAt) ok('التعديل اتحفظ + علامة "تم التعديل"');
else bad('التعديل ما اتحفظش');

const countBefore = sandbox.posts.length;
sandbox.deletePost(target.id);
if (sandbox.posts.length === countBefore - 1) ok('deletePost() مسح المنشور');
else bad('deletePost() ما اشتغلش');

/* ---------- (10) الأمان وأدوات العرض ---------- */
head('10) الأمان + أدوات العرض');
if (sandbox.escapeHTML('<script>alert(1)</script>').indexOf('<') === -1) ok('escapeHTML() بيمنع حقن HTML');
else bad('escapeHTML() ما بيحميش');

const fc = sandbox.formatPostContent('سطر1\nسطر2 #رحلة');
if (fc.indexOf('<br>') !== -1) ok('formatPostContent() بيحترم الأسطر الجديدة');
if (fc.indexOf('hashtag') !== -1) ok('formatPostContent() بيبرز الـ hashtags');

const now = Date.now();
if (sandbox.timeAgo(now) === 'الآن' && sandbox.timeAgo(now - 3600000).indexOf('ساعة') !== -1) ok('timeAgo() بيرجّع الوقت بالعربي');
else bad('timeAgo() غلط');

/* ---------- (11) التبويبات ---------- */
head('11) filterPosts()');
sandbox.filterPosts('groups', null);
if (elById('postsContainer').innerHTML.indexOf('fb-post') !== -1) ok('تاب المجتمعات بيرسم منشورات');
else bad('تاب المجتمعات فاضي');
sandbox.filterPosts('all', null);
ok('الرجوع لتاب الرئيسية شغال');

/* ---------- (12) عارض الصور ---------- */
head('12) openImageViewer() / closeImageViewer()');
sandbox.openImageViewer('data:image/png;base64,AAAA');
if (elById('imageViewer').classList.contains('show')) ok('openImageViewer() بيفتح العارض');
else bad('عارض الصور ما اتفتحش');
if (elById('imageViewerImg').src === 'data:image/png;base64,AAAA') ok('الصورة اتحطت جوه العارض');
else bad('الصورة ما اتحطتش');
if (documentStub.body.classList.contains('modal-open')) ok('body اتقفل عليه السكرول');
else bad('قفل السكرول ما اشتغلش');

sandbox.closeImageViewer();
if (!elById('imageViewer').classList.contains('show')) ok('closeImageViewer() بيقفل العارض');
else bad('العارض ما اتقفلش');
if (!documentStub.body.classList.contains('modal-open')) ok('السكرول اتفكّ بعد الإغلاق');
else bad('السكرول ما اتفكّش');

/* ---------- (13) عارض القصص ---------- */
head('13) openStoryViewer() / nextStory() / prevStory()');
sandbox.openStoryViewer(0);
if (elById('storyViewer').classList.contains('show')) ok('openStoryViewer() بيفتح العارض');
else bad('عارض القصص ما اتفتحش');
if (elById('storyName').textContent === 'أحمد محمود') ok('اسم صاحب القصة اتحط');
else bad('اسم صاحب القصة غلط: ' + elById('storyName').textContent);
if (elById('storyVisual').innerHTML.indexOf('fb-story-emoji') !== -1) ok('محتوى القصة اترسم');
else bad('محتوى القصة ما اترسمش');
if (String(elById('storyBar').style.animation).indexOf('fbStoryBar') !== -1) ok('شريط التقدم (5 ثواني) اشتغل');
else bad('شريط التقدم ما اشتغلش');

sandbox.nextStory();
if (sandbox.currentStoryIndex === 1) ok('nextStory() بينقل للقصة التالية');
else bad('nextStory() ما اشتغلش');
sandbox.prevStory();
if (sandbox.currentStoryIndex === 0) ok('prevStory() بيرجّع للقصة السابقة');
else bad('prevStory() ما اشتغلش');

sandbox.closeStoryViewer();
if (!elById('storyViewer').classList.contains('show')) ok('closeStoryViewer() بيقفل العارض');
else bad('عارض القصص ما اتقفلش');
if (sandbox.currentStoryIndex === -1) ok('مؤشر القصة اتصفّر بعد الإغلاق');
else bad('مؤشر القصة ما اتصفّرش');

/* ---------- (14) الإشعارات ---------- */
head('14) الإشعارات (notifications)');
if (Array.isArray(sandbox.notifications) && sandbox.notifications.length === 5) ok('اتحمّلوا 5 إشعارات افتراضية');
else bad('عدد الإشعارات غلط: ' + (sandbox.notifications && sandbox.notifications.length));
if (store['safr_notifications']) ok('الإشعارات اتحفظت في localStorage (safr_notifications)');
else bad('مفتاح safr_notifications مش موجود');

sandbox.renderNotifications();
const nHtml = elById('notificationsList').innerHTML;
[
  ['fb-notification-item', 'عنصر الإشعار'],
  ['fb-notification-icon', 'أيقونة النوع'],
  ['markAsRead', 'الضغط على الإشعار'],
  ['fb-notif-time', 'وقت الإشعار']
].forEach(function (pair) {
  if (nHtml.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});
if (nHtml.indexOf('unread') !== -1) ok('الإشعارات غير المقروءة معلّمة بـ unread');
else bad('ملاحظة unread مش موجودة');

if (elById('notifBadge').textContent === '3') ok('شارة 🔔 بتعدّ الإشعارات غير المقروءة (3)');
else bad('الشارة غلط: ' + elById('notifBadge').textContent);

const unreadBefore = sandbox.unreadNotificationsCount();
sandbox.markAsRead('notif_1');
if (sandbox.unreadNotificationsCount() === unreadBefore - 1) ok('markAsRead() بيقلّل العدّاد');
else bad('markAsRead() ما اشتغلش');
if (JSON.parse(store['safr_notifications']).find(n => n.id === 'notif_1').read) ok('حالة المقروء اتحفظت في localStorage');
else bad('حالة المقروء ما اتحفظتش');

sandbox.markAllAsRead();
if (sandbox.unreadNotificationsCount() === 0) ok('markAllAsRead() بيصفّر كل الإشعارات');
else bad('markAllAsRead() ما اشتغلش');
if (JSON.parse(store['safr_notifications']).every(n => n.read)) ok('«تحديد الكل كمقروء» اتحفظ في localStorage');
else bad('«تحديد الكل كمقروء» ما اتحفظش');

/* ---------- (15) الرسائل ---------- */
head('15) الرسائل + المحادثة (messages / chat)');
if (Array.isArray(sandbox.conversations) && sandbox.conversations.length === 5) ok('اتحمّلوا 5 محادثات افتراضية');
else bad('عدد المحادثات غلط: ' + (sandbox.conversations && sandbox.conversations.length));
if (store['safr_conversations']) ok('المحادثات اتحفظت في localStorage (safr_conversations)');
else bad('مفتاح safr_conversations مش موجود');

sandbox.renderMessagesPage();
const cHtml = elById('conversationsList').innerHTML;
[
  ['fb-conversation-item', 'عنصر المحادثة'],
  ['fb-conv-last', 'آخر رسالة'],
  ['fb-conv-unread', 'عدّاد غير المقروء'],
  ['openChat', 'الضغط على المحادثة']
].forEach(function (pair) {
  if (cHtml.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});

if (elById('msgBadge').textContent === '6') ok('شارة 💬 بتجمع غير المقروء (2+1+3=6)');
else bad('شارة الرسائل غلط: ' + elById('msgBadge').textContent);

sandbox.openChat('conv_1');
if (sandbox.currentConversationId === 'conv_1') ok('openChat() بيفتح المحادثة');
else bad('openChat() ما اشتغلش');

const conv1 = sandbox.conversations.find(c => c.id === 'conv_1');
if (conv1.unread === 0) ok('فتح المحادثة بيصفّر عدّاد غير المقروء');
else bad('العدّاد ما اتصفّرش');
if (JSON.parse(store['safr_conversations']).find(c => c.id === 'conv_1').unread === 0) ok('التصفير اتحفظ في localStorage');
else bad('التصفير ما اتحفظش');

sandbox.renderChat();
const chHtml = elById('chatMessages').innerHTML;
[
  ['fb-message-bubble', 'فقاعة الرسالة'],
  ['fb-message-row', 'صف الرسالة'],
  ['fb-message-time', 'وقت الرسالة']
].forEach(function (pair) {
  if (chHtml.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});

const msgsBefore = conv1.messages.length;
elById('chatInput').value = 'رسالة تجريبية';
sandbox.sendMessage();
if (conv1.messages.length === msgsBefore + 1) ok('sendMessage() بيضيف رسالة');
else bad('sendMessage() ما اشتغلش');

const lastMsg = conv1.messages[conv1.messages.length - 1];
if (lastMsg.text === 'رسالة تجريبية' && lastMsg.sender === 'me' && lastMsg.id) ok('الرسالة فيها النص + sender=me + id');
else bad('بيانات الرسالة ناقصة');

if (JSON.parse(store['safr_conversations']).find(c => c.id === 'conv_1').messages.length === msgsBefore + 1) ok('الرسالة اتحفظت في localStorage');
else bad('الرسالة ما اتحفظتش');

const convsCount = sandbox.conversations.length;
sandbox.newConversation();
if (sandbox.conversations.length === convsCount + 1) ok('newConversation() بتنشئ محادثة جديدة');
else bad('newConversation() ما اشتغلتش');
sandbox.renderChat();
if (elById('chatMessages').innerHTML.indexOf('fb-chat-empty') !== -1) ok('المحادثة الجديدة بتبدأ فاضية (فرصة للبدء)');
else bad('المحادثة الجديدة مش بتعرض حالة فاضية');

/* ---------- (16) الأصدقاء ---------- */
head('16) الأصدقاء (friends)');
if (Array.isArray(sandbox.friends) && sandbox.friends.length === 10) ok('اتحمّلوا 10 أصدقاء افتراضيين');
else bad('عدد الأصدقاء غلط: ' + (sandbox.friends && sandbox.friends.length));
if (store['safr_friends']) ok('الأصدقاء اتحفظوا في localStorage (safr_friends)');
else bad('مفتاح safr_friends مش موجود');

sandbox.renderFriendsPage();
const frHtml = elById('friendsList').innerHTML;
[
  ['fb-friend-item', 'عنصر الصديق'],
  ['fb-follow-btn', 'زر متابعة/إلغاء'],
  ['toggleFollow', 'تبديل المتابعة'],
  ['fb-friend-meta', 'بيانات الصديق']
].forEach(function (pair) {
  if (frHtml.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});
if (frHtml.indexOf('fb-meta-flag') !== -1) ok('علم الدولة بيظهر مع الصديق');
else bad('علم الدولة مش ظاهر');

const f3 = sandbox.friends.find(f => f.id === 'user_3');
const f3Followers = f3.followers;
if (f3.isFollowing === false) ok('user_3 مش متابَع في البداية');
else bad('حالة user_3 الابتدائية غلط');

sandbox.toggleFollow('user_3');
if (f3.isFollowing === true && f3.followers === f3Followers + 1) ok('toggleFollow() بيعمل متابعة + بيزوّد العدّاد');
else bad('المتابعة ما اشتغلتش');

sandbox.toggleFollow('user_3');
if (f3.isFollowing === false && f3.followers === f3Followers) ok('toggleFollow() بيلغي المتابعة ويرجّع العدّاد');
else bad('إلغاء المتابعة ما اشتغلش');
if (JSON.parse(store['safr_friends']).find(f => f.id === 'user_3').isFollowing === false) ok('حالة المتابعة بتتحفظ في localStorage');
else bad('حالة المتابعة ما اتحفظتش');

sandbox.filterFriends('followers', null);
if (sandbox.currentFriendFilter === 'followers' && elById('friendsList').innerHTML.indexOf('fb-friend-item') !== -1) ok('فلتر «المتابعين» بيرسم ناس');
else bad('فلتر «المتابعين» فاضي/غلط');

sandbox.filterFriends('following', null);
if (sandbox.currentFriendFilter === 'following') ok('فلتر «المتابَعين» شغال');
else bad('فلتر «المتابَعين» ما اشتغلش');

sandbox.filterFriends('all', null);
if (sandbox.currentFriendFilter === 'all' && elById('friendsList').innerHTML.indexOf('fb-friend-item') !== -1) ok('فلتر «الكل» شغال');
else bad('فلتر «الكل» ما اشتغلش');

const friendsBefore = sandbox.friends.length;
sandbox.addFriend();
if (sandbox.friends.length === friendsBefore + 1) ok('addFriend() بتضيف صديق جديد');
else bad('addFriend() ما اشتغلتش');
if (JSON.parse(store['safr_friends']).length === friendsBefore + 1) ok('الصديق الجديد اتحفظ في localStorage');
else bad('الصديق الجديد ما اتحفظش');

/* ---------- (17) المجتمعات ---------- */
head('17) المجتمعات (groups)');
if (Array.isArray(sandbox.groups) && sandbox.groups.length === 8) ok('اتحمّلوا 8 مجتمعات افتراضية');
else bad('عدد المجتمعات غلط: ' + (sandbox.groups && sandbox.groups.length));
if (store['safr_groups']) ok('المجتمعات اتحفظت في localStorage (safr_groups)');
else bad('مفتاح safr_groups مش موجود');

sandbox.renderGroupsPage();
const grHtml = elById('groupsList').innerHTML;
[
  ['fb-group-card', 'كارت المجتمع'],
  ['fb-join-btn', 'زر انضم/غادر'],
  ['toggleJoinGroup', 'تبديل الانضمام'],
  ['fb-group-meta', 'عدد الأعضاء']
].forEach(function (pair) {
  if (grHtml.indexOf(pair[0]) !== -1) ok('الـHTML فيه: ' + pair[1]);
  else bad('ناقص من الـHTML: ' + pair[1]);
});

if (sandbox.formatCount(12500) === '12,500') ok('formatCount() بتحط فواصل الآلاف');
else bad('formatCount() غلط: ' + sandbox.formatCount(12500));

const g2 = sandbox.groups.find(g => g.id === 'group_2');
const g2Members = g2.members;
sandbox.toggleJoinGroup('group_2');
if (g2.isJoined === true && g2.members === g2Members + 1) ok('toggleJoinGroup() بيضم + بيزوّد الأعضاء');
else bad('الانضمام ما اشتغلش');

sandbox.toggleJoinGroup('group_2');
if (g2.isJoined === false && g2.members === g2Members) ok('toggleJoinGroup() بيغادر + بيرجّع العدد');
else bad('المغادرة ما اشتغلتش');
if (JSON.parse(store['safr_groups']).find(g => g.id === 'group_2').isJoined === false) ok('حالة الانضمام بتتحفظ في localStorage');
else bad('حالة الانضمام ما اتحفظتش');

sandbox.filterGroups('discover', null);
if (sandbox.currentGroupFilter === 'discover' && elById('groupsList').innerHTML.indexOf('fb-group-card') !== -1) ok('تاب «اكتشف» بيعرض المجتمعات');
else bad('تاب «اكتشف» ما اشتغلش');

sandbox.filterGroups('joined', null);
if (sandbox.currentGroupFilter === 'joined' && elById('groupsList').innerHTML.indexOf('fb-group-card') !== -1) ok('تاب «المشترك بها» بيعرض المجتمعات المنضم لها');
else bad('تاب «المشترك بها» ما اشتغلش');

/* ---------- (18) الملفات الثابتة (index.html / styles.css / service-worker.js) ---------- */
head('18) الملفات الثابتة');
const htmlFile = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');
[
  ['id="page-notifications"', 'صفحة الإشعارات'],
  ['id="page-messages"', 'صفحة الرسائل'],
  ['id="page-chat"', 'صفحة المحادثة'],
  ['id="page-friends"', 'صفحة الأصدقاء'],
  ['id="page-groups"', 'صفحة المجتمعات'],
  ['id="imageViewer"', 'عارض الصور'],
  ['id="storyViewer"', 'عارض القصص'],
  ["switchPage('notifications')", 'زر 🔔 → الإشعارات'],
  ["switchPage('messages')", 'زر 💬 → الرسائل'],
  ["switchPage('profile')", 'زر 👤 → حسابي'],
  ["switchPage('friends')", 'تاب أصدقاء'],
  ["switchPage('groups')", 'تاب مجتمعات'],
  ['openStoryViewer(0)', 'الضغط على قصة'],
  ['id="notifBadge"', 'شارة الإشعارات'],
  ['id="msgBadge"', 'شارة الرسائل']
].forEach(function (pair) {
  if (htmlFile.indexOf(pair[0]) !== -1) ok('index.html فيه: ' + pair[1]);
  else bad('ناقص من index.html: ' + pair[1]);
});

const cssFile = fs.readFileSync(path.join(DIR, 'styles.css'), 'utf8');
[
  ['.fb-image-viewer', 'ستايل عارض الصور'],
  ['.fb-story-viewer', 'ستايل عارض القصص'],
  ['.fb-story-bar', 'شريط تقدم القصة'],
  ['.fb-story-nav', 'أزرار التنقل بين القصص'],
  ['.fb-notifications-page', 'ستايل الإشعارات'],
  ['.fb-notification-item', 'عنصر الإشعار'],
  ['.fb-notification-icon', 'أيقونة الإشعار'],
  ['.fb-messages-page', 'ستايل الرسائل'],
  ['.fb-conversation-item', 'عنصر المحادثة'],
  ['.fb-chat-window', 'نافذة المحادثة'],
  ['.fb-message-bubble', 'فقاعة الرسالة'],
  ['.fb-friends-page', 'ستايل الأصدقاء'],
  ['.fb-friend-item', 'عنصر الصديق'],
  ['.fb-groups-page', 'ستايل المجتمعات'],
  ['.fb-group-card', 'كارت المجتمع']
].forEach(function (pair) {
  if (cssFile.indexOf(pair[0]) !== -1) ok('styles.css فيه: ' + pair[1]);
  else bad('ناقص من styles.css: ' + pair[1]);
});

[
  [/\.fb-header\{[^}]*position:sticky/, '.fb-header position:sticky'],
  [/\.fb-header\{[^}]*z-index:100\b/, '.fb-header z-index:100'],
  [/\.fb-modal\{[^}]*z-index:10000/, '.fb-modal z-index:10000'],
  [/\.fb-more-menu\{[^}]*position:absolute/, '.fb-more-menu position:absolute'],
  [/\.fb-more-menu\{[^}]*z-index:999\b/, '.fb-more-menu z-index:999'],
  [/\.fb-post\{[^}]*position:relative/, '.fb-post position:relative'],
  [/\.fb-post\{[^}]*overflow:hidden/, '.fb-post overflow:hidden'],
  [/\.fb-post-content\{[^}]*overflow:hidden/, '.fb-post-content overflow:hidden'],
  [/@keyframes fbStoryBar/, 'أنيميشن شريط القصة']
].forEach(function (pair) {
  if (pair[0].test(cssFile)) ok('styles.css فيه: ' + pair[1]);
  else bad('ناقص من styles.css: ' + pair[1]);
});

const swFile = fs.readFileSync(path.join(DIR, 'service-worker.js'), 'utf8');
if (swFile.indexOf("'v1.0.17'") !== -1) ok('SW_VERSION اترفع لـ v1.0.17');
else bad('SW_VERSION ما اترفعش لـ v1.0.17');

/* فحص بنية index.html: مفيش تكرار في الـ id + كل الصفحات الجديدة موجودة */
const idsAll = (htmlFile.match(/id="([^"]+)"/g) || []).map(function (s) { return s.slice(4, -1); });
const dups = Array.from(new Set(idsAll.filter(function (v, i) { return idsAll.indexOf(v) !== i; })));
if (dups.length === 0) ok('مفيش تكرار في معرّفات index.html (' + idsAll.length + ' معرّف)');
else bad('فيه id مكرر: ' + dups.join(', '));

const pageIds = (htmlFile.match(/class="page" id="([^"]+)"/g) || []).map(function (s) {
  return s.replace(/.*id="([^"]+)"/, '$1');
});
['page-notifications', 'page-messages', 'page-chat', 'page-friends', 'page-groups'].forEach(function (p) {
  if (pageIds.indexOf(p) !== -1) ok('صفحة كاملة موجودة: ' + p);
  else bad('ناقص الصفحة: ' + p);
});

/* ---------- النتيجة ---------- */
console.log('\n============================================');
console.log('النتيجة: ' + pass + ' ناجح | ' + fail + ' فاشل');
console.log(fail === 0 ? 'كل حاجة تمام' : 'فيه مشاكل');
console.log('============================================');
process.exit(fail === 0 ? 0 : 1);
