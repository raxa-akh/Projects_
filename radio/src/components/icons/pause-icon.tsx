import cls from './style.module.scss'

type Props = {

}

function PauseIcon(props: Props) {
  const {} = props

  return (
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.78" filter="url(#filter0_b_2148_12873)">
<mask id="mask0_2148_12873" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="1" y="1" width="58" height="58">
<path d="M30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55Z" fill="white" stroke="white" stroke-width="8" stroke-linejoin="round"/>
<path d="M24.167 22.5V37.5ZM36.667 22.5V37.5Z" fill="white"/>
<path d="M24.167 22.5V37.5M36.667 22.5V37.5" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</mask>
<g mask="url(#mask0_2148_12873)">
<path d="M0 0H60V60H0V0Z" fill="url(#paint0_linear_2148_12873)"/>
</g>
</g>
<defs>
<filter id="filter0_b_2148_12873" x="-6" y="-6" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2148_12873"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2148_12873" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2148_12873" x1="0" y1="29.3878" x2="40.5246" y2="29.3882" gradientUnits="userSpaceOnUse">
<stop stop-color="#1398A0"/>
<stop offset="1" stop-color="#1BB8BD"/>
</linearGradient>
</defs>
</svg>

  )
}

export { PauseIcon }