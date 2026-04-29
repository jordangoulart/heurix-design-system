import { useCopyToClipboard } from '@heurix/design-system';
import { useLang } from '../i18n/LangContext';
import s from './CodeBlock.module.css';

export function CodeBlock({ code, lang = 'tsx' }: { code: string; lang?: string }) {
  const { state, copy } = useCopyToClipboard();
  const { t } = useLang();
  const copyLabel = t({ pt: 'Copiar', en: 'Copy' });
  const copiedLabel = t({ pt: 'Copiado', en: 'Copied' });
  return (
    <div className={s.code}>
      <div className={s.head}>
        <span className={s.lang}>{lang}</span>
        <button type="button" onClick={() => void copy(code)} className={s.copy}>
          {state === 'copied' ? copiedLabel : copyLabel}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
