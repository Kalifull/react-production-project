import { createSelector } from '@reduxjs/toolkit';

import { selectAuthData } from '@/entities/user';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/articles.svg';

import { routesPaths } from '@/shared/config';

import type { SidebarItemList } from '../types/sidebar-item-list.interface';

export const selectSidebarItemList = createSelector([selectAuthData], (authData) => {
  const sidebarItemList: SidebarItemList[] = [
    { id: 1, path: routesPaths.main, text: 'mainPage', Icon: MainIcon },
    { id: 2, path: routesPaths.about, text: 'aboutPage', Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemList.push(
      {
        id: 3,
        path: `${routesPaths.profile}${authData.id}`,
        text: 'profilePage',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        id: 4,
        path: routesPaths.articles,
        text: 'articlesPage',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
