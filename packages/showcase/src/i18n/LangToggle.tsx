import { Pill, PillGroup } from '@heurix/design-system';
import { useLang } from './LangContext';

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <PillGroup label="Language">
      <Pill active={lang === 'pt'} onClick={() => setLang('pt')} pulseOnClick={false}>
        PT
      </Pill>
      <Pill active={lang === 'en'} onClick={() => setLang('en')} pulseOnClick={false}>
        EN
      </Pill>
    </PillGroup>
  );
}
