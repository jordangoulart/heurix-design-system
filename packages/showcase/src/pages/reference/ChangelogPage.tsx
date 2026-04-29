import { ComponentSection } from '../../components/ComponentSection';
import { Tier } from '../../components/Tier';
import { useT, type Bilingual } from '../../i18n/LangContext';
import s from './ChangelogPage.module.css';

interface Release {
  version: string;
  date: string;
  title: Bilingual;
  items: Bilingual[];
}

const RELEASES: Release[] = [
  {
    version: '0.7.0',
    date: '2026-04-28',
    title: { pt: 'Renomeado para Heurix', en: 'Renamed to Heurix' },
    items: [
      { pt: 'O design system agora se chama Heurix — inspirado em heurísticas como atalhos para clareza', en: 'The design system is now called Heurix — inspired by heuristics as shortcuts to clarity' },
      { pt: 'Página Overview reescrita com texto de apresentação institucional', en: 'Overview page rewritten with institutional presentation copy' },
      { pt: 'Topbar exibe Heurix / Heurix · marca o produto e seu sistema', en: 'Topbar shows Heurix / Heurix · marks the product and its system' },
    ],
  },
  {
    version: '0.6.0',
    date: '2026-04-28',
    title: { pt: 'Bilíngue · PT/EN', en: 'Bilingual · PT/EN' },
    items: [
      { pt: 'Showcase suporta português e inglês com toggle no topbar', en: 'Showcase supports Portuguese and English with topbar toggle' },
      { pt: 'LangContext + useT() — sem dependências externas', en: 'LangContext + useT() — no external dependencies' },
      { pt: 'Persistência via localStorage.heurix.showcase.lang', en: 'Persistence via localStorage.heurix.showcase.lang' },
      { pt: 'LangToggle agora usa PillGroup nativo do design system', en: 'LangToggle now uses the system’s native PillGroup' },
      { pt: 'Toda copy editorial agora passa por t({ pt, en })', en: 'All editorial copy now flows through t({ pt, en })' },
    ],
  },
  {
    version: '0.5.0',
    date: '2026-04-27',
    title: { pt: 'Pass editorial do showcase', en: 'Showcase editorial pass' },
    items: [
      { pt: 'Páginas de foundations reconstruídas com hero + tiers + exemplos aplicados', en: 'All foundation pages rebuilt with hero + tiers + applied examples' },
      { pt: 'Atoms migrados para o wrapper Tier por ritmo editorial', en: 'All atom pages migrated to Tier wrapper for editorial rhythm' },
      { pt: 'Molecules + organisms migrados para Tier', en: 'All molecule + organism pages migrated to Tier wrapper' },
      { pt: 'Patterns + reference alinhados ao mesmo padrão', en: 'Pattern + reference pages aligned with same structure' },
      { pt: 'Novo componente <Tier> para agrupamento consistente', en: 'New <Tier> component for consistent section grouping' },
    ],
  },
  {
    version: '0.4.0',
    date: '2026-04-27',
    title: { pt: 'Fase 4 — Patterns & Reference', en: 'Phase 4 — Patterns & Reference' },
    items: [
      { pt: 'Patterns: Loading & async, Superfície AI, Formulários', en: 'Patterns: Loading & async, AI surface, Form patterns' },
      { pt: 'Reference: Acessibilidade, i18n, Changelog', en: 'Reference: Accessibility, i18n, Changelog' },
      { pt: 'StatsTile organism (grade conectada de 3 cols)', en: 'StatsTile organism added (3-col connected grid)' },
      { pt: 'Showcase com todos os 6 grupos de sidebar (00 → 06)', en: 'Showcase has all 6 sidebar groups (00 → 06)' },
    ],
  },
  {
    version: '0.3.0',
    date: '2026-04-27',
    title: { pt: 'Fase 3 — Organisms', en: 'Phase 3 — Organisms' },
    items: [
      { pt: 'Topbar (header componível)', en: 'Add Topbar (composable header)' },
      { pt: 'ProjectCard, EvalRow (primitives de lista)', en: 'Add ProjectCard, EvalRow (list primitives)' },
      { pt: 'AIBlock, SuggestionCard, SuggestionRunHeader (superfície AI)', en: 'Add AIBlock, SuggestionCard, SuggestionRunHeader (AI surface)' },
      { pt: 'EmptyState (zero-state pattern)', en: 'Add EmptyState (zero-state pattern)' },
      { pt: 'Toast (status/alert com aria-live)', en: 'Add Toast (status/alert with aria-live)' },
      { pt: 'Modal (focus trap + Esc + portal)', en: 'Add Modal (focus trap + Esc + portal)' },
      { pt: 'Drawer (painel lateral + portal)', en: 'Add Drawer (lateral panel + portal)' },
    ],
  },
  {
    version: '0.2.0',
    date: '2026-04-27',
    title: { pt: 'Fase 2 — Molecules', en: 'Phase 2 — Molecules' },
    items: [
      { pt: 'PillGroup, UrlInput, TitleInput', en: 'Add PillGroup, UrlInput, TitleInput' },
      { pt: 'ThemeToggle (usa hook useTheme)', en: 'Add ThemeToggle (uses useTheme hook)' },
      { pt: 'ScanBar, Spinner, Sentinel', en: 'Add ScanBar, Spinner, Sentinel' },
      { pt: 'Topbar do showcase agora usa <ThemeToggle>', en: 'Topbar of showcase now uses <ThemeToggle>' },
    ],
  },
  {
    version: '0.1.0',
    date: '2026-04-27',
    title: { pt: 'Fase 1 — Foundations + Atoms', en: 'Phase 1 — Foundations + Atoms' },
    items: [
      { pt: 'Release inicial: tokens, hooks, 12 atoms, Storybook 8, showcase narrativo', en: 'Initial release: tokens, hooks, 12 atoms, Storybook 8, narrative showcase' },
      { pt: 'CSS variables OKLCH preservadas 1:1 do design system estático original', en: 'CSS variables OKLCH preserved 1:1 from legacy static design system' },
      { pt: 'Hooks: useTheme, useCopyToClipboard', en: 'Hooks: useTheme, useCopyToClipboard' },
      { pt: 'Atoms: Button, IconButton, Pill, Chip, CountBadge, AIBadge, Kbd, Input, Textarea, Eyebrow, Numeral, BrandMark', en: 'Atoms: Button, IconButton, Pill, Chip, CountBadge, AIBadge, Kbd, Input, Textarea, Eyebrow, Numeral, BrandMark' },
      { pt: 'Pipeline de build: Vite (lib + app), TypeScript strict, Vitest + jest-axe', en: 'Build pipeline: Vite (lib + app), TypeScript strict, Vitest + jest-axe' },
    ],
  },
];

export function ChangelogPage() {
  const t = useT();
  return (
    <ComponentSection
      id="changelog"
      eyebrow="06 · Reference"
      title="Changelog"
      blurb={{
        pt: 'Histórico de releases. Versionamento semântico — patch para fixes, minor para componentes novos compatíveis, major para breaking changes em API pública.',
        en: 'Release history. Semantic versioning — patch for fixes, minor for new compatible components, major for breaking changes in public API.',
      }}
    >
      <Tier name="Releases" desc={{ pt: 'ordem reversa cronológica', en: 'reverse chronological order' }}>
        <div className={s.list}>
          {RELEASES.map((r) => (
            <article key={r.version} className={s.release}>
              <header className={s.head}>
                <span className={s.version}>v{r.version}</span>
                <strong className={s.title}>{t(r.title)}</strong>
                <span className={s.date}>{r.date}</span>
              </header>
              <ul className={s.items}>
                {r.items.map((it) => (
                  <li key={it.en} className={s.item}>{t(it)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Tier>
    </ComponentSection>
  );
}
