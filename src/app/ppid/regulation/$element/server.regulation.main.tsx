'use server'

import { CE_RegulationBannerSection } from './client.regulation.banner.section'
import { CE_RegulationDocumentSection } from './client.regulation.document.section'

export async function SE_RegulationMain() {
    return (
        <>
            <CE_RegulationBannerSection />
            <CE_RegulationDocumentSection />
        </>
    )
}
