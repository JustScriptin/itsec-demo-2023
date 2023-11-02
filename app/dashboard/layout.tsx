'use client'
import type { Metadata } from 'next'
import LabeledIcon from '../ui/LabeledIcon'
import { BookMarkIcon } from '../ui/svgs'

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Dashboard - Itsec demo',
// }

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <LabeledIcon icon={<BookMarkIcon/>} label="Dashboard" vertical/>
    {children}
    </>
  )
}
