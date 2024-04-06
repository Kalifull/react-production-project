import { type FC, forwardRef, memo } from 'react';

import Flex, { type FlexProps } from '../flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

const VStack: FC<VStackProps> = memo(
  forwardRef(({ align = 'start', ...restProps }, ref) => (
    <Flex direction="column" align={align} ref={ref} {...restProps} />
  ))
);

export default VStack;
