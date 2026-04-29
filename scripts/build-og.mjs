import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outRepo = resolve(__dirname, '../packages/showcase/public/og.png');
const outDesktop = resolve(homedir(), 'Desktop/heurix-og.png');

const W = 1200;
const H = 630;

// ── Tokens (dark theme) ─────────────────────────────────────────────
const BG = '#151712';
const SURFACE = '#1c1f1a';
const RAISED = '#252824';
const BORDER = '#30332e';
const BORDER_STRONG = '#494d44';
const FG = '#f3f4ee';
const FG2 = '#d6d8d0';
const MUTED = '#8d9087';
const SUBTLE = '#71746c';
const ACCENT = '#a8e009';
const ACCENT_FG = '#151712';

// ── Heurix wordmark (paths from Figma export) ───────────────────────
const LOGO_VW = 756;
const LOGO_VH = 248;
const LOGO_PATHS = `
  <path d="M248 124.701C248 108.417 244.793 92.2922 238.561 77.2478C232.329 62.2034 223.196 48.5338 211.681 37.0193C200.167 25.5049 186.497 16.3711 171.453 10.1395C156.408 3.90791 140.284 0.700561 124 0.700562L124 48.3619C134.025 48.3619 143.952 50.3364 153.214 54.1728C162.475 58.0092 170.891 63.6323 177.98 70.721C185.068 77.8097 190.691 86.2252 194.528 95.487C198.364 104.749 200.339 114.676 200.339 124.701H248Z" fill="url(#g0)"/>
  <path d="M124 0C107.716 0 91.5916 3.20734 76.5472 9.43892C61.5029 15.6705 47.8332 24.8043 36.3188 36.3188C24.8043 47.8332 15.6705 61.5029 9.43893 76.5473C3.20735 91.5916 0 107.716 0 124L47.6613 124C47.6613 113.975 49.6359 104.048 53.4722 94.7864C57.3086 85.5246 62.9317 77.1091 70.0204 70.0204C77.1091 62.9317 85.5246 57.3086 94.7864 53.4722C104.048 49.6359 113.975 47.6613 124 47.6613L124 0Z" fill="url(#g1)"/>
  <path d="M124 248C107.716 248 91.5916 244.793 76.5472 238.561C61.5029 232.329 47.8332 223.196 36.3187 211.681C24.8043 200.167 15.6705 186.497 9.43893 171.453C3.20735 156.408 0 140.284 0 124L47.6613 124C47.6613 134.025 49.6359 143.952 53.4722 153.214C57.3086 162.475 62.9317 170.891 70.0204 177.98C77.1091 185.068 85.5246 190.691 94.7864 194.528C104.048 198.364 113.975 200.339 124 200.339L124 248Z" fill="url(#g2)"/>
  <path d="M105 190.13V61.8615H124.136V116.46H170.662V61.8615H189.985V190.13H170.662V132.727H124.136V190.13H105Z" fill="${FG}"/>
  <path d="M259.889 192C249.883 192 241.566 190.006 234.937 186.017C228.434 182.028 223.556 176.418 220.304 169.188C217.177 161.958 215.614 153.669 215.614 144.32V140.393C215.614 130.67 217.427 122.256 221.054 115.151C224.682 108.046 229.872 102.561 236.626 98.6967C243.38 94.7078 251.384 92.7133 260.639 92.7133C269.269 92.7133 276.648 94.4584 282.777 97.9488C289.03 101.439 293.845 106.176 297.222 112.159C300.724 118.143 302.475 124.999 302.475 132.727V145.442H235.125V148.62C235.125 158.468 237.501 165.947 242.254 171.058C247.007 176.169 253.01 178.724 260.264 178.724C268.269 178.724 274.334 176.792 278.462 172.928C282.714 169.064 284.84 163.08 284.84 154.978H302.475C302.475 162.582 300.662 169.188 297.035 174.798C293.533 180.283 288.592 184.521 282.214 187.512C275.96 190.504 268.519 192 259.889 192ZM235.312 133.288H284.09V130.483C284.09 125.747 283.089 121.571 281.088 117.956C279.212 114.216 276.461 111.287 272.834 109.168C269.207 107.048 265.017 105.989 260.264 105.989C254.886 105.989 250.321 107.298 246.569 109.916C242.942 112.533 240.128 115.899 238.127 120.012C236.251 124.001 235.312 128.115 235.312 132.353V133.288Z" fill="${FG}"/>
  <path d="M364.124 192C353.868 192 345.614 189.133 339.36 183.399C333.232 177.665 330.168 169.001 330.168 157.409V94.5831H349.116V153.856C349.116 161.834 350.929 167.755 354.556 171.619C358.308 175.483 363.499 177.416 370.128 177.416C374.505 177.416 378.382 176.356 381.759 174.237C385.261 171.993 387.95 169.001 389.826 165.262C391.827 161.522 392.828 157.346 392.828 152.734V94.5831H411.588V172.928C411.588 174.922 412.026 176.356 412.902 177.229C413.777 178.101 415.09 178.537 416.841 178.537C418.092 178.537 419.343 178.413 420.593 178.163C421.844 177.914 423.157 177.291 424.533 176.294V188.447C422.907 189.569 420.844 190.442 418.342 191.065C415.966 191.688 413.527 192 411.026 192C406.523 192 403.084 191.377 400.707 190.13C398.456 188.759 396.893 186.889 396.017 184.521C395.267 182.152 394.766 179.472 394.516 176.481C392.64 179.846 390.264 182.713 387.387 185.082C384.511 187.325 381.134 189.008 377.257 190.13C373.379 191.377 369.002 192 364.124 192Z" fill="${FG}"/>
  <path d="M461.418 190.13V109.168H437.217V94.5831H476.614L477.552 108.607C479.804 103.62 483.243 99.7562 487.871 97.0138C492.623 94.1468 498.064 92.7133 504.192 92.7133C513.573 92.7133 520.764 95.518 525.767 101.127C530.895 106.612 533.459 113.655 533.459 122.256C533.459 123.627 533.396 124.936 533.271 126.183C533.271 127.305 533.146 128.676 532.896 130.296H516.949V126.37C516.949 123.004 516.262 119.888 514.886 117.021C513.635 114.154 511.634 111.848 508.882 110.102C506.256 108.233 502.816 107.298 498.564 107.298C494.437 107.298 490.935 108.482 488.058 110.85C485.307 113.219 483.243 116.211 481.867 119.825C480.491 123.44 479.804 127.242 479.804 131.231V190.13H461.418ZM436.279 190.13V175.733H522.765V190.13H436.279Z" fill="${FG}"/>
  <path d="M593.232 190.13V109.168H558.9V94.5831H611.992V190.13H593.232ZM558.9 190.13V175.733H644.448V190.13H558.9ZM592.481 74.9501V57H610.116V74.9501H592.481Z" fill="${FG}"/>
  <path d="M663.886 190.13L698.217 140.58L665.949 94.5831H688.274L710.599 127.866H710.975L733.675 94.5831H754.124L721.856 140.954L756 190.13H733.862L709.474 153.669H709.099L684.522 190.13H663.886Z" fill="${FG}"/>
`;

