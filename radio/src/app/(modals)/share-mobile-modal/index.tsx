import { useIsDesktop } from '@/hooks/use-is-desktop'
import { ShareMobileModalLayout } from '@/layouts/share-mobile-modal-layout'

import { useModals } from '@/services/modal-service'
import { useEffect } from 'react'


type Props = {
  background: boolean
  id: `share_${number}`
  extraData?: {
    share: {
      vk: string,
      instagram: string,
      facebook: string,
      link: string
    }
  }
}

function ShareMobileModal(props: Props) {
  const {} = props
  const modals = useModals()
  const onClose = () => modals.close(props.id)

  const isDesktop = useIsDesktop()

  // useEffect(() => {
  //   if (isDesktop) onClose()
  // }, [isDesktop])

  const callbacks = {

  }

  return (
    <ShareMobileModalLayout
      background={props.background}
      onClose={onClose}
      share={props.extraData?.share}
    />
  )
}

export { ShareMobileModal }