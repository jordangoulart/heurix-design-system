import type { Meta, StoryObj } from '@storybook/react';
import { SuggestionRunHeader } from './SuggestionRunHeader';
import { CountBadge } from '../../atoms/CountBadge';
import { AIBadge } from '../../atoms/AIBadge';

const meta: Meta<typeof SuggestionRunHeader> = {
  title: 'Organisms/SuggestionRunHeader',
  component: SuggestionRunHeader,
};
export default meta;

export const Default: StoryObj<typeof SuggestionRunHeader> = {
  render: () => (
    <div style={{ width: 480 }}>
      <SuggestionRunHeader
        title="Run Q2 — onboarding completo"
        meta="2026-04-22 · 14:33"
        trailing={
          <>
            <AIBadge>AI</AIBadge>
            <CountBadge value={14} withDot />
          </>
        }
      />
    </div>
  ),
};
