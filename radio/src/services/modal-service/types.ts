
enum ModalCodes {
  share = 'share',
  signin = 'sign-in',
  signup = 'sign-up',
  // When adding a new modal, its code is passed
}

interface Modal {
  _id: `${ModalCodes}_${number}`
  type: ModalCodes,
}


interface ShareModal extends Modal {
  type: ModalCodes.share,
  extraData: {
    share: {
      vk: string,
      instagram: string,
      facebook: string,
      link: string
    }
  },
  resolve?: undefined
}
interface SignInModal extends Modal {
  type: ModalCodes.signin,
  extraData?: undefined,
  resolve?: undefined
}
interface SignUpModal extends Modal {
  type: ModalCodes.signin,
  extraData?: undefined,
  resolve?: undefined
}



type Modals = {
  share: ShareModal,
  signin: SignInModal,
  signup: SignUpModal,
  // When adding a new modal, its type is passed
}



type ModalsConfig = {}
export type { ModalsConfig, Modals }
export { ModalCodes }