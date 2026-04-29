import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'jest-axe';
import { Drawer } from './Drawer';

describe('<Drawer>', () => {
  it('renders nothing when closed', () => {
    render(<Drawer open={false} onClose={() => {}} title="X">body</Drawer>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders dialog with title', () => {
    render(<Drawer open onClose={() => {}} title="Detalhes">body</Drawer>);
    expect(screen.getByRole('dialog', { name: 'Detalhes' })).toBeInTheDocument();
  });

  it('Esc closes', async () => {
    const onClose = vi.fn();
    render(<Drawer open onClose={onClose} title="X">body</Drawer>);
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });

  it('a11y', async () => {
    const { container } = render(<Drawer open onClose={() => {}} title="X">body</Drawer>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
