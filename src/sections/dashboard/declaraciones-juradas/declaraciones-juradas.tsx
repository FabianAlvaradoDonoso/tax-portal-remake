import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import { Separator } from '@/components/ui/separator'
import { CardDashboard } from '@/sections/dashboard/card-dashboard'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select'

import { columns } from './columns'

export function DeclaracionesJuradas() {
  const data = [
    {
      number: '1819',
      status: 'Aceptado',
      period: 2024,
    },
  ]

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <CardDashboard title="Declaraciones Juradas" className="flex flex-col">
      <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="periodo-declaracion">Periodo</Label>
          <Select>
            <SelectTrigger className="text-muted-foreground" id="periodo-declaracion">
              <SelectValue placeholder="Seleccione un periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="periodo-declaracion-1">Periodo 1</SelectItem>
                <SelectItem value="periodo-declaracion-2">Periodo 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-end gap-1.5">
          <Button variant="outline" className="" onClick={handleShow}>
            Buscar
          </Button>
        </div>
        <div className="grid w-full items-end gap-1.5">
          <Button variant="outline" className="">
            Descargar
          </Button>
        </div>
      </div>

      {show && (
        <div className="container mx-auto flex flex-col items-center">
          <Separator className="mb-8 mt-4" />
          <DataTable columns={columns} data={data} className="w-[600px]" />
        </div>
      )}
    </CardDashboard>
  )
}
