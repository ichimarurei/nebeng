'use client'
import Image from 'next/image'
import { forwardRef } from 'react'

import { T_ProfileCardProps } from '@/app/ppid/home/$action/constant'

function CE_HomeProfileCard(
    { activeTab }: T_ProfileCardProps,
    ref: React.Ref<HTMLDivElement>
) {
    switch (activeTab) {
        case 0:
            return (
                <div className={styles.container}>
                    <h2 className={styles.title}>Sekilas Tentang PPID</h2>
                    <p className={styles.description}>
                        Keterbukaan informasi wajib diterapkan kedalam kinerja
                        setiap badan publik sebagai bentuk tanggung jawab kepada
                        pemangku kepentingan serta meningkatkan rasa percaya
                        dari masyarakat. Keterbukaan informasi ini juga telah
                        diatur dalam Undang-undang 14 tahun 2008.
                    </p>
                    <button className={styles.button}>Lihat Detail</button>
                </div>
            )
        case 1:
            return (
                <div className={styles.container}>
                    <h2 className={styles.title}>Visi & Misi</h2>
                    <h3 className={`${styles.subTitle} mb-4`}>Visi</h3>
                    <p className={styles.description}>
                        Menjadi Badan Usaha Milik Negara yang dalam
                        menyelenggarakan pelayanan informasi publik sebagai
                        nilai tambah perusahaan
                    </p>
                    <h3 className={`${styles.subTitle} my-4`}>Misi</h3>
                    <p className={styles.description}>
                        Memberikan pelayanan informasi publik yang semakin andal
                        kepada pemohon informasi
                    </p>
                </div>
            )
        case 2:
            return (
                <div ref={ref} className={styles.newsContainer}>
                    {new Array(6).fill(undefined).map((res, index) => (
                        <div key={index} className={styles.newsCard}>
                            <Image
                                className={styles.newsImage}
                                width={400}
                                height={0}
                                src="/images/dummy-news.jpeg"
                                alt={`news-${index}`}
                            />

                            <div>
                                <h5 className={styles.newsTitle}>Warta BRI</h5>
                                <p className={styles.newsDescription}>
                                    Kaloborasi antar BRI dan ... telkomesel
                                    hadirkan
                                </p>
                                <p className={styles.newsDate}>
                                    19 May 2024 | 16:04
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        case 3:
            return (
                <div className={styles.announcementCard}>
                    <h2 className={styles.title}>Announcement</h2>
                    <div className={styles.announcementEmpty}>
                        <Image
                            src="/images/ppid-announcement.png"
                            alt="announcement"
                            width={400}
                            height={0}
                        />
                    </div>
                    <button className={styles.button}>View Announcement</button>
                </div>
            )
    }
}
const ForwardedCE_ProfileCard = forwardRef(CE_HomeProfileCard)

export { ForwardedCE_ProfileCard as CE_HomeProfileCard }

const styles = {
    container: 'p-5 w-full rounded-ee-[60px] shadow-md bg-white',
    title: 'text-3xl font-light mb-8',
    description: 'text-l-regular leading-7',
    subTitle: 'text-l-medium text-blue-primary',
    button: 'text-red-primary pt-4',
    newsContainer: 'bg-white flex gap-6 overflow-x-auto py-8 px-5',
    newsCard: 'max-w-sm bg-white shadow-lg p-5 min-w-[260px]',
    newsImage: 'object-center object-none w-50 h-60',
    newsTitle: 'mt-6 text-l-medium text-[#979797]',
    newsDescription: 'text-red-primary text-m-semibold mb-5',
    newsDate: 'text-m-regular mb-4',
    announcementCard: 'px-5 py-7 w-full rounded-ee-[60px] shadow-md bg-white',
    announcementEmpty: 'flex items-center justify-center',
}
