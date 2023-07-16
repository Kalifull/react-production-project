import { FC, memo } from 'react';

import { Card, Skeleton } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { ArticleViewEnum } from '../../model/types/article.interface';

import styles from './ArticleItem.module.scss';

interface ArticleSkeletonItemProps {
  className?: string;
  view: ArticleViewEnum;
}

export const ArticleSkeletonItem: FC<ArticleSkeletonItemProps> = memo(({ className, view }) => {
  return view === ArticleViewEnum.LIST ? (
    <Card className={cn('', {}, [className, styles[view]])}>
      <div className={cn(styles.header)}>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton className={cn(styles.username)} width={150} height={20} />
        <Skeleton className={cn(styles.date)} width={150} height={20} />
      </div>

      <Skeleton className={cn(styles.title)} width={250} height={20} />
      <Skeleton className={cn(styles.types)} width={150} height={20} />
      <Skeleton className={cn(styles.image)} width="100%" height={200} />

      <div className={cn(styles['text-block'], {}, [className])}>
        <Skeleton className={cn(styles['text-title'])} width={250} height={28} />
        <Skeleton className={cn(styles.paragraph)} width="100%" height={230} />
      </div>

      <div className={cn(styles.footer)}>
        <Skeleton width={200} height={36} />
        <Skeleton className={cn(styles.views)} width={100} height={20} />
      </div>
    </Card>
  ) : (
    <Card className={cn('', {}, [className, styles[view]])}>
      <div className={cn(styles['image-wrapper'])}>
        <Skeleton className={cn(styles.image)} width={200} height={200} />
      </div>

      <div className={cn(styles['info-wrapper'])}>
        <Skeleton className={cn(styles.types)} width={120} height={20} />
      </div>

      <Skeleton className={cn(styles.title)} width={150} height={20} />
    </Card>
  );
});
