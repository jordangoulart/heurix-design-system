import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../i18n/LangContext';
import s from './Overview.module.css';

interface MetaItem {
  label: Bilingual;
  value: Bilingual;
  tone?: 'accent' | 'mono';
}

const META: MetaItem[] = [
  { label: { pt: 'accent', en: 'accent' }, value: { pt: '#a8e009', en: '#a8e009' }, tone: 'accent' },
  { label: { pt: 'sans', en: 'sans' }, value: { pt: 'Supreme', en: 'Supreme' } },
  { label: { pt: 'mono', en: 'mono' }, value: { pt: 'Chivo Mono', en: 'Chivo Mono' }, tone: 'mono' },
  { label: { pt: 'escala', en: 'scale' }, value: { pt: '4pt', en: '4pt' }, tone: 'mono' },
  { label: { pt: 'espaço de cor', en: 'color space' }, value: { pt: 'OKLCH', en: 'OKLCH' }, tone: 'mono' },
  { label: { pt: 'temas', en: 'themes' }, value: { pt: 'dark · light', en: 'dark · light' } },
];

interface Principle {
  n: string;
  title: Bilingual;
  body: Bilingual;
}

const PRINCIPLES: Principle[] = [
  {
    n: '01',
    title: { pt: 'Restrição sobre decoração', en: 'Restraint over decoration' },
    body: {
      pt: 'Cada elemento ganha seu pixel. Se remover não dói, não existe.',
      en: 'Every element earns its pixel. If removing it doesn’t hurt, it shouldn’t exist.',
    },
  },
  {
    n: '02',
    title: { pt: 'Accent é raro', en: 'Accent is rare' },
    body: {
      pt: 'Lime aparece em ação primária, focus, e success. Em mais nada.',
      en: 'Lime appears on primary actions, focus, and success. Nowhere else.',
    },
  },
  {
    n: '03',
    title: { pt: 'Dado é tipografia', en: 'Data is typography' },
    body: {
      pt: 'URLs, scores, timestamps em mono tabular. Numerais merecem cuidado de manchete.',
      en: 'URLs, scores, timestamps in tabular mono. Numerals deserve headline-level care.',
    },
  },
  {
    n: '04',
    title: { pt: 'Hierarquia por contraste', en: 'Hierarchy through contrast' },
    body: {
      pt: 'Tamanho, peso e whitespace carregam a leitura. Cor carrega significado.',
      en: 'Size, weight, and whitespace carry reading. Color carries meaning.',
    },
  },
];

export function Overview() {
  const t = useT();
  return (
    <section id="overview">
      <header className={s.hero}>
        <Eyebrow>
          <span className={s.eyebrow}>
            <span className={s.eyebrowDot} aria-hidden="true" />
            v0.1 · Heurix
          </span>
        </Eyebrow>
        <h1 className={s.title}>
          {t({
            pt: 'Um sistema para pensar, construir e ',
            en: 'A system for thinking, building, and ',
          })}
          <em>{t({ pt: 'evoluir', en: 'evolving' })}</em>.
        </h1>
        <p className={cx(s.body, s.lead)}>
          <strong>Heurix</strong>{' '}
          {t({
            pt: 'é um design system construído para simplificar decisões e escalar clareza.',
            en: 'is a design system built to simplify decisions and scale clarity.',
          })}
        </p>
        <p className={s.body}>
          {t({
            pt: 'Inspirado em heurísticas — atalhos mentais que nos ajudam a navegar a complexidade — Heurix oferece uma fundação estruturada para construir interfaces consistentes, intuitivas e de alta qualidade.',
            en: 'Inspired by heuristics — mental shortcuts that help us navigate complexity — Heurix provides a structured foundation for building consistent, intuitive, and high-quality interfaces.',
          })}
        </p>
        <p className={s.body}>
          {t({
            pt: 'Conecta design e engenharia através de princípios compartilhados, permitindo decisões mais rápidas, melhor usabilidade e resultados de produto mais confiáveis.',
            en: 'It connects design and engineering through shared principles, enabling faster decisions, better usability, and more reliable product outcomes.',
          })}
        </p>
        <p className={s.body}>
          {t({
            pt: 'Mais do que uma biblioteca de UI, Heurix é um sistema para pensar, construir e evoluir produtos com clareza.',
            en: 'More than a UI library, Heurix is a system for thinking, building, and evolving products with clarity.',
          })}
        </p>
        <div className={s.meta}>
          {META.map((m) => (
            <div key={m.label.en} className={s.metaItem}>
              <Eyebrow>{t(m.label)}</Eyebrow>
              <span
                className={cx(
                  s.metaValue,
                  m.tone === 'mono' && s.mono,
                  m.tone === 'accent' && s.accent,
                )}
              >
                {t(m.value)}
              </span>
            </div>
          ))}
        </div>
      </header>

      <div className={s.principles}>
        <h2 className={s.principlesTitle}>
          {t({ pt: 'Princípios que governam o sistema', en: 'Principles that govern the system' })}
        </h2>
        <ol className={s.principleList}>
          {PRINCIPLES.map((p) => (
            <li key={p.n} className={s.principle}>
              <span className={s.principleNum}>{p.n}</span>
              <strong className={s.principleHeading}>{t(p.title)}</strong>
              <p className={s.principleBody}>{t(p.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
