import Image from 'next/image'
import Link from 'next/link'

import { ChevronRightIcon } from '@/lib/global/svg'

type T_DocumentCardProps = {
    title: string
    doc_url: string
    image_url: string
}

export default function CE_RegulationDocumentCard({
    doc_url,
    image_url,
    title,
}: T_DocumentCardProps) {
    return (
        <div className="mt-10 border shadow-sm rounded-xl md:flex">
            <div className="bg-center object-center flex justify-center items-center">
                <Image
                    src={image_url}
                    alt={title}
                    width={330}
                    height={400}
                    className="object-cover bg-center bg-cover h-72"
                />
            </div>

            <div className="p-8 flex flex-1 flex-col items-start justify-center">
                <div className="my-4">
                    <p className="text-xl-semibold">{title}</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <Link
                        href={doc_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:underline-offset-1 flex gap-1 items-center"
                    >
                        <span className="text-blue-primary text-s-regular">
                            BUKA DOKUMEN
                        </span>
                        <ChevronRightIcon className="stroke-blue-primary" />
                    </Link>
                    <Link
                        href={`${doc_url}&download=true`}
                        rel="noopener noreferrer"
                        download
                        className="hover:underline hover:underline-offset-1 flex gap-1 items-center"
                    >
                        <span className="text-blue-primary text-s-regular">
                            UNDUH DOKUMEN
                        </span>
                        <ChevronRightIcon className="stroke-blue-primary" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
