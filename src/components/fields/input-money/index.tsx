import { Input, InputProps } from '../input';

export interface InputMoneyProps extends InputProps {}

export const InputMoney: React.FC<InputMoneyProps> = ({ ...props }) => (
  <Input {...props} type="tel" />
);
