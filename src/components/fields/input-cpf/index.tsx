import { Input, InputProps } from '../input';

export interface InputCpfProps extends InputProps {}

export const InputCpf: React.FC<InputCpfProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
