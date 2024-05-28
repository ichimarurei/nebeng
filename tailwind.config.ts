/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/lib/global/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'custom-gradient':
                    'linear-gradient(180deg, rgba(199, 7, 64, 0) 0%, rgba(199, 7, 64, 1) 100%)',
                'custom-gradient-2':
                    'linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgb(148, 24, 61) 100%) !important',
                'custom-gradient-3':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 50%, #94183d 100%) !important',
            },
            fontSize: {
                // heading s
                'heading-s-bold': [
                    '30px',
                    {
                        lineHeight: '38px',
                        fontWeight: 700,
                    },
                ],
                'heading-s-semibold': [
                    '30px',
                    {
                        lineHeight: '38px',
                        fontWeight: 600,
                    },
                ],
                'heading-s-medium': [
                    '30px',
                    {
                        lineHeight: '38px',
                        fontWeight: 500,
                    },
                ],
                'heading-s-regular': [
                    '30px',
                    {
                        lineHeight: '38px',
                        fontWeight: 400,
                    },
                ],
                'heading-s-light': [
                    '30px',
                    {
                        lineHeight: '38px',
                        fontWeight: 300,
                    },
                ],
                // heading m
                'heading-m-bold': [
                    '60px',
                    {
                        lineHeight: '72px',
                        fontWeight: 700,
                    },
                ],
                'heading-m-semibold': [
                    '60px',
                    {
                        lineHeight: '72px',
                        fontWeight: 600,
                    },
                ],
                'heading-m-medium': [
                    '60px',
                    {
                        lineHeight: '72px',
                        fontWeight: 500,
                    },
                ],
                'heading-m-regular': [
                    '60px',
                    {
                        lineHeight: '72px',
                        fontWeight: 400,
                    },
                ],
                'heading-m-light': [
                    '60px',
                    {
                        lineHeight: '72px',
                        fontWeight: 300,
                    },
                ],
                // text xxl
                'xxl-bold': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: 700,
                    },
                ],
                'xxl-semibold': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: 600,
                    },
                ],
                'xxl-medium': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: 500,
                    },
                ],
                'xxl-regular': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: 400,
                    },
                ],
                'xxl-light': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: 300,
                    },
                ],
                // text xl
                'xl-bold': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: 700,
                    },
                ],
                'xl-semibold': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: 600,
                    },
                ],
                'xl-medium': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: 500,
                    },
                ],
                'xl-regular': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: 400,
                    },
                ],
                'xl-light': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: 300,
                    },
                ],
                // text l
                'l-bold': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: 700,
                    },
                ],
                'l-semibold': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: 600,
                    },
                ],
                'l-medium': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: 500,
                    },
                ],
                'l-regular': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: 400,
                    },
                ],
                'l-light': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: 300,
                    },
                ],
                // text m
                'm-bold': [
                    '14px',
                    {
                        lineHeight: '20px',
                        fontWeight: 700,
                    },
                ],
                'm-semibold': [
                    '14px',
                    {
                        lineHeight: '20px',
                        fontWeight: 600,
                    },
                ],
                'm-medium': [
                    '14px',
                    {
                        lineHeight: '20px',
                        fontWeight: 500,
                    },
                ],
                'm-regular': [
                    '14px',
                    {
                        lineHeight: '24px',
                        fontWeight: 400,
                    },
                ],
                'm-light': [
                    '14px',
                    {
                        lineHeight: '24px',
                        fontWeight: 300,
                    },
                ],
                // text s
                's-bold': [
                    '12px',
                    {
                        lineHeight: '18px',
                        fontWeight: 700,
                    },
                ],
                's-semibold': [
                    '12px',
                    {
                        lineHeight: '18px',
                        fontWeight: 600,
                    },
                ],
                's-medium': [
                    '12px',
                    {
                        lineHeight: '18px',
                        fontWeight: 500,
                    },
                ],
                's-regular': [
                    '12px',
                    {
                        lineHeight: '18px',
                        fontWeight: 400,
                    },
                ],
                's-light': [
                    '12px',
                    {
                        lineHeight: '18px',
                        fontWeight: 300,
                    },
                ],
            },
            colors: {
                'blue-primary': '#014a94',
                'orange-primary': '#f27224',
                'red-primary': '#c70740',
                'blue-secondary': '#65AFDF',
                'blue-tertiary': '#627D92',
                'gray-primary': '#979797',
            },
        },
    },
    plugins: [],
}
export default config
