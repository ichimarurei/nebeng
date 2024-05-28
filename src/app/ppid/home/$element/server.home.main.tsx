'use server'
import { CE_HomeBannerSection } from './client.home.banner.section'
import { CE_HomeProfile } from './client.home.profile'
import { CE_HomeYoutube } from './client.home.youtube'
import { SE_HomeNeedHelp } from './server.home.need.help'
import { SE_HomePublicInformationSection } from './server.home.public.information.section'

export async function SE_HomeMain() {
    return (
        <>
            <CE_HomeBannerSection />
            <SE_HomePublicInformationSection />
            <CE_HomeProfile />
            <CE_HomeYoutube />
            <SE_HomeNeedHelp />
        </>
    )
}
