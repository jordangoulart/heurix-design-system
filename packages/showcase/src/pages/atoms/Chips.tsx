import { ConfidenceChip, SuggestionChip } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function Chips() {
  const t = useT();
  return (
    <ComponentSection
      id="chip"
      eyebrow="02 · Atoms"
      title="Chip"
      blurb={{
        pt: 'Dois chips convivem ao redor do conteúdo gerado por IA: ConfidenceChip indica quão certa a IA está (3 níveis com pontos preenchidos); SuggestionChip carrega prioridade ou heurística associada.',
        en: 'Two chips live around AI-generated content: ConfidenceChip indicates how certain the AI is (3 levels with filled dots); SuggestionChip carries the related priority or heuristic.',
      }}
    >
      <Tier name="ConfidenceChip" desc="low (1 dot) · medium (2 dots) · high (3 dots)">
        <Preview>
          <ConfidenceChip level="low" label="48%" />
          <ConfidenceChip level="medium" label="72%" />
          <ConfidenceChip level="high" label="94%" />
        </Preview>
      </Tier>

      <Tier
        name="SuggestionChip"
        desc={{ pt: 'prioridade · heurística · effort', en: 'priority · heuristic · effort' }}
      >
        <Preview label="priority">
          <SuggestionChip priority="high">P1</SuggestionChip>
          <SuggestionChip priority="medium">P2</SuggestionChip>
          <SuggestionChip priority="low">P3</SuggestionChip>
        </Preview>
        <Preview label="heuristic">
          <SuggestionChip priority="heuristic">{t({ pt: 'Visibilidade', en: 'Visibility' })}</SuggestionChip>
          <SuggestionChip priority="heuristic">{t({ pt: 'Consistência', en: 'Consistency' })}</SuggestionChip>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<ConfidenceChip level="high" label="94%" />
<SuggestionChip priority="high">P1</SuggestionChip>
<SuggestionChip priority="heuristic">${t({ pt: 'Visibilidade', en: 'Visibility' })}</SuggestionChip>`}
        />
        <Anatomy
          entries={[
            { token: 'ConfidenceChip.level', description: { pt: 'low | medium | high — controla quantos dots ficam acesos', en: 'low | medium | high — controls how many dots are lit' } },
            { token: 'ConfidenceChip.label', description: { pt: 'texto à direita dos dots (geralmente uma %)', en: 'text to the right of the dots (usually a %)' } },
            { token: 'SuggestionChip.priority', description: { pt: 'high (lime tint) · medium · low · heuristic (sem caps)', en: 'high (lime tint) · medium · low · heuristic (no caps)' } },
            { token: 'children', description: { pt: 'em SuggestionChip, é o texto do chip', en: 'in SuggestionChip, the chip text' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
