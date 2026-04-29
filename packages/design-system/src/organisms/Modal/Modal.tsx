import { forwardRef, useCallback, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import s from './Modal.module.css';

export interface ModalProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
}

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

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

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      footer,
      closeOnOverlay = true,
      closeOnEsc = true,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleId = useId();

    const handleKey = useCallback(
      (e: KeyboardEvent) => {
        if (!open) return;
        if (e.key === 'Escape' && closeOnEsc) {
          e.preventDefault();
          onClose();
        }
        if (e.key === 'Tab' && dialogRef.current) {
          const focusables = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (!first || !last) return;
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      },
      [open, onClose, closeOnEsc],
    );

    useEffect(() => {
      if (!open) return undefined;
      const previousActive = document.activeElement as HTMLElement | null;
      const node = dialogRef.current;
      const focusables = node?.querySelectorAll<HTMLElement>(FOCUSABLE);
      focusables?.[0]?.focus();
      document.addEventListener('keydown', handleKey);
      return () => {
        document.removeEventListener('keydown', handleKey);
        previousActive?.focus?.();
      };
    }, [open, handleKey]);

    if (!open || typeof document === 'undefined') return null;

    return createPortal(
      <div
        className={s.backdrop}
        onMouseDown={(e) => {
          if (closeOnOverlay && e.target === e.currentTarget) onClose();
        }}
      >
        <div
          ref={(node) => {
            (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          className={cx(s.dialog, className)}
          {...rest}
        >
          {title && (
            <header className={s.head}>
              <h2 id={titleId} className={s.title}>
                {title}
              </h2>
              <button
                type="button"
                className={s.close}
                onClick={onClose}
                aria-label="Fechar"
              >
                <CloseIcon />
              </button>
            </header>
          )}
          <div className={s.body}>{children}</div>
          {footer && <footer className={s.foot}>{footer}</footer>}
        </div>
      </div>,
      document.body,
    );
  },
);
Modal.displayName = 'Modal';
