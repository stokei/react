import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { decorators } from '../../storybook/decorators';

export default {
  title: 'Components/Button',
  component: Button,
  decorators
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Primary',
    colorScheme: 'primary'
  }
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Secondary',
    colorScheme: 'secondary'
  }
};

export const Blue: StoryObj<ButtonProps> = {
  args: {
    children: 'Blue',
    colorScheme: 'blue'
  }
};
