import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {}
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ChakraButton colorScheme="primary" {...props}>
    {children}
  </ChakraButton>
);
