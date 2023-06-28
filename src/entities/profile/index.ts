export { fetchProfileData } from './model/service/fetch-profile-data';
export { profileActions, profileReducer } from './model/slice/profile-slice';
export { default as ProfileCard } from './ui/profile-card/ProfileCard';
export {
  selectProfileState,
  selectProfileData,
  selectProfileIsLoading,
  selectProfileError,
} from './model/selectors/select-profile-state';
export type { Profile, ProfileSchema } from './model/types/profile-schema.interface';
