import { IconButton } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

const Heart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
  </svg>
);
const Trash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
  </svg>
);
const Close = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export function IconButtons() {
  const t = useT();
  const fav = t({ pt: 'Favoritar', en: 'Favorite' });
  const del = t({ pt: 'Excluir', en: 'Delete' });
  const close = t({ pt: 'Fechar', en: 'Close' });
  return (
    <ComponentSection
      id="icon-button"
      eyebrow="02 · Atoms"
      title={{ pt: 'Icon button', en: 'Icon button' }}
      blurb={{
        pt: 'Ação compacta sem label visível. aria-label é obrigatório por contrato — TypeScript reclama em compile time se você esquecer.',
        en: 'Compact action without a visible label. aria-label is mandatory by contract — TypeScript complains at compile time if you forget.',
      }}
    >
      <Tier name="Tones" desc="neutral (default) · danger">
        <Preview label="neutral">
          <IconButton aria-label={fav}><Heart /></IconButton>
        </Preview>
        <Preview label="danger">
          <IconButton tone="danger" aria-label={del}><Trash /></IconButton>
        </Preview>
      </Tier>

      <Tier name="Sizes" desc="32 / 40 / 48px · default md">
        <Preview>
          <IconButton size="sm" aria-label={close}><Close /></IconButton>
          <IconButton size="md" aria-label={close}><Close /></IconButton>
          <IconButton size="lg" aria-label={close}><Close /></IconButton>
        </Preview>
      </Tier>

      <Tier name="States" desc="default · disabled">
        <Preview>
          <IconButton aria-label="x"><Heart /></IconButton>
          <IconButton aria-label="x" disabled><Heart /></IconButton>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<IconButton aria-label="${fav}">
  <Heart />
</IconButton>`} />
        <Anatomy
          entries={[
            { token: 'aria-label', description: { pt: 'OBRIGATÓRIO. Tipado como string em compile time.', en: 'REQUIRED. Typed as a string at compile time.' } },
            { token: 'size', description: 'sm (32px) · md (40px, default) · lg (48px)' },
            { token: 'tone', description: { pt: 'neutral | danger — danger só em hover', en: 'neutral | danger — danger only on hover' } },
            { token: ':hover', description: { pt: 'color → --fg, bg → --hover (neutral); danger fica vermelho', en: 'color → --fg, bg → --hover (neutral); danger turns red' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
