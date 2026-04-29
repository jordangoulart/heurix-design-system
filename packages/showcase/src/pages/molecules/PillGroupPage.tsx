import { useState } from 'react';
import { Pill, PillGroup } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function PillGroupPage() {
  const t = useT();
  const [active, setActive] = useState(2);
  const values = [-2, -1, 0, +1, +2];
  const heuristicLabel = t({ pt: 'Score heurística', en: 'Heuristic score' });
  return (
    <ComponentSection
      id="pill-group"
      eyebrow="03 · Molecules"
      title="Pill group"
      blurb={{
        pt: 'Conjunto coeso de pills. Encapsula seleção exclusiva — typically Likert -2…+2 para scoring de heurística. Wrap visual com bg --bg + border 1px que separa o grupo do contexto.',
        en: 'Cohesive set of pills. Encapsulates exclusive selection — typically Likert -2…+2 for heuristic scoring. Visual wrap with --bg background + 1px border separates the group from context.',
      }}
    >
      <Tier name="Likert score" desc={{ pt: 'caso canônico · 5 níveis', en: 'canonical case · 5 levels' }}>
        <Preview>
          <PillGroup label={heuristicLabel}>
            {values.map((v, i) => (
              <Pill key={v} active={i === active} aiSuggested={v === +1} onClick={() => setActive(i)}>
                {v > 0 ? `+${v}` : `${v}`}
              </Pill>
            ))}
          </PillGroup>
        </Preview>
      </Tier>

      <Tier
        name={{ pt: 'Outros usos', en: 'Other uses' }}
        desc={{ pt: 'qualquer seleção exclusiva curta', en: 'any short exclusive selection' }}
      >
        <Preview label="scope picker">
          <PillGroup label="Scope">
            <Pill active>Page</Pill>
            <Pill>Flow</Pill>
            <Pill>Component</Pill>
          </PillGroup>
        </Preview>
        <Preview label="language toggle">
          <PillGroup label="Language">
            <Pill active>EN</Pill>
            <Pill>PT</Pill>
          </PillGroup>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<PillGroup label="Score">
  <Pill active>0</Pill>
  <Pill aiSuggested>+1</Pill>
</PillGroup>`}
        />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'aria-label do role=group — descreve a categoria', en: 'aria-label of role=group — describes the category' } },
            { token: 'children', description: { pt: 'sequência de <Pill>; o pai gerencia seleção', en: 'sequence of <Pill>; the parent manages selection' } },
            { token: 'wrapper', description: { pt: 'bg --bg + border --border + radius 10 — destaca grupo', en: '--bg background + --border + radius 10 — highlights the group' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
