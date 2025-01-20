import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Bot, LayoutDashboard, CircleUserRound } from 'lucide-react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

const items = [
  {
    icon: Bot,
    title: 'Ejecución de procesos',
    description:
      'Ejecución y monitoreo de bots automatizados para la carga y procesamiento de datos.',
    link: '/execute-process',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Búsqueda de información sobre el cumplimiento de formularios por sociedad.',
    link: '/dashboard',
  },
  {
    icon: CircleUserRound,
    title: 'Perfil',
    description:
      'Configuración de perfil de usuario, actualiación de información personal, cambio de contraseñas y más.',
    link: '#',
  },
]

export function CardItems() {
  return (
    <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
      {items.map((item) => (
        <Card key={item.title} className="flex h-64 w-[350px] flex-col justify-between">
          <CardHeader className="flex items-center justify-between">
            {item.icon && (
              <item.icon className="dark:text-primary-500 h-8 w-8 text-muted-foreground" />
            )}
            <CardTitle className="text-primary-500">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-primary dark:text-muted-foreground">
              {item.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-center align-baseline">
            <Button variant="outline">
              <Link to={item.link} className="flex items-center">
                <span>Ir a {item.title}</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
