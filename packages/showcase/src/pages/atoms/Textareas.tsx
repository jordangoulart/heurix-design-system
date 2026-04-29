import { Textarea } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function Textareas() {
  const t = useT();
  const notes = t({ pt: 'Notas', en: 'Notes' });
  const placeholder = t({ pt: 'Anote evidências, contraexemplos…', en: 'Note evidence, counterexamples…' });
  return (
    <ComponentSection
      id="textarea"
      eyebrow="02 · Atoms"
      title="Textarea"
      blurb={{
        pt: 'Notas livres. Mais discreto visualmente que Input — fundo --bg em vez de --raised, fonte 12px — porque notas são contexto, não dado primário.',
        en: 'Free-form notes. Visually quieter than Input — --bg background instead of --raised, 12px font — because notes are context, not primary data.',
      }}
    >
      <Tier name="Variants" desc={{ pt: 'default · com placeholder', en: 'default · with placeholder' }}>
        <Preview label={{ pt: 'vazio', en: 'empty' }}>
          <div style={{ width: 360 }}>
            <Textarea label={notes} placeholder={placeholder} />
          </div>
        </Preview>
        <Preview label={{ pt: 'preenchido', en: 'filled' }}>
          <div style={{ width: 360 }}>
            <Textarea
              label={notes}
              defaultValue={t({
                pt: "Hero CTA compete com 2 secundários acima da dobra. Mover 'Saiba mais' para baixo da fold pode reduzir conflito.",
                en: "Hero CTA competes with 2 secondaries above the fold. Moving 'Learn more' below the fold could reduce conflict.",
              })}
            />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Textarea
  label="${notes}"
  placeholder="${placeholder}"
  autoResize
/>`}
        />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'mono caixa-alta, htmlFor wired automaticamente', en: 'mono uppercase, htmlFor wired automatically' } },
            { token: 'background', description: { pt: '--bg (mais escuro que Input) — sinaliza contexto secundário', en: '--bg (darker than Input) — signals secondary context' } },
            { token: 'fontSize', description: { pt: '12px — propositalmente menor que Input', en: '12px — intentionally smaller than Input' } },
            { token: ':focus', description: { pt: 'border --border-strong (sem accent) — não compete com primary', en: '--border-strong (no accent) — doesn’t compete with primary' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
