'use client'

import { BANNER_INFORMATION } from '@/app/ppid/(public-information)/immediately-information/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_ImmediatelyInformationBannerSection() {
    return (
        <div className="pt-10 md:pt-20 lg:pt-[130px]">
            <StaticBanner banner={BANNER_INFORMATION} />
        </div>
    )
}
