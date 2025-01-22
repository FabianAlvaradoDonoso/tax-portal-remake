import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'

interface CardDashboardProps {
  children: React.ReactNode
  title: string
  className?: string
}

export function CardDashboard({ children, title, className }: CardDashboardProps) {
  return (
    <Card className="relative flex flex-col">
      <CardHeader className="p-4">
        <CardTitle className="absolute -top-4 w-fit rounded-3xl border bg-background px-2 py-1 text-sm font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={className}>{children}</CardContent>
    </Card>
  )
}
