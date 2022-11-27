import { useState } from 'react';
import { Icon } from '../../icon';
import { Input, InputProps } from '../input';

export interface InputPasswordProps extends InputProps {}

export const InputPassword: React.FC<InputPasswordProps> = ({ ...props }) => {
  const [isShow, setIsShow] = useState(false);
  const [showPasswordValue, setShowPasswordValue] = useState('');

  const onChange = (e: any) => {
    if (props.onChange) {
      props.onChange(e);
    }
    setShowPasswordValue(e.target.value);
  };

  const onToggleShowPasswordClicked = () => {
    setIsShow((show) => !show);
  };

  return (
    <Input
      {...props}
      onChange={onChange}
      type="password"
      helperMessage={isShow && showPasswordValue}
      rightIcon={
        <Icon
          name={!isShow ? 'passwordHide' : 'passwordShow'}
          onClick={onToggleShowPasswordClicked}
        />
      }
    />
  );
};
