import type { Meta, StoryObj } from '@storybook/react';
import { EvalRow } from './EvalRow';
import { ConfidenceChip } from '../../atoms/Chip';

const meta: Meta<typeof EvalRow> = { title: 'Organisms/EvalRow', component: EvalRow };
export default meta;

export const List: StoryObj<typeof EvalRow> = {
  render: () => (
    <div style={{ width: 640, border: '1px solid var(--border)', borderRadius: 10, background: 'var(--surface)', overflow: 'hidden' }}>
      <EvalRow url="heurix.dev/onboarding" title="Fluxo de criação de conta" status={<ConfidenceChip level="high" label="94%" />} score="74" />
      <EvalRow url="heurix.dev/dashboard" title="Painel principal" status={<ConfidenceChip level="medium" label="72%" />} score="58" />
      <EvalRow url="heurix.dev/billing" title="Tela de pagamento" status={<ConfidenceChip level="low" label="48%" />} score="41" />
    </div>
  ),
};
