import { Eyebrow } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Radius.module.css';

const SCALE = [
  { name: 'sm', value: '4px', use: 'kbd' },
  { name: 'md', value: '6px', use: 'icon-button' },
  { name: 'lg', value: '8px', use: 'button, input' },
  { name: 'xl', value: '10px', use: 'card' },
  { name: '2xl', value: '12px', use: 'modal, drawer' },
  { name: 'pill', value: '999px', use: 'chip, badge' },
];

interface HeroCell {
  label: Bilingual;
  radius: number;
  value: string;
  note: Bilingual;
}

const HERO: HeroCell[] = [
  {
    label: { pt: 'controles', en: 'controls' },
    radius: 8,
    value: '8px',
    note: { pt: 'Buttons, inputs, icon-buttons. Curvatura discreta.', en: 'Buttons, inputs, icon-buttons. Discreet curvature.' },
  },
  {
    label: { pt: 'containers', en: 'containers' },
    radius: 12,
    value: '10–12px',
    note: { pt: 'Cards, modais, drawers. Suaves sem virar bolha.', en: 'Cards, modals, drawers. Soft without becoming a bubble.' },
  },
  {
    label: { pt: 'auto-contidos', en: 'self-contained' },
    radius: 999,
    value: '999px',
    note: { pt: 'Chips, badges. Forma é parte da identidade do objeto.', en: 'Chips, badges. Shape is part of the object’s identity.' },
  },
];

interface AppliedItem {
  token: string;
  desc: Bilingual;
  demo: 'chip' | 'button' | 'card' | 'modal';
}

const APPLIED: AppliedItem[] = [
  {
    token: '999px · pill',
    desc: { pt: 'Chip de prioridade. Forma redonda comunica "isso é uma marca".', en: 'Priority chip. Round shape says "this is a label".' },
    demo: 'chip',
  },
  {
    token: '8px · lg',
    desc: { pt: 'Buttons. Curvatura presente sem competir com o conteúdo do label.', en: 'Buttons. Curvature present without competing with the label content.' },
    demo: 'button',
  },
  {
    token: '10px · xl',
    desc: { pt: 'Cards. Suficiente pra parecer container, suave o bastante pra desaparecer.', en: 'Cards. Enough to feel like a container, soft enough to disappear.' },
    demo: 'card',
  },
  {
    token: '12px · 2xl',
    desc: { pt: 'Modal e drawer. Curvatura maior sinaliza camada de superfície superior.', en: 'Modal and drawer. Larger curvature signals a higher surface layer.' },
    demo: 'modal',
  },
];

export function Radius() {
  const t = useT();
  return (
    <section id="radius" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Radius</h2>
      <p className={s.blurb}>
        {t({
          pt: 'Cantos pertencem a categorias, não a tamanhos arbitrários. Quanto maior a superfície, mais suave o canto. ',
          en: 'Corners belong to categories, not arbitrary sizes. The bigger the surface, the softer the corner. ',
        })}
        <strong style={{ color: 'var(--fg)' }}>Pill 999px</strong>{' '}
        {t({
          pt: 'é categoria à parte — sinaliza objeto pequeno auto-contido (chip, badge).',
          en: 'is its own category — signals a small self-contained object (chip, badge).',
        })}
      </p>

      <div className={s.hero}>
        {HERO.map((c) => (
          <div key={c.label.en} className={s.heroCell}>
            <span className={s.heroLabel}>{t(c.label)}</span>
            <div className={s.heroShape} style={{ borderRadius: c.radius }} />
            <span className={s.heroValue}>{c.value}</span>
            <span className={s.heroNote}>{t(c.note)}</span>
          </div>
        ))}
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>{t({ pt: 'Escala', en: 'Scale' })}</span>
          <span className={s.tierDesc}>{t({ pt: '6 valores · cobertura completa', en: '6 values · complete coverage' })}</span>
        </div>
        <div className={s.scale}>
          {SCALE.map((r) => (
            <div key={r.name} className={s.scaleCell}>
              <div className={s.shape} style={{ borderRadius: r.value }} />
              <span className={s.scaleName}>{r.name}</span>
              <span className={s.scaleValue}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.applied}>
        <h3 className={s.appliedHead}>{t({ pt: 'Em componentes reais', en: 'In real components' })}</h3>
        <p className={s.appliedSub}>
          {t({
            pt: 'Escolha por categoria, não por gosto. Se um componente novo está pedindo um radius que não está aqui, provavelmente ele pertence a uma das categorias acima.',
            en: 'Pick by category, not taste. If a new component is asking for a radius not listed here, it probably belongs to one of the categories above.',
          })}
        </p>
        <div className={s.appliedGrid}>
          {APPLIED.map((a) => (
            <div key={a.token} className={s.appliedCard}>
              <div className={s.appliedDemo}>
                {a.demo === 'chip' && <span className={s.demoChip}>P1</span>}
                {a.demo === 'button' && (
                  <span className={s.demoButton}>{t({ pt: 'Avaliar', en: 'Evaluate' })}</span>
                )}
                {a.demo === 'card' && (
                  <div className={s.demoCard}>
                    <span className={s.demoCardTitle}>{t({ pt: 'Project card', en: 'Project card' })}</span>
                    <span className={s.demoCardLine} />
                    <span className={`${s.demoCardLine} ${s.short}`} />
                  </div>
                )}
                {a.demo === 'modal' && (
                  <div className={s.demoModal}>
                    <span className={s.demoModalTitle}>
                      {t({ pt: 'Apagar avaliação?', en: 'Delete evaluation?' })}
                    </span>
                    <span className={s.demoModalBody}>
                      {t({ pt: 'Esta ação não pode ser desfeita.', en: 'This action cannot be undone.' })}
                    </span>
                  </div>
                )}
              </div>
              <div className={s.appliedNote}>
                <span className={s.appliedToken}>{a.token}</span>
                <span className={s.appliedDesc}>{t(a.desc)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
