import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from 'react';
import { cx } from '../../lib/cx';
import s from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
};

type ButtonOwnProps<C extends ElementType> = CommonProps & { as?: C };

export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps<C>>;

const SPINNER_SIZE: Record<ButtonSize, number> = { sm: 12, md: 14, lg: 16 };

function ButtonSpinner({ size }: { size: ButtonSize }) {
  const dim = SPINNER_SIZE[size];
  return (
    <span className={s.spinner} style={{ width: dim, height: dim }} aria-hidden="true" />
  );
}

function ButtonInner<C extends ElementType = 'button'>(
  {
    as,
    variant = 'secondary',
    size = 'md',
    loading = false,
    className,
    children,
    ...rest
  }: ButtonProps<C>,
  ref: Ref<Element>,
) {
  const Comp = (as ?? 'button') as ElementType;
  const isButton = Comp === 'button';
  const restWithType = rest as { type?: 'button' | 'submit' | 'reset' };
  return (
    <Comp
      ref={ref}
      {...(isButton ? { type: restWithType.type ?? 'button' } : {})}
      className={cx(s.root, s[size], s[variant], loading && s.loading, className)}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <ButtonSpinner size={size} />}
      {children}
    </Comp>
  );
}

export const Button = forwardRef(ButtonInner) as <C extends ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: Ref<Element> },
) => React.ReactElement | null;
