import type { Meta, StoryObj } from '@storybook/react';
import { AIBadge } from './AIBadge';

const meta: Meta<typeof AIBadge> = { title: 'Atoms/AIBadge', component: AIBadge };
export default meta;
export const Default: StoryObj<typeof AIBadge> = {};
export const Custom: StoryObj<typeof AIBadge> = { args: { children: 'AI · sugerido' } };
