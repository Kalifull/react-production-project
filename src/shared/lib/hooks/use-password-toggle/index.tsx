import { useCallback, useState, useMemo, type HTMLInputTypeAttribute } from 'react';

import ShownEyeIcon from '../../../assets/icons/shown-eye.svg';
import HiddenEyeIcon from '../../../assets/icons/hidden-eye.svg';

/**
 * Custom hook that toggle the visibility of a password input field.
 *
 * @return {Object} Object containing Icon, inputType, and handleShownPasswordVisibility.
 */

const usePasswordToggle = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const handleShownPasswordVisibility = useCallback(
    () => setIsShownPassword((visibility) => !visibility),
    []
  );

  const Icon = useMemo(
    () => (isShownPassword ? <ShownEyeIcon /> : <HiddenEyeIcon />),
    [isShownPassword]
  );

  const inputType: HTMLInputTypeAttribute = isShownPassword ? 'text' : 'password';

  return { Icon, inputType, handleShownPasswordVisibility };
};

export default usePasswordToggle;
