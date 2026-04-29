import { Spinner } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function SpinnerPage() {
  const t = useT();
  return (
    <ComponentSection
      id="spinner"
      eyebrow="03 · Molecules"
      title="Spinner"
      blurb={{
        pt: 'Loading inline. Use para estados de < 2 segundos; acima disso, prefira ScanBar (varredura contínua) ou skeleton (espaço alocado).',
        en: 'Inline loading. Use for states under 2 seconds; above that, prefer ScanBar (continuous scan) or skeleton (allocated space).',
      }}
    >
      <Tier name="Sizes" desc="12 / 14 / 20px">
        <Preview>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'inline com texto · botão loading', en: 'inline with text · loading button' }}>
        <Preview label={{ pt: 'ao lado de label · status loading', en: 'next to label · loading status' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', fontSize: 13 }}>
            <Spinner size="sm" />
            {t({ pt: 'Buscando avaliações…', en: 'Fetching evaluations…' })}
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<Spinner size="md" label="${t({ pt: 'Carregando', en: 'Loading' })}" />`} />
        <Anatomy
          entries={[
            { token: 'size', description: 'sm (12) · md (14) · lg (20) — fixed scale' },
            { token: 'label', description: 'aria-label of role=status' },
            { token: 'animation', description: 'spin 0.85s linear infinite' },
            { token: 'color', description: { pt: 'border --border-strong · top --accent', en: '--border-strong border · --accent top' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
