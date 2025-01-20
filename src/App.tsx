import { Toaster } from 'sonner'
import { ThemeProvider } from '@/contexts/theme-provider'

import { SidebarProvider } from './components/ui/sidebar'
import { AppSidebar } from './components/sidebar/app-sidebar'

// ----------------------------------------------------------------------

type AppProps = {
  children: JSX.Element | JSX.Element[]
  className?: string
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <>{children}</>
      </SidebarProvider>
      <Toaster richColors position="bottom-right" />
    </ThemeProvider>
  )
}
export default App
