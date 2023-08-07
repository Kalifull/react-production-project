import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/store-provider';

import type { Recommendation } from '../types/recommendation.interface';

export const fetchRecommendations = createAsyncThunk<Recommendation[], void, ThunkConfig<string>>(
  'recommendationsInfo/fetchRecommendations',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data: recommendations } = await extra.api.get<Recommendation[]>('/articles', {
        params: {
          _limit: 4,
        },
      });

      if (!recommendations) {
        throw new Error();
      }

      return recommendations;
    } catch (error) {
      return rejectWithValue('recommendationsError');
    }
  }
);
