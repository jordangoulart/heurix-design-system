import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PillGroup } from './PillGroup';
import { Pill } from '../../atoms/Pill';

const meta: Meta<typeof PillGroup> = {
  title: 'Molecules/PillGroup',
  component: PillGroup,
};
export default meta;

export const Default: StoryObj<typeof PillGroup> = {
  render: () => {
    const Story = () => {
      const [active, setActive] = useState(2);
      const values = [-2, -1, 0, +1, +2];
      return (
        <PillGroup label="Score heuristic">
          {values.map((v, i) => (
            <Pill key={v} active={i === active} onClick={() => setActive(i)}>
              {v > 0 ? `+${v}` : `${v}`}
            </Pill>
          ))}
        </PillGroup>
      );
    };
    return <Story />;
  },
};
