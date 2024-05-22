'use client'

import Link from 'next/link'
import { createRef, useEffect, useRef, useState } from 'react'

import { NAVBAR_LABEL_LIST } from './constants'
import NavbarChildMenu from './navbar.child.menu'

export default function NavbarMenu() {
    const refItem = useRef<Array<React.RefObject<HTMLAnchorElement>>>([])

    const [itemWidth, setItemWidth] = useState<string>('')
    const [sliderMove, setSliderMove] = useState<string>('')
    const route = 'home'

    refItem.current = NAVBAR_LABEL_LIST.map(
        (_, i) => refItem.current[i] ?? createRef()
    )

    const updateSliderBottom = () => {
        const linkElement = document.getElementById(`${route}-link`)
        if (linkElement) {
            const rect = linkElement.getBoundingClientRect()
            const leftMode = rect.left + 'px'

            setItemWidth(getComputedStyle(linkElement).width)
            setSliderMove(leftMode)
        }
    }

    useEffect(() => {
        updateSliderBottom()
        window.addEventListener('resize', updateSliderBottom)
        return () => {
            window.removeEventListener('resize', updateSliderBottom)
        }
    }, [])

    const handleHover = (index: number) => {
        if (refItem.current.length > 0 && refItem.current[index].current) {
            const rect = refItem.current[index].current?.getBoundingClientRect()
            if (rect?.left) {
                const lengthMove = rect.left
                setSliderMove(`${lengthMove}px`)
                const offsetWidth = rect.width
                setItemWidth(`${offsetWidth}px`)
            }
        }
    }

    return (
        <div className={styles.navbarItems}>
            <ul className="flex gap-x-4">
                {NAVBAR_LABEL_LIST.map((res, index) => (
                    <li key={index} className="box-parent relative">
                        <Link
                            href={!res.subMenu ? res.url : ''}
                            ref={refItem.current[index]}
                            onMouseMove={() => handleHover(index)}
                            id={`${res.url}-link`}
                            className={styles.navbarText}
                        >
                            {res.title}
                        </Link>
                        {res.subMenu && (
                            <NavbarChildMenu
                                title={res.title}
                                subMenu={res.subMenu}
                            />
                        )}
                    </li>
                ))}
                <hr
                    className={styles.sliderBottom}
                    style={{
                        width: itemWidth,
                        left: sliderMove,
                    }}
                />
            </ul>
        </div>
    )
}

const styles = {
    navbarItems: 'hidden w-full min-[1070px]:block md:w-auto',
    navbarList: 'font-medium flex flex-col md:p-0 mt-4 md:flex-row gap-4',
    navbarText: 'text-m-regular inline-block  h-full pt-2 ',
    sliderBottom:
        'h-2 absolute duration-200 ease-in-out rounded-lg bg-red-primary bottom-0 mb-8',
}
