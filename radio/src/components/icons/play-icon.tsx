import cls from './style.module.scss'

type Props = {
  size?: number
}

function PlayIcon(props: Props) {
  const {size = 38} = props

  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_4036_3742)">
    <path d="M19.0002 0.111084C8.56883 0.111084 0.111328 8.56858 0.111328 19C0.111328 29.4314 8.56883 37.8889 19.0002 37.8889C29.4316 37.8889 37.8891 29.4314 37.8891 19C37.8891 8.56858 29.4316 0.111084 19.0002 0.111084ZM17.0578 11.5672L27.2972 17.6463C27.532 17.7856 27.7266 17.9837 27.8618 18.2211C27.9969 18.4584 28.068 18.7268 28.068 19C28.068 19.2731 27.9969 19.5415 27.8618 19.7789C27.7266 20.0162 27.532 20.2143 27.2972 20.3537L17.0578 26.4328C16.6993 26.6457 16.2908 26.7599 15.8738 26.7637C15.4569 26.7676 15.0463 26.6609 14.6839 26.4546C14.3216 26.2483 14.0203 25.9498 13.8107 25.5892C13.6012 25.2287 13.4909 24.8192 13.491 24.4022V13.5978C13.4909 13.1808 13.6012 12.7712 13.8107 12.4107C14.0203 12.0502 14.3216 11.7516 14.6839 11.5453C15.0463 11.339 15.4569 11.2324 15.8738 11.2362C16.2908 11.2401 16.6993 11.3543 17.0578 11.5672Z" fill="url(#paint0_linear_4036_3742)"/>
    </g>
    <defs>
    <filter id="filter0_b_4036_3742" x="-3.22201" y="-3.22225" width="44.444" height="44.4445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.66667"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4036_3742"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4036_3742" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_4036_3742" x1="0.111328" y1="18.6145" x2="25.6268" y2="18.6148" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1398A0"/>
    <stop offset="1" stop-color="#1BB8BD"/>
    </linearGradient>
    </defs>
    </svg>

  )
}

export { PlayIcon }