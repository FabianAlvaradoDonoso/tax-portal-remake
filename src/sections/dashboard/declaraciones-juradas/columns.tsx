import type { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  number: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  period: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'number',
    header: 'Numero',
  },
  {
    accessorKey: 'status',
    header: 'Estado',
  },
  {
    accessorKey: 'period',
    header: 'Periodo',
  },
]