// ── Component primitives ────────────────────────────────────────────
const mono = `font-family="ui-monospace, 'Chivo Mono', 'SF Mono', Menlo, monospace"`;
const sans = `font-family="-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif"`;

function rect({ x, y, w, h, r = 8, fill = SURFACE, stroke = BORDER, sw = 1 }) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function text({ x, y, fill = FG, size = 14, weight = 400, anchor = 'start', font = sans, letter = 0, transform = '' }, content) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" ${font} letter-spacing="${letter}" ${transform ? `transform="${transform}"` : ''}>${content}</text>`;
}

// Button — primary lime
function buttonPrimary(x, y, label) {
  const w = 132;
  const h = 36;
  return `
    <g>
      ${rect({ x, y, w, h, r: 8, fill: ACCENT, stroke: ACCENT, sw: 0 })}
      ${text({ x: x + w / 2, y: y + 23, fill: ACCENT_FG, size: 13, weight: 500, anchor: 'middle' }, label)}
    </g>
  `;
}

// Button — ghost
function buttonGhost(x, y, label) {
  const w = 96;
  const h = 36;
  return `
    <g>
      ${rect({ x, y, w, h, r: 8, fill: 'transparent', stroke: BORDER_STRONG, sw: 1 })}
      ${text({ x: x + w / 2, y: y + 23, fill: FG, size: 13, weight: 500, anchor: 'middle' }, label)}
    </g>
  `;
}

