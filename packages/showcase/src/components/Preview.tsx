import type { ReactNode } from 'react';
import { useLang, type Bilingual } from '../i18n/LangContext';
import s from './Preview.module.css';

type Translatable = string | Bilingual;

function isBilingual(v: Translatable): v is Bilingual {
  return typeof v === 'object' && v !== null && 'pt' in v && 'en' in v;
}

export function Preview({
  label,
  children,
}: {
  label?: Translatable;
  children: ReactNode;
}) {
  const { t } = useLang();
  const labelText = label ? (isBilingual(label) ? t(label) : label) : undefined;
  return (
    <div className={s.preview}>
      {labelText && <span className={s.label}>{labelText}</span>}
      <div className={s.body}>{children}</div>
    </div>
  );
}
