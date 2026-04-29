import { Eyebrow } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';

export function Eyebrows() {
  return (
    <ComponentSection
      id="eyebrow"
      eyebrow="02 · Atoms"
      title="Eyebrow"
      blurb={{
        pt: 'Rótulo monoespaçado em caixa-alta. Identifica a categoria/seção sem ocupar espaço de heading — aparece acima de títulos, em metadata, em status indicators.',
        en: 'Mono uppercase label. Identifies the category/section without taking heading space — appears above titles, in metadata, in status indicators.',
      }}
    >
      <Tier name="Variants" desc={{ pt: 'numérico · taxonômico · status', en: 'numeric · taxonomic · status' }}>
        <Preview label={{ pt: 'numérico · enumera seções', en: 'numeric · enumerates sections' }}>
          <Eyebrow>01 · Foundations</Eyebrow>
          <Eyebrow>02 · Atoms</Eyebrow>
          <Eyebrow>03 · Molecules</Eyebrow>
        </Preview>
        <Preview label={{ pt: 'taxonômico · classifica conteúdo', en: 'taxonomic · classifies content' }}>
          <Eyebrow>foundations</Eyebrow>
          <Eyebrow>changelog</Eyebrow>
          <Eyebrow>reference</Eyebrow>
        </Preview>
        <Preview label={{ pt: 'status · com versão', en: 'status · with version' }}>
          <Eyebrow>v1.0 · live</Eyebrow>
          <Eyebrow>v0.9 · beta</Eyebrow>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'acima de heading', en: 'above a heading' }}>
        <Preview>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Eyebrow>02 · Atoms</Eyebrow>
            <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
              Button
            </h2>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<Eyebrow>01 · Foundations</Eyebrow>`} />
        <Anatomy
          entries={[
            { token: 'font', description: 'Chivo Mono, 10px, uppercase' },
            { token: 'letter-spacing', description: { pt: '0.12em — abre o texto pra parecer modular', en: '0.12em — opens up the text to feel modular' } },
            { token: 'color', description: { pt: '--muted (default) — não compete com heading', en: '--muted (default) — doesn’t compete with heading' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
