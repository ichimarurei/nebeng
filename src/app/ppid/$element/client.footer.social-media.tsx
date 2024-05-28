'use client'

import {
    BRI_FACEBOOK_URL,
    BRI_INSTAGRAM_URL,
    BRI_X_URL,
    BRI_YOUTUBE_URL,
} from '@/app/ppid/$action/constant'
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
} from '@/lib/global/svg'

export function CE_FooterSocialMedia() {
    const handleRedirectUrl = (url: string) => {
        window.open(url)
    }
    return (
        <section className={styles.bottomFooter}>
            <div className={styles.bottomFooterContainer}>
                <p className={styles.bottomFooterTitle}>
                    © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights
                    Reserved.
                </p>
                <div className="flex gap-4 items-center">
                    <button
                        className={styles.hoverButton}
                        onClick={() => handleRedirectUrl(BRI_FACEBOOK_URL)}
                    >
                        <FacebookIcon
                            className={styles.bottomFooterIcon}
                            width={14}
                            height={14}
                        />
                    </button>
                    <button
                        className={styles.hoverButton}
                        onClick={() => handleRedirectUrl(BRI_X_URL)}
                    >
                        <TwitterIcon
                            className={styles.bottomFooterIcon}
                            width={14}
                            height={14}
                        />
                    </button>
                    <button
                        className={styles.hoverButton}
                        onClick={() => handleRedirectUrl(BRI_INSTAGRAM_URL)}
                    >
                        <InstagramIcon
                            className={styles.bottomFooterIcon}
                            width={12}
                            height={12}
                        />
                    </button>
                    <button
                        className={styles.hoverButton}
                        onClick={() => handleRedirectUrl(BRI_YOUTUBE_URL)}
                    >
                        <YoutubeIcon
                            className="fill-white"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

const styles = {
    bottomFooter: 'bg-blue-primary mt-16',
    bottomFooterContainer:
        'mx-8 xl:mx-24  gap-3 py-5 flex flex-col xl:flex-row justify-center xl:justify-between  items-center',
    bottomFooterTitle:
        'text-m-regular text-white leading-5 text-center md:text-start',
    bottomFooterIcon: 'fill-white',
    hoverButton: 'hover:bg-red-primary p-1 rounded-lg',
}
