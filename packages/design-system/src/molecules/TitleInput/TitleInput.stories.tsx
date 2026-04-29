import type { Meta, StoryObj } from '@storybook/react';
import { TitleInput } from './TitleInput';

const meta: Meta<typeof TitleInput> = {
  title: 'Molecules/TitleInput',
  component: TitleInput,
  args: { ariaLabel: 'Título', defaultValue: 'Avaliação Q2 — Onboarding' },
};
export default meta;
export const Default: StoryObj<typeof TitleInput> = {};
export const Empty: StoryObj<typeof TitleInput> = {
  args: { defaultValue: '', placeholder: 'Sem título' },
};
