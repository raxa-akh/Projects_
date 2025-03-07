import { useState } from 'react'
import cls from './style.module.scss'
import classNames from 'classnames'

type Props = {
  type: 'text' | 'password' | 'email'
  value: string | undefined
  setValue: (v: string | undefined) => void
  placeholder?: string
  error?: string
  marginBottom?: '16' | '24'
  required?: boolean
  id?: string
}

const mapMarginBottomToClass = {
  '16': cls.mb_16,
  '24': cls.mb_24
}

function FormInput(props: Props) {
  const {} = props

  const [visible, setVisible] = useState(false)
  const [focused, setFocused] = useState(false)

  return (
    <div className={cls.FormInput_wrapper}>
      <label className={classNames(cls.FormInput, {
        [cls.withError]: props.error,
        [cls.focused]: focused,
      }, props.marginBottom && mapMarginBottomToClass[props.marginBottom])}>
        <input
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={props.required}
          id={props.id}
          name={props.id}
          type={
            props.type === 'password' 
              ? visible
                ? 'text'
                : 'password'
              : props.type
          }
        />
       {props.type === 'password' && <button onClick={() => setVisible(prev => !prev)} type='button'>
          {
            visible 
              ? (
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.9473 7.75077C23.9127 7.67077 23.0666 5.77846 21.1771 3.87282C19.4238 2.10667 16.4116 0 12 0C7.58842 0 4.57618 2.10667 2.82294 3.87282C0.933422 5.77846 0.0873103 7.66769 0.0527336 7.75077C0.0179661 7.82954 0 7.9148 0 8.00103C0 8.08725 0.0179661 8.17251 0.0527336 8.25128C0.0873103 8.33026 0.933422 10.2226 2.82294 12.1282C4.57618 13.8944 7.58842 16 12 16C16.4116 16 19.4238 13.8944 21.1771 12.1282C23.0666 10.2226 23.9127 8.33333 23.9473 8.25128C23.982 8.17251 24 8.08725 24 8.00103C24 7.9148 23.982 7.82954 23.9473 7.75077ZM12 14.7692C8.80877 14.7692 6.0223 13.5979 3.71685 11.2892C2.7504 10.3206 1.93259 9.21196 1.29038 8C1.9324 6.78823 2.75024 5.67994 3.71685 4.7118C6.0223 2.40205 8.80877 1.23077 12 1.23077C15.1912 1.23077 17.9777 2.40205 20.2832 4.7118C21.2498 5.67994 22.0676 6.78823 22.7096 8C22.0618 9.25231 18.8136 14.7692 12 14.7692ZM12 3.28205C11.0748 3.28205 10.1703 3.55875 9.40103 4.07717C8.63173 4.59558 8.03214 5.33243 7.67807 6.19452C7.324 7.05661 7.23136 8.00523 7.41186 8.92043C7.59237 9.83562 8.0379 10.6763 8.69214 11.3361C9.34637 11.9959 10.1799 12.4453 11.0874 12.6273C11.9948 12.8093 12.9354 12.7159 13.7902 12.3588C14.645 12.0017 15.3756 11.397 15.8896 10.6212C16.4037 9.84529 16.678 8.93312 16.678 8C16.6764 6.74922 16.183 5.55014 15.3061 4.66571C14.4291 3.78127 13.2402 3.28368 12 3.28205ZM12 11.4872C11.3161 11.4872 10.6476 11.2827 10.079 10.8995C9.51041 10.5163 9.06723 9.97168 8.80553 9.33449C8.54383 8.69729 8.47535 7.99613 8.60877 7.31968C8.74218 6.64324 9.0715 6.02188 9.55506 5.53419C10.0386 5.0465 10.6547 4.71438 11.3254 4.57983C11.9962 4.44527 12.6914 4.51433 13.3232 4.77827C13.955 5.0422 14.495 5.48916 14.8749 6.06263C15.2549 6.63609 15.4577 7.3103 15.4577 8C15.4577 8.92486 15.0934 9.81184 14.4449 10.4658C13.7965 11.1198 12.917 11.4872 12 11.4872Z" fill="white"/>
                </svg>
              ) : (
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.603 2.08343C11.0667 2.02754 11.5332 1.99969 12 2C17.1304 2 21.24 5.31768 23 9.99992C22.574 11.1389 21.9983 12.2111 21.2895 13.1862M5.972 3.73598C3.728 5.15883 1.99 7.36337 1 9.99992C2.76 14.6822 6.8696 17.9998 12 17.9998C14.1253 18.0115 16.2121 17.4101 18.028 16.2627M9.668 7.57709C9.36154 7.89548 9.11844 8.27347 8.95259 8.68948C8.78673 9.10548 8.70137 9.55135 8.70137 10.0016C8.70137 10.4519 8.78673 10.8978 8.95259 11.3138C9.11844 11.7298 9.36154 12.1078 9.668 12.4262C9.97446 12.7446 10.3383 12.9971 10.7387 13.1695C11.1391 13.3418 11.5683 13.4305 12.0017 13.4305C12.435 13.4305 12.8642 13.3418 13.2646 13.1695C13.665 12.9971 14.0288 12.7446 14.3353 12.4262" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 1L21 19" stroke="white" stroke-linecap="round"/>
                </svg>
              )
          }
        </button>}
      </label>
      <p className={cls.FormInput_error}>
        {props.error}
      </p>
    </div>
  )
}

export { FormInput }