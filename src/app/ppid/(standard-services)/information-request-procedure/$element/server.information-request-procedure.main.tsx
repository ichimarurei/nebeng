'use server'

import { BREADCRUMB_INFORMATION_REQUEST_PROCEDURE_LABEL } from '@/app/ppid/(standard-services)/information-request-procedure/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_InformationRequestProcedureBanner } from './client.information-request-procedure.banner'
import { SE_InformationRequestProcedurePoster } from './server.information-request-procedure.poster'

export async function SE_InformationRequestProcedureMain() {
    return (
        <>
            <CE_InformationRequestProcedureBanner />
            <Breadcrumb
                breadrumbList={BREADCRUMB_INFORMATION_REQUEST_PROCEDURE_LABEL}
            />
            <div className={styles.container}>
                <SE_InformationRequestProcedurePoster />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
