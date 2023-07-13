import { createSelector } from '@reduxjs/toolkit';

import { selectAuthData } from '@/entities/user';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/articles.svg';

import { routesPaths } from '@/shared/config';

import { SidebarItemType } from '../types/sidebar-item.interface';

export const selectSidebarItems = createSelector([selectAuthData], (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { id: 1, path: routesPaths.main, text: 'mainPage', Icon: MainIcon },
    { id: 2, path: routesPaths.about, text: 'aboutPage', Icon: AboutIcon },
  ];

  if (authData) {
    sidebarItemsList.push(
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

  return sidebarItemsList;
});
