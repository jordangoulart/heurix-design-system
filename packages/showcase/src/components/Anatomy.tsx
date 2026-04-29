import type { ReactNode } from 'react';
import { useLang, type Bilingual } from '../i18n/LangContext';
import s from './Anatomy.module.css';

type Translatable = string | Bilingual;

function isBilingual(v: Translatable): v is Bilingual {
  return typeof v === 'object' && v !== null && 'pt' in v && 'en' in v;
}

export interface AnatomyEntry {
  token: Translatable;
  description: Translatable | ReactNode;
}

export function Anatomy({ entries }: { entries: AnatomyEntry[] }) {
  const { t } = useLang();
  return (
    <ol className={s.list}>
      {entries.map((e, i) => {
        const tokenText = isBilingual(e.token) ? t(e.token) : e.token;
        const descNode =
          e.description && isBilingual(e.description as Bilingual)
            ? t(e.description as Bilingual)
            : (e.description as ReactNode);
        const key = typeof tokenText === 'string' ? tokenText : `entry-${i}`;
        return (
          <li key={key} className={s.item}>
            <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
            <span className={s.token}>{tokenText}</span>
            <span className={s.desc}>{descNode}</span>
          </li>
        );
      })}
    </ol>
  );
}
