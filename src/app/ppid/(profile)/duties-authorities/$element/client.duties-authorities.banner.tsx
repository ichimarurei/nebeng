'use client'

import { BANNER_DUTIES_AUTHORITIES } from '@/app/ppid/(profile)/duties-authorities/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_VisionMissionBanner() {
    return (
        <div className="pt-[130px]">
            <StaticBanner banner={BANNER_DUTIES_AUTHORITIES} />
        </div>
    )
}
