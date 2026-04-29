import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Typography.module.css';

interface TypeRow {
  token: string;
  size: number;
  meta: string;
}
interface TypeTier {
  name: Bilingual;
  desc: Bilingual;
  rowKind: string | undefined;
  rows: TypeRow[];
}

const TIERS: TypeTier[] = [
  {
    name: { pt: 'Display', en: 'Display' },
    desc: { pt: 'Manchetes e marcos · 26–48px · 600', en: 'Headlines and milestones · 26–48px · 600' },
    rowKind: s.heading,
    rows: [
      { token: '4xl', size: 48, meta: '48 / 1.02 / 600' },
      { token: '3xl', size: 36, meta: '36 / 1.10 / 600' },
      { token: '2xl', size: 26, meta: '26 / 1.20 / 600' },
    ],
  },
  {
    name: { pt: 'Heading', en: 'Heading' },
    desc: { pt: 'Títulos de seção · 16–20px · 500', en: 'Section titles · 16–20px · 500' },
    rowKind: s.heading,
    rows: [
      { token: 'xl', size: 20, meta: '20 / 1.30 / 500' },
      { token: 'lg', size: 16, meta: '16 / 1.50 / 500' },
    ],
  },
  {
    name: { pt: 'Body', en: 'Body' },
    desc: { pt: 'Texto corrido · 12–14px · 400', en: 'Running text · 12–14px · 400' },
    rowKind: s.body,
    rows: [
      { token: 'md', size: 14, meta: '14 / 1.50 / 400' },
      { token: 'base', size: 13, meta: '13 / 1.55 / 400' },
      { token: 'sm', size: 12, meta: '12 / 1.50 / 400' },
    ],
  },
  {
    name: { pt: 'Detail', en: 'Detail' },
    desc: { pt: 'Eyebrows, helpers, metadata · 11px', en: 'Eyebrows, helpers, metadata · 11px' },
    rowKind: s.detail,
    rows: [{ token: 'xs', size: 11, meta: '11 / 1.45 / 400' }],
  },
];

export function Typography() {
  const t = useT();
  const SAMPLE = t({ pt: 'Avaliação contínua', en: 'Continuous evaluation' });
  return (
    <section id="typography" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Typography</h2>
      <p className={s.blurb}>
        {t({ pt: 'Duas fontes, papéis claros. ', en: 'Two typefaces, clear roles. ' })}
        <strong style={{ color: 'var(--fg)' }}>Supreme</strong>{' '}
        {t({ pt: 'carrega a voz; ', en: 'carries the voice; ' })}
        <strong style={{ color: 'var(--fg)' }}>Chivo Mono</strong>{' '}
        {t({
          pt: 'carrega o dado. Escala fechada — quando você precisar de um tamanho que não está aqui, é sinal de que algo está errado, não que falta um token.',
          en: 'carries the data. Closed scale — if you need a size that isn’t here, something is wrong, not a token missing.',
        })}
      </p>

      <div className={s.hero}>
        <div className={s.face}>
          <span className={s.faceLabel}>sans · supreme</span>
          <span className={s.faceName}>Aa Bb Cc</span>
          <span className={s.faceDesc}>
            {t({
              pt: 'Grotesk técnica. Carrega títulos, corpo, e qualquer texto que precisa ser lido como prosa.',
              en: 'Technical grotesk. Carries titles, body, and any text that should read as prose.',
            })}
          </span>
          <div className={s.faceUsage}>
            <span className={s.faceTag}>headings</span>
            <span className={s.faceTag}>body</span>
            <span className={s.faceTag}>labels</span>
            <span className={s.faceTag}>buttons</span>
          </div>
        </div>
        <div className={s.face}>
          <span className={s.faceLabel}>mono · chivo mono</span>
          <span className={s.faceNameMono}>Aa Bb Cc</span>
          <span className={s.faceDesc}>
            {t({
              pt: 'Para dado: URLs, scores, IDs, timestamps, eyebrows. Quando precisão importa mais que ritmo de leitura.',
              en: 'For data: URLs, scores, IDs, timestamps, eyebrows. When precision matters more than reading rhythm.',
            })}
          </span>
          <div className={s.faceUsage}>
            <span className={s.faceTag}>eyebrows</span>
            <span className={s.faceTag}>scores</span>
            <span className={s.faceTag}>urls</span>
            <span className={s.faceTag}>kbd</span>
          </div>
        </div>
      </div>

      {TIERS.map((tier) => (
        <div key={tier.name.en} className={s.tier}>
          <div className={s.tierHead}>
            <span className={s.tierName}>{t(tier.name)}</span>
            <span className={s.tierDesc}>{t(tier.desc)}</span>
          </div>
          {tier.rows.map((row) => (
            <div key={row.token} className={s.row}>
              <span className={s.rowToken}>{row.token}</span>
              <span className={cx(s.rowSample, tier.rowKind)} style={{ fontSize: row.size }}>
                {SAMPLE}
              </span>
              <span className={s.rowMeta}>{row.meta}</span>
            </div>
          ))}
        </div>
      ))}

      <div className={s.pair}>
        <h3 className={s.pairHead}>{t({ pt: 'Pareamento', en: 'Pairing' })}</h3>
        <p className={s.pairSub}>
          {t({
            pt: 'Como as duas faces convivem em uma página real. Eyebrow e meta em mono, título e corpo em Supreme — densidade calma de dev-tool.',
            en: 'How the two faces live together on a real page. Eyebrow and meta in mono, title and body in Supreme — calm dev-tool density.',
          })}
        </p>
        <div className={s.pairCard}>
          <span className={s.pairEyebrow}>02 · Atoms · Pill</span>
          <h4 className={s.pairTitle}>
            {t({ pt: 'Score discreto, gravação imediata.', en: 'Discreet score, immediate write.' })}
          </h4>
          <p className={s.pairBody}>
            {t({
              pt: 'Pill é o ponto de contato onde o avaliador grava sua leitura. Cada clique dispara um pulso curto — o sistema confirma sem palavras. Compõe-se em ',
              en: 'Pill is the touch point where the evaluator records their reading. Each click triggers a short pulse — the system confirms without words. It composes into ',
            })}
            <code>PillGroup</code>{' '}
            {t({
              pt: 'para seleção exclusiva (Likert -2…+2 é o caso canônico).',
              en: 'for exclusive selection (Likert -2…+2 is the canonical case).',
            })}
          </p>
          <div className={s.pairMeta}>
            <span className={s.pairMetaItem}>
              {t({ pt: 'criado', en: 'created' })} <strong>2026-04-22</strong>
            </span>
            <span className={s.pairMetaItem}>
              {t({ pt: 'variantes', en: 'variants' })} <strong>2</strong>
            </span>
            <span className={s.pairMetaItem}>
              status <strong>{t({ pt: 'estável', en: 'stable' })}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
