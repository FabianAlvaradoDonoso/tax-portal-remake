import { Link } from 'react-router'
import { Bot, Home, LayoutDashboard } from 'lucide-react'
import {
  Sidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarGroupContent,
} from '@/components/ui/sidebar'

const items = [
  {
    title: '',
    items: [
      {
        title: 'Home',
        url: '/',
        icon: Home,
      },
    ],
  },
  {
    title: 'APP',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: 'Ejecución Procesos',
        url: '/execute-process',
        icon: Bot,
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-background">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            RedPanda
          </span>
        </h1>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            {group.title && <SidebarGroupLabel>{group.title}</SidebarGroupLabel>}

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="px-4 py-5 hover:bg-slate-100 hover:text-red-500 dark:text-gray-300 dark:hover:bg-slate-100/10"
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
