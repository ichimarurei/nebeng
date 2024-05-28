'use server'

import { BREADCRUMB_MAKLUMAT_LABEL } from '@/app/ppid/(standard-services)/maklumat/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_MaklumatBanner } from './client.maklumat.banner'
import { SE_MaklumatCard } from './server.maklumat.card'

export async function SE_MaklumatMain() {
    return (
        <>
            <CE_MaklumatBanner />
            <Breadcrumb breadrumbList={BREADCRUMB_MAKLUMAT_LABEL} />
            <div className={styles.container}>
                <SE_MaklumatCard />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
