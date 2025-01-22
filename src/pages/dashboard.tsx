import { Info } from '@/sections/dashboard/info/info'
import { Search } from '@/sections/dashboard/search/search'
import { Semaforo } from '@/sections/dashboard/semaforo/semaforo'
import { Formularios } from '@/sections/dashboard/formularios/formularios'
import { Notificaciones } from '@/sections/dashboard/notificaciones/notificaciones'
import { DeclaracionesJuradas } from '@/sections/dashboard/declaraciones-juradas/declaraciones-juradas'

const DashboardPage = () => (
  <div className="flex h-full w-full flex-col space-y-7">
    <h1 className="text-2xl">Dashboard 🚀</h1>

    <Search />
    <Info />
    <Semaforo />
    <Formularios />
    <DeclaracionesJuradas />
    <Notificaciones />
  </div>
)

export default DashboardPage
