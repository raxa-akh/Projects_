import cls from './style.module.scss'

type Props = {
  size?: number
}

function InstagramIcon(props: Props) {
  const {size} = props

  return (
    <svg width={size || "40"} height={size || "40"} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
    <path d="M20 25C21.3261 25 22.5979 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5979 15.5268 21.3261 15 20 15C18.6739 15 17.4021 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4021 24.4732 18.6739 25 20 25Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.75 25V15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75H25C26.6576 8.75 28.2473 9.40848 29.4194 10.5806C30.5915 11.7527 31.25 13.3424 31.25 15V25C31.25 26.6576 30.5915 28.2473 29.4194 29.4194C28.2473 30.5915 26.6576 31.25 25 31.25H15C13.3424 31.25 11.7527 30.5915 10.5806 29.4194C9.40848 28.2473 8.75 26.6576 8.75 25Z" stroke="white" stroke-width="1.71429"/>
    <path d="M26.875 13.1373L26.8876 13.1235" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    

  )
}

export { InstagramIcon }