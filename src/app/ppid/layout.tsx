import type { Metadata } from 'next'

import { SE_FooterMain } from './$element/server.footer.main'
import { SE_NavbarMain } from './$element/server.navbar.main'

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
            <SE_NavbarMain />
            {children}
            <SE_FooterMain />
        </>
    )
}
