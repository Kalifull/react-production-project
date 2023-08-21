import { FC, forwardRef, memo } from 'react';

import Flex, { FlexProps } from '../flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

const HStack: FC<HStackProps> = memo(
  forwardRef((props, ref) => <Flex direction="row" ref={ref} {...props} />)
);

export default HStack;
