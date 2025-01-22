import { Circle } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from '@/components/ui/table'

import { CardDashboard } from '../card-dashboard'

const infoSemaforo = [
  {
    form_name: 'F22',
    data: [
      {
        periodo: 2024,
        observaciones: 0,
      },
      {
        periodo: 2023,
        observaciones: 0,
      },
      {
        periodo: 2022,
        observaciones: 0,
      },
    ],
  },
  {
    form_name: 'F29',
    data: [
      {
        periodo: 2024,
        observaciones: 9,
      },
      {
        periodo: 2023,
        observaciones: 3,
      },
      {
        periodo: 2022,
        observaciones: 7,
      },
    ],
  },
  {
    form_name: 'F3600',
    data: [
      {
        periodo: 2024,
        observaciones: 0,
      },
      {
        periodo: 2023,
        observaciones: 1,
      },
      {
        periodo: 2022,
        observaciones: 11,
      },
    ],
  },
  {
    form_name: 'F50',
    data: [
      {
        periodo: 2024,
        observaciones: 0,
      },
      {
        periodo: 2023,
        observaciones: 0,
      },
      {
        periodo: 2022,
        observaciones: 0,
      },
    ],
  },
]

const colorClassMap = {
  green: 'stroke-green-700 dark:stroke-green-800 fill-green-500',
  yellow: 'stroke-yellow-700 dark:stroke-yellow-800 fill-yellow-500',
  red: 'stroke-red-700 dark:stroke-red-800 fill-red-500',
}

export function Semaforo() {
  const allPeriods = infoSemaforo.flatMap((item) => item.data).map((item) => item.periodo)
  const maxPeriod = Math.max(...allPeriods)
  const minPeriod = Math.min(...allPeriods)

  return (
    <CardDashboard title="Semáforo Observaciones">
      <div className="flex flex-row items-center justify-center">
        <Table className="w-[500px] table-fixed rounded-lg border border-primary/20">
          <TableHeader>
            <TableRow className="hover:bg-inherit">
              <TableHead />
              {Array.from({ length: maxPeriod - minPeriod + 1 }, (_, i) => i + minPeriod)
                .sort((a, b) => b - a)
                .map((period) => (
                  <TableHead key={period} className="text-center">
                    <b>{period}</b>
                  </TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {infoSemaforo.map((item, index) => (
              <TableRow key={index} className="hover:bg-inherit">
                <TableCell>{item.form_name}</TableCell>

                {Array.from({ length: maxPeriod - minPeriod + 1 }, (_, i) => i + minPeriod)
                  .sort((a, b) => b - a)
                  .map((period, indexRow) => {
                    const countObservaciones =
                      item.data.find((el) => el.periodo === period)?.observaciones || 0
                    const color =
                      countObservaciones === 0 ? 'green' : countObservaciones < 3 ? 'yellow' : 'red'
                    return (
                      <TableCell key={indexRow}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Circle
                                className={`mx-auto h-8 w-8 fill-current ${colorClassMap[color]}`}
                                strokeWidth={3}
                              />
                            </TooltipTrigger>
                            <TooltipContent
                              sideOffset={5}
                              className="rounded-md bg-gray-300 px-2 py-1 text-center text-[12px] dark:bg-gray-800"
                            >
                              <p>Observaciones: {countObservaciones}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    )
                  })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardDashboard>
  )
}
