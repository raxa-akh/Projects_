import { CollapsedPlayerLayout } from '@/layouts/collapsed-player-layout'

type Props = {

}

function CollapsedPlayer(props: Props) {
  const {} = props

  return (
    <CollapsedPlayerLayout
      imageSrc='/assets/SongImage.png'
      authorLabel='Without me'
      trackNameLabel='Halsey'
    />
  )
}

export { CollapsedPlayer }