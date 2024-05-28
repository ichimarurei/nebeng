'use server'

import { BREADCRUMB_PROFILE_PPID_LABEL } from '@/app/ppid/(profile)/profile-ppid/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_ProfilePPIDBanner } from './client.profile-ppid.banner'
import { SE_ProfilePPIDInformation } from './server.profile-ppid.information'

export async function SE_ProfilePPIDMain() {
    return (
        <>
            <CE_ProfilePPIDBanner />
            <Breadcrumb breadrumbList={BREADCRUMB_PROFILE_PPID_LABEL} />
            <div className={styles.container}>
                <SE_ProfilePPIDInformation />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
