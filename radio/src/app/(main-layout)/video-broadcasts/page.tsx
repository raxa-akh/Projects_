"use client"

import Search from '@/components/search-input/Search';
import { Track, TrackItem } from '@/components/track';
import { ItemsSlider } from '@/containers/items-slider';
import { useIsDesktop } from '@/hooks/use-is-desktop';
import { BottomScroll } from '@/layouts/bottom-scroll';
import { useCallback, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/services/store/';
import { fetchRecomendationsActions } from '@/services/store/slices/recomendationSlice/recomendationSlice';



export default function Podcasts() {
  const [search, setSearch] = useState<string | undefined>('')

  const dispatch = useDispatch<AppDispatch>()
  const songs = useSelector((state: RootState) => state.recomendation.songs)
	useEffect(() => {
    dispatch(fetchRecomendationsActions.fetchRecomendation(1))
	}, [dispatch])
  
  const isDesktop = useIsDesktop()

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
      }),

    trackItem: useCallback((item: TrackItem) => (
      <Track item={item} />
    ), []),
    
    hints: [
      'placeholder1',
      'placeholder2',
      'placeholder3',
      'placeholder4',
      'placeholder5',
      'placeholder6',
      'placeholder7',
    ]
  };


  return (
    <>
      <Search
        setValue={setSearch}
        value={search}
        hints={search ? renders.hints : undefined}
        marginBottom={isDesktop ? '40' : '20'}
        id={'Search'}

      />
      <BottomScroll>
        <ItemsSlider
          title='Популярные эфиры'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
        <ItemsSlider
          title='Новости'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
        <ItemsSlider
          title='Спорт'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
        <ItemsSlider
          title='Телемагазин'
          list={renders.tracks}
          renderItem={renders.trackItem}
        />
      </BottomScroll>
    </>
  );

}
