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

export function Notificaciones() {
  return (
    <CardDashboard
      title="Notificaciones"
      className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="periodo-notificacion">Periodo</Label>
        <Select>
          <SelectTrigger className="text-muted-foreground" id="periodo-notificacion">
            <SelectValue placeholder="Seleccione un periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="periodo-notificacion-1">Periodo 1</SelectItem>
              <SelectItem value="periodo-notificacion-2">Periodo 2</SelectItem>
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
