import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
export function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme !== 'light',
  );
  function toggle() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next ? '#141b20' : '#f3f1eb');
    try {
      localStorage.setItem('pbot-theme', next ? 'dark' : 'light');
    } catch {
      /* Theme remains usable without storage. */
    }
    setDark(next);
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
