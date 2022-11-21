import { Text, TextProps } from '@chakra-ui/react';

export interface LabelProps extends TextProps {}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Text fontSize="sm" fontWeight="bold" {...props}>
      {children}
    </Text>
  );
};
