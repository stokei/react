import { PropsWithChildren } from 'react';
import { AutoCompleteGroupTitle } from '@choc-ui/chakra-autocomplete';
import { forwardRef } from '@chakra-ui/react';

export interface SelectListGroupTitleProps {}

export const SelectListGroupTitle: React.FC<
  PropsWithChildren<SelectListGroupTitleProps>
> = forwardRef(({ children, ...props }, ref) => (
  <AutoCompleteGroupTitle {...props} ref={ref}>
    {children}
  </AutoCompleteGroupTitle>
));
