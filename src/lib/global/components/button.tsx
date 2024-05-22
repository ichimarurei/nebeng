import { cva } from 'class-variance-authority'

type T_Intent = 'primary' | 'warning'

type T_Size = 'small' | 'large'

type T_ButtonVariantsProps = {
    intent?: T_Intent
    size?: T_Size
    fullwidth?: boolean
}

type T_ButtonProps = T_ButtonVariantsProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>

type T_ButtonVariantsFunction = (props: T_ButtonVariantsProps) => string

const ButtonVariants: T_ButtonVariantsFunction = cva(
    'transition-colors duration-300 ease-in-out cursor-pointer rounded-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none uppercase',
    {
        variants: {
            intent: {
                primary:
                    'bg-blue-primary hover:bg-opacity-90 text-white hover:text-white',
                warning:
                    'bg-orange-primary hover:bg-opacity-90 text-white hover:text-white',
            },
            size: {
                small: 'text-s-regular px-3 py-1.5',
                large: 'text-m-regular px-[28px] py-[15.5px]',
            },
            fullwidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'large',
            fullwidth: false,
        },
    }
)

export default function Button({
    intent,
    className,
    children,
    size,
    fullwidth,
    ...buttonProps
}: T_ButtonProps): JSX.Element {
    return (
        <button
            className={`${ButtonVariants({ intent, size, fullwidth })} ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    )
}
