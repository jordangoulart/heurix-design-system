import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Motion.module.css';

interface Easing {
  name: string;
  cls: string | undefined;
  curve: string;
}

const EASINGS: Easing[] = [
  { name: '--ease-out', cls: s.ballEaseOut, curve: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  { name: '--ease-in-out', cls: s.ballEaseInOut, curve: 'cubic-bezier(0.65, 0, 0.35, 1)' },
  { name: 'linear', cls: s.ballLinear, curve: 'linear' },
];

interface Duration {
  label: string;
  cls: string | undefined;
  use: Bilingual;
}

const DURATIONS: Duration[] = [
  { label: '160ms', cls: s.dur160, use: { pt: 'Hover, focus ring, color shifts', en: 'Hover, focus ring, color shifts' } },
  { label: '240ms', cls: s.dur240, use: { pt: 'Theme switch, in-place state', en: 'Theme switch, in-place state' } },
  { label: '340ms', cls: s.dur340, use: { pt: 'Pill commit pulse, pop-ins', en: 'Pill commit pulse, pop-ins' } },
  { label: '420ms', cls: s.dur1400, use: { pt: 'Drawer abrindo, painéis grandes', en: 'Drawer opening, large panels' } },
];

interface Token {
  name: string;
  value: string;
  use: Bilingual;
}

const TOKENS: Token[] = [
  {
    name: '--ease-out',
    value: 'cubic-bezier(0.22, 1, 0.36, 1)',
    use: { pt: 'Default para entradas', en: 'Default for entrances' },
  },
  {
    name: '--ease-in-out',
    value: 'cubic-bezier(0.65, 0, 0.35, 1)',
    use: { pt: 'Transições simétricas', en: 'Symmetric transitions' },
  },
];

export function Motion() {
  const t = useT();
  return (
    <section id="motion" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Motion</h2>
      <p className={s.blurb}>
        {t({ pt: 'Movimento é informação, não decoração. Easings curtos sinalizam ', en: 'Motion is information, not decoration. Short easings signal ' })}
        <em>{t({ pt: 'aqui aconteceu algo', en: 'something happened here' })}</em>;{' '}
        {t({ pt: 'easings longos sinalizam ', en: 'long easings signal ' })}
        <em>{t({ pt: 'algo grande está se posicionando', en: 'something large is taking position' })}</em>.{' '}
        {t({
          pt: 'Bounce e elastic não existem no sistema — objetos reais desaceleram, não rebatem.',
          en: 'Bounce and elastic don’t exist in the system — real objects decelerate, they don’t rebound.',
        })}
      </p>

      <div className={s.group}>
        <h3 className={s.groupTitle}>Easings</h3>
        <p className={s.groupBlurb}>
          {t({
            pt: 'Três curvas, em ordem de uso. Cada bolinha repete a mesma distância em ',
            en: 'Three curves, in order of use. Each ball repeats the same distance over ',
          })}
          <code>1.4s</code>{' '}
          {t({
            pt: 'alternando ida e volta — a diferença está só na curva temporal.',
            en: 'alternating back and forth — the difference is only in the time curve.',
          })}
        </p>
        <div className={s.tracks}>
          {EASINGS.map((e) => (
            <div key={e.name} className={s.row}>
              <span className={s.label}>{e.name}</span>
              <div className={s.track}>
                <span className={cx(s.ball, e.cls)} />
              </div>
              <span className={s.meta}>{e.curve}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.group}>
        <h3 className={s.groupTitle}>Durations</h3>
        <p className={s.groupBlurb}>
          {t({ pt: 'Mesma curva (', en: 'Same curve (' })}
          <code>--ease-out</code>
          {t({
            pt: '), velocidades diferentes. A duração escolhe o tom da interação: imediata, deliberada, ou contínua.',
            en: '), different speeds. Duration chooses the tone of the interaction: immediate, deliberate, or continuous.',
          })}
        </p>
        <div className={s.tracks}>
          {DURATIONS.map((d) => (
            <div key={d.label} className={s.row}>
              <span className={s.label}>{d.label}</span>
              <div className={s.track}>
                <span className={cx(s.ball, s.ballEaseOut, d.cls)} />
              </div>
              <span className={s.meta}>{t(d.use)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.group}>
        <h3 className={s.groupTitle}>Tokens</h3>
        <p className={s.groupBlurb}>
          {t({
            pt: 'Use as variáveis CSS — nunca declare ',
            en: 'Use the CSS variables — never declare ',
          })}
          <code>cubic-bezier(…)</code>
          {t({ pt: ' direto em um componente.', en: ' directly in a component.' })}
        </p>
        <div className={s.tokens}>
          {TOKENS.map((tk) => (
            <div key={tk.name} className={s.tokenCard}>
              <span className={s.tokenName}>{tk.name}</span>
              <span className={s.tokenValue}>{tk.value}</span>
              <span className={s.tokenUse}>{t(tk.use)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.group}>
        <h3 className={s.groupTitle}>{t({ pt: 'Reduzir movimento', en: 'Reduced motion' })}</h3>
        <p className={s.groupBlurb}>
          {t({ pt: 'Toda animação respeita ', en: 'Every animation respects ' })}
          <code>prefers-reduced-motion: reduce</code>.{' '}
          {t({
            pt: 'As bolinhas acima param se você ativar essa preferência no sistema operacional.',
            en: 'The balls above stop if you enable that preference in your operating system.',
          })}
        </p>
      </div>
    </section>
  );
}
