import { routesPaths } from '@/shared/config';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export interface SidebarItemType {
  id: number;
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  { id: 1, path: routesPaths.main, text: 'mainPage', Icon: MainIcon },
  { id: 2, path: routesPaths.about, text: 'aboutPage', Icon: AboutIcon },
  { id: 3, path: routesPaths.profile, text: 'profilePage', Icon: ProfileIcon },
];
