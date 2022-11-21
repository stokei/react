import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps as ChakraSimpleGridProps
} from '@chakra-ui/react';

export interface GridProps extends ChakraSimpleGridProps {}
export const Grid: React.FC<GridProps> = ({ children, ...props }) => (
  <ChakraSimpleGrid width="full" {...props}>
    {children}
  </ChakraSimpleGrid>
);
