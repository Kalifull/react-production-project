import { type FC, type ReactNode, createContext } from 'react';

import type { PopupDirection } from '../../api';

import { VStack } from '../../ui';

import { cn } from '../../lib';

import { directionClasses } from '../../ui/popup/constants/popup-const';

type PopupContextProps = Record<PopupDirection, string>;

export const PopupContext = createContext<PopupContextProps | null>(null);

interface PopupProviderProps {
  className?: string;
  children: ReactNode;
}

const PopupProvider: FC<PopupProviderProps> = ({ className, children }) => (
  <PopupContext.Provider value={directionClasses}>
    <VStack className={cn('', {}, [className])} align="center">
      {children}
    </VStack>
  </PopupContext.Provider>
);

export default PopupProvider;
