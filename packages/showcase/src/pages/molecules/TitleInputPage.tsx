import { TitleInput } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function TitleInputPage() {
  const t = useT();
  const titleAria = t({ pt: 'Título do projeto', en: 'Project title' });
  const titleShort = t({ pt: 'Título', en: 'Title' });
  const sample = t({ pt: 'Avaliação Q2 — Onboarding', en: 'Q2 Evaluation — Onboarding' });
  return (
    <ComponentSection
      id="title-input"
      eyebrow="03 · Molecules"
      title="Title input"
      blurb={{
        pt: 'Edição inline do título do projeto. Tipografia de h2 (22px / weight 600) — ao usuário parece que está editando o cabeçalho, não preenchendo um form.',
        en: 'Inline edit of the project title. h2 typography (22px / weight 600) — the user feels they’re editing the heading, not filling out a form.',
      }}
    >
      <Tier name="States" desc="default · hover · focus">
        <Preview label={{ pt: 'default · sem fundo, parece h2', en: 'default · no background, looks like h2' }}>
          <div style={{ width: 480 }}>
            <TitleInput ariaLabel={titleAria} defaultValue={sample} />
          </div>
        </Preview>
        <Preview label={{ pt: 'placeholder · em mono', en: 'placeholder · in mono' }}>
          <div style={{ width: 480 }}>
            <TitleInput ariaLabel={titleShort} placeholder="Untitled" />
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<TitleInput
  ariaLabel="${titleAria}"
  defaultValue="${sample}"
/>`}
        />
        <Anatomy
          entries={[
            { token: 'ariaLabel', description: { pt: 'OBRIGATÓRIO — substitui label visual', en: 'REQUIRED — replaces the visual label' } },
            { token: 'font', description: 'Supreme 22px / weight 600 / letter-spacing -0.02em' },
            { token: ':hover', description: { pt: 'background --hover · revela affordance', en: '--hover background · reveals affordance' } },
            { token: ':focus', description: { pt: 'bg --raised + ring 3px + inset border accent', en: '--raised bg + 3px ring + inset accent border' } },
            { token: 'placeholder', description: { pt: 'Chivo Mono 18px — visualmente "ainda não preencheu"', en: 'Chivo Mono 18px — visually "not filled yet"' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
