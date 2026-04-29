import type { Bilingual } from '../i18n/LangContext';

export type NavItem = { id: string; label: Bilingual; href: string };
export type NavGroup = { num: string; title: Bilingual; items: NavItem[] };

export const NAVIGATION: NavGroup[] = [
  {
    num: '00',
    title: { pt: 'Visão geral', en: 'Overview' },
    items: [{ id: 'overview', label: { pt: 'Sobre o sistema', en: 'About the system' }, href: '/' }],
  },
  {
    num: '01',
    title: { pt: 'Foundations', en: 'Foundations' },
    items: [
      { id: 'color', label: { pt: 'Color', en: 'Color' }, href: '/foundations/color' },
      { id: 'typography', label: { pt: 'Typography', en: 'Typography' }, href: '/foundations/typography' },
      { id: 'spacing', label: { pt: 'Spacing', en: 'Spacing' }, href: '/foundations/spacing' },
      { id: 'radius', label: { pt: 'Radius', en: 'Radius' }, href: '/foundations/radius' },
      { id: 'elevation', label: { pt: 'Elevation', en: 'Elevation' }, href: '/foundations/elevation' },
      { id: 'motion', label: { pt: 'Motion', en: 'Motion' }, href: '/foundations/motion' },
      { id: 'iconography', label: { pt: 'Iconography', en: 'Iconography' }, href: '/foundations/iconography' },
    ],
  },
  {
    num: '02',
    title: { pt: 'Atoms', en: 'Atoms' },
    items: [
      { id: 'button', label: { pt: 'Button', en: 'Button' }, href: '/atoms/button' },
      { id: 'icon-button', label: { pt: 'Icon button', en: 'Icon button' }, href: '/atoms/icon-button' },
      { id: 'pill', label: { pt: 'Pill', en: 'Pill' }, href: '/atoms/pill' },
      { id: 'chip', label: { pt: 'Chip', en: 'Chip' }, href: '/atoms/chip' },
      { id: 'count-badge', label: { pt: 'Count badge', en: 'Count badge' }, href: '/atoms/count-badge' },
      { id: 'ai-badge', label: { pt: 'AI badge', en: 'AI badge' }, href: '/atoms/ai-badge' },
      { id: 'kbd', label: { pt: 'Kbd hint', en: 'Kbd hint' }, href: '/atoms/kbd' },
      { id: 'input', label: { pt: 'Input', en: 'Input' }, href: '/atoms/input' },
      { id: 'textarea', label: { pt: 'Textarea', en: 'Textarea' }, href: '/atoms/textarea' },
      { id: 'eyebrow', label: { pt: 'Eyebrow', en: 'Eyebrow' }, href: '/atoms/eyebrow' },
      { id: 'numeral', label: { pt: 'Numeral', en: 'Numeral' }, href: '/atoms/numeral' },
    ],
  },
  {
    num: '03',
    title: { pt: 'Molecules', en: 'Molecules' },
    items: [
      { id: 'pill-group', label: { pt: 'Pill group', en: 'Pill group' }, href: '/molecules/pill-group' },
      { id: 'url-input', label: { pt: 'URL input', en: 'URL input' }, href: '/molecules/url-input' },
      { id: 'title-input', label: { pt: 'Title input', en: 'Title input' }, href: '/molecules/title-input' },
      { id: 'theme-toggle', label: { pt: 'Theme toggle', en: 'Theme toggle' }, href: '/molecules/theme-toggle' },
      { id: 'scan-bar', label: { pt: 'Scan bar', en: 'Scan bar' }, href: '/molecules/scan-bar' },
      { id: 'spinner', label: { pt: 'Spinner', en: 'Spinner' }, href: '/molecules/spinner' },
      { id: 'sentinel', label: { pt: 'List sentinel', en: 'List sentinel' }, href: '/molecules/sentinel' },
    ],
  },
  {
    num: '04',
    title: { pt: 'Organisms', en: 'Organisms' },
    items: [
      { id: 'topbar', label: { pt: 'Top bar', en: 'Top bar' }, href: '/organisms/topbar' },
      { id: 'project-card', label: { pt: 'Project card', en: 'Project card' }, href: '/organisms/project-card' },
      { id: 'eval-row', label: { pt: 'Linha de avaliação', en: 'Evaluation row' }, href: '/organisms/eval-row' },
      { id: 'ai-block', label: { pt: 'Bloco de insight AI', en: 'AI insight block' }, href: '/organisms/ai-block' },
      { id: 'sg-card', label: { pt: 'Card de sugestão', en: 'Suggestion card' }, href: '/organisms/suggestion-card' },
      { id: 'sg-run', label: { pt: 'Cabeçalho de run', en: 'Suggestion run header' }, href: '/organisms/suggestion-run' },
      { id: 'stats-tile', label: { pt: 'Stats tile', en: 'Stats tile' }, href: '/organisms/stats-tile' },
      { id: 'empty', label: { pt: 'Estado vazio', en: 'Empty state' }, href: '/organisms/empty-state' },
      { id: 'toast', label: { pt: 'Toast', en: 'Toast' }, href: '/organisms/toast' },
      { id: 'modal', label: { pt: 'Modal', en: 'Modal' }, href: '/organisms/modal' },
      { id: 'drawer', label: { pt: 'Drawer', en: 'Drawer' }, href: '/organisms/drawer' },
    ],
  },
  {
    num: '05',
    title: { pt: 'Patterns', en: 'Patterns' },
    items: [
      { id: 'pattern-loading', label: { pt: 'Loading & assíncrono', en: 'Loading & async' }, href: '/patterns/loading' },
      { id: 'pattern-ai', label: { pt: 'Superfície AI', en: 'AI surface' }, href: '/patterns/ai' },
      { id: 'pattern-form', label: { pt: 'Formulários', en: 'Form patterns' }, href: '/patterns/form' },
    ],
  },
  {
    num: '06',
    title: { pt: 'Reference', en: 'Reference' },
    items: [
      { id: 'a11y', label: { pt: 'Acessibilidade', en: 'Accessibility' }, href: '/reference/a11y' },
      { id: 'i18n', label: { pt: 'i18n', en: 'i18n' }, href: '/reference/i18n' },
      { id: 'changelog', label: { pt: 'Changelog', en: 'Changelog' }, href: '/reference/changelog' },
    ],
  },
];
