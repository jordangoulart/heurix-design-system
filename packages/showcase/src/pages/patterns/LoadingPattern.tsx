import { Spinner, ScanBar, EmptyState, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function LoadingPattern() {
  const t = useT();
  return (
    <ComponentSection
      id="pattern-loading"
      eyebrow="05 · Patterns"
      title={{ pt: 'Loading & assíncrono', en: 'Loading & async' }}
      blurb={{
        pt: 'Três níveis de feedback de espera. A escolha vem da duração esperada e da visibilidade que o estado precisa ter — espera curta é discreta, espera longa precisa ser visível.',
        en: 'Three levels of waiting feedback. The choice depends on expected duration and how visible the state must be — short waits are discreet, long waits must be visible.',
      }}
    >
      <Tier name="< 2s · Spinner" desc={{ pt: 'ação inline · botão loading · feedback discreto', en: 'inline action · loading button · discreet feedback' }}>
        <Preview>
          <Button variant="primary" loading>{t({ pt: 'Salvando…', en: 'Saving…' })}</Button>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', fontSize: 13 }}>
            <Spinner size="sm" /> {t({ pt: 'Buscando avaliações…', en: 'Fetching evaluations…' })}
          </span>
        </Preview>
      </Tier>

      <Tier name="2–10s · ScanBar" desc={{ pt: 'processo contínuo · varredura · 2px que não rouba foco', en: 'continuous process · sweep · 2px that doesn’t steal focus' }}>
        <Preview>
          <div style={{ width: 360 }}>
            <ScanBar label={t({ pt: 'Avaliando heurísticas…', en: 'Evaluating heuristics…' })} />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Falha · EmptyState', en: 'Failure · EmptyState' }} desc={{ pt: 'zerado por erro · sempre com saída acionável', en: 'cleared by error · always with an actionable exit' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 480 }}>
            <EmptyState
              title={t({ pt: 'Não conseguimos carregar', en: 'We couldn’t load' })}
              message={t({ pt: 'Verifique sua conexão e tente novamente.', en: 'Check your connection and try again.' })}
              actions={<Button variant="primary">{t({ pt: 'Tentar de novo', en: 'Try again' })}</Button>}
            />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Regra de decisão', en: 'Decision rule' }} desc={{ pt: 'decision tree por duração', en: 'decision tree by duration' }}>
        <CodeBlock
          lang="text"
          code={t({
            pt: `< 2s    → Spinner inline (Button loading | Spinner ao lado do texto)
2–10s   → ScanBar (no topo da seção que está atualizando)
> 10s   → ScanBar + mensagem de progresso ("avaliando 3 de 10…")
falha   → EmptyState com CTA de retry`,
            en: `< 2s    → Inline Spinner (Button loading | Spinner next to text)
2–10s   → ScanBar (at the top of the section being updated)
> 10s   → ScanBar + progress message ("evaluating 3 of 10…")
failure → EmptyState with retry CTA`,
          })}
        />
        <Anatomy
          entries={[
            { token: 'Spinner', description: 'inline · 12/14/20px · status role' },
            { token: 'ScanBar', description: { pt: 'fixa no topo · 2px · loop infinito', en: 'fixed at the top · 2px · infinite loop' } },
            { token: 'Button loading', description: { pt: 'spinner inline + cursor wait', en: 'inline spinner + wait cursor' } },
            { token: 'EmptyState', description: { pt: 'falha bloqueante · CTA de retry obrigatório', en: 'blocking failure · retry CTA required' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
