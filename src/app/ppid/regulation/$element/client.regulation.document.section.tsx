'use client'

import { REGULATION_LIST } from '@/app/ppid/regulation/$action/constant'
import CardPaginationButton from '@/lib/global/components/card.pagination.button'

import CE_RegulationDocumentCard from './client.regulation.document.card'

export function CE_RegulationDocumentSection() {
    return (
        <div className="mb-20 grid grid-cols-1 container px-4 mx-auto">
            {REGULATION_LIST.map((item, index) => (
                <CE_RegulationDocumentCard
                    key={`list-${index}`}
                    title={item.title}
                    doc_url={item.doc_url}
                    image_url={item.image_url}
                />
            ))}
            <div className="my-10">
                <CardPaginationButton />
            </div>
        </div>
    )
}
