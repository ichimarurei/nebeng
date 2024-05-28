import { T_Icon } from '@/app/ppid/$action/constant'

export function ChevronLeftIcon({
    width = 18,
    height = 18,
    className,
}: T_Icon) {
    return (
        <svg
            width={width}
            className={className}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 18L9 12L15 6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
