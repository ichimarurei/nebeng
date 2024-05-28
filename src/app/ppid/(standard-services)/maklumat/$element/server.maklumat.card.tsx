'use server'

import { MAKLUMAT_LIST } from '@/app/ppid/(standard-services)/maklumat/$action/constant'
import DocumentCard from '@/lib/global/components/document.card'

export async function SE_MaklumatCard() {
    return (
        <div className={styles.container}>
            {MAKLUMAT_LIST.map((item, index) => (
                <DocumentCard
                    key={`list-${index}`}
                    title={item.title}
                    documentUrl={item.url}
                />
            ))}
        </div>
    )
}

const styles = {
    container: 'my-20 gap-10 grid grid-cols-1',
}
