import Link from 'next/link'

import { ChevronRightIcon } from '@/lib/global/svg'

export type T_BreadcrumbList = {
    label: string
    active: boolean
    link: string
}

type T_BreadcrumbProps = {
    breadrumbList: Array<T_BreadcrumbList>
}
export default function Breadcrumb({ breadrumbList }: T_BreadcrumbProps) {
    return (
        <ul className={styles.container}>
            {breadrumbList.map((itemLabel, index) => (
                <Link key={index} href={itemLabel.link} className={styles.link}>
                    <li
                        className={`${itemLabel.active ? 'text-blue-primary' : ''} ${styles.label}`}
                    >
                        {itemLabel.label}
                    </li>
                    {index !== breadrumbList.length - 1 && (
                        <ChevronRightIcon
                            width={16}
                            height={16}
                            className="stroke-blue-primary"
                        />
                    )}
                </Link>
            ))}
        </ul>
    )
}

const styles = {
    container:
        'flex items-center text-m-regular text-gray-primary border-b justify-center py-4',
    link: 'flex items-center gap-1',
    label: 'hover:text-blue-primary hover:border-b-blue-primary border-b border-b-white text-ellipsis overflow-hidden ',
}
