import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Services } from '../index'
import { exampleApi } from './rtk/example-api'
import { exampleReducer } from './slices/example'
import nowPlayingReducer from '../store/slices/nowPlayingSlice/nowPlayingSlice'
import recomendationReducer from "../store/slices/recomendationSlice/recomendationSlice"

const createStore = (services: Services) =>
	configureStore({
		reducer: combineReducers({
			[exampleApi.reducerPath]: exampleApi.reducer,
			example: exampleReducer,
			nowPlaying: nowPlayingReducer,
			recomendation: recomendationReducer,
            // Add more slices here as needed...
		}),
		//@ts-ignore
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						services
					}
				}
			}).concat(exampleApi.middleware)
	})

const createStoreWithServices = (services: Services): ReturnType<typeof createStore> & { services: Services } => {
	const store = createStore(services)
	return {
		...store,
		services
	}
}

type ReduxStore = ReturnType<typeof createStoreWithServices>

type RootState = ReturnType<ReduxStore['getState']>

type AppDispatch = ReduxStore['dispatch']

type ThunkApi = {
	extra: {
		services: Services
	}
	state: RootState
}

export { createStoreWithServices }
export type { RootState, AppDispatch, ReduxStore, ThunkApi }
