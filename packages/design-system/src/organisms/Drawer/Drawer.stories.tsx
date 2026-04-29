import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Drawer> = { title: 'Organisms/Drawer', component: Drawer };
export default meta;

export const Default: StoryObj<typeof Drawer> = {
  render: () => {
    const Story = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="primary" onClick={() => setOpen(true)}>
            Abrir drawer
          </Button>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            title="Detalhes da avaliação"
            footer={
              <Button variant="primary" onClick={() => setOpen(false)}>
                Fechar
              </Button>
            }
          >
            <p>Conteúdo do drawer.</p>
            <p style={{ marginTop: 12 }}>Listas, formulários e detalhes complexos vivem aqui.</p>
          </Drawer>
        </>
      );
    };
    return <Story />;
  },
};
