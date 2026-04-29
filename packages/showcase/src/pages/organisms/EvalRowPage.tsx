import { EvalRow, ConfidenceChip } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function EvalRowPage() {
  const t = useT();
  const t1 = t({ pt: 'Fluxo de criação de conta', en: 'Account creation flow' });
  const t2 = t({ pt: 'Painel principal', en: 'Main dashboard' });
  const t3 = t({ pt: 'Tela de pagamento', en: 'Billing screen' });
  return (
    <ComponentSection
      id="eval-row"
      eyebrow="04 · Organisms"
      title={{ pt: 'Linha de avaliação', en: 'Evaluation row' }}
      blurb={{
        pt: 'Linha de lista. Hover suave destaca; click abre detalhes. Score em mono tabular alinhado à direita — leitura como tabela financeira.',
        en: 'List row. Soft hover highlights; click opens details. Score in tabular mono aligned right — reads like a financial table.',
      }}
    >
      <Tier name="Default" desc={{ pt: 'linha única', en: 'single row' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 640, border: '1px solid var(--border)', borderRadius: 10, background: 'var(--surface)', overflow: 'hidden' }}>
            <EvalRow url="heurix.dev/onboarding" title={t1} status={<ConfidenceChip level="high" label="94%" />} score="74" />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em lista', en: 'In a list' }} desc={{ pt: 'múltiplas linhas · hairlines internas', en: 'multiple rows · internal hairlines' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 640, border: '1px solid var(--border)', borderRadius: 10, background: 'var(--surface)', overflow: 'hidden' }}>
            <EvalRow url="heurix.dev/onboarding" title={t1} status={<ConfidenceChip level="high" label="94%" />} score="74" />
            <EvalRow url="heurix.dev/dashboard" title={t2} status={<ConfidenceChip level="medium" label="72%" />} score="58" />
            <EvalRow url="heurix.dev/billing" title={t3} status={<ConfidenceChip level="low" label="48%" />} score="41" />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<EvalRow
  url="heurix.dev/onboarding"
  title="${t1}"
  status={<ConfidenceChip level="high" label="94%" />}
  score="74"
/>`}
        />
        <Anatomy
          entries={[
            { token: 'url', description: { pt: 'mono small · pista contextual', en: 'small mono · contextual hint' } },
            { token: 'title', description: { pt: '13px / weight 500 · trunca em 1 linha', en: '13px / weight 500 · truncates to 1 line' } },
            { token: 'status', description: { pt: 'slot · ConfidenceChip típico', en: 'slot · typically ConfidenceChip' } },
            { token: 'score', description: { pt: 'mono tabular 14px · alinhado direita', en: 'tabular mono 14px · right-aligned' } },
            { token: 'trailing', description: { pt: 'slot extra · ações ou indicadores', en: 'extra slot · actions or indicators' } },
            { token: ':hover', description: { pt: 'bg --hover · transition 140ms', en: '--hover bg · 140ms transition' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
