'use server'

import Poster from '@/lib/global/components/poster'

export async function SE_ObjectFillingProcedurePoster() {
    return (
        <div className={styles.container}>
            <div className={styles.desktopPoster}>
                <Poster
                    title="Objection Submission Flow"
                    image="/images/standard-services/objection-submission.jpeg"
                />
            </div>
            <div className={styles.mobilePoster}>
                <Poster
                    title="Objection Submission Flow"
                    image="/images/standard-services/objection-submission-mobile.jpg"
                />
            </div>
        </div>
    )
}

const styles = {
    container: 'mt-20 mx:auto',
    desktopPoster: 'hidden md:block',
    mobilePoster: 'block md:hidden',
}
