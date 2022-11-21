import { Input, InputProps } from '../input';

export interface InputUrlProps extends InputProps {}

export const InputUrl: React.FC<InputUrlProps> = ({ ...props }) => (
  <Input {...props} />
);
