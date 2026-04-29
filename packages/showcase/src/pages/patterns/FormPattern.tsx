import { Input, UrlInput, Textarea, Button, TitleInput } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function FormPattern() {
  const t = useT();
  return (
    <ComponentSection
      id="pattern-form"
      eyebrow="05 · Patterns"
      title={{ pt: 'Formulários', en: 'Form patterns' }}
      blurb={{
        pt: 'Formulários no Heurix são quase sempre edição contextual, não cadastros. Preferimos inputs inline a modais; salvamento automático a botões \'Salvar\'.',
        en: 'Forms in Heurix are almost always contextual edits, not signups. We prefer inline inputs over modals; autosave over "Save" buttons.',
      }}
    >
      <Tier name={{ pt: 'Estrutura de campo', en: 'Field structure' }} desc={{ pt: 'label · hint · error', en: 'label · hint · error' }}>
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'sempre presente, monoespaçado caixa-alta', en: 'always present, mono uppercase' } },
            { token: 'hint', description: { pt: 'opcional, abaixo do input quando há regra ("lowercase, sem espaços")', en: 'optional, below the input when there is a rule ("lowercase, no spaces")' } },
            { token: 'error', description: { pt: 'substitui o hint, com role="alert"', en: 'replaces the hint, with role="alert"' } },
          ]}
        />
      </Tier>

      <Tier name={{ pt: 'Formulário típico', en: 'Typical form' }} desc={{ pt: 'criar avaliação · campos canônicos', en: 'create evaluation · canonical fields' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TitleInput
              ariaLabel={t({ pt: 'Título do projeto', en: 'Project title' })}
              defaultValue={t({ pt: 'Avaliação Q2 — onboarding', en: 'Q2 Evaluation — onboarding' })}
            />
            <UrlInput label={t({ pt: 'URL avaliada', en: 'Evaluated URL' })} defaultValue="heurix.dev/onboarding" />
            <Input label="Slug" hint={t({ pt: 'lowercase, sem espaços', en: 'lowercase, no spaces' })} />
            <Textarea label={t({ pt: 'Notas', en: 'Notes' })} placeholder={t({ pt: 'Anote evidências, contraexemplos…', en: 'Note evidence, counterexamples…' })} />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button variant="ghost">{t({ pt: 'Descartar', en: 'Discard' })}</Button>
              <Button variant="primary">{t({ pt: 'Criar avaliação', en: 'Create evaluation' })}</Button>
            </div>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Validação', en: 'Validation' }} desc={{ pt: 'quando · onde · como', en: 'when · where · how' }}>
        <CodeBlock
          lang="text"
          code={t({
            pt: `Validação inline (não no submit) → reduz friction
Erros mostram só após blur do campo → não acusa enquanto digita
Erro = vermelho + ícone + texto curto (3-5 palavras)
"Required" não é erro → use label "URL *" ou "obrigatório" em hint`,
            en: `Inline validation (not on submit) → reduces friction
Errors show only after field blur → don’t accuse while typing
Error = red + icon + short text (3-5 words)
"Required" isn’t an error → use label "URL *" or "required" in hint`,
          })}
        />
      </Tier>

      <Tier name={{ pt: 'Salvamento', en: 'Saving' }} desc={{ pt: 'autosave por padrão · explicit submit é exceção', en: 'autosave by default · explicit submit is the exception' }}>
        <CodeBlock
          lang="text"
          code={t({
            pt: `Edição contextual (TitleInput, score Pill)  → autosave + toast "Salvo"
Formulário de criação                       → botão Primary explícito
Configurações                               → autosave por campo + indicador "Salvo · há 2s"`,
            en: `Contextual edits (TitleInput, score Pill)  → autosave + "Saved" toast
Creation form                              → explicit Primary button
Settings                                   → per-field autosave + "Saved · 2s ago" indicator`,
          })}
        />
      </Tier>
    </ComponentSection>
  );
}
