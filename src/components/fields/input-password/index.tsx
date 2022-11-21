import { useState } from 'react';
import { Icon } from '../../icon';
import { Input, InputProps } from '../input';

export interface InputPasswordProps extends InputProps {}

export const InputPassword: React.FC<InputPasswordProps> = ({
  onChange,
  ...props
}) => {
  const [isShow, setIsShow] = useState(false);
  const [showPasswordValue, setShowPasswordValue] = useState('');

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
    setShowPasswordValue(e.target.value);
  };

  const handleToggleShowPasswordClicked = () => {
    setIsShow((show) => !show);
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      type="password"
      helperMessage={isShow && showPasswordValue}
      rightIcon={
        <Icon
          name={!isShow ? 'passwordHide' : 'passwordShow'}
          onClick={handleToggleShowPasswordClicked}
        />
      }
    />
  );
};
