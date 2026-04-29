import { Eyebrow } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Iconography.module.css';

const Sparkle = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" />
  </svg>
);
const Plus = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const Check = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const Trash = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);
const Link = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const Search = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const Sun = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const Moon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

import type { Bilingual as B } from '../../i18n/LangContext';

interface Size {
  px: number;
  use: B;
}

const SIZES: Size[] = [
  { px: 12, use: { pt: 'inline em texto', en: 'inline in text' } },
  { px: 14, use: { pt: 'badges, chips', en: 'badges, chips' } },
  { px: 16, use: { pt: 'buttons (default)', en: 'buttons (default)' } },
  { px: 20, use: { pt: 'topbar, ações primárias', en: 'topbar, primary actions' } },
];

interface Spec {
  label: string;
  value: string;
  desc: B;
}

const SPECS: Spec[] = [
  { label: 'stroke', value: '1.8', desc: { pt: 'Único peso pra todos os outlines.', en: 'Single weight for every outline.' } },
  { label: 'cap', value: 'round', desc: { pt: 'Cantos arredondados. Suaviza o feel mecânico.', en: 'Rounded caps. Softens the mechanical feel.' } },
  { label: 'join', value: 'round', desc: { pt: 'Junções idem. Coerência visual.', en: 'Same for joins. Visual consistency.' } },
  { label: 'fill', value: 'currentColor', desc: { pt: 'Cor herdada — nunca hardcoded.', en: 'Inherited color — never hardcoded.' } },
];

const LIBRARY = [
  { name: 'plus', cmp: Plus },
  { name: 'check', cmp: Check },
  { name: 'trash', cmp: Trash },
  { name: 'link', cmp: Link },
  { name: 'search', cmp: Search },
  { name: 'sparkle', cmp: Sparkle },
  { name: 'sun', cmp: Sun },
  { name: 'moon', cmp: Moon },
];

interface State {
  color: string;
  label: string;
  note: B;
  icon: 'search' | 'sparkle' | 'trash';
}

const STATES: State[] = [
  { color: 'var(--muted)', label: '--muted', note: { pt: 'Padrão · em estado neutro', en: 'Default · neutral state' }, icon: 'search' },
  { color: 'var(--fg)', label: '--fg', note: { pt: 'Hover ou ativo', en: 'Hover or active' }, icon: 'search' },
  { color: 'var(--accent-text)', label: '--accent-text', note: { pt: 'Em conteúdo gerado por IA', en: 'In AI-generated content' }, icon: 'sparkle' },
  { color: 'var(--danger)', label: '--danger', note: { pt: 'Ações destrutivas em hover', en: 'Destructive actions on hover' }, icon: 'trash' },
];

export function Iconography() {
  const t = useT();
  return (
    <section id="iconography" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Iconography</h2>
      <p className={s.blurb}>
        {t({
          pt: 'SVG inline, traço único, herdam ',
          en: 'Inline SVG, single stroke, inheriting ',
        })}
        <code>currentColor</code>.{' '}
        {t({ pt: 'Não há ícone "decorativo" — todo ícone existe pra ', en: 'There’s no "decorative" icon — every icon exists to ' })}
        <strong style={{ color: 'var(--fg)' }}>
          {t({ pt: 'significar uma ação ou um tipo', en: 'signify an action or type' })}
        </strong>
        .{' '}
        {t({
          pt: 'Quando você precisa de algo só pra preencher espaço, o problema é layout, não ícone.',
          en: 'When you need something just to fill space, the problem is layout, not iconography.',
        })}
      </p>

      <div className={s.hero}>
        {SIZES.map((sz) => (
          <div key={sz.px} className={s.heroCell}>
            <div className={s.heroIcon}>
              <Plus size={sz.px} />
            </div>
            <span className={s.heroSize}>{sz.px}px</span>
            <span className={s.heroUse}>{t(sz.use)}</span>
          </div>
        ))}
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>{t({ pt: 'Especificação', en: 'Specification' })}</span>
          <span className={s.tierDesc}>
            {t({ pt: 'regras de desenho — vão em todo SVG', en: 'drawing rules — apply to every SVG' })}
          </span>
        </div>
        <div className={s.specs}>
          {SPECS.map((sp) => (
            <div key={sp.label} className={s.spec}>
              <span className={s.specLabel}>{sp.label}</span>
              <span className={s.specValue}>{sp.value}</span>
              <span className={s.specDesc}>{t(sp.desc)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>{t({ pt: 'Biblioteca canônica', en: 'Canonical library' })}</span>
          <span className={s.tierDesc}>
            {t({ pt: 'os 8 ícones que aparecem no produto', en: 'the 8 icons used in the product' })}
          </span>
        </div>
        <div className={s.library}>
          {LIBRARY.map(({ name, cmp: Cmp }) => (
            <div key={name} className={s.libCell}>
              <Cmp size={20} />
              <span className={s.libName}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>{t({ pt: 'Cor por contexto', en: 'Color by context' })}</span>
          <span className={s.tierDesc}>{t({ pt: 'currentColor herda do parent', en: 'currentColor inherits from parent' })}</span>
        </div>
        <div className={s.states}>
          {STATES.map((st) => (
            <div key={st.label + st.note.en} className={s.state}>
              <div className={s.stateIcon} style={{ color: st.color }}>
                {st.icon === 'search' && <Search size={20} />}
                {st.icon === 'sparkle' && <Sparkle size={20} />}
                {st.icon === 'trash' && <Trash size={20} />}
              </div>
              <span className={s.stateLabel}>{st.label}</span>
              <span className={s.stateNote}>{t(st.note)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
