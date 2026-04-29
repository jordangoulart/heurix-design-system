import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Modal> = { title: 'Organisms/Modal', component: Modal };
export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: () => {
    const Story = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="primary" onClick={() => setOpen(true)}>
            Abrir modal
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Apagar avaliação?"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={() => setOpen(false)}>
                  Apagar
                </Button>
              </>
            }
          >
            Esta ação não pode ser desfeita.
          </Modal>
        </>
      );
    };
    return <Story />;
  },
};
