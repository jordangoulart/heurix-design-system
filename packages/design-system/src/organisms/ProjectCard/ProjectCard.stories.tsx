import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';
import { CountBadge } from '../../atoms/CountBadge';

const meta: Meta<typeof ProjectCard> = {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
};
export default meta;

export const Default: StoryObj<typeof ProjectCard> = {
  args: {
    url: 'heurix.dev/onboarding',
    title: 'Avaliação Q2 — fluxo de onboarding completo',
    meta: '2026-04-22 · 14 sugestões',
    trailing: <CountBadge value={14} />,
  },
};
