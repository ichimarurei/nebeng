import { T_Icon } from '@/app/ppid/$action/constant'

export function ChevronsDownIcon({
    width = 18,
    height = 18,
    className,
}: T_Icon) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 13L12 18L17 13M7 6L12 11L17 6"
                strokeWidth="1.5"
                stroke="blue"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
