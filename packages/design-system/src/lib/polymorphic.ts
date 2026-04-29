import type { ComponentPropsWithRef, ElementType, ReactElement } from 'react';

export type AsProp<C extends ElementType> = { as?: C };

export type PolymorphicProps<C extends ElementType, P = unknown> = AsProp<C> &
  P &
  Omit<ComponentPropsWithRef<C>, keyof (AsProp<C> & P)>;

export type PolymorphicComponent<DefaultC extends ElementType, P = unknown> = <
  C extends ElementType = DefaultC,
>(
  props: PolymorphicProps<C, P>,
) => ReactElement | null;
