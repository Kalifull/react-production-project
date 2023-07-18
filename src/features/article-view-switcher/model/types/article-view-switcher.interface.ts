import { SVGProps, VFC } from 'react';

import { ArticleViewEnum } from '@/entities/article';

import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';

interface ViewType {
  view: ArticleViewEnum;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

export const viewTypes: ViewType[] = [
  {
    view: ArticleViewEnum.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleViewEnum.TILE,
    icon: TileIcon,
  },
];
