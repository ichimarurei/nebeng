'use client'

import { BANNER_PROFILE_PPID } from '@/app/ppid/(profile)/profile-ppid/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_ProfilePPIDBanner() {
    return (
        <div className="pt-[130px]">
            <StaticBanner banner={BANNER_PROFILE_PPID} />
        </div>
    )
}
