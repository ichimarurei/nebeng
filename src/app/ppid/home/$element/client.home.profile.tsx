'use client'
import { useRef, useState } from 'react'

import { TAB_PROFILE_LABEL } from '@/app/ppid/home/$action/constant'

import { CE_HomeProfileCard } from './client.home.profile.card'

export function CE_HomeProfile() {
    const [activeTab, setActiveTab] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null)
    const [isScrollAtStart, setIsScrollAtStart] = useState(true)
    const [isScrollAtEnd, setIsScrollAtEnd] = useState(false)

    const updateScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            setIsScrollAtStart(container.scrollLeft === 0)
            setIsScrollAtEnd(
                container.scrollLeft >=
                    container.scrollWidth - container.clientWidth
            )
        }
    }

    const handleScroll = (scrollTo: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            if (scrollTo === 'left') {
                scrollContainerRef.current.scrollTo({
                    left: scrollContainerRef.current.scrollLeft - 100,
                    behavior: 'smooth',
                })
            } else if (scrollTo === 'right') {
                scrollContainerRef.current.scrollTo({
                    left: scrollContainerRef.current.scrollLeft + 100,
                    behavior: 'smooth',
                })
            }
            updateScroll()
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    Profile Singkat <br />
                    PPID PT Bank BRI
                </p>
                <div>
                    <div className={styles.tabView}>
                        {TAB_PROFILE_LABEL.map((res, index) => (
                            <div
                                onClick={() => setActiveTab(index)}
                                key={`profile-${index}`}
                                className={styles.card}
                            >
                                <p className={styles.tabTitle}>{res.title}</p>
                                <div
                                    className={`${styles.activeTab} ${activeTab === index ? 'block' : 'hidden'}`}
                                >
                                    <div className={styles.borderBottom}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {activeTab === 2 && (
                        <div className={styles.newsContainer}>
                            <div>
                                <p className={styles.titleNews}>
                                    Check out our latest news
                                </p>
                                <p className={styles.viewMore}>
                                    VIEW MORE {'>'}
                                </p>
                                <div className="hidden lg:block">
                                    <button
                                        className={`${styles.arrow} ${isScrollAtStart ? 'opacity-50' : ''}`}
                                        onClick={() => handleScroll('left')}
                                        disabled={isScrollAtStart}
                                    >
                                        {'<'}
                                    </button>

                                    <button
                                        className={`${styles.arrow} ${isScrollAtEnd ? 'opacity-50' : ''}`}
                                        onClick={() => handleScroll('right')}
                                        disabled={isScrollAtEnd}
                                    >
                                        {'>'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <CE_HomeProfileCard
                ref={scrollContainerRef}
                activeTab={activeTab}
            />
        </section>
    )
}

const styles = {
    container:
        'lg:flex items-center gap-10 mt-40 mx-2 sm:mx-14 lg:mx-24 3xl:mx-56',
    wrapper: 'mb-16 lg:mb-0',
    title: 'text-xl-regular lg:text-[42px] font-normal leading-[50px] text-center lg:text-start',
    tabView: 'border-b grid grid-cols-4 pb-1 pt-8 justify-around lg:flex',
    card: 'relative hover:text-blue-primary box-menu-profile cursor-pointer',
    tabTitle:
        'text-s-light lg:text-l-regular mx-2 lg:whitespace-nowrap text-center',
    borderBottom: 'border-with-arrow-bottom  w-full',
    activeTab: 'active-border-bottom ',
    titleNews: 'text-m-light text-[#627D92] text-center lg:text-start',
    viewMore:
        'text-blue-primary text-s-medium py-6 lg:text text-center lg:text-start',
    arrow: 'text-5xl bg-red-primary py-2 px-4 mr-3 text-white',
    newsContainer: 'mt-10 flex lg:justify-start justify-center',
}
