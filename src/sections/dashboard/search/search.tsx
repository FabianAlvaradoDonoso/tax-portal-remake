import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CardDashboard } from '@/sections/dashboard/card-dashboard'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select'

export function Search(props: { handleShow: () => void }) {
  return (
    <CardDashboard
      title="Búsqueda"
      className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="rut">RUT</Label>
        <Input placeholder="RUT" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="sociedad">Sociedad</Label>
        <Select>
          <SelectTrigger className="" id="sociedad">
            <SelectValue placeholder="Seleccione una sociedad" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="sociedad-1">Sociedad 1</SelectItem>
              <SelectItem value="sociedad-2">Sociedad 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full items-end gap-1.5">
        <Button variant="outline" className="" onClick={props.handleShow}>
          Buscar
        </Button>
      </div>
    </CardDashboard>
  )
}
