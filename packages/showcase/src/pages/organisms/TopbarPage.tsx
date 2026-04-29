import { Topbar, ThemeToggle } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function TopbarPage() {
  const t = useT();
  return (
    <ComponentSection
      id="topbar"
      eyebrow="04 · Organisms"
      title="Top bar"
      blurb={{
        pt: 'Cabeçalho global. Brand mark + título + meta + slot livre à direita. 56px de altura, sticky com backdrop blur — fica presente sem dominar.',
        en: 'Global header. Brand mark + title + meta + free slot on the right. 56px tall, sticky with backdrop blur — present without dominating.',
      }}
    >
      <Tier name="Default" desc="brand · subtitle · meta · right slot">
        <Preview>
          <div style={{ width: '100%', minWidth: 480, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            <Topbar subtitle="UX Scorecard" meta={`v1.0 · ${t({ pt: 'ativo', en: 'live' })}`} right={<ThemeToggle />} />
          </div>
        </Preview>
      </Tier>

      <Tier name="Variations" desc={{ pt: 'custom title · sem subtitle', en: 'custom title · no subtitle' }}>
        <Preview label="custom title">
          <div style={{ width: '100%', minWidth: 480, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            <Topbar title={t({ pt: 'Configurações', en: 'Settings' })} meta="admin" right={<ThemeToggle />} />
          </div>
        </Preview>
        <Preview label={{ pt: 'só brand · sem meta', en: 'brand only · no meta' }}>
          <div style={{ width: '100%', minWidth: 480, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            <Topbar showLiveDot={false} right={<ThemeToggle />} />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<Topbar
  title="Heurix"
  subtitle="UX Scorecard"
  meta="v1.0 · live"
  right={<ThemeToggle />}
/>`}
        />
        <Anatomy
          entries={[
            { token: 'title', description: 'string · default "Heurix"' },
            { token: 'subtitle', description: { pt: 'pós divider — categoria/produto', en: 'after divider — category/product' } },
            { token: 'meta', description: { pt: 'lado direito · live dot lime + texto mono', en: 'right side · lime live dot + mono text' } },
            { token: 'right', description: { pt: 'slot livre · ThemeToggle, ações, etc.', en: 'free slot · ThemeToggle, actions, etc.' } },
            { token: 'showLiveDot', description: { pt: 'esconde dot acima do meta · default true', en: 'hides dot above meta · default true' } },
            { token: 'showBrand', description: { pt: 'esconde BrandMark · default true', en: 'hides BrandMark · default true' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
