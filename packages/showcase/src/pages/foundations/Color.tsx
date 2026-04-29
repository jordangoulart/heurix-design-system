import { useMemo } from 'react';
import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import { useTokenInfo, type TokenInfo, type ThemeMode } from '../../utils/useTokenInfo';
import s from './Color.module.css';

type ThemedLabel = { dark: string; light: string };

interface Token {
  name: string;
  label: ThemedLabel;
  role: Bilingual;
}

const SURFACES: Token[] = [
  { name: '--bg',      label: { dark: 'Coal',     light: 'Paper' },    role: { pt: 'page background — o canvas onde tudo respira', en: 'page background — the canvas where everything breathes' } },
  { name: '--surface', label: { dark: 'Soot',     light: 'Bone' },     role: { pt: 'card surface — primeiro nível de elevação', en: 'card surface — first level of elevation' } },
  { name: '--raised',  label: { dark: 'Onyx',     light: 'Eggshell' }, role: { pt: 'raised — controles e itens elevados sobre surface', en: 'raised — controls and items elevated above surface' } },
  { name: '--hover',   label: { dark: 'Charcoal', light: 'Mist' },     role: { pt: 'hover — feedback de affordance, +1 nível', en: 'hover — affordance feedback, +1 level' } },
];

const TEXT: Token[] = [
  { name: '--fg',     label: { dark: 'Snow',    light: 'Coal' },     role: { pt: 'primary — texto principal, máximo contraste', en: 'primary — main text, maximum contrast' } },
  { name: '--fg-2',   label: { dark: 'Pearl',   light: 'Graphite' }, role: { pt: 'secondary — descrições e bodies', en: 'secondary — descriptions and bodies' } },
  { name: '--muted',  label: { dark: 'Stone',   light: 'Slate' },    role: { pt: 'muted — labels, helpers, metadata', en: 'muted — labels, helpers, metadata' } },
  { name: '--subtle', label: { dark: 'Granite', light: 'Iron' },     role: { pt: 'subtle — eyebrows, divisores tipográficos', en: 'subtle — eyebrows, typographic dividers' } },
];

const BORDERS: Token[] = [
  { name: '--border',        label: { dark: 'Mist',  light: 'Chalk' },  role: { pt: 'hairline padrão entre superfícies', en: 'default hairline between surfaces' } },
  { name: '--border-strong', label: { dark: 'Steel', light: 'Pewter' }, role: { pt: 'borda enfática — hover, focus, ativo', en: 'emphatic border — hover, focus, active' } },
];

const labelFor = (l: ThemedLabel, theme: ThemeMode) => l[theme];

interface Tone {
  name: Bilingual;
  label: string;
  token: string;
  desc: Bilingual;
}

const TONES: Tone[] = [
  {
    name: { pt: 'Accent', en: 'Accent' },
    label: 'Lime',
    token: '--accent',
    desc: {
      pt: 'Lime. Ação primária, focus ring, success. Aparece raramente — é o que dá poder.',
      en: 'Lime. Primary action, focus ring, success. Appears rarely — that’s what gives it power.',
    },
  },
  {
    name: { pt: 'Warning', en: 'Warning' },
    label: 'Amber',
    token: '--warn',
    desc: {
      pt: 'Amarelo. Atenção sem urgência — toast informativo, score em risco.',
      en: 'Yellow. Attention without urgency — informational toast, score at risk.',
    },
  },
  {
    name: { pt: 'Danger', en: 'Danger' },
    label: 'Ember',
    token: '--danger',
    desc: {
      pt: 'Vermelho. Ações destrutivas e erros bloqueantes. Nunca para validação simples.',
      en: 'Red. Destructive actions and blocking errors. Never for simple validation.',
    },
  },
];

function MetaRow({ info, t }: { info?: TokenInfo; t: ReturnType<typeof useT> }) {
  if (!info) return <span className={s.meta} aria-hidden="true">·</span>;
  return (
    <dl className={s.meta}>
      <dt>hex</dt>
      <dd>{info.hex}</dd>
      <dt>oklch</dt>
      <dd>{info.oklch}</dd>
      <dt>{t({ pt: 'contraste', en: 'contrast' })}</dt>
      <dd>{info.contrastVsBg.toFixed(2)}:1</dd>
    </dl>
  );
}

