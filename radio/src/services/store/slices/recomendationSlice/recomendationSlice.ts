import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as thunks from './thunks/exports';

type Share ={
    link: string,
    vk: string,
    instagram: string,
    facebook: string,
};

type CustomFields = {
    category: string,
};

type SongsState = {
    authorName: string,
    trackName :string,
    id: string,
    unique_id: string,
    share: Share,
    customFields: CustomFields,
}

type SongInfo = {
    loading: boolean,
    error: string | null,
}

type SongsArray = SongsState[];

type Songs = {
    songs: SongsArray,
    songInfo: SongInfo,
}

const initialState: Songs = {
    songs: [
        {
            authorName: '',
            trackName: '',
            id: '',
            unique_id: '',
            share: {
                link: '',
                vk: '',
                instagram: '',
                facebook: '',
            },
            customFields: {
                category: '',
            },
        }
    ],
    songInfo: {
        loading: false,
        error: null,
    },
}
    


const recomendationSlice = createSlice({
    name: 'recomendation',
    initialState,
    reducers: {
        // setAuthorName: (state, action) => {
        //     state.songs[0].authorName = action.payload;
        // },
        // setTrackName: (state, action) => {
        //     state.songs[0].trackName = action.payload;
        // },
        // setId: (state, action) => {
        //     state.songs[0].id = action.payload;
        // },
        // setUniqueId: (state, action) => {
        //     state.songs[0].unique_id = action.payload;
        // },
        // setShare: (state, action) => {
        //     state.songs[0].share = action.payload;
        // },
        // setCustomFields: (state, action) => {
        //     state.songs[0].customFields = action.payload;
        // },
        // setLoading: (state, action) => {
        //     state.songInfo.loading = action.payload;
        // },
        // setError: (state, action) => {
        //     state.songInfo.error = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
        .addCase(thunks.fetchRecomendation.pending, (state) => {
            state.songInfo.loading = true;
            state.songInfo.error = null;
        })
        .addCase(thunks.fetchRecomendation.fulfilled, (state, action) => {
            // state.loading = false;
            // state.authorName = action.payload.artist;
            // state.trackName = action.payload.title;
            // state.id = action.payload.id;
            // state.unique_id = action.payload.unique_id;
            // state.share = {
            //     link: action.payload.links?.self,
            //     vk: action.payload.links?.vk  || "/",
            //     instagram: action.payload.links?.instagram || "/",
            //     facebook: action.payload.links?.facebook || "/",
            // }
            // state.customFields = {
            //     category: action.payload.custom_fields?.category || ""
            // }

            // const obj = action.payload.map((item: any) =>{
            //     ({
            //         authorName: item.artist,
            //         trackName: item.title,
            //         id: item.id,
            //         unique_id: item.unique_id,
            //         share: {
            //             link: item.links?.self,
            //             vk: item.links?.vk  || "/",
            //             instagram: item.links?.instagram || "/",
            //             facebook: item.links?.facebook || "/",
            //         },
            //         customFields: {
            //             category: item.custom_fields?.category || ""
            //         },
            //     })
            // })

            function transformPayloadToSongs(payload: typeof action.payload): SongsState[] {
                //@ts-ignore
                return payload.map((item) => ({
                  authorName: item.artist,
                  trackName: item.title,
                  id: item.id,
                  unique_id: item.unique_id,
                  share: {
                    link: item.links.self,
                    vk: item.links?.vk,
                    instagram: item.links?.instagram,
                    facebook: item.links?.facebook,
                  },
                  customFields: {
                    category: item.custom_fields?.category,
                  },
                }));
              }
              
              
            state.songs = transformPayloadToSongs(action.payload);

        })
        .addCase(thunks.fetchRecomendation.rejected, (state, action) => {
            state.songInfo.loading = false;
            state.songInfo.error = action.error.message || 'Failed to fetch';
        });
    }
})

export const fetchRecomendationsActions = {
    ...recomendationSlice.actions,
    ...thunks
}

export default recomendationSlice.reducer;