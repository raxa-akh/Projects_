import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkApi } from "../../..";

export const fetchRecomendation = createAsyncThunk<
  any,
  number,
  ThunkApi
>(
  '/Recomendation/fetchRecomendation',
  async (id, { rejectWithValue, extra }) => {
    const api = extra.services.api
    const { data } = await api.modules.Recomendation.getById(id)
    return data
  }
)