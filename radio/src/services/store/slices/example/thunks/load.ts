import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkApi } from "../../..";

export const load = createAsyncThunk<
  void,
  void,
  ThunkApi
>(
  'example/load',
  async (_, { rejectWithValue, extra }) => {
    const api = extra.services.api
    const { data } = await api.modules.nowPlaying.get()
    try {

    } catch (error) {
      return rejectWithValue(undefined);
    }
  }
)