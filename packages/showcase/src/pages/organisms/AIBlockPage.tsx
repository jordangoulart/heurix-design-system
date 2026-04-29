import { AIBlock, ConfidenceChip } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function AIBlockPage() {
  const t = useT();
  return (
    <ComponentSection
      id="ai-block"
      eyebrow="04 · Organisms"
      title="AI insight block"
      blurb={{
        pt: 'Síntese gerada por IA. Glow radial discreto na borda sinaliza origem; AIBadge no header + ConfidenceChip de meta no canto direito. Container — não compete com texto.',
        en: 'AI-generated summary. A subtle radial glow on the border signals origin; AIBadge in the header + ConfidenceChip meta on the right. Container — doesn’t compete with text.',
      }}
    >
      <Tier name="Default" desc="title · meta · body">
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <AIBlock
              title={t({ pt: 'Síntese da página', en: 'Page summary' })}
              meta={<ConfidenceChip level="high" label="94%" />}
            >
              {t({
                pt: 'A página de onboarding apresenta forte hierarquia visual e copy direta. O CTA principal compete com 2 secundários — recomenda-se reduzir.',
                en: 'The onboarding page shows strong visual hierarchy and direct copy. The main CTA competes with 2 secondaries — reducing them is recommended.',
              })}
            </AIBlock>
          </div>
        </Preview>
      </Tier>

      <Tier name="Variations" desc={{ pt: 'só title · sem meta', en: 'title only · no meta' }}>
        <Preview label={{ pt: 'sem ConfidenceChip', en: 'no ConfidenceChip' }}>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <AIBlock title={t({ pt: 'Análise inicial', en: 'Initial analysis' })}>
              {t({
                pt: 'Aguardando análise completa. As primeiras 3 heurísticas foram avaliadas com confiança alta.',
                en: 'Waiting for full analysis. The first 3 heuristics were evaluated with high confidence.',
              })}
            </AIBlock>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<AIBlock
  title="${t({ pt: 'Síntese da página', en: 'Page summary' })}"
  meta={<ConfidenceChip level="high" label="94%" />}
>
  ${t({ pt: 'Texto gerado por IA…', en: 'AI-generated text…' })}
</AIBlock>`}
        />
        <Anatomy
          entries={[
            { token: 'title', description: { pt: 'string · 13px / weight 500 · ao lado do AIBadge', en: 'string · 13px / weight 500 · next to AIBadge' } },
            { token: 'meta', description: { pt: 'slot right · ConfidenceChip típico', en: 'right slot · typically ConfidenceChip' } },
            { token: 'children', description: { pt: 'corpo do insight · 13px / line-height 1.6', en: 'insight body · 13px / line-height 1.6' } },
            { token: '::before', description: 'glow radial 32% accent · opacity 10% (dark) / 14% (light)' },
            { token: 'AIBadge', description: { pt: 'sempre presente no header · marca origem AI', en: 'always present in the header · marks AI origin' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
