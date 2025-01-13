"use client"
import axios from 'axios';
import Carousel from '@/components/carousel/Karucel'
import { Track, TrackItem } from '@/components/track';
import { BottomScroll } from '@/layouts/bottom-scroll';
import { useCallback, useEffect, useState } from 'react';
import { ItemsSlider } from '@/containers/items-slider';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/services/store/';
import { fetchRecomendationsActions } from '@/services/store/slices/recomendationSlice/recomendationSlice';



export default function Home() {

  // const [allTracks, setAllTracks] = useState({});

  const dispatch = useDispatch<AppDispatch>()
  const songs = useSelector((state: RootState) => state.recomendation.songs)
	useEffect(() => {
    dispatch(fetchRecomendationsActions.fetchRecomendation(1))
	}, [dispatch])
  
 





  const renders = {
    tracks: 
    songs.map((item) => 
        {
          const share = {
          //@ts-ignore
          link: item.share.link,
          vk: '/',
          instagram: '/',
          facebook: '/'
        }
          //@ts-ignore
          return {authorName: item.authorName, trackName: item.trackName, id: item.id, imageSrc: `http://45.80.70.105/api/station/${1}/art/${item.unique_id}`, share}
        })
    ,

    trackItem: useCallback((item: TrackItem) => (
      <Track item={item} />
    ), []),
  };



  return (
    <>
      <Carousel/>
      <BottomScroll>
        <ItemsSlider
          title='Лучшие треки'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
        <ItemsSlider
          title='Рекомендуем'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
        <ItemsSlider
          title='Лучшие треки'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
      </BottomScroll>
    </>
  );

}