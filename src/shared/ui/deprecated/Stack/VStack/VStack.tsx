import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
  const direction = 'column';
  const { align = 'start' } = props;
  return <Flex {...props} direction={direction} align={align} />;
};
