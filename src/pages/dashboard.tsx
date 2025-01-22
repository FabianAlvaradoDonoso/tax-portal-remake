import { Info } from '@/sections/dashboard/info/info'
import { Search } from '@/sections/dashboard/search/search'
import { Semaforo } from '@/sections/dashboard/semaforo/semaforo'
import { CardDashboard } from '@/sections/dashboard/card-dashboard'

const DashboardPage = () => (
  <div className="flex h-full w-full flex-col space-y-7">
    <h1 className="text-2xl">Dashboard 🚀</h1>

    <Search />
    <Info />
    <Semaforo />

    <CardDashboard title="Formularios">inputs</CardDashboard>
    <CardDashboard title="Declaraciones Juradas">inputs</CardDashboard>
    <CardDashboard title="Notificaciones">inputs</CardDashboard>
  </div>
)

export default DashboardPage
