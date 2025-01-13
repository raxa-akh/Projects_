import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as thunks from './thunks/exports';

type SongInfo = {
	title: string
	artist: string
	art: string
}

type NowPlayingState = {
	songUrl: string
	songInfo: SongInfo
	duration: number
	loading: boolean
	error: string | null
}

const initialState: NowPlayingState = {
	songUrl: '',
	songInfo: {
		title: '',
		artist: '',
		art: ''
	},
	duration: 0,
	loading: false,
	error: null
}

// // Async thunk для получения текущей песни
// export const fetchNowPlaying = createAsyncThunk('nowPlaying/fetchNowPlaying', async () => {
// 	const response = await axios.get<any>('http://45.80.70.105/api/nowplaying/1', {
// 		headers: {
// 			'X-API-Key': 'c1cd5a7fa077874a:4741e78771760769cb7e6437027df5a2'
// 		}
// 	})
// 	return response.data
// })

const nowPlayingSlice = createSlice({
	name: 'nowPlaying',
	initialState,
	reducers: {
		setSongUrl: (state, action) => {
			state.songUrl = action.payload
		},
		setSongInfo: (state, action) => {
			state.songInfo = action.payload
		},
		setDuration: (state, action) => {
			state.duration = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(thunks.fetchNowPlaying.pending, state => {
				state.loading = true
			})
			.addCase(thunks.fetchNowPlaying.fulfilled, (state, action) => {
				const data = action.payload
				state.songUrl = data.station?.listen_url || ''
				state.duration = data.now_playing?.duration || 0
				state.songInfo = {
					title: data.now_playing?.song?.title || 'Unknown Title',
					artist: data.now_playing?.song?.artist || 'Unknown Artist',
					art: data.now_playing?.song?.art || 'unknown'
				}
				state.loading = false
				state.error = null
			})
			.addCase(thunks.fetchNowPlaying.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch data'
			})
	}
})

export const fetchNowPlayingActions = {
  ...nowPlayingSlice.actions,
  ...thunks
}
export default nowPlayingSlice.reducer
