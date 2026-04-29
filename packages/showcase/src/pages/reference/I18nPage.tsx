import { ComponentSection } from '../../components/ComponentSection';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';

export function I18nPage() {
  return (
    <ComponentSection
      id="i18n"
      eyebrow="06 · Reference"
      title="i18n"
      blurb={{
        pt: 'O design system é language-agnostic — não embute nenhuma string. Strings padrão (ex: \'Fechar\' no Modal, \'Carregando\' no Spinner) são overridable via props. O showcase tem toggle PT/EN no topbar — toda a copy passa por t({ pt, en }).',
        en: 'The design system is language-agnostic — it embeds no strings. Default strings (e.g., "Close" in Modal, "Loading" in Spinner) are overridable via props. The showcase ships with a PT/EN toggle in the topbar — all copy goes through t({ pt, en }).',
      }}
    >
      <Tier name={{ pt: 'Strings overridable', en: 'Overridable strings' }} desc={{ pt: 'props de texto · default em PT mas customizável', en: 'text props · default in PT but customizable' }}>
        <CodeBlock
          code={`<Modal title="Confirm delete" closeLabel="Close" />
<Spinner label="Loading" />
<ScanBar label="Scanning…" />
<Sentinel>End of list</Sentinel>
<EmptyState title="No results" />`}
        />
      </Tier>

      <Tier name={{ pt: 'Toggle do showcase', en: 'Showcase toggle' }} desc={{ pt: 'context + hook · sem dependências externas', en: 'context + hook · no external deps' }}>
        <CodeBlock
          code={`import { useT } from './i18n/LangContext';

const t = useT();
<h1>{t({ pt: 'Olá', en: 'Hello' })}</h1>`}
        />
      </Tier>

      <Tier name={{ pt: 'Padrões', en: 'Patterns' }} desc={{ pt: 'onde strings vivem', en: 'where strings live' }}>
        <Anatomy
          entries={[
            { token: { pt: 'app principal', en: 'main app' }, description: { pt: 'strings hardcoded · DS não sabe disso', en: 'hardcoded strings · the DS is unaware' } },
            { token: 'children/props', description: { pt: 'todo texto visível vem via children ou prop nominal', en: 'all visible text comes via children or a named prop' } },
            { token: { pt: 'Intl nativo', en: 'Native Intl' }, description: { pt: 'datas e números — fora do componente', en: 'dates and numbers — outside the component' } },
            { token: 'rtl', description: { pt: 'não suportado na Fase 1; layout usa flex/grid logical-ready', en: 'not supported in Phase 1; layout uses logical-ready flex/grid' } },
          ]}
        />
      </Tier>

      <Tier name={{ pt: 'Exemplo de override', en: 'Override example' }} desc={{ pt: 'trocar strings em runtime', en: 'swap strings at runtime' }}>
        <CodeBlock
          code={`// Hardcoded:
<Modal title="Confirmar exclusão">…</Modal>

// Use the app's t():
<Modal title={t('confirm.title')}>…</Modal>`}
        />
      </Tier>
    </ComponentSection>
  );
}
