import { useMemo } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {}
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonTextColor = useMemo(() => {
    if (props.variant && props.variant !== 'solid') {
      return props.textColor;
    }
    const [color, range] = (props.textColor as string)?.split('.') || [];
    return color === 'white' || props.colorScheme === 'white'
      ? `black.${range}`
      : props.textColor;
  }, [props]);
  return (
    <ChakraButton
      {...props}
      colorScheme={props.colorScheme || 'primary'}
      textColor={buttonTextColor}
    >
      {children}
    </ChakraButton>
  );
};
