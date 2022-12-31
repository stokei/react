import { PropsWithChildren } from 'react';
import { AutoCompleteTag } from '@choc-ui/chakra-autocomplete';

export interface SelectInputTagProps {
  disabled?: boolean;
  label: string;
  onRemove?: () => void;
}

export const SelectInputTag: React.FC<
  PropsWithChildren<SelectInputTagProps>
> = ({ ...props }) => <AutoCompleteTag {...props} />;
