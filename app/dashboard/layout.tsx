import type { Metadata } from 'next'
import Nav from '../ui/dashboard/nav/Nav'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard - Itsec demo',
}

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Nav />
    {children}
    </>
  )
}
