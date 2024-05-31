'use server'

import { BREADCRUMB_DUTIES_AUTHORITIES_LABEL } from '@/app/ppid/(profile)/duties-authorities/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_VisionMissionBanner } from './client.duties-authorities.banner'
import { SE_VisionMissionInformation } from './server.duties-authorities.information'

export async function SE_VisionMissionMain() {
    return (
        <>
            <CE_VisionMissionBanner />
            <Breadcrumb breadrumbList={BREADCRUMB_DUTIES_AUTHORITIES_LABEL} />
            <div className={styles.container}>
                <SE_VisionMissionInformation />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
