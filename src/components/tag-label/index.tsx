import {
  TagLabel as ChakraTagLabel,
  TagLabelProps as ChakraTagLabelProps
} from '@chakra-ui/react';

export interface TagLabelProps extends ChakraTagLabelProps {}
export const TagLabel: React.FC<TagLabelProps> = ({ children, ...props }) => (
  <ChakraTagLabel {...props}>{children}</ChakraTagLabel>
);
