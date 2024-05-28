import { T_Icon } from '@/app/ppid/$action/constant'

export function LogoutIcon({ width = 12, height = 12, className }: T_Icon) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.9">
                <path
                    d="M11.996 3H3V21H12"
                    stroke="#404040"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.5 16.5L21 12L16.5 7.5"
                    stroke="#404040"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 11.9961H21"
                    stroke="#404040"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}
