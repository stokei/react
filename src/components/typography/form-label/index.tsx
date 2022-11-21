import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps
} from '@chakra-ui/react';

export interface FormLabelProps extends ChakraFormLabelProps {}

export const FormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => {
  return <ChakraFormLabel {...props}>{children}</ChakraFormLabel>;
};
