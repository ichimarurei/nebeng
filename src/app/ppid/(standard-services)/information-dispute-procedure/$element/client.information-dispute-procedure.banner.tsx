'use client'

import { BANNER_INFORMATION_DISPUTE_PROCEDURE } from '@/app/ppid/(standard-services)/information-dispute-procedure/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_InformationDisputeProcedureBanner() {
    return (
        <div className="pt-[130px]">
            <StaticBanner banner={BANNER_INFORMATION_DISPUTE_PROCEDURE} />
        </div>
    )
}