// Pill
function pill(x, y, label) {
  const w = label.length * 8 + 28;
  const h = 28;
  return `
    <g>
      ${rect({ x, y, w, h, r: 14, fill: SURFACE, stroke: BORDER, sw: 1 })}
      ${text({ x: x + w / 2, y: y + 18, fill: FG2, size: 12, weight: 500, anchor: 'middle' }, label)}
    </g>
  `;
}

// AI badge — accent-tinted with sparkle
function aiBadge(x, y) {
  const w = 60;
  const h = 24;
  return `
    <g>
      ${rect({ x, y, w, h, r: 12, fill: 'rgba(168, 224, 9, 0.12)', stroke: 'rgba(168, 224, 9, 0.4)', sw: 1 })}
      <circle cx="${x + 14}" cy="${y + 12}" r="2" fill="${ACCENT}"/>
      <circle cx="${x + 18}" cy="${y + 8}" r="1" fill="${ACCENT}"/>
      <circle cx="${x + 18}" cy="${y + 16}" r="1" fill="${ACCENT}"/>
      ${text({ x: x + 32, y: y + 16, fill: ACCENT, size: 11, weight: 600, font: mono, letter: 0.5 }, 'AI')}
    </g>
  `;
}

// Score numeral with eyebrow + meta
function scoreCard(x, y) {
  const w = 220;
  const h = 140;
  return `
    <g>
      ${rect({ x, y, w, h, r: 12, fill: SURFACE, stroke: BORDER, sw: 1 })}
      ${text({ x: x + 20, y: y + 32, fill: SUBTLE, size: 10, weight: 500, font: mono, letter: 1.5 }, 'SCORE · LIVE')}
      ${text({ x: x + 20, y: y + 92, fill: FG, size: 64, weight: 600, font: mono, letter: -2 }, '74')}
      <line x1="${x + 20}" y1="${y + 108}" x2="${x + w - 20}" y2="${y + 108}" stroke="${BORDER}" stroke-width="1"/>
      ${text({ x: x + 20, y: y + 128, fill: MUTED, size: 11, font: mono, letter: 0.5 }, 'high · 94%')}
      <circle cx="${x + w - 30}" cy="${y + 124}" r="3" fill="${ACCENT}"/>
    </g>
  `;
}

// Eyebrow
function eyebrow(x, y, txt) {
  return text({ x, y, fill: SUBTLE, size: 11, weight: 500, font: mono, letter: 2 }, txt);
}

// Chip
function chip(x, y, label) {
  const w = label.length * 7.5 + 24;
  const h = 24;
  return `
    <g>
      ${rect({ x, y, w, h, r: 6, fill: RAISED, stroke: BORDER, sw: 1 })}
      ${text({ x: x + w / 2, y: y + 16, fill: MUTED, size: 11, weight: 500, font: mono, anchor: 'middle' }, label)}
    </g>
  `;
}

// Color swatch chip
function swatch(x, y, color, label) {
  return `
    <g>
      <rect x="${x}" y="${y}" width="40" height="40" rx="6" fill="${color}" stroke="${BORDER}" stroke-width="1"/>
      ${text({ x: x + 50, y: y + 18, fill: FG, size: 12, weight: 500 }, label)}
    </g>
  `;
}

