import { ReactNode } from 'react';
import { Link, LinkProps } from '../../link';
import { Box } from '../../box';
import { Stack } from '../../stack';
import { IconName, Icon } from '../../icon';

export interface SidebarNavLinkProps extends LinkProps {
  readonly icon: IconName;
  readonly badge?: ReactNode;
  readonly isActive?: boolean;
}

export const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
  children,
  badge,
  isActive,
  icon,
  ...props
}) => {
  const hoverStyle = {
    color: 'primary.500',
    background: 'background.200'
  };
  const activeStyle = isActive
    ? {
        ...hoverStyle,
        paddingLeft: '4',
        borderLeftWidth: 'thick',
        fontWeight: 'semibold',
        borderLeftColor: 'primary.500',
        roundedLeft: '0'
      }
    : {};
  return (
    <Link
      width="full"
      padding="3"
      paddingX="5"
      alignItems="center"
      color="text.500"
      rounded="md"
      {...props}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      _focus={isActive ? activeStyle : hoverStyle}
      _hover={isActive ? activeStyle : hoverStyle}
      _active={activeStyle}
      {...activeStyle}
    >
      <Stack alignItems="center" flex="1" direction="row" spacing="5">
        {icon && (
          <Box fontSize="lg">
            <Icon name={icon} />
          </Box>
        )}
        <Box>{children}</Box>
      </Stack>
      {badge}
    </Link>
  );
};
