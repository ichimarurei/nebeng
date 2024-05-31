'use client'

import { BANNER_INFORMATION_REQUEST_PROCEDURE } from '@/app/ppid/(standard-services)/information-request-procedure/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_InformationRequestProcedureBanner() {
    return (
        <div className="pt-10 md:pt-20 lg:pt-[130px]">
            <StaticBanner banner={BANNER_INFORMATION_REQUEST_PROCEDURE} />
        </div>
    )
}
