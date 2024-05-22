import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from 'react-icons/md'

import {
    BRI_PPID_CONTACT_PHONE,
    BRI_PPID_CONTACT_URL,
    BRI_PPID_EMAIL,
    BRI_PPID_EMAIL_URL,
    BRI_PPID_WA_PHONE,
    BRI_PPID_WA_URL,
} from './constants'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.container}>
                <div className={styles.contact}>
                    <div>
                        <h1 className={styles.title}>Head Office BRI</h1>
                        <p className={styles.companyTitle}>
                            PT. Bank Rakyat Indonesia (Persero) Tbk.
                        </p>
                        <div className={styles.flexLocation}>
                            <IoLocationOutline size={16} className="pt-1" />
                            <div>
                                <p>Gedung BRI 1</p>
                                <p>
                                    Gedung BRI 1 Lantai 6 Jl. Jenderal Sudirman
                                    Kav.44-46 <br /> Jakarta 10210 <br />
                                    Indonesia
                                </p>
                            </div>
                        </div>
                    </div>

                    <ul>
                        <h1 className={styles.title}>Contact Us</h1>
                        <li>
                            <Link
                                href={BRI_PPID_CONTACT_URL}
                                className={styles.buttonLink}
                            >
                                <MdOutlinePhoneEnabled
                                    className={styles.iconContact}
                                />
                                <p className={styles.textLink}>
                                    {BRI_PPID_CONTACT_PHONE}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={BRI_PPID_WA_URL}
                                className={styles.buttonLink}
                            >
                                <FaWhatsapp className={styles.iconContact} />
                                <p className={styles.textLink}>
                                    {BRI_PPID_WA_PHONE}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={BRI_PPID_EMAIL_URL}
                                className={styles.buttonLink}
                            >
                                <MdOutlineMailOutline
                                    className={styles.iconContact}
                                />
                                <p className={styles.textLink}>
                                    {BRI_PPID_EMAIL}
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxDescription}>
                        <p className="mb-6">
                            BRI is registered and supervised by the Financial
                            Services Authority
                        </p>
                        <p className="mb-6">BRI is a participant of LPS</p>
                    </div>
                </div>
            </section>
            <section className={styles.bottomFooter}>
                <div className={styles.bottomFooterContainer}>
                    <p className={styles.bottomFooterTitle}>
                        © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All
                        Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <FaFacebookF
                            className={styles.bottomFooterIcon}
                            size={14}
                        />
                        <FaTwitter
                            className={styles.bottomFooterIcon}
                            size={14}
                        />
                        <FaInstagram
                            className={styles.bottomFooterIcon}
                            size={14}
                        />
                        <FaYoutube
                            className={styles.bottomFooterIcon}
                            size={14}
                        />
                    </div>
                </div>
            </section>
        </footer>
    )
}

const styles = {
    footer: 'bg-white mt-8',
    container: 'grid xl:grid-cols-3 grid-cols-1 gap-4 mx-14 lg:mx-24 3xl:mx-56',
    contact: 'col-span-2 grid grid-cols-1 xl:grid-cols-2',
    title: 'text-xl-semibold text-blue-primary pb-7 mt-10 xl:mt-0 ',
    companyTitle: 'text-m-regular text-black pb-3',
    flexLocation: 'flex text-m-regular',
    buttonLink: 'flex items-center mb-2',
    iconContact: 'text-blue-primary',
    textLink:
        'text-m-light text-blue-primary border-b ' +
        'border-white hover:border-b hover:border-b-blue-primary ml-2',
    box: 'mt-14 flex-col flex items-start xl:items-end',
    boxDescription: 'text-blue-primary text-m-regular',
    bottomFooter: 'bg-blue-primary mt-16',
    bottomFooterContainer:
        'mx-10 xl:mx-24  gap-3 py-5 flex flex-col xl:flex-row justify-center xl:justify-between  items-center',
    bottomFooterTitle: 'text-m-regular text-white leading-5',
    bottomFooterIcon: 'text-white',
}
