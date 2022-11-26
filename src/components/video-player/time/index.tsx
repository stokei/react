import { Text, TextProps } from '../../typography';

export interface TimeProps extends TextProps {}
export const Time: React.FC<TimeProps> = ({ children, ...props }) => (
  <Text
    color="white.500"
    textShadow="sm"
    lineHeight="shorter"
    fontSize="xs"
    {...props}
  >
    {children}
  </Text>
);
