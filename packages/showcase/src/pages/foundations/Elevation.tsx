import { Eyebrow, cx } from '@heurix/design-system';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './Elevation.module.css';

interface Shadow {
  token: string;
  cls: string | undefined;
  name: Bilingual;
  desc: Bilingual;
}

const SHADOWS: Shadow[] = [
  {
    token: '--shadow-sticky',
    cls: s.sticky,
    name: { pt: 'Sticky', en: 'Sticky' },
    desc: {
      pt: 'Topbar e elementos fixos. Sombra mínima — sinaliza sobreposição sem chamar atenção.',
      en: 'Topbar and fixed elements. Minimal shadow — signals overlay without drawing attention.',
    },
  },
  {
    token: '--shadow-float',
    cls: s.float,
    name: { pt: 'Float', en: 'Float' },
    desc: {
      pt: 'Toasts, popovers, dropdowns. Sombra média que destaca sem dominar a hierarquia.',
      en: 'Toasts, popovers, dropdowns. Medium shadow that stands out without dominating hierarchy.',
    },
  },
  {
    token: '--shadow-modal',
    cls: s.modal,
    name: { pt: 'Modal', en: 'Modal' },
    desc: {
      pt: 'Modais centrados. Sombra forte: sinaliza escopo isolado, demanda atenção.',
      en: 'Centered modals. Strong shadow: signals isolated scope, demands attention.',
    },
  },
  {
    token: '--shadow-drawer',
    cls: s.drawer,
    name: { pt: 'Drawer', en: 'Drawer' },
    desc: {
      pt: 'Painel lateral. Sombra direcional — vem da direita, projeta para a esquerda.',
      en: 'Side panel. Directional shadow — comes from the right, casts to the left.',
    },
  },
];

interface ZLayer {
  z: number;
  name: string;
  meta: Bilingual;
}

const Z_LAYERS: ZLayer[] = [
  { z: 20, name: '--z-sticky', meta: { pt: 'header, sidebar', en: 'header, sidebar' } },
  { z: 40, name: '--z-backdrop', meta: { pt: 'scrim de modal/drawer', en: 'modal/drawer scrim' } },
  { z: 50, name: '--z-drawer', meta: { pt: 'painel lateral', en: 'side panel' } },
  { z: 60, name: '--z-toast', meta: { pt: 'notificações', en: 'notifications' } },
  { z: 70, name: '--z-modal-bg', meta: { pt: 'backdrop do modal', en: 'modal backdrop' } },
  { z: 71, name: '--z-modal', meta: { pt: 'modal foreground', en: 'modal foreground' } },
  { z: 90, name: '--z-tooltip', meta: { pt: 'tooltip e overlays', en: 'tooltip and overlays' } },
];

export function Elevation() {
  const t = useT();
  return (
    <section id="elevation" className={s.section}>
      <Eyebrow>01 · Foundations</Eyebrow>
      <h2 className={s.title}>Elevation</h2>
      <p className={s.blurb}>
        {t({ pt: 'Sombras são ', en: 'Shadows are ' })}
        <strong style={{ color: 'var(--fg)' }}>
          {t({ pt: 'marca de camada', en: 'layer markers' })}
        </strong>
        ,{' '}
        {t({
          pt: 'não decoração. Quatro tokens cobrem todos os casos: sticky, float, modal, drawer. Ordem do maior plano ao menor — quanto mais elevado, mais isolado do contexto.',
          en: 'not decoration. Four tokens cover every case: sticky, float, modal, drawer. From the largest plane to the smallest — the higher the elevation, the more isolated from context.',
        })}
      </p>

      <div className={s.hero}>
        <div className={s.heroVisual}>
          <div className={cx(s.layer, s.layer1)}>--shadow-sticky</div>
          <div className={cx(s.layer, s.layer2)}>--shadow-float</div>
          <div className={cx(s.layer, s.layer3)}>--shadow-modal</div>
        </div>
        <div className={s.heroMeta}>
          <span className={s.heroTitle}>
            {t({ pt: 'Camadas, não decorações.', en: 'Layers, not decorations.' })}
          </span>
          <p className={s.heroBody}>
            {t({ pt: 'Cada sombra está atrelada a um ', en: 'Each shadow is tied to a ' })}
            <em>{t({ pt: 'papel', en: 'role' })}</em>.{' '}
            {t({
              pt: 'Sticky para coisas fixas, float para popovers, modal para foco isolado. Não há "sombra grande pra dar impacto" — se a sombra está chamando atenção, ela está errada.',
              en: 'Sticky for fixed things, float for popovers, modal for isolated focus. There’s no "big shadow for impact" — if the shadow is drawing attention, it’s wrong.',
            })}
          </p>
        </div>
      </div>

      <div className={s.tier}>
        <div className={s.tierHead}>
          <span className={s.tierName}>Tokens</span>
          <span className={s.tierDesc}>{t({ pt: '4 sombras · uma por papel', en: '4 shadows · one per role' })}</span>
        </div>
        <div className={s.shadowGrid}>
          {SHADOWS.map((sh) => (
            <div key={sh.token} className={cx(s.shadowCell, sh.cls)}>
              <div className={s.shadowDemo}>
                <span style={{ fontSize: 22, fontWeight: 500, color: 'var(--fg)' }}>
                  {t(sh.name)}
                </span>
              </div>
              <p className={s.shadowDesc}>{t(sh.desc)}</p>
              <span className={s.shadowToken}>{sh.token}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.zindex}>
        <h3 className={s.zindexHead}>Z-index scale</h3>
        <p className={s.zindexSub}>
          {t({
            pt: 'Camadas semanticamente ordenadas. Nunca ',
            en: 'Semantically ordered layers. Never ',
          })}
          <code>z-index: 999</code>
          {t({
            pt: ' — use o token. A escala deixa espaço entre marcos (10/20/50/70) pra extensão futura sem refatoração.',
            en: ' — use the token. The scale leaves room between landmarks (10/20/50/70) for future extension without refactoring.',
          })}
        </p>
        <div className={s.zList}>
          {Z_LAYERS.map((l) => (
            <div key={l.name} className={s.zRow}>
              <span className={s.zValue}>{l.z}</span>
              <span className={s.zName}>{l.name}</span>
              <span className={s.zMeta}>{t(l.meta)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
