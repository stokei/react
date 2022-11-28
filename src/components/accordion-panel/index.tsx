import {
  AccordionPanel as ChakraAccordionPanel,
  AccordionPanelProps as ChakraAccordionPanelProps
} from '@chakra-ui/react';

export interface AccordionPanelProps extends ChakraAccordionPanelProps {}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  ...props
}) => <ChakraAccordionPanel {...props}>{children}</ChakraAccordionPanel>;
