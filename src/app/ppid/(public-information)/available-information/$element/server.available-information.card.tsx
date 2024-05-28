'use server'

import { AVAILABLE_INFORMATION_LIST } from '@/app/ppid/(public-information)/available-information/$action/constant'
import DocumentCard from '@/lib/global/components/document.card'

export async function SE_AvailableInformationCard() {
    return (
        <div className=" my-20 gap-10 grid grid-cols-1">
            {AVAILABLE_INFORMATION_LIST.map((item, index) => (
                <DocumentCard
                    key={`list-${index}`}
                    title={item.title}
                    documentUrl={item.url}
                />
            ))}
        </div>
    )
}
