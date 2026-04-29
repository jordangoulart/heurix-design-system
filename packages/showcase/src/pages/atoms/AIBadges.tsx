import { AIBadge } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function AIBadges() {
  const t = useT();
  return (
    <ComponentSection
      id="ai-badge"
      eyebrow="02 · Atoms"
      title="AI badge"
      blurb={{
        pt: 'Marcador de origem. Toda superfície com conteúdo gerado por IA carrega esse badge — é a regra do design context: \'AI é helper, não performer\'.',
        en: 'Origin marker. Every surface with AI-generated content carries this badge — it’s the design-context rule: "AI is a helper, not a performer".',
      }}
    >
      <Tier name="Variants" desc={{ pt: 'default · com label custom', en: 'default · with custom label' }}>
        <Preview label="default">
          <AIBadge />
        </Preview>
        <Preview label={{ pt: 'com texto descritivo', en: 'with descriptive text' }}>
          <AIBadge>{t({ pt: 'AI · sugerido', en: 'AI · suggested' })}</AIBadge>
          <AIBadge>AI-assisted</AIBadge>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'onde aparece', en: 'where it appears' }}>
        <Preview label={{ pt: 'inline com texto', en: 'inline with text' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            {t({ pt: 'Síntese gerada', en: 'Generated summary' })} <AIBadge />
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<AIBadge />
<AIBadge>${t({ pt: 'AI · sugerido', en: 'AI · suggested' })}</AIBadge>`}
        />
        <Anatomy
          entries={[
            { token: 'children', description: { pt: 'texto override — default "AI"', en: 'override text — defaults to "AI"' } },
            { token: 'border', description: { pt: 'mistura accent 35% com border — pista sutil sem ser lime puro', en: 'mixes accent 35% with border — subtle hint without pure lime' } },
            { token: 'dot', description: { pt: 'lime 5×5 com glow box-shadow accent 40%', en: 'lime 5×5 with glow box-shadow accent 40%' } },
            { token: 'font', description: 'Chivo Mono, uppercase, 0.04em letter-spacing' },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
