type T_Banner = {
    title: string
    image_src: string
}

type T_StaticBannerProps = {
    banner: T_Banner
}

export default function StaticBanner({ banner }: T_StaticBannerProps) {
    return (
        <div className="overflow-hidden relative w-full h-full">
            <div className="flex transition duration-500">
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="bg-cover bg-center"
                        key={banner.title}
                        src={banner.image_src}
                        alt={banner.title}
                    />
                </div>
                )
            </div>
            <section className="mx-auto absolute top-[30%] left-20 z-40">
                <div>
                    <h1
                        style={{
                            textShadow: 'rgba(0, 0, 0, 0.1) 3px 2px',
                        }}
                        className="max-w-xl text-white text-2xl lg:text-4xl leading-[44px]"
                    >
                        {banner.title}
                    </h1>
                </div>
            </section>
            <div className="absolute bottom-0 w-full !h-full opacity-50 bg-custom-gradient-3" />
            <div
                className="absolute right-0 bottom-0 left-0 w-full h-[380px] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url('/images/curved.png')`,
                }}
            />
        </div>
    )
}