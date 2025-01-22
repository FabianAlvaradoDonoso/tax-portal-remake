import type { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: string
  description: string
  date: string
  notificationType: string
  options: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
  },
  {
    accessorKey: 'date',
    header: 'Fecha',
  },
  {
    accessorKey: 'notificationType',
    header: 'Tipo Notificación',
  },
  {
    accessorKey: 'options',
    header: 'Opciones',
  },
]
