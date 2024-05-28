import { T_Icon } from '@/app/ppid/$action/constant'

export function PhoneIcon({ width = 12, height = 12, className }: T_Icon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M24,6.24c0,7.64-10.13,17.76-17.76,17.76-1.67,0-3.23-.63-4.38-1.78l-1-1.15c-1.16-1.16-1.16-3.12,.05-4.33,.03-.03,2.44-1.88,2.44-1.88,1.2-1.14,3.09-1.14,4.28,0l1.46,1.17c3.2-1.36,5.47-3.64,6.93-6.95l-1.16-1.46c-1.15-1.19-1.15-3.09,0-4.28,0,0,1.85-2.41,1.88-2.44,1.21-1.21,3.17-1.21,4.38,0l1.05,.91c1.2,1.19,1.83,2.75,1.83,4.42Z" />
        </svg>
    )
}
