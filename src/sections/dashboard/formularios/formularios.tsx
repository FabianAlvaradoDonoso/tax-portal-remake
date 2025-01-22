import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select'

import { CardDashboard } from '../card-dashboard'

export function Formularios() {
  return (
    <CardDashboard
      title="Formularios"
      className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="reporte">Reporte</Label>
        <Select>
          <SelectTrigger className="text-muted-foreground" id="reporte">
            <SelectValue placeholder="Seleccione una reporte" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="reporte-1">Reporte 1</SelectItem>
              <SelectItem value="reporte-2">Reporte 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="periodo-formulario">Periodo</Label>
        <Select>
          <SelectTrigger className="text-muted-foreground" id="periodo-formulario">
            <SelectValue placeholder="Seleccione un periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="periodo-formulario-1">Periodo 1</SelectItem>
              <SelectItem value="periodo-formulario-2">Periodo 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-end gap-1.5">
        <Button variant="outline" className="">
          Buscar
        </Button>
      </div>
    </CardDashboard>
  )
}
