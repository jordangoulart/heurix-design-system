import { UrlInput } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function UrlInputPage() {
  const t = useT();
  const evalUrl = t({ pt: 'URL avaliada', en: 'Evaluated URL' });
  const invalid = t({ pt: 'URL inválida', en: 'Invalid URL' });
  return (
    <ComponentSection
      id="url-input"
      eyebrow="03 · Molecules"
      title="URL input"
      blurb={{
        pt: 'Entrada da URL avaliada. Ícone de elo no prefixo vira lime quando uma URL válida (http/https) é detectada — feedback visual sem precisar submeter.',
        en: 'Input for the evaluated URL. The chain icon prefix turns lime when a valid URL (http/https) is detected — visual feedback without having to submit.',
      }}
    >
      <Tier name="States" desc={{ pt: 'default · valid · error', en: 'default · valid · error' }}>
        <Preview label={{ pt: 'vazio · ícone --subtle', en: 'empty · --subtle icon' }}>
          <div style={{ width: 360 }}>
            <UrlInput label={evalUrl} />
          </div>
        </Preview>
        <Preview label={{ pt: 'URL válida · ícone --accent', en: 'valid URL · --accent icon' }}>
          <div style={{ width: 360 }}>
            <UrlInput label={evalUrl} defaultValue="https://heurix.dev/onboarding" />
          </div>
        </Preview>
        <Preview label="error">
          <div style={{ width: 360 }}>
            <UrlInput label={evalUrl} error={invalid} defaultValue="not-a-url" />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<UrlInput label="${evalUrl}" />
<UrlInput label="URL" error="${invalid}" />`}
        />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'mono caixa-alta acima do input', en: 'mono uppercase above the input' } },
            { token: 'icon prefix', description: { pt: 'elo de corrente no left:12 · vira accent quando válido', en: 'chain link at left:12 · turns accent when valid' } },
            { token: 'type', description: 'url · inputMode url · autocomplete url · spellCheck off' },
            { token: 'error', description: { pt: 'border --danger + role=alert', en: '--danger border + role=alert' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
