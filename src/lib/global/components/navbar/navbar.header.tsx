'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaPhone,
    FaSearch,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { LuChevronsDown } from 'react-icons/lu'

import Button from '@/lib/global/components/button'

import {
    BRI_FACEBOOK_URL,
    BRI_INSTAGRAM_URL,
    BRI_X_URL,
    BRI_YOUTUBE_URL,
    SCROLL_THRESHOLD_NAVBAR,
} from './constants'

export default function NavbarHeader() {
    const [isHiddenHeader, setIsHiddenHeader] = useState<boolean>(false)

    const handleScroll = () => {
        const currentScrollY = window.scrollY
        if (currentScrollY > SCROLL_THRESHOLD_NAVBAR) {
            setIsHiddenHeader(true)
        } else {
            setIsHiddenHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleRedirectUrl = (url: string) => {
        window.open(url)
    }

    return (
        <header style={{ display: isHiddenHeader ? 'none' : 'block' }}>
            <div className={styles.container}>
                <div className={styles.highlight}>
                    <p className={styles.highlightText}>
                        Back to corporate site
                    </p>
                    <div className={styles.highlightIcon}>
                        <LuChevronsDown className={styles.chevronIcon} />
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contactItem}>
                        <FaSearch size={12} />
                        <p className={styles.contactText}>Search</p>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhone size={12} />
                        <p className={styles.contactText}>Contact Us</p>
                    </div>
                    <div className="gap-6 flex">
                        <button
                            onClick={() => handleRedirectUrl(BRI_FACEBOOK_URL)}
                        >
                            <FaFacebookF size={12} />
                        </button>
                        <button onClick={() => handleRedirectUrl(BRI_X_URL)}>
                            <FaTwitter size={12} />
                        </button>
                        <button
                            onClick={() => handleRedirectUrl(BRI_INSTAGRAM_URL)}
                        >
                            <FaInstagram size={12} />
                        </button>
                        <button
                            onClick={() => handleRedirectUrl(BRI_YOUTUBE_URL)}
                        >
                            <FaYoutube size={12} />
                        </button>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.flexLocalization}>
                        <button className={styles.localizationButton}>
                            <p className="text-s-regular">ID</p>
                        </button>
                        <button className={styles.localizationButton}>
                            <p className="text-s-regular">EN</p>
                        </button>
                    </div>
                    <Link href="/signin">
                        <Button size="small" className={styles.loginButton}>
                            <IoLogInOutline />
                            <p className="text-m-regular">Login</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

const styles = {
    container: `justify-end mt-1 items-center min-[1070px]:flex hidden`,
    highlight: 'h-full ml-16 relative mt-3',
    highlightText: 'text-s-regular text-blue-primary mb-1',
    highlightIcon: 'absolute  left-[40%]',
    chevronIcon: 'floating text-blue-primary items-center mb-4 ',
    contact: 'items-center ml-auto flex gap-7 mb-2',
    contactItem: 'flex items-center gap-2',
    contactText: 'text-s-regular font-light',
    divider: 'w-[1px] bg-black h-[15px] ',
    flexLocalization: 'flex gap-2',
    localizationButton: 'border border-orange-primary px-1 rounded-sm',
    loginButton: 'flex items-center text-white gap-2',
}
