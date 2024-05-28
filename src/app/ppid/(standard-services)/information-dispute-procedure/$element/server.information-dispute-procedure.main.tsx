'use server'

import { BREADCRUMB_INFORMATION_DISPUTE_PROCEDURE_LABEL } from '@/app/ppid/(standard-services)/information-dispute-procedure/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_InformationDisputeProcedureBanner } from './client.information-dispute-procedure.banner'
import { SE_InformationDisputeProcedurePoster } from './server.information-dispute-procedure.poster'

export async function SE_InformationDisputeProcedureMain() {
    return (
        <>
            <CE_InformationDisputeProcedureBanner />
            <Breadcrumb
                breadrumbList={BREADCRUMB_INFORMATION_DISPUTE_PROCEDURE_LABEL}
            />
            <div className={styles.container}>
                <SE_InformationDisputeProcedurePoster />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
