import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Kbd } from '@heurix/design-system';
import { NAVIGATION } from '../data/navigation';
import { useLang } from '../i18n/LangContext';
import s from './Sidebar.module.css';

export function Sidebar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName ?? '').toUpperCase();
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NAVIGATION;
    return NAVIGATION.map((g) => ({
      ...g,
      items: g.items.filter((i) => t(i.label).toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0);
  }, [query, t]);

  const placeholder = t({ pt: 'Buscar componente…', en: 'Search component…' });
  const emptyText = t({ pt: 'Nada encontrado.', en: 'Nothing found.' });

  return (
    <aside className={s.aside}>
      <div className={s.searchWrap}>
        <input
          ref={inputRef}
          type="text"
          className={s.search}
          placeholder={placeholder}
          aria-label={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' && query) setQuery('');
          }}
        />
        <span className={s.kbd}>
          <Kbd>/</Kbd>
        </span>
      </div>
      {groups.length === 0 && <div className={s.empty}>{emptyText}</div>}
      {groups.map((g) => (
        <div key={g.num} className={s.group}>
          <div className={s.groupTitle}>
            <span className={s.num}>{g.num}</span> {t(g.title)}
          </div>
          {g.items.map((i) => (
            <NavLink
              key={i.id}
              to={i.href}
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.linkActive}` : s.link
              }
              end
            >
              {t(i.label)}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}
