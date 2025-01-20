import { SidebarInset } from '@/components/ui/sidebar'

import { Footer } from './sections/footer'
import { Navbar } from './sections/navbar'

export const MainLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <SidebarInset className="">
    <Navbar />

    <div className="flex h-fit flex-1 flex-col gap-4 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-4 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {children}
    </div>

    <Footer />
  </SidebarInset>
)
