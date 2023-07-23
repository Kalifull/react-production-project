type PageScrollPosition = Record<string, number>;

export interface ScrollSchema {
  scroll: PageScrollPosition;
}

export interface PayloadScroll {
  pathname: string;
  position: number;
}
