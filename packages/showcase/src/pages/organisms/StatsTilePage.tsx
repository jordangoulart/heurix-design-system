import { StatsTile, StatsGrid } from '@heurix/design-system';
import { ComponentSection } from '../../components/ComponentSection';
import { Preview } from '../../components/Preview';
import { Tier } from '../../components/Tier';
import { CodeBlock } from '../../components/CodeBlock';
import { Anatomy } from '../../components/Anatomy';
import { useT } from '../../i18n/LangContext';

export function StatsTilePage() {
  const t = useT();
  return (
    <ComponentSection
      id="stats-tile"
      eyebrow="04 · Organisms"
      title="Stats tile"
      blurb={{
        pt: 'Numeral de destaque com rótulo e helper. Em grade, células são conectadas por hairlines de 1px sobre uma superfície compartilhada — leitura como dashboard editorial.',
        en: 'Highlighted numeral with label and helper. In a grid, cells are connected by 1px hairlines on a shared surface — reads like an editorial dashboard.',
      }}
    >
      <Tier name="Single" desc={{ pt: 'tile isolado · em sidebar ou hero', en: 'isolated tile · in sidebar or hero' }}>
        <Preview>
          <div style={{ width: 280 }}>
            <StatsTile label={t({ pt: 'Total', en: 'Total' })} value="42" helper={t({ pt: 'Avaliações salvas', en: 'Evaluations saved' })} />
          </div>
        </Preview>
      </Tier>

      <Tier name="Grid" desc={{ pt: '3 cols · hairlines conectam · linha contínua editorial', en: '3 cols · hairlines connect · continuous editorial line' }}>
        <Preview>
          <div style={{ width: '100%', maxWidth: 720 }}>
            <StatsGrid cols={3}>
              <StatsTile label={t({ pt: 'Total', en: 'Total' })} value="42" helper={t({ pt: 'Avaliações salvas', en: 'Evaluations saved' })} />
              <StatsTile label={t({ pt: 'Média', en: 'Average' })} value="7.4" unit="/ 10" helper={t({ pt: 'Em todas as avaliações completas', en: 'Across all fully scored reviews' })} />
              <StatsTile label="AI-assisted" value="18" helper={t({ pt: 'Usaram o analisador de URL', en: 'Used the URL analyzer' })} />
            </StatsGrid>
          </div>
        </Preview>
        <Preview label="2 cols">
          <div style={{ width: '100%', maxWidth: 480 }}>
            <StatsGrid cols={2}>
              <StatsTile label={t({ pt: 'Este mês', en: 'This month' })} value="14" helper={t({ pt: 'Novas avaliações', en: 'New evaluations' })} />
              <StatsTile label={t({ pt: 'Score médio', en: 'Avg score' })} value="8.1" unit="/ 10" helper={t({ pt: 'Acima de 7.4 mês passado', en: 'Up from 7.4 last month' })} />
            </StatsGrid>
          </div>
        </Preview>
      </Tier>

      <Tier name={{ pt: 'Anatomia', en: 'Anatomy' }} desc={{ pt: 'props canônicas', en: 'canonical props' }}>
        <CodeBlock
          code={`<StatsGrid cols={3}>
  <StatsTile label="Total" value="42" />
  <StatsTile label="Average" value="7.4" unit="/ 10" />
  <StatsTile label="AI-assisted" value="18" />
</StatsGrid>`}
        />
        <Anatomy
          entries={[
            { token: 'label', description: { pt: 'mono caixa-alta 10px · categoria', en: 'mono uppercase 10px · category' } },
            { token: 'value', description: '26px / weight 600 / tabular-nums' },
            { token: 'unit', description: { pt: 'inline mono 14px subtle · "/ 10" típico', en: 'inline mono 14px subtle · "/ 10" typical' } },
            { token: 'helper', description: { pt: '13px subtle · contexto secundário', en: '13px subtle · secondary context' } },
            { token: 'StatsGrid.cols', description: { pt: '2 ou 3 · responsivo · single-col em mobile', en: '2 or 3 · responsive · single-col on mobile' } },
          ]}
        />
      </Tier>
    </ComponentSection>
  );
}
