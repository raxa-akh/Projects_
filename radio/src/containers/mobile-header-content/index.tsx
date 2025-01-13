import { MobileHeaderLayout } from '@/layouts/mobile-header-layout'
import cls from './style.module.scss'

type Props = {
  onToogleMenu?: () => void
}

function MobileHeaderContent(props: Props) {
  const {} = props

  return (
    <MobileHeaderLayout onToogleMenu={props.onToogleMenu}/>
  )
}

export { MobileHeaderContent }