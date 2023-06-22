import { useState } from 'react';

import ShownEyeIcon from '../../../assets/icons/shown-eye.svg';
import HiddenEyeIcon from '../../../assets/icons/hidden-eye.svg';

const usePasswordToggle = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const handleShownPasswordVisibility = () => {
    setIsShownPassword((visibility) => !visibility);
  };

  const icon = isShownPassword ? <ShownEyeIcon /> : <HiddenEyeIcon />;

  const inputType = isShownPassword ? 'text' : 'password';

  return { icon, inputType, handleShownPasswordVisibility };
};

export default usePasswordToggle;
