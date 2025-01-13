import cls from './style.module.scss'

type Props = {
  size?: number
}

function FacebookIcon(props: Props) {
  const {size} = props

  return (
<svg width={size || "40"} height={size || "40"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
<path d="M27 9H23.4545C21.8874 9 20.3844 9.57946 19.2762 10.6109C18.168 11.6424 17.5455 13.0413 17.5455 14.5V17.8H14V22.2H17.5455V31H22.2727V22.2H25.8182L27 17.8H22.2727V14.5C22.2727 14.2083 22.3972 13.9285 22.6189 13.7222C22.8405 13.5159 23.1411 13.4 23.4545 13.4H27V9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  )
}

export { FacebookIcon }