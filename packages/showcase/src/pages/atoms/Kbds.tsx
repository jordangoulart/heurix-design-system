import { Kbd } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function Kbds() {
  const t = useT();
  return (
    <ComponentSection
      id="kbd"
      eyebrow="02 · Atoms"
      title="Kbd hint"
      blurb={{
        pt: 'Atalho de teclado. Sinaliza que existe um caminho mais rápido para fazer essa ação — para usuários power. Aparece em buscas, ações primárias, comando rápido.',
        en: 'Keyboard shortcut. Signals there’s a faster path for this action — for power users. Appears in search, primary actions, command palette.',
      }}
    >
      <Tier name={{ pt: 'Tecla única', en: 'Single keys' }} desc={{ pt: 'uma tecla', en: 'one key' }}>
        <Preview>
          <Kbd>/</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>↵</Kbd>
        </Preview>
      </Tier>

      <Tier name="Combos" desc={{ pt: 'múltiplas teclas, separadas por +', en: 'multiple keys, separated by +' }}>
        <Preview>
          <span><Kbd>⌘</Kbd>+<Kbd>K</Kbd></span>
          <span><Kbd>⌘</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd></span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Sobre fundo accent', en: 'On accent background' }} desc={{ pt: 'onAccent · cor invertida', en: 'onAccent · inverted color' }}>
        <Preview>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              background: 'var(--accent)',
              color: 'var(--accent-fg)',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {t({ pt: 'Avaliar', en: 'Evaluate' })} <Kbd onAccent>⌘K</Kbd>
          </span>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Kbd>/</Kbd>
<Kbd>⌘</Kbd>+<Kbd>K</Kbd>
<Kbd onAccent>⌘K</Kbd>`}
        />
        <Anatomy
          entries={[
            { token: 'children', description: { pt: 'a tecla — pode ser símbolo ou string', en: 'the key — can be symbol or string' } },
            { token: 'onAccent', description: { pt: 'inverte cores quando o pai é lime — mantém legível', en: 'inverts colors when parent is lime — keeps it readable' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
