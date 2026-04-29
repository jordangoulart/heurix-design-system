import { useState } from 'react';
import { Modal, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function ModalPage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const t = useT();
  const cancel = t({ pt: 'Cancelar', en: 'Cancel' });
  return (
    <ComponentSection
      id="modal"
      eyebrow="04 · Organisms"
      title="Modal"
      blurb={{
        pt: 'Diálogo focado. Focus trap, fecha com Esc, restaura foco ao fechar. Use só quando a interação demanda foco isolado — confirmações destrutivas, formulários críticos.',
        en: 'Focused dialog. Focus trap, closes on Esc, restores focus on close. Only use when the interaction demands isolated focus — destructive confirmations, critical forms.',
      }}
    >
      <Tier name="Confirmation" desc={{ pt: 'ação destrutiva · footer com 2 buttons', en: 'destructive action · footer with 2 buttons' }}>
        <Preview>
          <Button variant="danger" onClick={() => setConfirmOpen(true)}>
            {t({ pt: 'Apagar avaliação', en: 'Delete evaluation' })}
          </Button>
          <Modal
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            title={t({ pt: 'Apagar avaliação?', en: 'Delete evaluation?' })}
            footer={
              <>
                <Button variant="ghost" onClick={() => setConfirmOpen(false)}>{cancel}</Button>
                <Button variant="danger" onClick={() => setConfirmOpen(false)}>{t({ pt: 'Apagar', en: 'Delete' })}</Button>
              </>
            }
          >
            {t({
              pt: 'Esta ação não pode ser desfeita. Todas as sugestões e histórico associados serão removidos permanentemente.',
              en: 'This action cannot be undone. All associated suggestions and history will be permanently removed.',
            })}
          </Modal>
        </Preview>
      </Tier>

      <Tier name="Form" desc={{ pt: 'entrada de dados · primary submit', en: 'data entry · primary submit' }}>
        <Preview>
          <Button variant="primary" onClick={() => setFormOpen(true)}>
            {t({ pt: 'Novo projeto', en: 'New project' })}
          </Button>
          <Modal
            open={formOpen}
            onClose={() => setFormOpen(false)}
            title={t({ pt: 'Criar projeto', en: 'Create project' })}
            footer={
              <>
                <Button variant="ghost" onClick={() => setFormOpen(false)}>{cancel}</Button>
                <Button variant="primary" onClick={() => setFormOpen(false)}>{t({ pt: 'Criar', en: 'Create' })}</Button>
              </>
            }
          >
            {t({
              pt: 'Os projetos agrupam avaliações relacionadas. Cada scorecard executado fica dentro do seu projeto.',
              en: 'Projects group related evaluations. Every scorecard you run lives inside its project.',
            })}
          </Modal>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete?"
  footer={<><Button>Cancel</Button><Button variant="danger">Delete</Button></>}
>
  Body content.
</Modal>`}
        />
        <Anatomy
          entries={[
            { token: 'open', description: { pt: 'controla visibilidade · false não monta DOM', en: 'controls visibility · false doesn’t mount DOM' } },
            { token: 'onClose', description: { pt: 'callback · disparado por X, Esc, ou overlay', en: 'callback · fired by X, Esc, or overlay' } },
            { token: 'title', description: { pt: 'h2 18px / weight 600 · acima do body', en: 'h2 18px / weight 600 · above the body' } },
            { token: 'footer', description: { pt: 'slot · Buttons typically (Ghost + Primary/Danger)', en: 'slot · typically Buttons (Ghost + Primary/Danger)' } },
            { token: 'closeOnOverlay', description: { pt: 'fecha clicando fora · default true', en: 'closes by clicking outside · default true' } },
            { token: 'closeOnEsc', description: { pt: 'fecha com Esc · default true', en: 'closes on Esc · default true' } },
            { token: 'focus trap', description: { pt: 'Tab cicla dentro do dialog', en: 'Tab cycles inside the dialog' } },
            { token: 'aria-modal', description: { pt: 'true · screen readers ignoram fundo', en: 'true · screen readers ignore the background' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
