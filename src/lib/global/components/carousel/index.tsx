import { useCallback, useEffect, useRef, useState } from 'react'

import Button from '@/lib/global/components/button'

type T_Slide = {
    title: string
    description?: string
    button_title: string
    image_src: string
}

type T_CarouselProps = {
    slides: Array<T_Slide>
}

export default function Carousel({ slides }: T_CarouselProps) {
    const [current, setCurrent] = useState(0)
    const intervalRef = useRef<number | null>(null)
    const interval = 3000

    const nextSlide = useCallback(() => {
        if (current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }, [current, slides.length])

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            nextSlide()
        }, interval)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [current, interval, nextSlide])

    return (
        <div className="overflow-hidden relative w-full h-full">
            <div
                className="flex transition duration-500"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((slide) => {
                    return (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={slide.title}
                            src={slide.image_src}
                            alt={slide.title}
                        />
                    )
                })}
            </div>
            <section className=" mx-auto absolute top-[27%] left-20 z-40">
                <div className="">
                    <h1 className="max-w-xl text-white text-xxl-regular text-[35px] mb-[14px] leading-[44px]">
                        {slides[current].title}
                    </h1>
                    {slides[current]?.description && (
                        <p className="text-white text-l-regular mb-[14px]">
                            {slides[current].description}
                        </p>
                    )}
                    <Button intent="warning">
                        <p className="text-white">
                            {slides[current].button_title}
                        </p>
                    </Button>
                </div>
            </section>
            <div className="absolute bottom-0 w-full h-full opacity-40 bg-custom-gradient" />
            <div
                className="absolute right-0 bottom-0 left-0 w-full h-[380px] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url('/images/curved.png')`,
                }}
            />

            <div className="absolute right-24 top-[27%] flex flex-col gap-4">
                {slides.map((_, i) => {
                    return (
                        <div
                            key={'circle' + i}
                            onClick={() => {
                                setCurrent(i)
                            }}
                            className={`rounded-full size-[15px] cursor-pointer ${
                                i == current
                                    ? 'bg-red-primary'
                                    : 'bg-[#C707404D]'
                            }`}
                        />
                    )
                })}
            </div>
        </div>
    )
}
