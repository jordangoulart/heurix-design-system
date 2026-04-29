import { Toast } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function ToastPage() {
  const t = useT();
  return (
    <ComponentSection
      id="toast"
      eyebrow="04 · Organisms"
      title="Toast"
      blurb={{
        pt: 'Confirma ação ou alerta. Tom default ou error com aria-live apropriado. Ícone inline sinaliza tom (check para sucesso, alert circle para erro).',
        en: 'Confirms an action or alerts. Default or error tone with appropriate aria-live. Inline icon signals tone (check for success, alert circle for error).',
      }}
    >
      <Tier name="Tones" desc="default (status) · error (alert)">
        <Preview label="default · role=status · aria-live=polite">
          <Toast message={t({ pt: 'Avaliação salva', en: 'Evaluation saved' })} />
        </Preview>
        <Preview label="error · role=alert · aria-live=assertive">
          <Toast tone="error" message={t({ pt: 'Falha ao salvar avaliação', en: 'Failed to save evaluation' })} />
        </Preview>
      </Tier>

      <Tier name="Variations" desc={{ pt: 'custom icon · sem icon', en: 'custom icon · no icon' }}>
        <Preview label={{ pt: 'sem ícone', en: 'no icon' }}>
          <Toast icon={null} message={t({ pt: 'Mensagem simples', en: 'Simple message' })} />
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Toast message="Saved" />
<Toast tone="error" message="Could not save" />
<Toast icon={<CustomIcon />} message="Custom" />`}
        />
        <Anatomy
          entries={[
            { token: 'tone', description: { pt: 'default | error · controla cor + role', en: 'default | error · controls color + role' } },
            { token: 'message', description: { pt: 'string · prop principal', en: 'string · main prop' } },
            { token: 'icon', description: { pt: 'override · default check (status) ou alert (error)', en: 'override · default check (status) or alert (error)' } },
            { token: 'role', description: 'status | alert (error) · auto-detected' },
            { token: 'aria-live', description: 'polite | assertive (error)' },
            { token: 'box-shadow', description: { pt: '--shadow-float · separa visualmente do conteúdo', en: '--shadow-float · separates visually from content' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
