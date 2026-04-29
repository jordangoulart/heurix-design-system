import { AIBadge, AIBlock, SuggestionCard, SuggestionChip, ConfidenceChip, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function AIPattern() {
  const t = useT();
  return (
    <ComponentSection
      id="pattern-ai"
      eyebrow="05 · Patterns"
      title={{ pt: 'Superfície AI', en: 'AI surface' }}
      blurb={{
        pt: 'Tudo que vem de IA precisa estar marcado. Glow radial sutil + AIBadge + ConfidenceChip formam a tríade visual: origem, confiança e acionabilidade. Sem essas marcas, o usuário não sabe diferenciar conteúdo seu vs. gerado.',
        en: 'Anything that comes from AI must be marked. Subtle radial glow + AIBadge + ConfidenceChip form the visual triad: origin, confidence, and actionability. Without these marks, the user can’t tell their content from generated content.',
      }}
    >
      <Tier name={{ pt: 'Inline · AIBadge', en: 'Inline · AIBadge' }} desc={{ pt: 'marcação leve em texto · sem container', en: 'light marker in text · no container' }}>
        <Preview>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
            {t({ pt: 'Síntese gerada', en: 'Generated summary' })} <AIBadge />
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Bloco · AIBlock', en: 'Block · AIBlock' }} desc={{ pt: 'container completo · síntese / análise / insight', en: 'full container · summary / analysis / insight' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <AIBlock title={t({ pt: 'Síntese da página', en: 'Page summary' })} meta={<ConfidenceChip level="high" label="94%" />}>
              {t({
                pt: 'A página apresenta forte hierarquia visual e copy direta. O CTA principal compete com 2 secundários — recomenda-se reduzir.',
                en: 'The page shows strong visual hierarchy and direct copy. The main CTA competes with 2 secondaries — reducing them is recommended.',
              })}
            </AIBlock>
          </div>
        </Preview>
      </Tier>

      <Tier
        name={{ pt: 'Acionável · SuggestionCard', en: 'Actionable · SuggestionCard' }}
        desc={{ pt: 'quando há ação a tomar · prioridade + heurística + CTA', en: 'when there is an action to take · priority + heuristic + CTA' }}
      >
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionCard
              title={t({ pt: 'Reduzir CTAs concorrentes', en: 'Reduce competing CTAs' })}
              chips={
                <>
                  <SuggestionChip priority="high">P1</SuggestionChip>
                  <SuggestionChip priority="heuristic">{t({ pt: 'Visibilidade', en: 'Visibility' })}</SuggestionChip>
                </>
              }
              footer={<Button size="sm" variant="primary">{t({ pt: 'Aplicar', en: 'Apply' })}</Button>}
            >
              {t({
                pt: 'Existem 3 CTAs visíveis acima da dobra. Manter apenas o primário aumenta a probabilidade de conversão.',
                en: 'There are 3 CTAs visible above the fold. Keeping only the primary increases conversion likelihood.',
              })}
            </SuggestionCard>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'O que evitar', en: 'What to avoid' }} desc={{ pt: 'anti-padrões que diluem o sinal', en: 'anti-patterns that dilute the signal' }}>
        <Anatomy
          entries={[
            { token: { pt: 'AI sem badge', en: 'AI without a badge' }, description: { pt: 'mostrar conteúdo de IA sem marca quebra confiança · sempre marca', en: 'showing AI content unmarked breaks trust · always mark it' } },
            { token: { pt: 'accent em não-IA', en: 'accent on non-AI' }, description: { pt: 'lime fora de AI/primário/focus dilui o sinal', en: 'lime outside AI/primary/focus dilutes the signal' } },
            { token: { pt: 'confiança em texto', en: 'confidence as text' }, description: { pt: '"alta", "média" — use ConfidenceChip com pontos', en: '"high", "medium" — use ConfidenceChip with dots' } },
            { token: { pt: 'glow em tudo', en: 'glow everywhere' }, description: { pt: 'apenas em containers de origem AI · resto é neutro', en: 'only on AI-origin containers · rest is neutral' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
