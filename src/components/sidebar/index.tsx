import { Box, BoxProps } from '../box';

export * from './body';
export * from './footer';
export * from './header';
export * from './nav-link';

export interface SidebarProps extends BoxProps {}
export const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => (
  <Box width="full" {...props} flexDir="column">
    {children}
  </Box>
);
