import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardDashboard } from '@/sections/dashboard/card-dashboard'

export function Info() {
  return (
    <CardDashboard
      title="Datos Básicos"
      className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="correo">Correo</Label>
        <Input placeholder="Correo" readOnly defaultValue="CORREO@EMAIL.COM" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="domicilio">Domicilio</Label>
        <Input
          placeholder="Domicilio"
          readOnly
          defaultValue="AV. KENNEDY #8017 COMUNA LAS CONDES CIUDAD STGO"
        />
      </div>
    </CardDashboard>
  )
}
