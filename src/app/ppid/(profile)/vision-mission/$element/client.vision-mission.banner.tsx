'use client'

import { BANNER_VISION_MISSION } from '@/app/ppid/(profile)/vision-mission/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_VisionMissionBanner() {
    return (
        <div className="pt-[130px]">
            <StaticBanner banner={BANNER_VISION_MISSION} />
        </div>
    )
}
