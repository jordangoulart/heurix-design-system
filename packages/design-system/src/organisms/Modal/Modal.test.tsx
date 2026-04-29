import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'jest-axe';
import { Modal } from './Modal';

describe('<Modal>', () => {
  it('renders nothing when closed', () => {
    render(<Modal open={false} onClose={() => {}} title="X">body</Modal>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders with dialog role and labelled by title', () => {
    render(<Modal open onClose={() => {}} title="Confirmar">body</Modal>);
    expect(screen.getByRole('dialog', { name: 'Confirmar' })).toBeInTheDocument();
  });

  it('Esc fires onClose', async () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose} title="X">body</Modal>);
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });

  it('clicking close button fires onClose', async () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose} title="X">body</Modal>);
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onClose).toHaveBeenCalled();
  });

  it('a11y', async () => {
    const { container } = render(<Modal open onClose={() => {}} title="X">body</Modal>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
