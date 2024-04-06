import { useContext } from 'react';

import type { PopupDirection } from '../../../api';

import { PopupContext } from '../../../context';

type UsePopupResponse = Record<PopupDirection, string>;

/**
 * Custom hook that returns the PopupContext from the useContext hook. Throws an error if the context is not available.
 *
 * @return {UsePopupResponse} The popup context.
 */

const usePopup = (): UsePopupResponse => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('Popup compound components cannot be rendered outside the Popup Provider');
  }

  return context;
};

export default usePopup;
