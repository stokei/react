import { Input, InputProps } from '../input';

export interface InputCardNumberProps extends InputProps {}

export const InputCardNumber: React.FC<InputCardNumberProps> = ({
  ...props
}) => <Input {...props} type="tel" />;
