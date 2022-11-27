import {
  forwardRef,
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement as ChakraInputRightElement
} from '@chakra-ui/react';
import { ForwardedRef, ReactNode } from 'react';
import {
  Description,
  FormErrorMessage,
  FormHelperText,
  FormLabel
} from '../../typography';

export interface InputProps extends ChakraInputProps {
  readonly id: string;
  readonly ref?: ForwardedRef<any>;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
  readonly label?: string;
  readonly labelDescription?: string;
  readonly helperMessage?: string | ReactNode;
  readonly errorMessage?: string | ReactNode;
  readonly successMessage?: string | ReactNode;
  readonly containerProps?: ChakraFormControlProps;
}

export const Input: React.FC<InputProps> = forwardRef(
  (
    {
      id,
      leftIcon,
      rightIcon,
      label,
      labelDescription,
      helperMessage,
      errorMessage,
      successMessage,
      containerProps,
      isInvalid,
      isDisabled,
      isRequired,
      isReadOnly,
      ...props
    },
    ref
  ) => (
    <ChakraFormControl
      {...containerProps}
      colorScheme="primary"
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && (
        <FormLabel htmlFor={id} marginBottom={labelDescription ? 0 : '2'}>
          {label}
        </FormLabel>
      )}
      {labelDescription && (
        <Description marginBottom="2">{labelDescription}</Description>
      )}
      <ChakraInputGroup>
        {!!leftIcon && (
          <ChakraInputLeftElement pointerEvents="none">
            {leftIcon}
          </ChakraInputLeftElement>
        )}
        <ChakraInput
          focusBorderColor="primary.500"
          colorScheme="primary"
          {...props}
          ref={ref}
          id={id}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          errorBorderColor="error.500"
        />
        {!!rightIcon && (
          <ChakraInputRightElement>{rightIcon}</ChakraInputRightElement>
        )}
      </ChakraInputGroup>

      {helperMessage && (
        <>
          {typeof helperMessage === 'string' ? (
            <FormHelperText>{helperMessage}</FormHelperText>
          ) : (
            helperMessage
          )}
        </>
      )}

      {isInvalid && errorMessage && (
        <>
          {typeof errorMessage === 'string' ? (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          ) : (
            errorMessage
          )}
        </>
      )}
    </ChakraFormControl>
  )
);
