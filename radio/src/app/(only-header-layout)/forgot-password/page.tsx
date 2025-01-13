"use client"

import { Button } from "@/components/button";
import { FormInput } from "@/components/form-input";
import { FormWithIcon } from "@/components/form-with-icon";
import { EmailIcon } from "@/components/icons";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {

  const isDesktop = useIsDesktop()
  const [email, setEmail] = useState<string | undefined>()


  return (<FormWithIcon
    icon={<EmailIcon 
      width={isDesktop ? 48 : 36}
    />}

  > 
    <FormWithIcon.Title 
      marginBottom={isDesktop ? '24' : '16'}
      fontSize={isDesktop ? '24' : '20'}
    >
      Восстановление пароля
    </FormWithIcon.Title>
    <FormWithIcon.P marginBottom={isDesktop ? '32' : '24'}>
      Пожалуйста, укажите адрес электронной почты, указанный при регистрации. Мы вышлем вам ссылку для сброса пароля.
    </FormWithIcon.P>
    <FormInput 
      setValue={setEmail}
      type="email"
      value={email}
      id="email"
      placeholder="E-mail"
      marginBottom={isDesktop ? '24' : '16'}
      required
    />
    <Button type="submit" disabled>Получить ссылку</Button>
  </FormWithIcon>)
}