// ── Layout ──────────────────────────────────────────────────────────
const LOGO_W = 520;
const LOGO_H = (LOGO_W * LOGO_VH) / LOGO_VW;
const LOGO_X = 80;
const LOGO_Y = (H - LOGO_H) / 2 - 40;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g0" x1="139.412" y1="25.9209" x2="186" y2="124.701" gradientUnits="userSpaceOnUse">
      <stop stop-color="${ACCENT}"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="g1" x1="25.2203" y1="108.588" x2="124" y2="62" gradientUnits="userSpaceOnUse">
      <stop stop-color="${ACCENT}"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="g2" x1="25.2203" y1="139.412" x2="124" y2="186" gradientUnits="userSpaceOnUse">
      <stop stop-color="${ACCENT}"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.15" cy="0.15" r="0.6">
      <stop offset="0" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Top status strip -->
  <g>
    <circle cx="80" cy="44" r="4" fill="${ACCENT}"/>
    ${text({ x: 92, y: 48, fill: MUTED, size: 11, font: mono, letter: 1 }, 'v0.1 · LIVE')}
    ${text({ x: W - 80, y: 48, fill: SUBTLE, size: 11, font: mono, anchor: 'end', letter: 1 }, 'GITHUB.COM/JORDANGOULART/HEURIX-DESIGN-SYSTEM')}
  </g>

  <!-- Eyebrow -->
  <g transform="translate(${LOGO_X} ${LOGO_Y - 32})">
    ${eyebrow(0, 0, '01 · COMPONENTS · TOKENS · PATTERNS')}
  </g>

  <!-- Heurix wordmark -->
  <g transform="translate(${LOGO_X} ${LOGO_Y}) scale(${LOGO_W / LOGO_VW})">
    ${LOGO_PATHS}
  </g>

  <!-- Tagline below logo -->
  <g transform="translate(${LOGO_X} ${LOGO_Y + LOGO_H + 36})">
    ${text({ x: 0, y: 0, fill: FG2, size: 18, weight: 400 }, 'Components, tokens, and patterns — composed.')}
  </g>

  <!-- Component composition (right column) -->
  <!-- Score card -->
  ${scoreCard(880, 96)}

  <!-- Component strip -->
  ${pill(720, 264, 'Foundations')}
  ${aiBadge(840, 264)}
  ${chip(920, 264, 'OKLCH')}

  ${buttonPrimary(720, 308, 'Get started')}
  ${buttonGhost(862, 308, 'Docs')}

  <!-- Color swatches -->
  ${swatch(720, 360, ACCENT, 'Lime · accent')}
  ${swatch(720, 412, '#404843', 'Stone · text')}
  ${swatch(720, 464, '#1c1f1a', 'Soot · surface')}

  <!-- Right side mono token list -->
  <g transform="translate(900 ${360})">
    ${text({ x: 0, y: 14, fill: SUBTLE, size: 10, font: mono, letter: 1.5 }, 'TOKENS')}
    ${text({ x: 0, y: 38, fill: FG2, size: 12, font: mono }, '--accent')}
    ${text({ x: 0, y: 60, fill: FG2, size: 12, font: mono }, '--fg')}
    ${text({ x: 0, y: 82, fill: FG2, size: 12, font: mono }, '--surface')}
    ${text({ x: 130, y: 38, fill: SUBTLE, size: 12, font: mono, anchor: 'end' }, '#a8e009')}
    ${text({ x: 130, y: 60, fill: SUBTLE, size: 12, font: mono, anchor: 'end' }, '#f3f4ee')}
    ${text({ x: 130, y: 82, fill: SUBTLE, size: 12, font: mono, anchor: 'end' }, '#1c1f1a')}
  </g>

  <!-- Bottom hairline + meta -->
  <line x1="80" y1="${H - 44}" x2="${W - 80}" y2="${H - 44}" stroke="${BORDER}" stroke-width="1"/>
  ${text({ x: 80, y: H - 22, fill: MUTED, size: 11, font: mono, letter: 1 }, 'REACT · TYPESCRIPT · OKLCH · A11Y · DARK/LIGHT')}
  ${text({ x: W - 80, y: H - 22, fill: SUBTLE, size: 11, font: mono, anchor: 'end', letter: 1 }, 'HEURIX-DESIGN-SYSTEM.VERCEL.APP')}
</svg>`;

mkdirSync(dirname(outRepo), { recursive: true });
const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
writeFileSync(outRepo, png);
copyFileSync(outRepo, outDesktop);
console.log(`wrote ${outRepo} (${png.length} bytes, ${W}x${H})`);
console.log(`copied to ${outDesktop}`);
