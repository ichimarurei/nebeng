'use client'

import { BANNER_AVAILABLE_INFORMATION } from '@/app/ppid/(public-information)/available-information/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_AvailableInformationBannerSection() {
    return (
        <div className="pt-10 md:pt-20 lg:pt-[130px]">
            <StaticBanner banner={BANNER_AVAILABLE_INFORMATION} />
        </div>
    )
}
