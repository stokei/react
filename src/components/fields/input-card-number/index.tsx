import { Input, InputProps } from '../input';

export interface InputCardCvvProps extends InputProps {}

export const InputCardCvv: React.FC<InputCardCvvProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
