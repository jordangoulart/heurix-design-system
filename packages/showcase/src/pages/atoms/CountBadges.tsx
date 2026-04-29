import { CountBadge } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';

export function CountBadges() {
  return (
    <ComponentSection
      id="count-badge"
      eyebrow="02 · Atoms"
      title="Count badge"
      blurb={{
        pt: 'Contagem discreta. Usada em listas e cards para sinalizar volume sem ocupar layout — sugestões pendentes, itens não-lidos, total de evaluations.',
        en: 'Discreet count. Used in lists and cards to signal volume without taking layout space — pending suggestions, unread items, total evaluations.',
      }}
    >
      <Tier name="Variants" desc={{ pt: 'number-only · com dot indicador', en: 'number-only · with indicator dot' }}>
        <Preview label="number-only">
          <CountBadge value={3} />
          <CountBadge value={42} />
          <CountBadge value={128} />
        </Preview>
        <Preview label={{ pt: 'com dot · indica algo novo', en: 'with dot · indicates something new' }}>
          <CountBadge value={7} withDot />
          <CountBadge value={42} withDot />
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<CountBadge value={42} />
<CountBadge value={3} withDot />`}
        />
        <Anatomy
          entries={[
            { token: 'value', description: { pt: 'number — renderizado em mono tabular', en: 'number — rendered in tabular mono' } },
            { token: 'withDot', description: { pt: 'dot 4×4 antes do número — sinaliza "tem coisa nova"', en: '4×4 dot before the number — signals "something new"' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
