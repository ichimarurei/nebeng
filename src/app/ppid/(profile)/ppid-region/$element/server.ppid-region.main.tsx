'use server'

import { SE_PPIDRegionInformation } from './server.ppid-region.information'

export async function SE_PPIDRegionMain() {
    return (
        <>
            <div className={styles.container}>
                <SE_PPIDRegionInformation />
            </div>
        </>
    )
}

const styles = {
    container:
        'mx-8 lg:mx-28 3xl:mx-56 gap-9 grid grid-cols-1 mb-20 md:pt-36 pt-24 ',
}
