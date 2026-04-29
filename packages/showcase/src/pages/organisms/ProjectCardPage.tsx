import { ProjectCard, CountBadge } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function ProjectCardPage() {
  const t = useT();
  const sugg = (n: number) => t({ pt: `${n} sugestões`, en: `${n} suggestions` });
  return (
    <ComponentSection
      id="project-card"
      eyebrow="04 · Organisms"
      title="Project card"
      blurb={{
        pt: 'Cartão de avaliação na grade inicial. URL como pista contextual em mono, título como ação principal. Hover suave (border-strong + bg raised) sinaliza clicável.',
        en: 'Evaluation card on the initial grid. URL as contextual hint in mono, title as the main action. Soft hover (border-strong + raised bg) signals clickable.',
      }}
    >
      <Tier name="Default" desc="url · title · meta · trailing">
        <Preview>
          <ProjectCard
            url="heurix.dev/onboarding"
            title={t({ pt: 'Avaliação Q2 — fluxo de onboarding completo', en: 'Q2 Evaluation — full onboarding flow' })}
            meta={`2026-04-22 · ${sugg(14)}`}
            trailing={<CountBadge value={14} />}
          />
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Em grid', en: 'In a grid' }} desc={{ pt: 'múltiplos cards · grade típica', en: 'multiple cards · typical grid' }}>
        <Preview>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, width: '100%' }}>
            <ProjectCard
              url="heurix.dev/onboarding"
              title={t({ pt: 'Avaliação Q2 — onboarding', en: 'Q2 Evaluation — onboarding' })}
              meta={`2026-04-22 · ${sugg(14)}`}
              trailing={<CountBadge value={14} />}
            />
            <ProjectCard
              url="heurix.dev/dashboard"
              title={t({ pt: 'Painel principal', en: 'Main dashboard' })}
              meta={`2026-04-21 · ${sugg(8)}`}
              trailing={<CountBadge value={8} withDot />}
            />
            <ProjectCard
              url="heurix.dev/billing"
              title={t({ pt: 'Tela de pagamento', en: 'Billing screen' })}
              meta={`2026-04-20 · ${sugg(5)}`}
              trailing={<CountBadge value={5} />}
            />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<ProjectCard
  url="heurix.dev/onboarding"
  title="${t({ pt: 'Avaliação Q2', en: 'Q2 Evaluation' })}"
  meta="2026-04-22 · ${sugg(14)}"
  trailing={<CountBadge value={14} />}
  onClick={() => navigate(...)}
/>`}
        />
        <Anatomy
          entries={[
            { token: 'url', description: { pt: 'string · mono small no header · pista contextual', en: 'string · small mono in header · contextual hint' } },
            { token: 'title', description: { pt: 'principal · 15px / weight 500 / clamp 2 linhas', en: 'main · 15px / weight 500 / clamp 2 lines' } },
            { token: 'meta', description: { pt: 'rodapé com mono · separado por hairline top', en: 'mono footer · separated by top hairline' } },
            { token: 'trailing', description: { pt: 'slot no header right · CountBadge típico', en: 'header-right slot · typically CountBadge' } },
            { token: 'onClick', description: { pt: 'card inteiro é botão · cursor pointer', en: 'whole card is a button · cursor pointer' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
