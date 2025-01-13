import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkApi } from "../../..";

export const fetchNowPlaying = createAsyncThunk<
  any,
  void,
  ThunkApi
>(
  'nowPlaying/fetchNowPlaying',
  async (_, { rejectWithValue, extra }) => {
    const api = extra.services.api
    const { data } = await api.modules.nowPlaying.getById(1)
    return data
  }
)