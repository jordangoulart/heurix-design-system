import { SuggestionCard, SuggestionChip, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function SuggestionCardPage() {
  const t = useT();
  return (
    <ComponentSection
      id="sg-card"
      eyebrow="04 · Organisms"
      title="Suggestion card"
      blurb={{
        pt: 'Sugestão acionável vinda da IA. Prioridade + heurística no header, body explicativo, esforço + ação no footer — tudo num olhar.',
        en: 'Actionable AI suggestion. Priority + heuristic in the header, explanatory body, effort + action in the footer — all in one glance.',
      }}
    >
      <Tier name="Default" desc={{ pt: 'prioridade alta · com chips e ação', en: 'high priority · with chips and action' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionCard
              title={t({ pt: 'Reduzir CTAs concorrentes na seção hero', en: 'Reduce competing CTAs in the hero section' })}
              chips={
                <>
                  <SuggestionChip priority="high">P1</SuggestionChip>
                  <SuggestionChip priority="heuristic">{t({ pt: 'Visibilidade', en: 'Visibility' })}</SuggestionChip>
                </>
              }
              footer={
                <>
                  <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: 10, color: 'var(--muted)' }}>
                    {t({ pt: 'esforço · S', en: 'effort · S' })}
                  </span>
                  <Button size="sm" variant="primary">{t({ pt: 'Aplicar', en: 'Apply' })}</Button>
                </>
              }
            >
              {t({
                pt: 'Existem 3 CTAs visíveis acima da dobra. Manter apenas o primário aumenta a probabilidade de conversão.',
                en: 'There are 3 CTAs visible above the fold. Keeping only the primary increases conversion likelihood.',
              })}
            </SuggestionCard>
          </div>
        </Preview>
      </Tier>

      <Tier name="Variations" desc={{ pt: 'prioridades distintas', en: 'different priorities' }}>
        <Preview label="P2 medium">
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionCard
              title={t({ pt: 'Aumentar contraste do helper text', en: 'Increase helper-text contrast' })}
              chips={<SuggestionChip priority="medium">P2</SuggestionChip>}
              footer={<Button size="sm" variant="ghost">{t({ pt: 'Detalhes', en: 'Details' })}</Button>}
            >
              {t({
                pt: 'Helper text atual está em --subtle (3.8:1). Subir para --muted (4.5:1) atende AA.',
                en: 'Current helper text is on --subtle (3.8:1). Bumping to --muted (4.5:1) meets AA.',
              })}
            </SuggestionCard>
          </div>
        </Preview>
        <Preview label="P3 low + heuristic">
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionCard
              title={t({ pt: 'Adicionar tooltip ao ícone de ajuda', en: 'Add tooltip to the help icon' })}
              chips={
                <>
                  <SuggestionChip priority="low">P3</SuggestionChip>
                  <SuggestionChip priority="heuristic">{t({ pt: 'Reconhecimento', en: 'Recognition' })}</SuggestionChip>
                </>
              }
            >
              {t({
                pt: 'O ícone "?" não tem affordance de hover. Adicionar tooltip explicando seu propósito.',
                en: 'The "?" icon has no hover affordance. Add a tooltip explaining its purpose.',
              })}
            </SuggestionCard>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<SuggestionCard
  title="${t({ pt: 'Reduzir CTAs', en: 'Reduce CTAs' })}"
  chips={<SuggestionChip priority="high">P1</SuggestionChip>}
  footer={<Button size="sm">${t({ pt: 'Aplicar', en: 'Apply' })}</Button>}
>
  ${t({ pt: 'Body explicativo da sugestão.', en: 'Explanatory body of the suggestion.' })}
</SuggestionCard>`}
        />
        <Anatomy
          entries={[
            { token: 'title', description: { pt: 'principal · 13px / weight 500', en: 'main · 13px / weight 500' } },
            { token: 'chips', description: { pt: 'slot header · prioridade + heurística (típico)', en: 'header slot · priority + heuristic (typical)' } },
            { token: 'footer', description: { pt: 'slot rodapé · separado por padding-top 6', en: 'footer slot · separated by 6 padding-top' } },
            { token: 'children', description: { pt: 'body explicativo · 12px / line-height 1.55', en: 'explanatory body · 12px / line-height 1.55' } },
            { token: '::before', description: { pt: 'glow radial accent (mesmo do AIBlock)', en: 'accent radial glow (same as AIBlock)' } },
            { token: ':hover', description: { pt: 'border-strong · glow opacity +0.04', en: 'border-strong · glow opacity +0.04' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
