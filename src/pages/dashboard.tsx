import { useState } from 'react'
import { Terminal } from 'lucide-react'
import { Info } from '@/sections/dashboard/info/info'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Search } from '@/sections/dashboard/search/search'
import { Semaforo } from '@/sections/dashboard/semaforo/semaforo'
import { Formularios } from '@/sections/dashboard/formularios/formularios'
import { Notificaciones } from '@/sections/dashboard/notificaciones/notificaciones'
import { DeclaracionesJuradas } from '@/sections/dashboard/declaraciones-juradas/declaraciones-juradas'

const DashboardPage = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex h-full w-full flex-col space-y-7">
      <h1 className="text-2xl">Dashboard 🚀</h1>

      <Search handleShow={() => setShow((prev) => !prev)} />

      {show ? (
        <div className="flex flex-col space-y-7">
          <Info />
          <Semaforo />
          <Formularios />
          <DeclaracionesJuradas />
          <Notificaciones />
        </div>
      ) : (
        <Alert className="mx-auto flex flex-col justify-center space-x-2">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="mt-1">
            Seleccione una sociedad para ver los formularios.
          </AlertTitle>
        </Alert>
      )}
    </div>
  )
}

export default DashboardPage
