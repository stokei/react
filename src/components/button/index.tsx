import { useMemo } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react';
import { IColor, IColorHue, IColorName } from '../../interfaces';

export interface ButtonProps extends ChakraButtonProps {}
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonTextColor = useMemo(() => {
    if (props.variant && props.variant !== 'solid') {
      return props.textColor;
    }
    const [color, range] = (props.textColor as string)?.split('.') || [];
    const textColors: { [K in IColorName]?: string } = {
      white: `black.${range}`,
      cyan: `white.${range}`
    };
    const type = color || props.colorScheme;
    switch (type) {
      case 'white':
        return textColors.white;
      case 'cyan':
        return textColors.cyan;
      default:
        return props.textColor;
    }
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
