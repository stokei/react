import {
  Menu as ChakraMenu,
  MenuProps as ChakraMenuProps
} from '@chakra-ui/react';

export * from './button';
export * from './divider';
export * from './group';
export * from './item';
export * from './list';

export interface MenuProps extends ChakraMenuProps {}
export const Menu: React.FC<MenuProps> = ({ children, ...props }) => (
  <ChakraMenu {...props}>{children}</ChakraMenu>
);
