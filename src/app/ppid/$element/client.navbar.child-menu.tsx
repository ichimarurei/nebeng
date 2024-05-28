'use client'
import Link from 'next/link'

import { T_BaseMenuItem } from '@/app/ppid/$action/constant'

type T_NavbarChildMenuProps = {
    title: string
    subMenu: Array<T_BaseMenuItem>
}

export function CE_NavbarChildMenu({ subMenu, title }: T_NavbarChildMenuProps) {
    return (
        <section className="mt-1">
            <div className={styles.arrow}></div>
            <div className={styles.childMenuContainer}>
                <h3 className={styles.title}>{title.toLowerCase()}</h3>
                <div className={styles.childMenuItems} role="menu">
                    {subMenu.map((res, index) => [
                        <div key={`url-${index}`}>
                            <Link href={res.url} role="menuitem">
                                {res.title}
                            </Link>
                        </div>,
                    ])}
                </div>
            </div>
        </section>
    )
}

const styles = {
    arrow: 'arrow-up mt-6',
    childMenuContainer:
        'box-child-menu mt-10 h-auto overflow-y-hidden inline-block px-24 py-7',
    title: 'text-xxl-regular mb-3 capitalize',
    childMenuItems:
        'flex gap-x-14  gap-y-4 text-xl-regular text-red-primary flex-wrap',
}
