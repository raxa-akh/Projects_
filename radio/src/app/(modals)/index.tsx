"use client"

import { useModals, useModalsStack } from "@/services/modal-service"
import { memo, useEffect, useRef } from "react"
import { ShareMobileModal } from "./share-mobile-modal"
import { SignInModal } from "./sign-in-modal"
import { SignUpModal } from "./sign-up-modal"

function Modals() {
  const modalsService = useModals()
  const modalsStack = useModalsStack()

  const modals = {
    [modalsService.types.share]: ShareMobileModal,
    [modalsService.types.signin]: SignInModal,
    [modalsService.types.signup]: SignUpModal,
  }

  const scrollbarWidthRef = useRef<number | undefined>(undefined)
  const modalStackRef = useRef<any>(undefined)

  useEffect(() => {
    //@ts-ignore
    const elements = document.querySelectorAll('[data-layout-padding]') as HTMLElement[]
    if (modalStackRef.current === modalsStack) return
    if (scrollbarWidthRef.current === undefined) {
      modalStackRef.current = modalsStack
      scrollbarWidthRef.current = window.innerWidth - document.body.clientWidth
      return
    } 
    if (modalsStack.length === 1) {
      elements.forEach((e) => {
        if (!e.style.paddingRight) {
          e.style.paddingRight = Number(window.getComputedStyle(e, null).getPropertyValue('padding-right').split('p')[0]) + (scrollbarWidthRef.current ? scrollbarWidthRef.current : 0) + 'px'
        }
      })
    } else if (modalsStack.length === 0) {
      elements.forEach((e) => {
        e.style.paddingRight = ""
      })
    }
  }, [modalsStack])

  return (
    <>
      {
        modalsStack && modalsStack.map((m,i) => {
          //@ts-ignore
          const ModalComponent = modals[m.type]
          //@ts-ignore
          return <ModalComponent background={(i + 1) === modalsStack.length} 
                                //@ts-ignore
                                id={m._id as any}
                                //@ts-ignore
                                key={m._id} 
                                //@ts-ignore
                                extraData={m.extraData as any}/>
        })
      } 
      {/* <SignInModal background={true} 
                                //@ts-ignore
                                id={1}
                                //@ts-ignore
                                key={1} 
                                //@ts-ignore
                                extraData={{} as any}/> */}
    </>
  )

}

const ModalsMemo = memo(Modals)

export { ModalsMemo as Modals }