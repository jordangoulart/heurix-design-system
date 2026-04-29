import { Kbd } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Tier } from '../../components/Tier';
import { Preview } from '../../components/Preview';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function A11yPage() {
  const t = useT();
  return (
    <ComponentSection
      id="a11y"
      eyebrow="06 · Reference"
      title={{ pt: 'Acessibilidade', en: 'Accessibility' }}
      blurb={{
        pt: 'Acessibilidade não é fase final — é default em todos os componentes. Nada do design system passa em axe-core sem zero violations.',
        en: 'Accessibility isn’t a final phase — it’s the default in every component. Nothing in the design system passes axe-core with anything other than zero violations.',
      }}
    >
      <Tier name={{ pt: 'Garantias built-in', en: 'Built-in guarantees' }} desc={{ pt: 'contratos por componente', en: 'per-component contracts' }}>
        <Anatomy
          entries={[
            { token: '<Button>', description: { pt: 'aplica type="button" por default — evita submit acidental', en: 'applies type="button" by default — avoids accidental submit' } },
            { token: '<IconButton>', description: { pt: 'exige aria-label em compile time (TypeScript)', en: 'requires aria-label at compile time (TypeScript)' } },
            { token: '<Modal> · <Drawer>', description: 'focus trap + aria-modal + Esc-to-close' },
            { token: '<Input> · <Textarea>', description: { pt: 'auto-geram id/htmlFor wired', en: 'auto-generate wired id/htmlFor' } },
            { token: '<Toast>', description: 'role=status (default) · role=alert (error)' },
            { token: '<ScanBar> · <Spinner>', description: 'role=progressbar · role=status' },
          ]}
        />
      </Tier>

      <Tier name={{ pt: 'Atalhos de teclado', en: 'Keyboard shortcuts' }} desc={{ pt: 'globais do showcase / produto', en: 'global to the showcase / product' }}>
        <Preview>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--fg-2)' }}>
            <Kbd>/</Kbd> {t({ pt: 'foca busca lateral', en: 'focuses sidebar search' })}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--fg-2)' }}>
            <Kbd>Esc</Kbd> {t({ pt: 'fecha overlay', en: 'closes overlay' })}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--fg-2)' }}>
            <Kbd>Tab</Kbd> {t({ pt: 'ciclo dentro de focus trap', en: 'cycles inside focus trap' })}
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Testes automatizados', en: 'Automated tests' }} desc={{ pt: 'axe-core em CI', en: 'axe-core in CI' }}>
        <Anatomy
          entries={[
            { token: 'jest-axe', description: { pt: 'todo componente tem teste a11y · build quebra em violation', en: 'every component has an a11y test · build breaks on violation' } },
            { token: 'npm run ds:test', description: { pt: '90/90 testes · zero violations', en: '90/90 tests · zero violations' } },
            { token: 'matchers', description: 'expect(container).toHaveNoViolations()' },
          ]}
        />
      </Tier>

      <Tier name={{ pt: 'Contraste', en: 'Contrast' }} desc={{ pt: 'WCAG AA mínimo · AAA preferido', en: 'WCAG AA minimum · AAA preferred' }}>
        <Anatomy
          entries={[
            { token: '--fg sobre --bg', description: '> 13:1 (AAA forte)' },
            { token: '--fg-2 sobre --bg', description: '~9:1 (AAA)' },
            { token: '--muted sobre --surface', description: { pt: '~4.5:1 (AA mínimo)', en: '~4.5:1 (AA minimum)' } },
            { token: '--accent sobre --bg', description: '~7.1:1 (AAA)' },
            { token: '--accent-fg sobre --accent', description: '~13:1 (AAA)' },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