export function Color() {
  const t = useT();
  const tokens = useMemo(
    () => [
      ...SURFACES.map((tk) => tk.name),
      ...TEXT.map((tk) => tk.name),
      ...BORDERS.map((tk) => tk.name),
      ...TONES.map((tn) => tn.token),
    ],
    [],
  );
  const { info, theme } = useTokenInfo(tokens);

  return (
    <section id="color" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Color</h2>
      <p className={s.blurb}>
        {t({
          pt: 'Tokens semânticos em OKLCH com neutros tintados em direção ao ',
          en: 'Semantic tokens in OKLCH with neutrals tinted toward the ',
        })}
        <strong style={{ color: 'var(--fg)' }}>
          {t({ pt: 'verde-brand', en: 'brand green' })}
        </strong>
        .{' '}
        {t({
          pt: 'Componentes consomem só variáveis — nunca cor literal. Cada token tem espelho em ',
          en: 'Components consume only variables — never literal color. Each token has a mirror in ',
        })}
        <code>data-theme="light"</code>.
      </p>

      <div className={s.hero}>
        <div className={s.accentBlock} aria-hidden="true" />
        <div className={s.accentMeta}>
          <span className={s.accentTitle}>
            {t({ pt: 'O accent é o sistema.', en: 'The accent is the system.' })}
          </span>
          <p className={s.accentBody}>
            {t({
              pt: 'Lime ',
              en: 'Lime ',
            })}
            <code>#a8e009</code>{' '}
            {t({
              pt: 'aparece em ação primária, focus, e success — em mais nada. A regra do 60-30-10: 60% neutro, 30% texto/borda, 10% accent. Tirar power do accent é usar mais.',
              en: 'appears on primary actions, focus, and success — nowhere else. The 60-30-10 rule: 60% neutral, 30% text/border, 10% accent. Diluting the accent means using it more.',
            })}
          </p>
          <dl className={s.accentDl}>
            <dt>hex</dt>
            <dd>#a8e009</dd>
            <dt>oklch</dt>
            <dd>0.83 0.21 126</dd>
            <dt>{t({ pt: 'contraste', en: 'contrast' })}</dt>
            <dd>{t({ pt: '~7.1:1 sobre --bg', en: '~7.1:1 on --bg' })}</dd>
            <dt>{t({ pt: 'fg em lime', en: 'fg on lime' })}</dt>
            <dd>--accent-fg</dd>
          </dl>
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>Surfaces</span>
          <span className={s.tierDesc}>
            {t({ pt: '4 níveis · empilháveis sem competir', en: '4 levels · stackable without competing' })}
          </span>
        </div>
        <div className={cx(s.tierGrid, s['cols-2'])}>
          {SURFACES.map((tk) => (
            <div key={tk.name} className={s.swatch}>
              <div className={s.chip} style={{ background: `var(${tk.name})` }} />
              <div className={s.swatchMeta}>
                <div className={s.swatchHead}>
                  <span className={s.swatchLabel}>{labelFor(tk.label, theme)}</span>
                  <span className={s.swatchToken}>{tk.name}</span>
                </div>
                <MetaRow info={info[tk.name]} t={t} />
                <span className={s.swatchRole}>{t(tk.role)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>Text</span>
          <span className={s.tierDesc}>
            {t({ pt: '4 pesos · contraste decrescente', en: '4 weights · decreasing contrast' })}
          </span>
        </div>
        <div className={cx(s.tierGrid, s['cols-2'])}>
          {TEXT.map((tk) => (
            <div key={tk.name} className={s.swatch}>
              <div
                className={s.chip}
                style={{
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    color: `var(${tk.name})`,
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Aa Bb Cc
                </span>
              </div>
              <div className={s.swatchMeta}>
                <div className={s.swatchHead}>
                  <span className={s.swatchLabel}>{labelFor(tk.label, theme)}</span>
                  <span className={s.swatchToken}>{tk.name}</span>
                </div>
                <MetaRow info={info[tk.name]} t={t} />
                <span className={s.swatchRole}>{t(tk.role)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>Borders</span>
          <span className={s.tierDesc}>
            {t({ pt: '2 forças · hairline 1px sempre', en: '2 strengths · always 1px hairline' })}
          </span>
        </div>
        <div className={cx(s.tierGrid, s['cols-2'])}>
          {BORDERS.map((tk) => (
            <div key={tk.name} className={s.swatch}>
              <div
                className={s.chip}
                style={{
                  background: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 16,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 40,
                    border: `1px solid var(${tk.name})`,
                    borderRadius: 6,
                    background: 'var(--raised)',
                  }}
                />
              </div>
              <div className={s.swatchMeta}>
                <div className={s.swatchHead}>
                  <span className={s.swatchLabel}>{labelFor(tk.label, theme)}</span>
                  <span className={s.swatchToken}>{tk.name}</span>
                </div>
                <MetaRow info={info[tk.name]} t={t} />
                <span className={s.swatchRole}>{t(tk.role)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>Tones</span>
          <span className={s.tierDesc}>
            {t({ pt: '3 cores semânticas · uso restrito', en: '3 semantic colors · restricted use' })}
          </span>
        </div>
        <div className={s.tones}>
          {TONES.map((tn) => (
            <div key={tn.token} className={s.tone}>
              <span className={s.toneSwatch} style={{ background: `var(${tn.token})` }} />
              <div className={s.toneHead}>
                <span className={s.toneName}>{t(tn.name)}</span>
                <span className={s.toneLabel}>{tn.label}</span>
              </div>
              <span className={s.toneDesc}>{t(tn.desc)}</span>
              <MetaRow info={info[tn.token]} t={t} />
              <span className={s.toneToken}>{tn.token}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
