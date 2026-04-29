import { Sentinel } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function SentinelPage() {
  const t = useT();
  return (
    <ComponentSection
      id="sentinel"
      eyebrow="03 · Molecules"
      title="List sentinel"
      blurb={{
        pt: 'Marca o fim de uma lista. Reduz a incerteza típica de listas paginadas — o usuário sabe que viu tudo, não que está esperando mais carregar.',
        en: 'Marks the end of a list. Reduces the typical uncertainty of paginated lists — the user knows they’ve seen everything, not that more is loading.',
      }}
    >
      <Tier name="Variants" desc="default · custom message">
        <Preview label="default">
          <div style={{ width: 360 }}>
            <Sentinel />
          </div>
        </Preview>
        <Preview label="custom">
          <div style={{ width: 360 }}>
            <Sentinel>{t({ pt: '— sem mais resultados —', en: '— no more results —' })}</Sentinel>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'abaixo de uma lista', en: 'below a list' }}>
        <Preview>
          <div style={{ width: 360, border: '1px solid var(--border)', borderRadius: 10, padding: 16 }}>
            <div
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: 11,
                color: 'var(--muted)',
                marginBottom: 8,
              }}
            >
              ITEM 1
            </div>
            <div
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontSize: 11,
                color: 'var(--muted)',
                marginBottom: 8,
              }}
            >
              ITEM 2
            </div>
            <Sentinel>{t({ pt: 'Fim · 2 avaliações', en: 'End · 2 evaluations' })}</Sentinel>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<Sentinel>${t({ pt: 'Fim da lista', en: 'End of list' })}</Sentinel>
<Sentinel>${t({ pt: '— sem mais resultados —', en: '— no more results —' })}</Sentinel>`} />
        <Anatomy
          entries={[
            { token: 'children', description: { pt: 'texto entre as duas hairlines (default "Fim da lista")', en: 'text between the two hairlines (default "End of list")' } },
            { token: 'layout', description: { pt: 'flex center · 2 hairlines (60px max) · texto mono uppercase', en: 'flex center · 2 hairlines (60px max) · mono uppercase text' } },
            { token: 'color', description: { pt: '--subtle · não compete com conteúdo da lista', en: '--subtle · doesn’t compete with the list content' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
