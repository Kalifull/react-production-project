import type { EntityState } from '@reduxjs/toolkit';

import type { Recommendation } from './recommendation.interface';

export interface RecommendationsSchema extends EntityState<Recommendation> {
  isLoading: boolean;
  error?: string | null;
}

export type PayloadFetchRecommendationsError = string | undefined;
