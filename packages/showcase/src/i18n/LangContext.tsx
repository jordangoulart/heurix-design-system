import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'pt' | 'en';

export interface Bilingual {
  pt: string;
  en: string;
}

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: Bilingual) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'heurix.showcase.lang';

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === 'en' ? 'en' : 'pt';
  } catch {
    return 'pt';
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang());

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  }, [lang]);

  const value = useMemo<LangContextValue>(() => {
    const t = (s: Bilingual) => (lang === 'en' ? s.en : s.pt);
    return { lang, setLang, t };
  }, [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangProvider>');
  return ctx;
}

export function useT(): (s: Bilingual) => string {
  return useLang().t;
}
