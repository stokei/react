import { ReactNode } from 'react';
import { Link, LinkProps } from '../../link';
import { Box } from '../../box';
import { Stack } from '../../stack';
import { IconName, Icon } from '../../icon';

export interface NavbarNavLinkProps extends LinkProps {
  readonly icon?: IconName;
  readonly badge?: ReactNode;
  readonly isActive?: boolean;
}

export const NavbarNavLink: React.FC<NavbarNavLinkProps> = ({
  children,
  badge,
  isActive,
  icon,
  ...props
}) => {
  const hoverStyle = {
    color: 'primary.900',
    background: 'background.200',
    rounded: 'md'
  };
  const activeStyle = isActive
    ? {
        ...hoverStyle,
        fontWeight: 'semibold'
      }
    : {};
  return (
    <Link
      padding="2"
      paddingX="5"
      alignItems="center"
      color="text.500"
      {...props}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      _hover={isActive ? activeStyle : hoverStyle}
      _active={activeStyle}
      {...activeStyle}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        flex="1"
        direction="row"
        spacing="4"
      >
        {icon && (
          <Box fontSize="lg">
            <Icon name={icon} />
          </Box>
        )}
        <Box>{children}</Box>
        {badge}
      </Stack>
    </Link>
  );
};
