'use server'

import { BREADCRUMB_OBJECTION_FILLIING_PROCEDURE_LABEL } from '@/app/ppid/(standard-services)/objection-filling-procedure/$action/constant'
import Breadcrumb from '@/lib/global/components/breadcrumb'

import { CE_ObjectFillingProcedureBanner } from './client.object-filling-procedure.banner'
import { SE_ObjectFillingProcedurePoster } from './server.object-filling-procedure.poster'

export async function SE_ObjectFillingProcedureMain() {
    return (
        <>
            <CE_ObjectFillingProcedureBanner />
            <Breadcrumb
                breadrumbList={BREADCRUMB_OBJECTION_FILLIING_PROCEDURE_LABEL}
            />
            <div className={styles.container}>
                <SE_ObjectFillingProcedurePoster />
            </div>
        </>
    )
}

const styles = {
    container: 'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20',
}
