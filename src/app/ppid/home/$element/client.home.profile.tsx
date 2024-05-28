'use client'
import { useRef, useState } from 'react'

import { TAB_PROFILE_LABEL } from '@/app/ppid/home/$action/constant'
import { ChevronLeftIcon, ChevronRightIcon } from '@/lib/global/svg'

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
                <p className={styles.title}>Profile Singkat </p>
                <p className={styles.title}>PPID PT Bank BRI</p>
                <div>
                    <div className={styles.tabView}>
                        {TAB_PROFILE_LABEL.map((res, index) => (
                            <div
                                onClick={() => setActiveTab(index)}
                                key={`profile-${index}`}
                                className={`${styles.card} ${activeTab === index ? 'border-blue-primary border-b-4 text-xl-semibold' : 'border-b-gray-primary border-b'}`}
                            >
                                <p
                                    className={`${styles.tabTitle} ${activeTab === index ? 'text-blue-primary text-s-bold lg:text-black' : ''}`}
                                >
                                    {res.title}
                                </p>
                                <div
                                    className={`${styles.activeTab} ${activeTab === index ? 'block' : 'hidden'}`}
                                >
                                    <div className="lg:block hidden">
                                        <div className={styles.borderBottom} />
                                    </div>
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
                                <div className={styles.wrapperViewMore}>
                                    <p className={styles.viewMore}>VIEW MORE</p>
                                    <ChevronRightIcon className="stroke-blue-primary" />
                                </div>
                                <div className="hidden lg:block">
                                    <button
                                        className={`${styles.arrow} ${isScrollAtStart ? 'opacity-50' : ''}`}
                                        onClick={() => handleScroll('left')}
                                        disabled={isScrollAtStart}
                                    >
                                        <ChevronLeftIcon
                                            width={40}
                                            height={50}
                                            className="stroke-white"
                                        />
                                    </button>

                                    <button
                                        className={`${styles.arrow} ${isScrollAtEnd ? 'opacity-50' : ''}`}
                                        onClick={() => handleScroll('right')}
                                        disabled={isScrollAtEnd}
                                    >
                                        <ChevronRightIcon
                                            width={40}
                                            height={50}
                                            className="stroke-white"
                                        />
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
        'lg:flex items-center gap-10 my-16 mx-4 sm:mx-14 lg:mx-24 3xl:mx-56',
    wrapper: 'mb-16 lg:mb-0',
    title: 'text-[28px] lg:text-[42px] font-normal leading-[50px] text-center lg:text-start',
    tabView:
        'lg:border-b flex pb-1 pt-8 justify-around lg:flex gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible ',
    card: 'relative hover:text-blue-primary box-menu-profile cursor-pointer pb-2 lg:pb-0 w-full lg:border-b-0',
    tabTitle:
        'text-s-light lg:text-l-regular mx-2 text-center lg:whitespace-nowrap',
    borderBottom: 'border-with-arrow-bottom  w-full',
    activeTab: 'active-border-bottom ',
    titleNews: 'text-m-light text-blue-tertiary text-center lg:text-start',
    viewMore:
        'text-blue-primary text-s-medium py-6 lg:text text-center lg:text-start',
    arrow: 'text-5xl bg-red-primary py-2 px-2 mr-3 text-white',
    newsContainer: 'mt-10 flex lg:justify-start justify-center',
    wrapperViewMore: 'flex items-center justify-center lg:justify-start',
}
