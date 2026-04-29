import { Input } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function Inputs() {
  const t = useT();
  const slug = t({ pt: 'lowercase, sem espaços', en: 'lowercase, no spaces' });
  const emailRequired = t({ pt: 'Email obrigatório', en: 'Email is required' });
  return (
    <ComponentSection
      id="input"
      eyebrow="02 · Atoms"
      title="Input"
      blurb={{
        pt: 'Entrada de texto base. Label monoespaçado em caps; hint quando há regra de formato; error troca o hint quando algo está inválido. Tudo wired com aria-* automaticamente.',
        en: 'Base text input. Mono uppercase label; hint when there’s a format rule; error replaces the hint when something is invalid. All aria-* wired automatically.',
      }}
    >
      <Tier name="Variants" desc={{ pt: 'default · com hint · com error', en: 'default · with hint · with error' }}>
        <Preview label="default">
          <div style={{ width: 320 }}>
            <Input label="URL" placeholder="https://…" />
          </div>
        </Preview>
        <Preview label={{ pt: 'com hint', en: 'with hint' }}>
          <div style={{ width: 320 }}>
            <Input label="Slug" hint={slug} />
          </div>
        </Preview>
        <Preview label={{ pt: 'com error', en: 'with error' }}>
          <div style={{ width: 320 }}>
            <Input label="Email" error={emailRequired} />
          </div>
        </Preview>
      </Tier>

      <Tier name="States" desc="default · focus · disabled">
        <Preview label={{ pt: 'focus visualizado · borda accent + ring', en: 'focus visualized · accent border + ring' }}>
          <div style={{ width: 320 }}>
            <Input label="URL" defaultValue="heurix.dev/checkout" autoFocus />
          </div>
        </Preview>
        <Preview label="disabled">
          <div style={{ width: 320 }}>
            <Input label="URL" disabled defaultValue="heurix.dev/checkout" />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Input label="URL" placeholder="https://…" />
<Input label="Email" error="${emailRequired}" />
<Input label="Slug" hint="${slug}" />`}
        />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'mono caixa-alta, conectado por htmlFor automático', en: 'mono uppercase, automatic htmlFor wiring' } },
            { token: 'hint', description: { pt: 'texto auxiliar abaixo · escondido quando há error', en: 'helper text below · hidden when there’s an error' } },
            { token: 'error', description: { pt: 'role=alert + aria-invalid=true + cor --danger', en: 'role=alert + aria-invalid=true + --danger color' } },
            { token: ':focus', description: { pt: 'border --accent + box-shadow ring 3px', en: '--accent border + 3px box-shadow ring' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
