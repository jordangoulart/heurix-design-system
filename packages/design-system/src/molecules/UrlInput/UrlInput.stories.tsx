import type { Meta, StoryObj } from '@storybook/react';
import { UrlInput } from './UrlInput';

const meta: Meta<typeof UrlInput> = {
  title: 'Molecules/UrlInput',
  component: UrlInput,
  args: { label: 'URL avaliada' },
};
export default meta;
type S = StoryObj<typeof UrlInput>;
export const Default: S = {};
export const Errored: S = { args: { error: 'URL inválida' } };
export const HttpPrefix: S = { args: { prefix: 'http://', placeholder: 'localhost:3000' } };
