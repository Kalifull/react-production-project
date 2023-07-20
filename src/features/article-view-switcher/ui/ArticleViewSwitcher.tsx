import { FC, memo, useCallback } from 'react';

import { ArticleViewEnum } from '@/entities/article';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Icon } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators } from '@/shared/lib/hooks';

import { viewTypes } from '../model/types/article-view-switcher.interface';

import styles from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleViewEnum;
}

const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo(({ className, view }) => {
  const { setView } = useActionCreators(allActions);

  const handleSwitchView = useCallback(
    (articleView: ArticleViewEnum) => () => {
      setView({ view: articleView });
    },
    [setView]
  );

  return (
    <div className={cn(styles['view-switch-wrapper'], {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          variant={ButtonVariantEnum.CLEAR}
          onClick={handleSwitchView(viewType.view)}
        >
          <Icon
            className={cn('', { [styles['not-selected']]: viewType.view !== view }, [])}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});

export default ArticleViewSwitcher;
