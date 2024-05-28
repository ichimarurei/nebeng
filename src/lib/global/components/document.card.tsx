import Link from 'next/link'

import { DownloadIcon, OpenEyeIcon } from '@/lib/global/svg'

type T_DocumentCardProps = {
    title: string
    documentUrl: string
}

export default function DocumentCard({
    documentUrl,
    title,
}: T_DocumentCardProps) {
    return (
        <div className={styles.container}>
            <div className="p-12">
                <p className={styles.title}>{title}</p>
            </div>
            <div className="flex">
                <Link
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    <OpenEyeIcon className={styles.icon} />
                    <span className={styles.backgroundButtonView}></span>
                </Link>
                <Link
                    href={`${documentUrl}&download=true`}
                    className="relative group px-10 flex items-center "
                    rel="noopener noreferrer"
                    download
                >
                    <DownloadIcon className={styles.icon} />
                    <span className={styles.backgroundButtonDownload}></span>
                </Link>
            </div>
        </div>
    )
}

const styles = {
    container: 'shadow-md rounded-3xl flex justify-between',
    title: 'text-l-regular text-blue-tertiary',
    button: 'relative group px-10 flex items-center',
    icon: 'stroke-blue-primary z-10 group-hover:stroke-white',
    backgroundButtonView:
        'absolute inset-0 bg-red-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-right z-0',
    backgroundButtonDownload:
        'absolute rounded-e-3xl inset-0 bg-red-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-right z-0',
}
