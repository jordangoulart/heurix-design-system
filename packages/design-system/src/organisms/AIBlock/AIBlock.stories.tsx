import type { Meta, StoryObj } from '@storybook/react';
import { AIBlock } from './AIBlock';
import { ConfidenceChip } from '../../atoms/Chip';

const meta: Meta<typeof AIBlock> = { title: 'Organisms/AIBlock', component: AIBlock };
export default meta;

export const Default: StoryObj<typeof AIBlock> = {
  render: () => (
    <div style={{ width: 480 }}>
      <AIBlock title="Síntese da página" meta={<ConfidenceChip level="high" label="94%" />}>
        A página de onboarding apresenta forte hierarquia visual e copy direta. O CTA principal compete com 2 secundários — recomenda-se reduzir.
      </AIBlock>
    </div>
  ),
};
