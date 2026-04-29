import { forwardRef, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Drawer.module.css';

export interface DrawerProps extends Omit<ComponentPropsWithoutRef<'aside'>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
}

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ open, onClose, title, footer, className, children, ...rest }, ref) => {
    const panelRef = useRef<HTMLElement>(null);
    const titleId = useId();

    useEffect(() => {
      if (!open) return undefined;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', onKey);
      const previous = document.activeElement as HTMLElement | null;
      panelRef.current?.focus();
      return () => {
        document.removeEventListener('keydown', onKey);
        previous?.focus?.();
      };
    }, [open, onClose]);

    if (!open || typeof document === 'undefined') return null;

    return createPortal(
      <>
        <div className={s.backdrop} onClick={onClose} aria-hidden="true" />
        <aside
          ref={(node) => {
            (panelRef as React.MutableRefObject<HTMLElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          tabIndex={-1}
          className={cx(s.panel, className)}
          {...rest}
        >
          {title && (
            <header className={s.head}>
              <h2 id={titleId} className={s.title}>
                {title}
              </h2>
              <button type="button" className={s.close} onClick={onClose} aria-label="Fechar">
                <CloseIcon />
              </button>
            </header>
          )}
          <div className={s.body}>{children}</div>
          {footer && <footer className={s.foot}>{footer}</footer>}
        </aside>
      </>,
      document.body,
    );
  },
);
Drawer.displayName = 'Drawer';
