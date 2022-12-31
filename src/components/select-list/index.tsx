import { forwardRef } from '@chakra-ui/react';
import {
  AutoCompleteList,
  AutoCompleteListProps
} from '@choc-ui/chakra-autocomplete';

export interface SelectListProps extends AutoCompleteListProps {}

export const SelectList: React.FC<SelectListProps> = forwardRef(
  ({ children, ...props }, ref) => (
    <AutoCompleteList {...props} ref={ref}>
      {children}
    </AutoCompleteList>
  )
);
