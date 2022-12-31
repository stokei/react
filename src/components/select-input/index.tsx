import { forwardRef } from '@chakra-ui/react';
import {
  AutoCompleteInput,
  AutoCompleteInputProps
} from '@choc-ui/chakra-autocomplete';

export interface SelectInputProps extends AutoCompleteInputProps {}

export const SelectInput: React.FC<SelectInputProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <AutoCompleteInput
      focusBorderColor="primary.500"
      colorScheme="primary"
      errorBorderColor="error.500"
      size="lg"
      {...props}
      ref={ref}
    >
      {children}
    </AutoCompleteInput>
  )
);
