import { Button } from '@/components/button'
import { Form } from '@/components/form'
import { FormInput } from '@/components/form-input'
import { FormLink } from '@/components/form-link'
import { FormSeparator } from '@/components/form-separator'
import { FormText } from '@/components/form-text'
import { AppleIcon, GoogleIcon, VkOauthIcon } from '@/components/icons'
import { OauthButton } from '@/components/oath-button'
import { DesktopPlayerContent } from '@/containers/desktop-player'
import { useIsDesktop } from '@/hooks/use-is-desktop'
import { ShareMobileModalLayout } from '@/layouts/share-mobile-modal-layout'
import { SignModalLayout } from '@/layouts/sign-modal-layout'

import { useModals } from '@/services/modal-service'
import { FormEvent, useEffect, useState } from 'react'


type Props = {
  background: boolean
  id: `sign-up_${number}`
  extraData?: {
    share: {
      vk: string,
      instagram: string,
      facebook: string,
      link: string
    }
  }
}

function SignUpModal(props: Props) {
  const {} = props
  const modals = useModals()
  const onClose = () => modals.close(props.id)
  const isDesktop = useIsDesktop()
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>()


  const callbacks = {
    onSignUp: (e: FormEvent) => {
      e.preventDefault()
    }
  }

  return (
    <SignModalLayout
      onClose={onClose}
      title='СОЗДАЙТЕ АККАУНТ'
      playerDesktop={<DesktopPlayerContent/>}
    >
      <Form 
        onSubmit={callbacks.onSignUp}
        marginBottom='32'
      >
        <FormInput
          setValue={setEmail}
          type='email'
          placeholder={'E-mail'}
          value={email}
          marginBottom={isDesktop ? '24' : '16'}
          required
          id='email'
        />
        <FormInput
          setValue={setPassword}
          type='password'
          placeholder={'Пароль'}
          value={password}
          marginBottom={isDesktop ? '24' : '16'}
          required
          id='password'
        />
        <FormInput
          setValue={setConfirmPassword}
          type='password'
          placeholder={'Повторно введите пароль'}
          value={confirmPassword}
          marginBottom={isDesktop ? '24' : '16'}
          required
          id='confirmPassword'
        />
        <Button
          type='submit'
          marginBottom={isDesktop ? '24' : '16'}
        >
          Зарегистрироваться
        </Button>
      </Form>
      <FormSeparator marginBottom={isDesktop ? '32' : '24'}>
        или
      </FormSeparator>
      <OauthButton
        icon={<GoogleIcon size={32}/>}
        label='Войти через Google'
        marginBottom={isDesktop ? '16' : '12'}
      />
      <OauthButton
        icon={<AppleIcon width={26}/>}
        label='Войти через Apple'
        marginBottom={isDesktop ? '16' : '12'}
      />
      <OauthButton
        icon={<VkOauthIcon size={32}/>}
        label='Войти через VK'
        marginBottom={isDesktop ? '60' : '24'}
      />
      <FormLink 
        onClick={onClose}
        href='/'
        marginBottom='8'
      >Войти</FormLink>
      <FormText>Если у вас уже есть аккаунт</FormText>
    </SignModalLayout>
  )
}

export { SignUpModal }