import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Spacing.module.css';

interface SpacingTier {
  name: Bilingual;
  desc: Bilingual;
  rows: ReadonlyArray<readonly [string, number]>;
  macro?: boolean;
}

const TIERS: SpacingTier[] = [
  {
    name: { pt: 'Micro', en: 'Micro' },
    desc: { pt: '4–12px · grupos coesos', en: '4–12px · cohesive groups' },
    rows: [
      ['--space-xs', 4],
      ['--space-sm', 8],
      ['--space-md', 12],
    ] as const,
  },
  {
    name: { pt: 'Base', en: 'Base' },
    desc: { pt: '16–24px · padding e gutters', en: '16–24px · padding and gutters' },
    rows: [
      ['--space-base', 16],
      ['--space-lg', 24],
    ] as const,
  },
  {
    name: { pt: 'Macro', en: 'Macro' },
    desc: { pt: '32–64px · seções e marcos', en: '32–64px · sections and milestones' },
    rows: [
      ['--space-xl', 32],
      ['--space-2xl', 48],
      ['--space-3xl', 64],
    ] as const,
    macro: true,
  },
];

export function Spacing() {
  const t = useT();
  return (
    <section id="spacing" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Spacing</h2>
      <p className={s.blurb}>
        {t({ pt: 'Tudo no Heurix vive sobre uma ', en: 'Everything in Heurix lives on a ' })}
        <strong style={{ color: 'var(--fg)' }}>
          {t({ pt: 'grade de 4 pixels', en: '4-pixel grid' })}
        </strong>
        .{' '}
        {t({
          pt: 'Oito valores semânticos cobrem do gap entre ícone e texto até o vão entre seções de página. Pixels avulsos são proibidos — sempre o token.',
          en: 'Eight semantic values cover everything from the gap between icon and text to the gap between page sections. Loose pixels are forbidden — always the token.',
        })}
      </p>

      <div className={s.baseline}>
        <span className={s.baselineLabel}>4pt baseline</span>
        <div className={s.baselineRule} aria-hidden="true" />
        <div className={s.baselineMarks}>
          <span>0</span>
          <span>4</span>
          <span>8</span>
          <span>16</span>
          <span>32</span>
          <span>64</span>
        </div>
        <p className={s.baselineExplain}>
          {t({
            pt: 'Cada incremento é múltiplo de 4. Linhas a cada 16px reforçam o ritmo maior. Tudo o que você empilha — paddings, gaps, margens — pousa em uma dessas linhas.',
            en: 'Each step is a multiple of 4. Lines every 16px reinforce the larger rhythm. Everything you stack — paddings, gaps, margins — lands on one of these lines.',
          })}
        </p>
      </div>

      {TIERS.map((tier) => {
        const max = 64;
        return (
          <div key={tier.name.en} className={s.tier}>
            <div className={s.tierHead}>
              <span className={s.tierName}>{t(tier.name)}</span>
              <span className={s.tierDesc}>{t(tier.desc)}</span>
            </div>
            {tier.rows.map(([token, px]) => (
              <div key={token} className={s.row}>
                <span className={s.rowName}>{token}</span>
                <div className={s.barWrap}>
                  <span
                    className={cx(s.bar, tier.macro && s.macro)}
                    style={{ width: `${(px / max) * 100}%` }}
                  />
                </div>
                <span className={s.rowValue}>{px}px</span>
              </div>
            ))}
          </div>
        );
      })}

      <div className={s.context}>
        <h3 className={s.contextHead}>{t({ pt: 'No produto', en: 'In product' })}</h3>
        <p className={s.contextSub}>
          {t({
            pt: 'Cada token tem um lugar onde respira melhor. Estes são os usos canônicos — se você está hesitando, comece por aqui.',
            en: 'Each token has a place where it breathes best. These are the canonical uses — if you’re hesitating, start here.',
          })}
        </p>
        <div className={s.contextGrid}>
          <div className={s.contextCard}>
            <span className={s.contextLabel}>--space-xs · 4px</span>
            <div className={s.contextDemo}>
              <span className={s.demoInline}>
                <span className={s.demoInlineDot} aria-hidden="true" />
                AI badge
              </span>
            </div>
            <div className={s.contextNote}>
              <span className={s.contextToken}>gap</span>
              <span className={s.contextDesc}>
                {t({
                  pt: 'Entre ícone e texto dentro de um chip ou pill — colados o suficiente para serem lidos como uma coisa só.',
                  en: 'Between icon and text inside a chip or pill — close enough that they read as a single thing.',
                })}
              </span>
            </div>
          </div>

          <div className={s.contextCard}>
            <span className={s.contextLabel}>--space-base · 16px</span>
            <div className={s.contextDemo}>
              <div className={s.demoCard}>
                <span className={s.demoCardTitle}>{t({ pt: 'Título do card', en: 'Card title' })}</span>
                <span className={cx(s.demoCardLine)} />
                <span className={cx(s.demoCardLine, s.short)} />
                <span className={cx(s.demoCardLine, s.shorter)} />
              </div>
            </div>
            <div className={s.contextNote}>
              <span className={s.contextToken}>padding</span>
              <span className={s.contextDesc}>
                {t({
                  pt: 'Padding interno de um card. Dá ar suficiente para o conteúdo respirar sem soltar a borda do conteúdo.',
                  en: 'Inner padding of a card. Enough air for the content to breathe without unmooring its edge.',
                })}
              </span>
            </div>
          </div>

          <div className={s.contextCard}>
            <span className={s.contextLabel}>--space-xl · 32px</span>
            <div className={s.contextDemo}>
              <div className={s.demoStack}>
                <span className={s.demoBlock} />
                <span className={s.demoBlock} />
              </div>
            </div>
            <div className={s.contextNote}>
              <span className={s.contextToken}>section gap</span>
              <span className={s.contextDesc}>
                {t({
                  pt: 'Espaço entre blocos de conteúdo distintos numa mesma página — separa sem isolar.',
                  en: 'Space between distinct content blocks on the same page — separates without isolating.',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
