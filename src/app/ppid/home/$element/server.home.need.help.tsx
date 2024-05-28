'use server'

import Link from 'next/link'

import { NEED_HELP_LIST } from '@/app/ppid/home/$action/constant'
import { ChevronRightIcon } from '@/lib/global/svg'

export async function SE_HomeNeedHelp() {
    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>Need Help ?</h1>
            <div className={styles.grid}>
                {NEED_HELP_LIST.map((res, index) => (
                    <section
                        key={index}
                        className={`${styles.card} ${!res.description ? 'grid-rows-2' : 'grid-rows-3'}`}
                    >
                        <h5
                            className={`${!res.description ? 'text-2xl text-black leading-8' : 'text-l-semibold text-red-primary'} `}
                        >
                            {res.title}
                        </h5>
                        <div className={styles.cardBody}>
                            <p className={styles.cardDescription}>
                                {res.description}
                            </p>
                            <Link className="flex items-center gap-1 " href="#">
                                <p className={styles.cardLink}>{res.link}</p>
                                <ChevronRightIcon className="stroke-blue-secondary" />
                            </Link>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    )
}

const styles = {
    container: 'my-20 mx-6 sm:mx-14 lg:mx-24 3xl:mx-56',
    heading: 'text-center text-4xl mb-8',
    grid: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
    card: 'p-6 bg-white  shadow-md grid  gap-2',
    cardBody: 'row-span-2',
    cardDescription: 'text-m-regular mb-4',
    cardLink: 'text-m-regular text-blue-secondary',
}
