import {
  Text as ChakraText,
  TextProps as ChakraTextProps
} from '@chakra-ui/react';

export interface TextProps extends ChakraTextProps {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <ChakraText display="inline-flex" {...props}>
      {children}
    </ChakraText>
  );
};
