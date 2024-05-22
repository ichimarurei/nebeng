import Image from 'next/image'

import NavbarHeader from './navbar.header'
import NavbarMenu from './navbar.menu'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <NavbarHeader />
                <div className={styles.container}>
                    <div className="flex items-center">
                        <Image
                            className="pr-4"
                            src="/images/logo-bri.png"
                            priority
                            width={175}
                            style={{ height: 55 }}
                            height={0}
                            alt="logo-bri"
                        />

                        <Image
                            priority
                            className={styles.iconPpid}
                            src="/images/logo-ppid.png"
                            width={135}
                            height={0}
                            style={{ height: 'auto' }}
                            alt="logo-ppid"
                        />
                    </div>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className={styles.buttonSidebar}
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
}

const styles = {
    navbar: 'fixed w-full bg-white z-50',
    wrapper:
        'w-full relative shadow-[0px_2px_2px_rgba(0,0,0,0.1)] pb-5 py-2 px-2 sm:px-5 md:px-14 lg:px-24 3xl:px-56',
    container: 'flex  items-center justify-between mt-2',
    iconContainer: 'flex items-center mx-2',
    iconPpid: 'border-l border-l-[#627d92] pl-4',
    buttonSidebar:
        'inline-flex items-center p-2 w-10 h-10 justify-center text-sm ' +
        'rounded-lg block min-[1070px]:hidden hover:bg-gray-100 focus:outline-none text-gray-500',
    navbarItems: 'hidden w-full min-[1070px]:block md:w-auto',
    navbarList: 'font-medium flex flex-col md:p-0 mt-4 md:flex-row gap-4',
    navbarText: 'text-m-regular inline-block  h-full pt-2 ',
    sliderBottom:
        'h-2 absolute duration-200 ease-in-out rounded-lg bg-red-primary bottom-0 mb-8',
}
