export type T_BaseMenuItem = {
    title: string
    url: string
}

export type T_MenuItemWithSubMenu = T_BaseMenuItem & {
    subMenu?: Array<T_BaseMenuItem>
}
export enum E_Navbar {
    HOME = 'home',
    PUBLIC_INFORMATION = 'public-information',
    STANDARD_SERVICES = 'standard-services',
    PROFILE = 'profile',
    REGULATION = 'regulation',
    FAQ = 'faq',
}

export const BRI_FACEBOOK_URL = 'https://www.facebook.com/BRIofficialpage'
export const BRI_X_URL = 'https://x.com/kontakbri'
export const BRI_INSTAGRAM_URL = 'https://www.instagram.com/bankbri_id'
export const BRI_YOUTUBE_URL =
    'https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA'

export const SCROLL_THRESHOLD_NAVBAR = 70

const STANDARD_SERVICE_MENU_ITEMS: Array<T_BaseMenuItem> = [
    {
        title: 'Maklumat',
        url: '',
    },
    {
        title: 'Procedure for Requesting Information',
        url: '',
    },
    {
        title: 'Procedure for submitting an objection',
        url: '',
    },
    {
        title: 'Information Dispute Procedure',
        url: '',
    },
]

const PUBLIC_INFORMATION_MENU_ITEMS: Array<T_BaseMenuItem> = [
    {
        title: 'Announced periodically',
        url: '',
    },
    {
        title: 'Announced immediately',
        url: '',
    },
    {
        title: 'Available at all times',
        url: '',
    },
    {
        title: 'Public Information Services Report',
        url: '',
    },
]

const PROFILE_MENU_ITEMS: Array<T_BaseMenuItem> = [
    {
        title: 'Profile PPID',
        url: '',
    },
    {
        title: 'Vision & Mission',
        url: '',
    },
    {
        title: 'Structure Organization',
        url: '',
    },
    {
        title: 'Duties and Authorities',
        url: '',
    },
    {
        title: 'PPID Wilayah',
        url: '',
    },
]

export const NAVBAR_LABEL_LIST: Array<T_MenuItemWithSubMenu> = [
    { title: 'HOME', url: E_Navbar.HOME },
    {
        url: E_Navbar.PUBLIC_INFORMATION,
        title: 'PUBLIC INFORMATION',
        subMenu: PUBLIC_INFORMATION_MENU_ITEMS,
    },
    {
        title: 'STANDARD SERVICES',
        url: E_Navbar.STANDARD_SERVICES,
        subMenu: STANDARD_SERVICE_MENU_ITEMS,
    },
    {
        title: 'PROFILE',
        url: E_Navbar.PROFILE,
        subMenu: PROFILE_MENU_ITEMS,
    },
    { title: 'REGULATION', url: E_Navbar.REGULATION },
    { title: 'FAQ', url: E_Navbar.FAQ },
]
