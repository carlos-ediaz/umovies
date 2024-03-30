'use client'

import {NextUIProvider} from '@nextui-org/react'
import { FavoritesProvider } from './containers/FavoritesContext'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}