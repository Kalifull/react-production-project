export { fetchRecommendations } from './model/service/fetch-recommendations';
export {
  recommendationsActions,
  recommendationsReducer,
} from './model/slice/recommendations-slice';
export {
  selectRecommendationsState,
  selectRecommendationsInfo,
  selectRecommendationsIsLoading,
  selectRecommendationsError,
} from './model/selectors/select-recommendations-state';
export { default as RecommendationsList } from './ui/recommendations-list/RecommendationsList';
export type { RecommendationsSchema } from './model/types/recommendations-schema.interface';
