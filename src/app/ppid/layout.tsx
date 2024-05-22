import type { Metadata } from 'next'

import Footer from '@/lib/global/components/footer'
import Navbar from '@/lib/global/components/navbar'

export const metadata: Metadata = {
    title: 'PPID-Beranda - BRI PPID - Bank BRI | Melayani Dengan Setulus Hati',
    icons: './images/bri-favicon.ico',
}

export default function PPIDLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
