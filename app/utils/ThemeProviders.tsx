"use Client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProviders({ children } : ThemeProviderProps) {
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem> { children } </ThemeProvider>;
}