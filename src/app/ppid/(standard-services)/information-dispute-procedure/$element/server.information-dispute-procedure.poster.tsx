'use server'

import Poster from '@/lib/global/components/poster'

export async function SE_InformationDisputeProcedurePoster() {
    return (
        <div className={styles.container}>
            <Poster
                title="Information Dispute Submission Flow"
                image="/images/standard-services/information-dispute-procedure.jpeg"
            />
        </div>
    )
}

const styles = {
    container: 'mt-20 mx:auto md:mx-28 lg:mx-36',
}
