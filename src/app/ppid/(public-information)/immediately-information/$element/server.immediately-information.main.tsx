'use server'

import { BREADCRUMB_IMMEDIATELY_INFORMATION_LABEL } from '@/app/ppid/(public-information)/immediately-information/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_ImmediatelyInformationBannerSection } from './client.immediately-information.banner.section'
import { CE_ImmediatelyInformationPagination } from './client.immediately-information.pagination'
import { SE_ImmediatelyInformationCard } from './server.immediately-information.card'

export async function SE_ImmediatelyInformationMain() {
    return (
        <>
            <CE_ImmediatelyInformationBannerSection />
            <Breadcrumb
                breadrumbList={BREADCRUMB_IMMEDIATELY_INFORMATION_LABEL}
            />
            <div className="mx-14 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20">
                <SE_ImmediatelyInformationCard />
                <CE_ImmediatelyInformationPagination />
            </div>
        </>
    )
}
