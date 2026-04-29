import type { Meta, StoryObj } from '@storybook/react';
import { Numeral } from './Numeral';

const meta: Meta<typeof Numeral> = {
  title: 'Atoms/Numeral',
  component: Numeral,
  args: { children: '74' },
};
export default meta;
export const Default: StoryObj<typeof Numeral> = {};
export const Sizes: StoryObj<typeof Numeral> = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
      <Numeral size="lg">36</Numeral>
      <Numeral size="xl">48</Numeral>
      <Numeral size="xxl">64</Numeral>
    </div>
  ),
};
