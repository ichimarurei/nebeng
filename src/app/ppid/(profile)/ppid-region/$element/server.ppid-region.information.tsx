'use server'

import Image from 'next/image'
import Link from 'next/link'

import { REGION_LIST } from '@/app/ppid/(profile)/ppid-region/$action/constant'

export async function SE_PPIDRegionInformation() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                {REGION_LIST.map((itemRegion, index) => (
                    <div key={`region-${index}`}>
                        <h1 className={styles.title}>{itemRegion.title}</h1>
                        <div className={styles.image}>
                            <Image
                                src={itemRegion.imagePath}
                                width={400}
                                height={400}
                                alt={itemRegion.title}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.subTitle}>Alamat</h3>
                            <p className={styles.addressText}>
                                {itemRegion.address}
                            </p>
                        </div>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.subTitle}>Telepon</h3>
                            <Link
                                className="justify-center flex"
                                href={`tel:${itemRegion.phoneNumber}`}
                            >
                                <p className={styles.phoneNumberText}>
                                    {itemRegion.phoneNumber}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const styles = {
    container: 'mt-20 mb-8 flex  justify-center',
    wrapper: 'max-w-[576px] gap-10 grid grid-cols-1',
    title: 'text-font-normal text-4xl mb-10 text-center',
    image: 'flex justify-center',
    textWrapper: 'text-center mt-10',
    subTitle: 'text-l-semibold mb-3',
    addressText: 'text-l-regular',
    phoneNumberText:
        'text-l-regular text-blue-primary text-center hover:border-b hover:border-b-blue-primary border-b border-b-white',
}
