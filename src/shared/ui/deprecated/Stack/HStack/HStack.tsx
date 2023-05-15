import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
  const direction = 'row';
  return <Flex direction={direction} {...props} />;
};