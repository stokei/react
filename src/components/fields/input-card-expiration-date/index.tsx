import { Input, InputProps } from '../input';

export interface InputCardExpirationDateProps extends InputProps {}

export const InputCardExpirationDate: React.FC<
  InputCardExpirationDateProps
> = ({ ...props }) => <Input {...props} type="tel" />;
