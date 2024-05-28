'use client'

import { VideoPlayer } from '@/lib/global/components/video.player'

export function CE_HomeYoutube() {
    return (
        <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-60  xxl:mx-96  my-0 lg:my-14">
            <p className="text-2xl font-medium mb-2 text-center lg:text-start">
                PPID BRI
            </p>
            <p className="text-l-regular mb-4 text-[#8A8A8A] text-center lg:text-start">
                Pejabat Pengelola Informasi dan <br /> Dokumentasi BRI
            </p>
            <VideoPlayer embedId="oSihY2NJjLI?si=dmaU3FB36ec37Mol" />
        </div>
    )
}
