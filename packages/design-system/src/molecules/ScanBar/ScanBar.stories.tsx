import type { Meta, StoryObj } from '@storybook/react';
import { ScanBar } from './ScanBar';

const meta: Meta<typeof ScanBar> = {
  title: 'Molecules/ScanBar',
  component: ScanBar,
};
export default meta;
export const Running: StoryObj<typeof ScanBar> = {
  render: () => (
    <div style={{ width: 240 }}>
      <ScanBar label="Avaliando…" />
    </div>
  ),
};
export const Paused: StoryObj<typeof ScanBar> = {
  render: () => (
    <div style={{ width: 240 }}>
      <ScanBar paused label="Aguardando" />
    </div>
  ),
};
