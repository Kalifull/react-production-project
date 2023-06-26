import { useCallback, useState, useMemo, HTMLInputTypeAttribute } from 'react';

import ShownEyeIcon from '../../../assets/icons/shown-eye.svg';
import HiddenEyeIcon from '../../../assets/icons/hidden-eye.svg';

const usePasswordToggle = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const handleShownPasswordVisibility = useCallback(() => {
    setIsShownPassword((visibility) => !visibility);
  }, []);

  const Icon = useMemo(() => {
    return isShownPassword ? <ShownEyeIcon /> : <HiddenEyeIcon />;
  }, [isShownPassword]);

  const inputType: HTMLInputTypeAttribute = isShownPassword ? 'text' : 'password';

  return { Icon, inputType, handleShownPasswordVisibility };
};

export default usePasswordToggle;
