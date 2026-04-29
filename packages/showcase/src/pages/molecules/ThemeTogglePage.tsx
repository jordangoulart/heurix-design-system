import { ThemeToggle } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function ThemeTogglePage() {
  const t = useT();
  return (
    <ComponentSection
      id="theme-toggle"
      eyebrow="03 · Molecules"
      title="Theme toggle"
      blurb={{
        pt: 'Alterna dark/light. Persistência via localStorage.heurix.theme — compatível com o app principal. Composição de IconButton + useTheme hook.',
        en: 'Toggles dark/light. Persisted in localStorage.heurix.theme — shared with the main app. Composes IconButton + useTheme hook.',
      }}
    >
      <Tier name="Default" desc={{ pt: 'single button · sun/moon swap por tema atual', en: 'single button · sun/moon swap by current theme' }}>
        <Preview>
          <ThemeToggle />
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'topbar do produto', en: 'product topbar' }}>
        <Preview>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 12px',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 8,
            }}
          >
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: 11,
                color: 'var(--muted)',
              }}
            >
              v0.1 · {t({ pt: 'ativo', en: 'live' })}
            </span>
            <ThemeToggle />
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<ThemeToggle />`} />
        <Anatomy
          entries={[
            { token: 'aria-pressed', description: { pt: 'true quando theme=light', en: 'true when theme=light' } },
            { token: 'storage', description: { pt: 'localStorage.heurix.theme · compartilhada com app', en: 'localStorage.heurix.theme · shared with app' } },
            { token: 'fallback', description: { pt: 'prefers-color-scheme se nada no storage', en: 'prefers-color-scheme if nothing in storage' } },
            { token: 'apply', description: 'data-theme=dark|light on <html>' },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
