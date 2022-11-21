import { Input, InputProps } from '../input';

export interface InputCnpjProps extends InputProps {}

export const InputCnpj: React.FC<InputCnpjProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
