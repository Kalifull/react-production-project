import type { SVGProps, VFC } from 'react';

import type { ArticleViewType } from '@/entities/article';

import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';

interface ViewType {
  view: ArticleViewType;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

export const viewTypes: ViewType[] = [
  {
    view: 'list',
    icon: ListIcon,
  },
  {
    view: 'tile',
    icon: TileIcon,
  },
];
