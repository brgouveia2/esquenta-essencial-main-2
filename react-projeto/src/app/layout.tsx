import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
    title: 'Projeto React',
    description: 'Esquenta Essencial',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    )
}
