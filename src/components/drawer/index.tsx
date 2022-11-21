import {
  Drawer as ChakraDrawer,
  DrawerCloseButton as ChakraDrawerCloseButton,
  DrawerContent as ChakraDrawerContent,
  DrawerOverlay as ChakraDrawerOverlay,
  DrawerProps as ChakraDrawerProps
} from '@chakra-ui/react';

export * from './header';
export * from './body';
export * from './footer';

export interface DrawerProps extends ChakraDrawerProps {}
export const Drawer: React.FC<DrawerProps> = ({ children, ...props }) => (
  <ChakraDrawer {...props}>
    <ChakraDrawerOverlay />
    <ChakraDrawerContent>
      <ChakraDrawerCloseButton />
      {children}
    </ChakraDrawerContent>
  </ChakraDrawer>
);
