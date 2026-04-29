import type { Meta, StoryObj } from '@storybook/react';
import { StatsTile, StatsGrid } from './StatsTile';

const meta: Meta = { title: 'Organisms/StatsTile' };
export default meta;

export const Single: StoryObj = {
  render: () => (
    <div style={{ width: 280 }}>
      <StatsTile label="Total" value="42" helper="Evaluations saved" />
    </div>
  ),
};

export const Grid: StoryObj = {
  render: () => (
    <div style={{ width: 720 }}>
      <StatsGrid cols={3}>
        <StatsTile label="Total" value="42" helper="Evaluations saved" />
        <StatsTile label="Average" value="7.4" unit="/ 10" helper="Across all fully scored reviews" />
        <StatsTile label="AI-assisted" value="18" helper="Used the URL analyzer" />
      </StatsGrid>
    </div>
  ),
};
