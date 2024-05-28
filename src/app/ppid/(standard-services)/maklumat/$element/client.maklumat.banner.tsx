'use client'

import { BANNER_MAKLUMAT } from '@/app/ppid/(standard-services)/maklumat/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_MaklumatBanner() {
    return (
        <div className="pt-[130px]">
            <StaticBanner banner={BANNER_MAKLUMAT} />
        </div>
    )
}
