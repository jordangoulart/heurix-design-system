import { useState } from 'react';
import { Pill } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';

export function Pills() {
  const [active, setActive] = useState(2);
  const values = [-2, -1, 0, +1, +2] as const;
  return (
    <ComponentSection
      id="pill"
      eyebrow="02 · Atoms"
      title="Pill"
      blurb={{
        pt: 'Ponto de contato onde o avaliador grava sua leitura. Clicar dispara um pulso curto — o sistema confirma sem palavras. Compõe-se em PillGroup para seleção exclusiva.',
        en: 'Touch point where the evaluator records their reading. Clicking triggers a short pulse — the system confirms without words. Composes into PillGroup for exclusive selection.',
      }}
    >
      <Tier name="States" desc="idle · active · ai-suggested">
        <Preview label="idle">
          <Pill>+1</Pill>
        </Preview>
        <Preview label="active">
          <Pill active>+1</Pill>
        </Preview>
        <Preview label={{ pt: 'ai-suggested · com dot lime', en: 'ai-suggested · with lime dot' }}>
          <Pill aiSuggested>+1</Pill>
        </Preview>
      </Tier>

      <Tier
        name={{ pt: 'Em grupo', en: 'In a group' }}
        desc={{ pt: 'seleção exclusiva · Likert -2…+2', en: 'exclusive selection · Likert -2…+2' }}
      >
        <Preview>
          <div
            style={{
              display: 'inline-flex',
              padding: 3,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 10,
            }}
          >
            {values.map((v, i) => (
              <Pill key={v} active={i === active} aiSuggested={v === +1} onClick={() => setActive(i)}>
                {v > 0 ? `+${v}` : `${v}`}
              </Pill>
            ))}
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<Pill active aiSuggested>+1</Pill>`} />
        <Anatomy
          entries={[
            { token: 'active', description: 'aria-pressed=true; bg --raised + border inset' },
            { token: 'aiSuggested', description: { pt: 'dot lime 6×6 no canto superior-direito (-3px)', en: 'lime 6×6 dot at the top-right corner (-3px)' } },
            { token: 'pulseOnClick', description: { pt: 'animação "commit" 340ms ao clicar (default true)', en: '"commit" animation 340ms on click (default true)' } },
            { token: ':active', description: { pt: 'transform scale(0.94) por 80ms', en: 'transform scale(0.94) for 80ms' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
