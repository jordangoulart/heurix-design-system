import { Numeral } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';

export function Numerals() {
  return (
    <ComponentSection
      id="numeral"
      eyebrow="02 · Atoms"
      title="Numeral"
      blurb={{
        pt: 'Número grande, tabular. Usado para totais, scores agregados, tier numbers — qualquer momento em que o número precisa ser lido como manchete, não como texto inline.',
        en: 'Large tabular number. Used for totals, aggregated scores, tier numbers — any time the number must be read as a headline, not inline text.',
      }}
    >
      <Tier name="Sizes" desc={{ pt: 'lg / xl / xxl · escala vertical', en: 'lg / xl / xxl · vertical scale' }}>
        <Preview>
          <Numeral size="lg">36</Numeral>
          <Numeral size="xl">48</Numeral>
          <Numeral size="xxl">74</Numeral>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'score / 10 · com unidade mono', en: 'score / 10 · with mono unit' }}>
        <Preview>
          <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
            <Numeral size="xl">7.4</Numeral>
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: 14,
                color: 'var(--subtle)',
              }}
            >
              / 10
            </span>
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Numeral size="xxl">74</Numeral>
<Numeral size="lg">7.4</Numeral>`}
        />
        <Anatomy
          entries={[
            { token: 'size', description: 'lg (36) · xl (48) · xxl (64) — fixed scale' },
            { token: 'font', description: 'Chivo Mono, weight 500, tabular-nums' },
            { token: 'letter-spacing', description: { pt: '-0.03em — aperta dígitos para ler como manchete', en: '-0.03em — tightens digits to read as a headline' } },
            { token: 'line-height', description: { pt: '0.9 — máxima compressão vertical', en: '0.9 — maximum vertical compression' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
