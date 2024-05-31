'use client'

import { BANNER_SLIDERS } from '@/app/ppid/home/$action/constant'
import Carousel from '@/lib/global/components/carousel'

export function CE_HomeBannerSection() {
    return (
        <div className="pt-14 md:pt-24 xl:pt-36">
            <Carousel slides={BANNER_SLIDERS} />
        </div>
    )
}
