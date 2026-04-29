import { SuggestionRunHeader, CountBadge, AIBadge } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function SuggestionRunHeaderPage() {
  const t = useT();
  return (
    <ComponentSection
      id="sg-run"
      eyebrow="04 · Organisms"
      title="Suggestion run header"
      blurb={{
        pt: 'Cabeçalho de uma execução de sugestões. Identifica a sessão (run = um trigger de IA) e mostra contagem. Glow radial sutil sinaliza origem AI.',
        en: 'Header for a suggestion run. Identifies the session (a run = one AI trigger) and shows the count. Subtle radial glow signals AI origin.',
      }}
    >
      <Tier name="Default" desc="title · meta · trailing">
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionRunHeader
              title={t({ pt: 'Run Q2 — onboarding completo', en: 'Q2 Run — full onboarding' })}
              meta="2026-04-22 · 14:33"
              trailing={
                <>
                  <AIBadge>AI</AIBadge>
                  <CountBadge value={14} withDot />
                </>
              }
            />
          </div>
        </Preview>
      </Tier>

      <Tier name="Variations" desc={{ pt: 'sem meta · com count maior', en: 'no meta · with larger count' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <SuggestionRunHeader
              title={t({ pt: 'Última análise', en: 'Latest analysis' })}
              trailing={<CountBadge value={42} />}
            />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<SuggestionRunHeader
  title="${t({ pt: 'Run Q2', en: 'Q2 Run' })}"
  meta="2026-04-22 · 14:33"
  trailing={<CountBadge value={14} />}
/>`}
        />
        <Anatomy
          entries={[
            { token: 'title', description: { pt: '13px / weight 500 · principal', en: '13px / weight 500 · main' } },
            { token: 'meta', description: { pt: 'mono small uppercase · timestamp típico', en: 'small mono uppercase · typically a timestamp' } },
            { token: 'trailing', description: { pt: 'slot · AIBadge + CountBadge típico', en: 'slot · typically AIBadge + CountBadge' } },
            { token: '::before', description: { pt: 'glow radial accent · marca origem AI', en: 'accent radial glow · marks AI origin' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
