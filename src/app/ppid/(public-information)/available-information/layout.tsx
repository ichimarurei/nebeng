import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PPID-Public Information - BRI PPID - Bank BRI | Melayani Dengan Setulus Hati',
    icons: './images/bri-favicon.ico',
}

export default function PPIDLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
