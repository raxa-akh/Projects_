'use client'

import React, { useState, useRef } from 'react'
import style from './search.module.scss'
import classNames from 'classnames'
import { LoupeIcon, XmarkIcon } from '../icons'
import { useForeignClickOrFocus } from '@/hooks/use-foreign-click-or-focus'

const mapMarginBottomToClass = {
  '40': [style.mb_40],
  '20': [style.mb_20],
}

type Props = {
  value: string | undefined
  setValue: (v: string | undefined) => void
  hints?: string[]
  marginBottom?: '40' | '20'
  id?: string
}

const Search = (props: Props) => {
  const {hints, setValue, value, marginBottom} = props
  const [isFocused, setIsFocused] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

	const handleInputChange = (e: any) => {
		setValue(e.target.value)
	}

  useForeignClickOrFocus([ref], () => setShowHints(false))

	return (
		<div ref={ref} id={props.id} className={classNames(style.search_wrap, marginBottom && mapMarginBottomToClass[marginBottom])} onClick={() => inputRef.current?.focus()}>
			<div className={classNames(style.input_wrap, {[style.focused]: isFocused})}>
				<LoupeIcon color={isFocused ? '#fff' : '#999999'}/>
				<input 
          type='text'
           name='search'  
           placeholder='Поиск' 
           value={value} 
           onChange={handleInputChange} 
           ref={inputRef}
           onFocus={() => {setIsFocused(true); setShowHints(true)}}
           onBlur={() => {setIsFocused(false)}}
           autoComplete='off'
        />
				{value && <button 
          className={style.Search_clearButton}
          onClick={() => setValue('')}
        >
          <XmarkIcon color='#fff'/>
        </button>}
			</div>

			{showHints && hints?.length && (
				<div className={style.clue_list} onClick={e => e.stopPropagation()}>
					<ul>
						{hints.map(h => <li key={h} onClick={() => {setShowHints(false); setValue(h)}}>{h}</li>)}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Search
