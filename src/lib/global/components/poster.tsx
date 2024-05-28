import Image from 'next/image'

type T_PosterProps = {
    title: string
    image: string
    width?: number
    height?: number
}

export default function Poster({
    title,
    image,
    width = 900,
    height = 1280,
}: T_PosterProps) {
    return (
        <>
            <p className="font-normal text-3xl leading-8 text-center">
                {title}
            </p>
            <Image
                width={width}
                height={height}
                className="w-full mt-10"
                src={image}
                alt={title}
            />
        </>
    )
}
