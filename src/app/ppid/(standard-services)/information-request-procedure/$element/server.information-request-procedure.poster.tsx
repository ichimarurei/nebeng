'use server'

import Poster from '@/lib/global/components/poster'

export async function SE_InformationRequestProcedurePoster() {
    return (
        <div className={styles.container}>
            <Poster
                title="Information Request Flow"
                image="/images/standard-services/information-request-procedure.jpg"
            />
        </div>
    )
}

const styles = {
    container: 'mt-20 mx:auto md:mx-28 lg:mx-36',
}
