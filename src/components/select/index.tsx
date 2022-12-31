import { forwardRef } from '@chakra-ui/react';
import { AutoComplete, AutoCompleteProps } from '@choc-ui/chakra-autocomplete';

export interface SelectProps extends AutoCompleteProps {}

export const Select: React.FC<SelectProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <AutoComplete {...props} ref={ref as any}>
      {children}
    </AutoComplete>
  )
);
