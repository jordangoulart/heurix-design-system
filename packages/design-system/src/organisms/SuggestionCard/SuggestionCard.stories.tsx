import type { Meta, StoryObj } from '@storybook/react';
import { SuggestionCard } from './SuggestionCard';
import { SuggestionChip } from '../../atoms/Chip';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof SuggestionCard> = {
  title: 'Organisms/SuggestionCard',
  component: SuggestionCard,
};
export default meta;

export const Default: StoryObj<typeof SuggestionCard> = {
  render: () => (
    <div style={{ width: 480 }}>
      <SuggestionCard
        title="Reduzir CTAs concorrentes na seção hero"
        chips={
          <>
            <SuggestionChip priority="high">P1</SuggestionChip>
            <SuggestionChip priority="heuristic">Visibilidade</SuggestionChip>
          </>
        }
        footer={
          <>
            <span style={{ fontFamily: "'Chivo Mono', monospace", fontSize: 10, color: 'var(--muted)' }}>
              esforço · S
            </span>
            <Button size="sm" variant="primary">
              Aplicar
            </Button>
          </>
        }
      >
        Existem 3 CTAs visíveis acima da dobra. Manter apenas o primário aumenta a probabilidade de conversão.
      </SuggestionCard>
    </div>
  ),
};
