/* ============================================================
   SAFR APP - FLAGS.JS (نسخة جديدة مبسطة)
   ============================================================ */

// كل علم كدالة بترجع SVG مباشرة
const flagSvgs = {

  // ==================== EUROPE ====================
  de: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#000"/><rect y="13.3" width="60" height="13.3" fill="#DD0000"/><rect y="26.6" width="60" height="13.4" fill="#FFCE00"/></svg>`,
  gb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#012169"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFF" stroke-width="8"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" stroke-width="4"/><path d="M30,0 V40 M0,20 H60" stroke="#FFF" stroke-width="13"/><path d="M30,0 V40 M0,20 H60" stroke="#C8102E" stroke-width="8"/></svg>`,
  fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="#002395"/><rect x="20" width="20" height="40" fill="#FFF"/><rect x="40" width="20" height="40" fill="#ED2939"/></svg>`,
  it: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="#009246"/><rect x="20" width="20" height="40" fill="#FFF"/><rect x="40" width="20" height="40" fill="#CE2B37"/></svg>`,
  es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#AA151B"/><rect y="10" width="60" height="20" fill="#F1BF00"/></svg>`,
  nl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#AE1C28"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#21468B"/></svg>`,
  se: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#0066AA"/><rect x="18" width="8" height="40" fill="#FECC02"/><rect y="16" width="60" height="8" fill="#FECC02"/></svg>`,
  ch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#D52B1E"/><rect x="26" y="10" width="8" height="20" fill="#FFF"/><rect x="20" y="16" width="20" height="8" fill="#FFF"/></svg>`,
  at: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#ED2939"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#ED2939"/></svg>`,
  be: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="#000"/><rect x="20" width="20" height="40" fill="#FAE042"/><rect x="40" width="20" height="40" fill="#ED2939"/></svg>`,
  gr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#0D5E31"/><rect y="4.4" width="60" height="4.4" fill="#FFF"/><rect y="13.3" width="60" height="4.4" fill="#FFF"/><rect y="22.2" width="60" height="4.4" fill="#FFF"/><rect y="31.1" width="60" height="4.4" fill="#FFF"/><rect width="22" height="22" fill="#0D5E31"/><rect x="9" width="4" height="22" fill="#FFF"/><rect y="9" width="22" height="4" fill="#FFF"/></svg>`,
  pt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FF0000"/><rect width="24" height="40" fill="#006600"/><circle cx="24" cy="20" r="7" fill="#FFFF00" stroke="#FFF" stroke-width="1"/></svg>`,
  ie: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="#169B62"/><rect x="20" width="20" height="40" fill="#FFF"/><rect x="40" width="20" height="40" fill="#FF883E"/></svg>`,
  pl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#FFF"/><rect y="20" width="60" height="20" fill="#DC143C"/></svg>`,
  cz: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#FFF"/><rect y="20" width="60" height="20" fill="#D7141A"/><polygon points="0,0 30,20 0,40" fill="#11457E"/></svg>`,

  // ==================== ARAB ====================
  eg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#CE1126"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/><circle cx="30" cy="20" r="3" fill="#C09300"/></svg>`,
  sa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#006600"/><rect x="12" y="26" width="36" height="2" fill="#FFF"/><rect x="12" y="30" width="24" height="2" fill="#FFF"/></svg>`,
  ae: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#00732F"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/><rect width="15" height="40" fill="#FF0000"/></svg>`,
  qa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#8A153F"/><path d="M0,0 L20,0 L14,5 L20,10 L14,15 L20,20 L14,25 L20,30 L14,35 L20,40 L0,40 Z" fill="#FFF"/></svg>`,
  kw: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#007A3D"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#D00"/><polygon points="0,0 15,0 15,40 0,40" fill="#000"/></svg>`,
  bh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><path d="M20,0 L28,5 L20,10 L28,15 L20,20 L28,25 L20,30 L28,35 L20,40 L0,40 L0,0 Z" fill="#CE1126"/></svg>`,
  om: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#FFF"/><rect y="13.3" width="60" height="13.3" fill="#D00"/><rect y="26.6" width="60" height="13.4" fill="#007A3D"/><rect width="15" height="40" fill="#D00"/></svg>`,
  jo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#000"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#007A3C"/><polygon points="0,0 22,20 0,40" fill="#CE1126"/></svg>`,
  lb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#ED1C24"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#ED1C24"/><polygon points="30,14 36,26 24,26" fill="#007A3C"/></svg>`,
  sy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#CE1126"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/><circle cx="20" cy="20" r="2" fill="#007A3C"/><circle cx="30" cy="20" r="2" fill="#007A3C"/></svg>`,
  iq: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#CE1126"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/></svg>`,
  ma: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#C1272D"/><polygon points="30,14 32,20 38,20 33,24 35,30 30,26 25,30 27,24 22,20 28,20" fill="none" stroke="#006600" stroke-width="1"/></svg>`,
  tn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#E70013"/><circle cx="30" cy="20" r="9" fill="#FFF"/><circle cx="32" cy="20" r="7" fill="#E70013"/><circle cx="34" cy="20" r="3.5" fill="#FFF"/></svg>`,
  dz: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="30" height="40" fill="#00633B"/><rect x="30" width="30" height="40" fill="#FFF"/><circle cx="30" cy="20" r="8" fill="#D21034"/><circle cx="32" cy="20" r="6" fill="#FFF"/></svg>`,
  ly: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#E70013"/><rect y="13.3" width="60" height="13.3" fill="#000"/><rect y="26.6" width="60" height="13.4" fill="#009639"/></svg>`,
  sd: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#D21034"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/><polygon points="0,0 20,20 0,40" fill="#007A3C"/></svg>`,
  ye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#CE1126"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#000"/></svg>`,
  ps: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#000"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#00732F"/><polygon points="0,0 20,20 0,40" fill="#CE1126"/></svg>`,

  // ==================== AMERICAS ====================
  us: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><rect width="60" height="3.1" fill="#B22234"/><rect y="6.2" width="60" height="3.1" fill="#B22234"/><rect y="12.3" width="60" height="3.1" fill="#B22234"/><rect y="18.5" width="60" height="3.1" fill="#B22234"/><rect y="24.6" width="60" height="3.1" fill="#B22234"/><rect y="30.8" width="60" height="3.1" fill="#B22234"/><rect y="36.9" width="60" height="3.1" fill="#B22234"/><rect width="24" height="21.5" fill="#3C3B6E"/><circle cx="4" cy="4" r="1" fill="#FFF"/><circle cx="10" cy="4" r="1" fill="#FFF"/><circle cx="16" cy="4" r="1" fill="#FFF"/><circle cx="22" cy="4" r="1" fill="#FFF"/><circle cx="7" cy="8" r="1" fill="#FFF"/><circle cx="13" cy="8" r="1" fill="#FFF"/><circle cx="19" cy="8" r="1" fill="#FFF"/><circle cx="4" cy="12" r="1" fill="#FFF"/><circle cx="10" cy="12" r="1" fill="#FFF"/><circle cx="16" cy="12" r="1" fill="#FFF"/><circle cx="22" cy="12" r="1" fill="#FFF"/><circle cx="7" cy="16" r="1" fill="#FFF"/><circle cx="13" cy="16" r="1" fill="#FFF"/><circle cx="19" cy="16" r="1" fill="#FFF"/></svg>`,
  ca: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><rect width="15" height="40" fill="#D80621"/><rect x="45" width="15" height="40" fill="#D80621"/><path d="M30,8 L32,14 L36,12 L35,18 L39,18 L34,22 L36,26 L32,25 L30,32 L28,25 L24,26 L26,22 L21,18 L25,18 L24,12 L28,14 Z" fill="#D80621"/></svg>`,
  mx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="20" height="40" fill="#006B3F"/><rect x="20" width="20" height="40" fill="#FFF"/><rect x="40" width="20" height="40" fill="#CE1126"/><circle cx="30" cy="20" r="3" fill="none" stroke="#8B4513" stroke-width="0.8"/></svg>`,
  br: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#009C3B"/><polygon points="30,6 54,20 30,34 6,20" fill="#FEDF00"/><circle cx="30" cy="20" r="6" fill="#002776"/></svg>`,
  ar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#74ACDF"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#74ACDF"/><circle cx="30" cy="20" r="3" fill="#F6B40E"/></svg>`,
  cl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect y="20" width="60" height="20" fill="#D52B1E"/><rect y="0" width="60" height="20" fill="#FFF"/><rect width="20" height="20" fill="#003087"/><polygon points="10,6 11.5,10 15.5,10 12.5,12.5 14,16.5 10,14 6,16.5 7.5,12.5 4.5,10 8.5,10" fill="#FFF"/></svg>`,
  co: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#FCD116"/><rect y="20" width="60" height="10" fill="#003487"/><rect y="30" width="60" height="10" fill="#CE1126"/></svg>`,

  // ==================== ASIA ====================
  tr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#E30A17"/><circle cx="22" cy="20" r="7" fill="#FFF"/><circle cx="25" cy="20" r="5.5" fill="#E30A17"/><polygon points="31,20 36,18 34,20 36,22" fill="#FFF"/></svg>`,
  my: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><rect width="60" height="2.5" fill="#CC0001"/><rect y="5" width="60" height="2.5" fill="#CC0001"/><rect y="10" width="60" height="2.5" fill="#CC0001"/><rect y="15" width="60" height="2.5" fill="#CC0001"/><rect y="20" width="60" height="2.5" fill="#CC0001"/><rect y="25" width="60" height="2.5" fill="#CC0001"/><rect y="30" width="60" height="2.5" fill="#CC0001"/><rect y="35" width="60" height="2.5" fill="#CC0001"/><rect width="30" height="20" fill="#010066"/><circle cx="14" cy="10" r="5" fill="#FFCC00"/><circle cx="16" cy="10" r="4" fill="#010066"/><polygon points="22,8 23,10 25,10 23.5,11.5 24,14 22,12.5 20,14 20.5,11.5 19,10 21,10" fill="#FFCC00"/></svg>`,
  id: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#CE1126"/><rect y="20" width="60" height="20" fill="#FFF"/></svg>`,
  cn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#DE2910"/><polygon points="12,6 13.5,10 18,10 14.5,12.5 15.5,16.5 12,14 8.5,16.5 9.5,12.5 6,10 10.5,10" fill="#FFDE00"/></svg>`,
  jp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><circle cx="30" cy="20" r="10" fill="#BC002D"/></svg>`,
  kr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><circle cx="30" cy="20" r="8" fill="#CD2E3A"/><path d="M22,20 A8,8 0 0,0 38,20 A4,4 0 0,1 30,20 A4,4 0 0,0 22,20" fill="#0047A0"/></svg>`,
  in: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#FF9933"/><rect y="13.3" width="60" height="13.3" fill="#FFF"/><rect y="26.6" width="60" height="13.4" fill="#138808"/><circle cx="30" cy="20" r="4" fill="none" stroke="#000080" stroke-width="1"/></svg>`,
  pk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#014B33"/><rect width="15" height="40" fill="#FFF"/><circle cx="35" cy="20" r="7" fill="#FFF"/><circle cx="37" cy="18" r="6" fill="#014B33"/><polygon points="43,14 44,16.5 46.5,16.5 44.5,18 45.5,20.5 43,19 40.5,20.5 41.5,18 39.5,16.5 42,16.5" fill="#FFF"/></svg>`,
  th: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#A51931"/><rect y="6.6" width="60" height="26.8" fill="#F4F5F8"/><rect y="13.3" width="60" height="13.4" fill="#2D2A4A"/></svg>`,
  vn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#DA251D"/><polygon points="30,10 32,16 38,16 33,20 35,26 30,22 25,26 27,20 22,16 28,16" fill="#FFDE00"/></svg>`,
  sg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#EF3340"/><rect y="20" width="60" height="20" fill="#FFF"/><circle cx="15" cy="10" r="6" fill="#FFF"/><circle cx="17" cy="10" r="5.5" fill="#EF3340"/><circle cx="19" cy="8" r="0.8" fill="#FFF"/><circle cx="22" cy="10" r="0.8" fill="#FFF"/><circle cx="21" cy="13" r="0.8" fill="#FFF"/><circle cx="18" cy="13" r="0.8" fill="#FFF"/><circle cx="17" cy="10" r="0.8" fill="#FFF"/></svg>`,
  ph: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#003486"/><rect y="20" width="60" height="20" fill="#CE1126"/><polygon points="0,0 25,20 0,40" fill="#FFF"/><circle cx="8" cy="20" r="3" fill="#FCD116"/></svg>`,

  // ==================== AFRICA ====================
  za: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="20" fill="#DE3831"/><rect y="20" width="60" height="20" fill="#002895"/><polygon points="0,0 25,20 0,40" fill="#007A4E"/><polygon points="0,6 20,20 0,34" fill="#FFB612"/><polygon points="0,11 15,20 0,29" fill="#000"/></svg>`,
  ng: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#FFF"/><rect width="20" height="40" fill="#008751"/><rect x="40" width="20" height="40" fill="#008751"/></svg>`,
  ke: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#BB0000"/><rect y="13.3" width="60" height="13.3" fill="#000"/><rect y="26.6" width="60" height="13.4" fill="#006600"/><ellipse cx="30" cy="20" rx="5" ry="9" fill="#BB0000" stroke="#FFF" stroke-width="1"/></svg>`,
  et: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#078B4E"/><rect y="13.3" width="60" height="13.3" fill="#FCDD09"/><rect y="26.6" width="60" height="13.4" fill="#DA121A"/><circle cx="30" cy="20" r="7" fill="#0F47AF"/><polygon points="30,15 32,19 36,19 33,22 34,26 30,24 26,26 27,22 24,19 28,19" fill="#FCDD09"/></svg>`,
  gh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="13.3" fill="#CE1126"/><rect y="13.3" width="60" height="13.3" fill="#FCD116"/><rect y="26.6" width="60" height="13.4" fill="#006B3F"/><polygon points="30,15 31,19 35,19 32,21 33,25 30,23 27,25 28,21 25,19 29,19" fill="#000"/></svg>`,
  tz: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#00A3DD"/><polygon points="0,40 60,0 60,40" fill="#1EB53A"/><polygon points="0,0 60,0 0,40" fill="#000"/><polygon points="0,6 50,6 10,34 0,34" fill="#FCD116"/></svg>`,

  // ==================== OCEANIA ====================
  au: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#00008B"/><polygon points="15,5 16,8 19,8 17,10 17.5,13 15,11.5 12.5,13 13,10 11,8 14,8" fill="#FFF"/><polygon points="45,10 45.8,12 48,12 46.3,13.5 46.8,16 45,14.5 43.2,16 43.7,13.5 42,12 44.2,12" fill="#FFF"/><polygon points="40,28 40.8,30 43,30 41.3,31.5 41.8,34 40,32.5 38.2,34 38.7,31.5 37,30 39.2,30" fill="#FFF"/><polygon points="48,22 48.8,24 51,24 49.3,25.5 49.8,28 48,26.5 46.2,28 46.7,25.5 45,24 47.2,24" fill="#FFF"/><circle cx="20" cy="30" r="1.5" fill="#FFF"/><circle cx="25" cy="25" r="1" fill="#FFF"/><circle cx="30" cy="32" r="1" fill="#FFF"/></svg>`,
  nz: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#00233F"/><polygon points="10,5 11,8 14,8 12,10 12.5,13 10,11.5 7.5,13 8,10 6,8 9,8" fill="#FFF"/><polygon points="45,8 45.8,10 48,10 46.3,11.5 46.8,14 45,12.5 43.2,14 43.7,11.5 42,10 44.2,10" fill="#FFF"/><polygon points="40,25 40.8,27 43,27 41.3,28.5 41.8,31 40,29.5 38.2,31 38.7,28.5 37,27 39.2,27" fill="#FFF"/></svg>`,
  fj: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#68BFE6"/><rect width="30" height="20" fill="#012169"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFF" stroke-width="3"/><path d="M15,0 V20 M0,10 H30" stroke="#FFF" stroke-width="5"/><path d="M15,0 V20 M0,10 H30" stroke="#C8102E" stroke-width="3"/><circle cx="45" cy="20" r="4" fill="#FFF"/><circle cx="45" cy="20" r="3" fill="#CE1126"/></svg>`
};

// الدالة الرئيسية - بترجع العلم كـ data URI
function getFlag(code) {
  const svg = flagSvgs[code];
  if (!svg) {
    // علم افتراضي لو الكود مش موجود
    return 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><rect width="60" height="40" fill="#CCC"/><text x="30" y="25" font-size="20" text-anchor="middle" fill="#666">?</text></svg>');
  }
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* رابط العلم الرسمي من مكتبة flag-icons (نسبة 4:3.svg).
   الدالة المحلية getFlag بقت بتستخدم كـ fallback لو النت قطع. */
function flagUrl(code, size) {
  if (!code) return '';
  return `https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/${code}.svg`;
}

console.log('🇺🇳 Flags loaded:', Object.keys(flagSvgs).length);
