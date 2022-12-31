import { forwardRef } from '@chakra-ui/react';
import {
  AutoCompleteGroup,
  AutoCompleteGroupProps
} from '@choc-ui/chakra-autocomplete';

export interface SelectListGroupProps extends AutoCompleteGroupProps {}

export const SelectListGroup: React.FC<SelectListGroupProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <AutoCompleteGroup {...props} ref={ref}>
      {children}
    </AutoCompleteGroup>
  )
);
