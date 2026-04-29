import { ScanBar } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function ScanBarPage() {
  const t = useT();
  const evaluating = t({ pt: 'Avaliando…', en: 'Evaluating…' });
  const waiting = t({ pt: 'Aguardando', en: 'Waiting' });
  const updating = t({ pt: 'Atualizando', en: 'Updating' });
  return (
    <ComponentSection
      id="scan-bar"
      eyebrow="03 · Molecules"
      title="Scan bar"
      blurb={{
        pt: 'Indica processamento contínuo (varredura de IA). 2px de altura — discreto, mas presente. Use quando o tempo de espera é > 2 segundos; abaixo disso, Spinner é melhor.',
        en: 'Indicates continuous processing (AI scan). 2px tall — discreet but present. Use when wait time is > 2 seconds; below that, Spinner is better.',
      }}
    >
      <Tier name="States" desc="running · paused">
        <Preview label={{ pt: 'running · loop infinito ease-in-out', en: 'running · infinite ease-in-out loop' }}>
          <div style={{ width: 360 }}>
            <ScanBar label={evaluating} />
          </div>
        </Preview>
        <Preview label={{ pt: 'paused · animação parada', en: 'paused · animation stopped' }}>
          <div style={{ width: 360 }}>
            <ScanBar paused label={waiting} />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em contexto', en: 'In context' }} desc={{ pt: 'topo de seção sendo atualizada', en: 'top of a section being updated' }}>
        <Preview>
          <div
            style={{
              width: 360,
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <ScanBar label={updating} />
            <div style={{ padding: '20px 16px' }}>
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {t({ pt: 'Sugestões', en: 'Suggestions' })}
              </span>
              <div style={{ marginTop: 8, fontSize: 13, color: 'var(--fg-2)' }}>
                {t({ pt: 'Buscando heurísticas relevantes…', en: 'Looking for relevant heuristics…' })}
              </div>
            </div>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock code={`<ScanBar label="${evaluating}" />`} />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'aria-label do role=progressbar', en: 'aria-label of role=progressbar' } },
            { token: 'paused', description: 'animation-play-state: paused · aria-busy=false' },
            { token: 'height', description: { pt: '2px · não compete com conteúdo', en: '2px · doesn’t compete with content' } },
            { token: 'animation', description: { pt: 'gradiente accent passando · 1.6s loop', en: 'accent gradient sweep · 1.6s loop' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
