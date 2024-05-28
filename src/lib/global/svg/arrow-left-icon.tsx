import { T_Icon } from '@/app/ppid/$action/constant'

export function ArrowLeftIcon({ width = 18, height = 18, className }: T_Icon) {
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
                d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                // stroke="#404040"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.4999 12H3.66992"
                // stroke="#404040"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
