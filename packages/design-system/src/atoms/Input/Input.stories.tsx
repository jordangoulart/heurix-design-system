import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = { title: 'Atoms/Input', component: Input };
export default meta;
type S = StoryObj<typeof Input>;
export const Default: S = { args: { label: 'URL', placeholder: 'https://…' } };
export const WithHint: S = { args: { label: 'Slug', hint: 'lowercase, sem espaços' } };
export const Errored: S = { args: { label: 'Email', error: 'Email obrigatório' } };
