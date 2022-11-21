import { Input, InputProps } from '../input';

export interface InputEmailProps extends InputProps {}

export const InputEmail: React.FC<InputEmailProps> = ({ ...props }) => (
  <Input {...props} type="email" />
);
