import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof EmptyState> = { title: 'Organisms/EmptyState', component: EmptyState };
export default meta;

const Plus = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Default: StoryObj<typeof EmptyState> = {
  args: {
    icon: <Plus />,
    title: 'Nenhuma avaliação ainda',
    message: 'Crie sua primeira avaliação a partir de uma URL pública.',
    actions: <Button variant="primary">Nova avaliação</Button>,
  },
};
