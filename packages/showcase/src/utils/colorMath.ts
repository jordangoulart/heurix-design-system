type RGB = [number, number, number];

function gammaEncode(v: number): number {
  return v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
}

function gammaDecode(v: number): number {
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

export function oklchToRgb(L: number, C: number, h: number): RGB {
  const hRad = (h * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);
  const lp = L + 0.3963377774 * a + 0.2158037573 * b;
  const mp = L - 0.1055613458 * a - 0.0638541728 * b;
  const sp = L - 0.0894841775 * a - 1.291485548 * b;
  const l = lp ** 3;
  const m = mp ** 3;
  const s = sp ** 3;
  const r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return [gammaEncode(r), gammaEncode(g), gammaEncode(bl)];
}

export function rgbToHex([r, g, b]: RGB): string {
  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const to255 = (v: number) => Math.round(clamp(v) * 255);
  return '#' + [to255(r), to255(g), to255(b)].map((n) => n.toString(16).padStart(2, '0')).join('');
}

export function relLum([r, g, b]: RGB): number {
  return 0.2126 * gammaDecode(r) + 0.7152 * gammaDecode(g) + 0.0722 * gammaDecode(b);
}

export function contrast(a: RGB, b: RGB): number {
  const la = relLum(a);
  const lb = relLum(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

const oklchRe = /oklch\(\s*([0-9.+-]+%?)\s+([0-9.+-]+%?)\s+([0-9.+-]+)/i;
const rgbRe = /rgba?\(\s*([0-9.+-]+)[\s,]+([0-9.+-]+)[\s,]+([0-9.+-]+)/i;
const hexRe = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

export type ParsedColor = { rgb: RGB; oklch: { L: number; C: number; h: number } | null };

export function parseComputedColor(value: string): ParsedColor | null {
  const trimmed = value.trim();
  let m = oklchRe.exec(trimmed);
  if (m) {
    const L = m[1].endsWith('%') ? parseFloat(m[1]) / 100 : parseFloat(m[1]);
    const C = m[2].endsWith('%') ? (parseFloat(m[2]) / 100) * 0.4 : parseFloat(m[2]);
    const h = parseFloat(m[3]);
    return { rgb: oklchToRgb(L, C, h), oklch: { L, C, h } };
  }
  m = rgbRe.exec(trimmed);
  if (m) {
    const r = parseFloat(m[1]) / 255;
    const g = parseFloat(m[2]) / 255;
    const b = parseFloat(m[3]) / 255;
    return { rgb: [r, g, b], oklch: null };
  }
  m = hexRe.exec(trimmed);
  if (m) {
    const hex = m[1].length === 3 ? m[1].split('').map((c) => c + c).join('') : m[1];
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    return { rgb: [r, g, b], oklch: null };
  }
  return null;
}

export function rgbToOklch([r, g, b]: RGB): { L: number; C: number; h: number } {
  const rl = gammaDecode(r);
  const gl = gammaDecode(g);
  const bl = gammaDecode(b);
  const l = 0.4122214708 * rl + 0.5363325363 * gl + 0.0514459929 * bl;
  const m = 0.2119034982 * rl + 0.6806995451 * gl + 0.1073969566 * bl;
  const s = 0.0883024619 * rl + 0.2817188376 * gl + 0.6299787005 * bl;
  const lp = Math.cbrt(l);
  const mp = Math.cbrt(m);
  const sp = Math.cbrt(s);
  const L = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
  const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
  const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
  const C = Math.sqrt(a * a + bb * bb);
  let h = (Math.atan2(bb, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { L, C, h };
}
