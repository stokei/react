import React from 'react';
import { StackProps, Stack } from '../stack';

export * from './header';
export * from './body';
export * from './footer';
export * from './image';
export * from './video';

export interface CardProps extends StackProps {}
export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Stack
      borderWidth="1"
      rounded="md"
      width="full"
      shadow="sm"
      spacing="0"
      {...props}
    >
      {children}
    </Stack>
  );
};
