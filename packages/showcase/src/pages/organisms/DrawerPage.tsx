import { useState } from 'react';
import { Drawer, Button } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function DrawerPage() {
  const [open, setOpen] = useState(false);
  const t = useT();
  return (
    <ComponentSection
      id="drawer"
      eyebrow="04 · Organisms"
      title="Drawer"
      blurb={{
        pt: 'Painel lateral. Para fluxos longos: detalhes de avaliação, listas de sugestões, formulários com muitos campos. Diferente do modal, drawer não bloqueia visualmente — você ainda vê o contexto à esquerda.',
        en: 'Side panel. For longer flows: evaluation details, suggestion lists, forms with many fields. Unlike a modal, the drawer doesn’t visually block — you still see the context on the left.',
      }}
    >
      <Tier name="Default" desc={{ pt: 'abre direita · 720px max · 420ms', en: 'opens right · 720px max · 420ms' }}>
        <Preview>
          <Button variant="primary" onClick={() => setOpen(true)}>
            {t({ pt: 'Abrir drawer', en: 'Open drawer' })}
          </Button>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            title={t({ pt: 'Detalhes da avaliação', en: 'Evaluation details' })}
            footer={<Button variant="primary" onClick={() => setOpen(false)}>{t({ pt: 'Fechar', en: 'Close' })}</Button>}
          >
            <p>
              {t({
                pt: 'Conteúdo do drawer com listas, formulários e detalhes complexos.',
                en: 'Drawer content with lists, forms, and complex details.',
              })}
            </p>
            <p style={{ marginTop: 12 }}>
              {t({
                pt: 'Diferente do modal, drawer não bloqueia — você ainda vê o contexto à esquerda. Use quando o usuário precisa referência visual à página principal enquanto interage.',
                en: 'Unlike a modal, the drawer doesn’t block — you still see the context on the left. Use when the user needs visual reference to the main page while interacting.',
              })}
            </p>
          </Drawer>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Details"
  footer={<Button variant="primary">Save</Button>}
>
  Long drawer content…
</Drawer>`}
        />
        <Anatomy
          entries={[
            { token: 'open', description: { pt: 'controla visibilidade', en: 'controls visibility' } },
            { token: 'onClose', description: { pt: 'callback · Esc + clique no backdrop', en: 'callback · Esc + click on backdrop' } },
            { token: 'title', description: { pt: 'h2 16px / weight 500 · com X de fechar', en: 'h2 16px / weight 500 · with close X' } },
            { token: 'footer', description: { pt: 'slot · sticky bottom com hairline top', en: 'slot · sticky bottom with top hairline' } },
            { token: 'animation', description: 'open 420ms · close 320ms · ease-out' },
            { token: 'width', description: 'min(720px, 92vw) · responsive' },
            { token: 'shadow', description: { pt: '--shadow-drawer · projeta da direita pra esquerda', en: '--shadow-drawer · casts from right to left' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
