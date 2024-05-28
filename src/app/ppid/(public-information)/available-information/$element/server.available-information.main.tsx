'use server'

import { BREADCRUMB_AVAILBLE_INFORMATION_LABEL } from '@/app/ppid/(public-information)/available-information/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_AvailableInformationPagination } from './client.available-information.pagination'
import { CE_AvailableInformationBannerSection } from './client.avaliable-information.banner.section'
import { SE_AvailableInformationCard } from './server.available-information.card'

export async function SE_AvailableInformationMain() {
    return (
        <>
            <CE_AvailableInformationBannerSection />
            <Breadcrumb breadrumbList={BREADCRUMB_AVAILBLE_INFORMATION_LABEL} />
            <div className="mx-14 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20">
                <SE_AvailableInformationCard />
                <CE_AvailableInformationPagination />
            </div>
        </>
    )
}
