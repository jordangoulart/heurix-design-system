import type { ReactNode } from 'react';
import { Eyebrow } from '@heurix/design-system';
import { useLang, type Bilingual } from '../i18n/LangContext';
import s from './ComponentSection.module.css';

type Translatable = string | Bilingual;

function isBilingual(v: Translatable): v is Bilingual {
  return typeof v === 'object' && v !== null && 'pt' in v && 'en' in v;
}

export function ComponentSection({
  id,
  eyebrow,
  title,
  blurb,
  children,
}: {
  id: string;
  eyebrow: Translatable;
  title: Translatable;
  blurb?: Translatable | ReactNode;
  children: ReactNode;
}) {
  const { t } = useLang();
  const eyebrowText = isBilingual(eyebrow) ? t(eyebrow) : eyebrow;
  const titleText = isBilingual(title) ? t(title) : title;
  const blurbNode =
    blurb && isBilingual(blurb as Bilingual) ? t(blurb as Bilingual) : (blurb as ReactNode);
  return (
    <section id={id} className={s.section}>
      <header className={s.head}>
        <Eyebrow>{eyebrowText}</Eyebrow>
        <h2 className={s.title}>{titleText}</h2>
        {blurbNode && <p className={s.blurb}>{blurbNode}</p>}
      </header>
      <div>{children}</div>
    </section>
  );
}
