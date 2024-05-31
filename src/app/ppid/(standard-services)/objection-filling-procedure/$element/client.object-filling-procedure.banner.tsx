'use client'

import { BANNER_OBJECTION_FILLIING_PROCEDURE } from '@/app/ppid/(standard-services)/objection-filling-procedure/$action/constant'
import StaticBanner from '@/lib/global/components/static.banner'

export function CE_ObjectFillingProcedureBanner() {
    return (
        <div className="pt-20 lg:pt-[150px] ">
            <StaticBanner banner={BANNER_OBJECTION_FILLIING_PROCEDURE} />
        </div>
    )
}
