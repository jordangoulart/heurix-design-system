import type { Meta, StoryObj } from '@storybook/react';
import { ConfidenceChip, SuggestionChip } from './Chip';

const meta: Meta = { title: 'Atoms/Chip' };
export default meta;

export const Confidence: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <ConfidenceChip level="low" label="48%" />
      <ConfidenceChip level="medium" label="72%" />
      <ConfidenceChip level="high" label="94%" />
    </div>
  ),
};

export const Suggestion: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <SuggestionChip priority="high">P1</SuggestionChip>
      <SuggestionChip priority="medium">P2</SuggestionChip>
      <SuggestionChip priority="low">P3</SuggestionChip>
      <SuggestionChip priority="heuristic">Visibilidade</SuggestionChip>
    </div>
  ),
};
