import { useEffect, useState } from 'react';
import { contrast, parseComputedColor, rgbToHex, rgbToOklch } from './colorMath';

export type TokenInfo = {
  hex: string;
  oklch: string;
  contrastVsBg: number;
};

function readVar(name: string): string {
  const probe = document.createElement('span');
  probe.style.color = `var(${name})`;
  probe.style.position = 'absolute';
  probe.style.visibility = 'hidden';
  probe.style.pointerEvents = 'none';
  document.body.appendChild(probe);
  const v = getComputedStyle(probe).color;
  probe.remove();
  return v;
}

function buildInfo(name: string, bgRgb: ReturnType<typeof parseComputedColor>): TokenInfo | null {
  const parsed = parseComputedColor(readVar(name));
  if (!parsed) return null;
  const oklch = parsed.oklch ?? rgbToOklch(parsed.rgb);
  const oklchStr = `oklch(${oklch.L.toFixed(2)} ${oklch.C.toFixed(3)} ${Math.round(oklch.h)})`;
  const c = bgRgb ? contrast(parsed.rgb, bgRgb.rgb) : 0;
  return { hex: rgbToHex(parsed.rgb), oklch: oklchStr, contrastVsBg: c };
}

export type ThemeMode = 'dark' | 'light';

function readTheme(): ThemeMode {
  return (document.documentElement.getAttribute('data-theme') as ThemeMode) ?? 'dark';
}

export function useTokenInfo(tokens: string[]): { info: Record<string, TokenInfo>; theme: ThemeMode } {
  const [info, setInfo] = useState<Record<string, TokenInfo>>({});
  const [theme, setTheme] = useState<ThemeMode>(() =>
    typeof document === 'undefined' ? 'dark' : readTheme(),
  );

  useEffect(() => {
    const compute = () => {
      const bg = parseComputedColor(readVar('--bg'));
      const next: Record<string, TokenInfo> = {};
      for (const name of tokens) {
        const built = buildInfo(name, bg);
        if (built) next[name] = built;
      }
      setInfo(next);
      setTheme(readTheme());
    };
    compute();
    const observer = new MutationObserver(compute);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [tokens.join('|')]);

  return { info, theme };
}
