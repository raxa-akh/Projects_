"use client"

import { Button } from "@/components/button";
import { ButtonBlack } from "@/components/button-black";
import { FormInput } from "@/components/form-input";
import { FormWithIcon } from "@/components/form-with-icon";
import { EmailIcon } from "@/components/icons";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { FormEvent, useState } from "react";

export default function VerifyEmailPage() {

  const isDesktop = useIsDesktop()
  const [email, setEmail] = useState<string | undefined>()
  const [codeSended, setCodeSended] = useState<boolean>(false)

  const callbacks = {
    handleSubmit: (e: FormEvent) => {
      e.preventDefault()
      if (email) setCodeSended(true)
    },
    handleReset: (e: FormEvent) => {
      e.preventDefault()
      setCodeSended(false)
    },
  }

  if (codeSended) {
    return (<FormWithIcon
      icon={<EmailIcon 
        width={isDesktop ? 48 : 36}
      />}
      onSubmit={callbacks.handleReset}
    > 
      <FormWithIcon.Title 
        marginBottom={isDesktop ? '24' : '16'}
        fontSize={isDesktop ? '24' : '20'}
      >
        Проверьте свою электронную почту
      </FormWithIcon.Title>
      <FormWithIcon.P marginBottom={isDesktop ? '40' : '24'}>
        Мы отправили письмо на <strong>{email}</strong>
      </FormWithIcon.P>
      <FormWithIcon.P marginBottom={'24'}>
        Отправить повторно через <strong>02:00</strong>
      </FormWithIcon.P>
      <ButtonBlack type="submit">Изменить адрес</ButtonBlack>
    </FormWithIcon>)
  }

  return (<FormWithIcon
    icon={<EmailIcon 
      width={isDesktop ? 48 : 36}
    />}
    onSubmit={callbacks.handleSubmit}
  > 
    <FormWithIcon.Title 
      marginBottom={isDesktop ? '24' : '16'}
      fontSize={isDesktop ? '24' : '20'}
    >Подтверждение электронной почты</FormWithIcon.Title>
    <FormWithIcon.P marginBottom={isDesktop ? '32' : '24'}>Мы вышлем ссылку для подтверждения на указанный вами адрес электронной почты.</FormWithIcon.P>
    <FormInput 
      setValue={setEmail}
      type="email"
      value={email}
      id="email"
      placeholder="E-mail"
      marginBottom={isDesktop ? '24' : '16'}
      required

    />
    <Button type="submit">Отправить ссылку</Button>
  </FormWithIcon>)
}