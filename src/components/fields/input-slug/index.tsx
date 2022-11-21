import { Input, InputProps } from '../input';

export interface InputSlugProps extends InputProps {}

export const InputSlug: React.FC<InputSlugProps> = ({ ...props }) => (
  <Input {...props} />
);
