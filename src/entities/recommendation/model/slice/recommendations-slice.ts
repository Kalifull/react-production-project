import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchRecommendations } from '../service/fetch-recommendations';

import type { Recommendation } from '../types/recommendation.interface';
import type {
  RecommendationsSchema,
  PayloadFetchRecommendationsError,
} from '../types/recommendations-schema.interface';

const initialState: RecommendationsSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
};

export const recommendationsAdapter = createEntityAdapter<Recommendation>({
  selectId: (recommendation) => recommendation.id,
});

export const recommendationsSlice = createSlice({
  name: 'recommendations-info',
  initialState: recommendationsAdapter.getInitialState<RecommendationsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchRecommendations.fulfilled,
        (state, { payload }: PayloadAction<Recommendation[]>) => {
          recommendationsAdapter.setAll(state, payload);
          state.isLoading = false;
        }
      )
      .addCase(
        fetchRecommendations.rejected,
        (state, { payload }: PayloadAction<PayloadFetchRecommendationsError>) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { actions: recommendationsActions, reducer: recommendationsReducer } =
  recommendationsSlice;
