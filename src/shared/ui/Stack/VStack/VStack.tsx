import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>
export const VStack = (props: VStackProps) => {
  const direction = 'column';
  const align = 'start';
  return (
    <Flex {...props} direction={direction} align={align} />
  );
};
