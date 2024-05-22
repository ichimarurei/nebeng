'use client'

import { BANNER_SLIDERS } from '@/app/ppid/home/$action/constant'
import Carousel from '@/lib/global/components/carousel'

export function CE_HomeBannerSection() {
    return (
        <div className="pt-36">
            <Carousel slides={BANNER_SLIDERS} />
        </div>
    )
}
