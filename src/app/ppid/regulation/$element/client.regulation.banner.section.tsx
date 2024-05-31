'use client'

import { BANNER_INFORMATION } from '@/app/ppid/regulation/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_RegulationBannerSection() {
    return (
        <div className="pt-14 md:pt-24 xl:pt-36">
            <StaticBanner banner={BANNER_INFORMATION} />
        </div>
    )
}
