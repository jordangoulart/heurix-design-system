import { EmptyState, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

const Plus = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const Search = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export function EmptyStatePage() {
  const t = useT();
  return (
    <ComponentSection
      id="empty"
      eyebrow="04 · Organisms"
      title={{ pt: 'Estado vazio', en: 'Empty state' }}
      blurb={{
        pt: 'Quando não há nada — explica por quê e dá uma saída acionável. Borda tracejada sinaliza ausência sem ser triste, ícone como ancoragem visual.',
        en: 'When there’s nothing — explain why and offer an actionable exit. Dashed border signals absence without being sad, icon as a visual anchor.',
      }}
    >
      <Tier name="Variations" desc={{ pt: 'primeira vez · sem resultados · falha', en: 'first time · no results · failure' }}>
        <Preview label={{ pt: 'primeira vez · com CTA', en: 'first time · with CTA' }}>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <EmptyState
              icon={<Plus />}
              title={t({ pt: 'Nenhuma avaliação ainda', en: 'No evaluations yet' })}
              message={t({ pt: 'Crie sua primeira avaliação a partir de uma URL pública.', en: 'Create your first evaluation from a public URL.' })}
              actions={<Button variant="primary">{t({ pt: 'Nova avaliação', en: 'New evaluation' })}</Button>}
            />
          </div>
        </Preview>
        <Preview label={{ pt: 'sem resultados de busca', en: 'no search results' }}>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <EmptyState
              icon={<Search />}
              title={t({ pt: 'Nada encontrado', en: 'Nothing found' })}
              message={t({ pt: 'Sua busca por "checkout" não retornou avaliações.', en: 'Your search for "checkout" returned no evaluations.' })}
              actions={<Button variant="ghost">{t({ pt: 'Limpar filtro', en: 'Clear filter' })}</Button>}
            />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<EmptyState
  icon={<PlusIcon />}
  title="${t({ pt: 'Nenhuma avaliação', en: 'No evaluations' })}"
  message="${t({ pt: 'Crie a primeira.', en: 'Create the first one.' })}"
  actions={<Button variant="primary">${t({ pt: 'Nova', en: 'New' })}</Button>}
/>`}
        />
        <Anatomy
          entries={[
            { token: 'icon', description: { pt: '40×40 chip raised + border · ancora visual', en: '40×40 raised chip + border · visual anchor' } },
            { token: 'title', description: '16px / weight 500 · main' },
            { token: 'message', description: { pt: '12px / muted / max-width 36ch · explica', en: '12px / muted / max-width 36ch · explains' } },
            { token: 'actions', description: { pt: 'slot · um Button primary é o típico', en: 'slot · typically one primary Button' } },
            { token: 'border', description: { pt: 'dashed · indica "ausência intencional"', en: 'dashed · signals "intentional absence"' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
