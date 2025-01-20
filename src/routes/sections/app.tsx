import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'

import { paths } from '../paths'

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('@/pages/home'))
const DashboardPage = lazy(() => import('@/pages/dashboard'))
const ExecuteProcessPage = lazy(() => import('@/pages/execute-process'))

// ----------------------------------------------------------------------

const AppLayout = () => (
  <Suspense fallback={<>...</>}>
    <Outlet />
  </Suspense>
)

export const appRoutes: RouteObject[] = [
  {
    path: paths.home,
    element: AppLayout(),
    children: [
      {
        element: (
          <MainLayout>
            <HomePage />
          </MainLayout>
        ),
        index: true,
      },
    ],
  },
  {
    path: paths.dashboard,
    element: AppLayout(),
    children: [
      {
        element: (
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        ),
        index: true,
      },
    ],
  },
  {
    path: paths.executeProcess,
    element: AppLayout(),
    children: [
      {
        element: (
          <MainLayout>
            <ExecuteProcessPage />
          </MainLayout>
        ),
        index: true,
      },
    ],
  },
]
