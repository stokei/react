import { forwardRef } from '@chakra-ui/react';
import {
  AutoCompleteItem,
  AutoCompleteItemProps
} from '@choc-ui/chakra-autocomplete';

export interface SelectOptionProps extends AutoCompleteItemProps {}

export const SelectOption: React.FC<SelectOptionProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <AutoCompleteItem {...props} ref={ref}>
      {children}
    </AutoCompleteItem>
  )
);
