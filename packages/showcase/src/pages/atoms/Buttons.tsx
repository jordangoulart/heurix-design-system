import { Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function Buttons() {
  const t = useT();
  return (
    <ComponentSection
      id="button"
      eyebrow="02 · Atoms"
      title="Button"
      blurb={{
        pt: 'Ação. Use primary para a ação principal de cada superfície (no máximo uma); secondary para alternativas; ghost para ações terciárias inline; danger para operações destrutivas.',
        en: 'Action. Use primary for each surface’s main action (at most one); secondary for alternatives; ghost for inline tertiary actions; danger for destructive operations.',
      }}
    >
      <Tier name="Variants" desc={{ pt: '4 papéis · um por intenção', en: '4 roles · one per intent' }}>
        <Preview>
          <Button variant="primary">{t({ pt: 'Avaliar', en: 'Evaluate' })}</Button>
          <Button variant="secondary">{t({ pt: 'Cancelar', en: 'Cancel' })}</Button>
          <Button variant="ghost">{t({ pt: 'Saiba mais', en: 'Learn more' })}</Button>
          <Button variant="danger">{t({ pt: 'Apagar', en: 'Delete' })}</Button>
        </Preview>
      </Tier>

      <Tier name="Sizes" desc="32 / 40 / 48px · default md">
        <Preview>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </Preview>
      </Tier>

      <Tier name="States" desc="default · disabled · loading">
        <Preview label="primary">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>{t({ pt: 'Salvando…', en: 'Saving…' })}</Button>
        </Preview>
        <Preview label="secondary">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
        </Preview>
        <Preview label="danger">
          <Button variant="danger">Default</Button>
          <Button variant="danger" disabled>Disabled</Button>
          <Button variant="danger" loading>{t({ pt: 'Apagando…', en: 'Deleting…' })}</Button>
        </Preview>
        <Preview label="ghost">
          <Button variant="ghost">Default</Button>
          <Button variant="ghost" disabled>Disabled</Button>
          <Button variant="ghost" loading>Working</Button>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Button variant="primary" size="md">${t({ pt: 'Avaliar', en: 'Evaluate' })}</Button>
<Button variant="primary" loading>${t({ pt: 'Salvando…', en: 'Saving…' })}</Button>
<Button as="a" href="/x">Polymorphic</Button>`}
        />
        <Anatomy
          entries={[
            { token: 'variant', description: 'primary | secondary | ghost | danger' },
            { token: 'size', description: 'sm (32px) · md / default (40px) · lg (48px)' },
            {
              token: 'loading',
              description: { pt: 'spinner inline + cursor=wait + aria-busy=true', en: 'inline spinner + cursor=wait + aria-busy=true' },
            },
            {
              token: 'disabled',
              description: { pt: 'opacity 0.35 + cursor=not-allowed + sem hover', en: 'opacity 0.35 + cursor=not-allowed + no hover' },
            },
            {
              token: ':hover',
              description: { pt: 'ring 3px da accent (primary/danger), bg shift (secondary/ghost)', en: 'accent ring 3px (primary/danger), bg shift (secondary/ghost)' },
            },
            {
              token: ':active',
              description: { pt: 'transform scale(0.97) por 80ms — feedback tátil', en: 'transform scale(0.97) for 80ms — tactile feedback' },
            },
            {
              token: 'as',
              description: { pt: 'polimórfico — renderiza como <a> mantendo estilo', en: 'polymorphic — renders as <a> keeping the style' },
            },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
