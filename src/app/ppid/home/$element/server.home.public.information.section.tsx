'use server'

import { PUBLIC_INFORMATION_CONTENT } from '@/app/ppid/home/$action/constant'

export async function SE_HomePublicInformationSection() {
    return (
        <section className="bg-[#dce6f2] mt-20">
            <div className="w-full container mx-auto px-16 md:px-24 xl:px-36 p-14">
                <p className="text-[2rem] font-normal text-center">
                    Keterbukaan Informasi Publik
                </p>
                <aside className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {PUBLIC_INFORMATION_CONTENT.map((item, index) => (
                        <div
                            className={`${index % 2 === 0 ? 'bg-[#0b108c]' : 'bg-[#107fc9]'} text-center h-[300px] ${index === PUBLIC_INFORMATION_CONTENT.length - 1 ? 'rounded-br-[80px]' : ''}`}
                            key={item.title}
                        >
                            <div className="flex flex-col gap-8 justify-center h-full items-center text-white text-m-semibold uppercase">
                                <div className="w-20">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </section>
    )
}
