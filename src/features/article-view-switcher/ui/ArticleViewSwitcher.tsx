import { FC, memo, useCallback } from 'react';

import { ArticleViewType } from '@/entities/article';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Icon } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { selectArticleView } from '../model/selectors/select-article-view-state';
import { viewTypes } from '../model/types/article-view.interface';

import styles from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
  className?: string;
}

const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo(({ className }) => {
  const { setView } = useActionCreators(allActions);

  const view = useAppSelector(selectArticleView);

  const handleSwitchView = useCallback(
    (articleView: ArticleViewType) => () => {
      setView({ view: articleView });
    },
    [setView]
  );

  return (
    <div className={cn(styles['view-switch-wrapper'], {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          className={cn(styles.button)}
          variant={ButtonVariantEnum.CLEAR}
          onClick={handleSwitchView(viewType.view)}
        >
          <Icon
            className={cn('', { [styles['not-selected']]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});

export default ArticleViewSwitcher;
