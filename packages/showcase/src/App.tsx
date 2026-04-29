import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeToggle } from '@heurix/design-system';
import { BrandIcon, BrandLogo } from './components/Brand';
import { Sidebar } from './components/Sidebar';
import { LangToggle } from './i18n/LangToggle';
import { useLang } from './i18n/LangContext';
import { Overview } from './pages/Overview';
import { Color } from './pages/foundations/Color';
import { Typography } from './pages/foundations/Typography';
import { Spacing } from './pages/foundations/Spacing';
import { Radius } from './pages/foundations/Radius';
import { Elevation } from './pages/foundations/Elevation';
import { Motion } from './pages/foundations/Motion';
import { Iconography } from './pages/foundations/Iconography';
import { Buttons } from './pages/atoms/Buttons';
import { IconButtons } from './pages/atoms/IconButtons';
import { Pills } from './pages/atoms/Pills';
import { Chips } from './pages/atoms/Chips';
import { CountBadges } from './pages/atoms/CountBadges';
import { AIBadges } from './pages/atoms/AIBadges';
import { Kbds } from './pages/atoms/Kbds';
import { Inputs } from './pages/atoms/Inputs';
import { Textareas } from './pages/atoms/Textareas';
import { Eyebrows } from './pages/atoms/Eyebrows';
import { Numerals } from './pages/atoms/Numerals';
import { PillGroupPage } from './pages/molecules/PillGroupPage';
import { UrlInputPage } from './pages/molecules/UrlInputPage';
import { TitleInputPage } from './pages/molecules/TitleInputPage';
import { ThemeTogglePage } from './pages/molecules/ThemeTogglePage';
import { ScanBarPage } from './pages/molecules/ScanBarPage';
import { SpinnerPage } from './pages/molecules/SpinnerPage';
import { SentinelPage } from './pages/molecules/SentinelPage';
import { TopbarPage } from './pages/organisms/TopbarPage';
import { ProjectCardPage } from './pages/organisms/ProjectCardPage';
import { EvalRowPage } from './pages/organisms/EvalRowPage';
import { AIBlockPage } from './pages/organisms/AIBlockPage';
import { SuggestionCardPage } from './pages/organisms/SuggestionCardPage';
import { SuggestionRunHeaderPage } from './pages/organisms/SuggestionRunHeaderPage';
import { StatsTilePage } from './pages/organisms/StatsTilePage';
import { EmptyStatePage } from './pages/organisms/EmptyStatePage';
import { ToastPage } from './pages/organisms/ToastPage';
import { ModalPage } from './pages/organisms/ModalPage';
import { DrawerPage } from './pages/organisms/DrawerPage';
import { LoadingPattern } from './pages/patterns/LoadingPattern';
import { AIPattern } from './pages/patterns/AIPattern';
import { FormPattern } from './pages/patterns/FormPattern';
import { A11yPage } from './pages/reference/A11yPage';
import { I18nPage } from './pages/reference/I18nPage';
import { ChangelogPage } from './pages/reference/ChangelogPage';
import s from './App.module.css';

export function App() {
  const { t } = useLang();
  return (
    <div className={s.shell}>
      <header className={s.topbar}>
        <div className={s.brand}>
          <BrandIcon height={24} className={s.brandIcon} />
          <strong className={s.title}>Heurix</strong>
          <span className={s.divider}>/</span>
          <span className={s.subtitle}>{t({ pt: 'Design system', en: 'Design system' })}</span>
        </div>
        <div className={s.meta}>
          <span className={s.metaText}>
            <span className={s.metaDot} aria-hidden="true" />
            v0.1 · {t({ pt: 'ativo', en: 'live' })}
          </span>
          <LangToggle />
          <ThemeToggle />
        </div>
      </header>
      <div className={s.body}>
        <Sidebar />
        <main className={s.main}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/foundations/color" element={<Color />} />
            <Route path="/foundations/typography" element={<Typography />} />
            <Route path="/foundations/spacing" element={<Spacing />} />
            <Route path="/foundations/radius" element={<Radius />} />
            <Route path="/foundations/elevation" element={<Elevation />} />
            <Route path="/foundations/motion" element={<Motion />} />
            <Route path="/foundations/iconography" element={<Iconography />} />
            <Route path="/atoms/button" element={<Buttons />} />
            <Route path="/atoms/icon-button" element={<IconButtons />} />
            <Route path="/atoms/pill" element={<Pills />} />
            <Route path="/atoms/chip" element={<Chips />} />
            <Route path="/atoms/count-badge" element={<CountBadges />} />
            <Route path="/atoms/ai-badge" element={<AIBadges />} />
            <Route path="/atoms/kbd" element={<Kbds />} />
            <Route path="/atoms/input" element={<Inputs />} />
            <Route path="/atoms/textarea" element={<Textareas />} />
            <Route path="/atoms/eyebrow" element={<Eyebrows />} />
            <Route path="/atoms/numeral" element={<Numerals />} />
            <Route path="/molecules/pill-group" element={<PillGroupPage />} />
            <Route path="/molecules/url-input" element={<UrlInputPage />} />
            <Route path="/molecules/title-input" element={<TitleInputPage />} />
            <Route path="/molecules/theme-toggle" element={<ThemeTogglePage />} />
            <Route path="/molecules/scan-bar" element={<ScanBarPage />} />
            <Route path="/molecules/spinner" element={<SpinnerPage />} />
            <Route path="/molecules/sentinel" element={<SentinelPage />} />
            <Route path="/organisms/topbar" element={<TopbarPage />} />
            <Route path="/organisms/project-card" element={<ProjectCardPage />} />
            <Route path="/organisms/eval-row" element={<EvalRowPage />} />
            <Route path="/organisms/ai-block" element={<AIBlockPage />} />
            <Route path="/organisms/suggestion-card" element={<SuggestionCardPage />} />
            <Route path="/organisms/suggestion-run" element={<SuggestionRunHeaderPage />} />
            <Route path="/organisms/stats-tile" element={<StatsTilePage />} />
            <Route path="/organisms/empty-state" element={<EmptyStatePage />} />
            <Route path="/organisms/toast" element={<ToastPage />} />
            <Route path="/organisms/modal" element={<ModalPage />} />
            <Route path="/organisms/drawer" element={<DrawerPage />} />
            <Route path="/patterns/loading" element={<LoadingPattern />} />
            <Route path="/patterns/ai" element={<AIPattern />} />
            <Route path="/patterns/form" element={<FormPattern />} />
            <Route path="/reference/a11y" element={<A11yPage />} />
            <Route path="/reference/i18n" element={<I18nPage />} />
            <Route path="/reference/changelog" element={<ChangelogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <footer className={s.footer}>
        <BrandLogo height={20} className={s.footerLogo} />
        <span className={s.footerMeta}>
          {t({ pt: '© Heurix · Design system', en: '© Heurix · Design system' })}
        </span>
      </footer>
    </div>
  );
}
