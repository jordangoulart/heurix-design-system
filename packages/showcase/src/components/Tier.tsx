import type { ReactNode } from 'react';
import { useLang, type Bilingual } from '../i18n/LangContext';
import s from './Tier.module.css';

type Translatable = string | Bilingual;

function isBilingual(v: Translatable): v is Bilingual {
  return typeof v === 'object' && v !== null && 'pt' in v && 'en' in v;
}

export interface TierProps {
  name: Translatable;
  desc?: Translatable | ReactNode;
  children: ReactNode;
}

export function Tier({ name, desc, children }: TierProps) {
  const { t } = useLang();
  const nameText = isBilingual(name) ? t(name) : name;
  const descNode =
    desc && isBilingual(desc as Bilingual) ? t(desc as Bilingual) : (desc as ReactNode);
  return (
    <div className={s.tier}>
      <header className={s.head}>
        <span className={s.name}>{nameText}</span>
        {descNode && <span className={s.desc}>{descNode}</span>}
      </header>
      <div className={s.body}>{children}</div>
    </div>
  );
}
