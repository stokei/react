import { Input, InputProps } from '../input';

export interface InputPhoneProps extends InputProps {}

export const InputPhone: React.FC<InputPhoneProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
