import {
  Text as ChakraText,
  TextProps as ChakraTextProps
} from '@chakra-ui/react';

export interface TextProps extends ChakraTextProps {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};
