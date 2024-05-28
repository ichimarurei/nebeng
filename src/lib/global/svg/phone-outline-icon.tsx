import { T_Icon } from '@/app/ppid/$action/constant'

export function PhoneOutlineIcon({
    width = 12,
    height = 12,
    className,
}: T_Icon) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M22.14,1.94s-1.09-.95-1.09-.95c-1.37-1.32-3.56-1.31-4.95,.08l-2.07,2.24c-.66,.66-1.03,1.54-1.03,2.48s.36,1.81,1.02,2.47l.4,.4c-1.27,2.68-3.17,4.58-5.76,5.78l-.41-.4c-.66-.66-1.54-1.02-2.47-1.02s-1.81,.36-2.44,.99l-2.32,2.15c-.66,.66-1.03,1.54-1.03,2.48s.35,1.78,.98,2.43c0,0,.93,1.07,.95,1.09,1.2,1.2,2.82,1.86,4.56,1.86,7.52,0,17.5-9.98,17.5-17.5,0-1.74-.66-3.36-1.86-4.56ZM6.5,21c-.92,0-1.78-.34-2.41-.95,0,0-.92-1.06-.95-1.08-.13-.13-.15-.28-.15-.35s.02-.23,.11-.31l2.32-2.15c.13-.13,.28-.15,.35-.15s.23,.02,.35,.15l1.13,1.12c.42,.41,1.04,.54,1.59,.33,4.1-1.56,7.04-4.5,8.73-8.72,.22-.55,.1-1.19-.32-1.61l-1.12-1.14c-.13-.13-.15-.28-.15-.35s.02-.23,.19-.39l2.07-2.24c.2-.19,.51-.19,.71,0,.02,.02,1.08,.95,1.08,.95,.61,.63,.95,1.48,.95,2.41,0,6.4-8.99,14.5-14.5,14.5Z" />
        </svg>
    )
}
