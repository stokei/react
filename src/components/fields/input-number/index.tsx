import { Input, InputProps } from '../input';

export interface InputNumberProps extends InputProps {}

export const InputNumber: React.FC<InputNumberProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
