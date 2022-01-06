import { useRouter } from 'next/router'
import { LandingPageLayout } from '../../../layout/LandigPage'
import { CampaignRegisterForm } from '../../../layout/LandigPage/components/CampaignRegisterForm'

import { TopBanner } from '../../../layout/LandigPage/components/TopBanner'

export default function Register() {
  const router = useRouter()

  const { registerType } = router.query

  return (
    <LandingPageLayout>
      <TopBanner />
      <CampaignRegisterForm registerType={registerType} />
    </LandingPageLayout>
  )
}
