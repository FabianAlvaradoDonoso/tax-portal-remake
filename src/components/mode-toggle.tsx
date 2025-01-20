import { useTheme } from '@/contexts/theme-provider'

import SunIcon from './icons/sun-icon'
import MoonIcon from './icons/moon-icon'

export function ModeToggle() {
  const { handleThemeMode, theme } = useTheme()

  return (
    <button
      onClick={() => handleThemeMode()}
      className="rounded-lg border border-primary p-2 text-center text-sm font-medium"
    >
      {theme === 'dark' ? (
        <SunIcon width={20} fill="currentColor" />
      ) : (
        <MoonIcon width={20} fill="currentColor" />
      )}
    </button>
  )
}
