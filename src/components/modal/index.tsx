import {
  Modal as ChakraModal,
  ModalCloseButton as ChakraModalCloseButton,
  ModalContent as ChakraModalContent,
  ModalOverlay as ChakraModalOverlay,
  ModalProps as ChakraModalProps
} from '@chakra-ui/react';

export interface ModalProps extends ChakraModalProps {}
export const Modal: React.FC<ModalProps> = ({ children, ...props }) => (
  <ChakraModal scrollBehavior="inside" size="lg" {...props}>
    <ChakraModalOverlay />
    <ChakraModalContent>
      <ChakraModalCloseButton />
      {children}
    </ChakraModalContent>
  </ChakraModal>
);
