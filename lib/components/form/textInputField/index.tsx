import * as React from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from './style';
import { FieldError } from 'react-hook-form';

interface IProps {
  name: string; // This is the ID React formik uses to identify a component.
  register?: () => {};
  required?: boolean;
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
}

export const TextInputField = React.forwardRef<HTMLInputElement, IProps>(({ labelText, placeholder, name, error }, ref) => {
  // do some shit here

  const [showError, setShowError] = React.useState(false);

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={name}>{labelText}</Label>
      </LabelContainer>
      <InputContainer>
        <Input
          id={name}
          name={name}
          onBlur={(): void => { setShowError(false); }}
          onFocus={(): void => { setShowError(true); }}
          placeholder={placeholder}
          ref={ref}
        />
      </InputContainer>
      {
        error && error.message ?
          <ErrorContainer isError={showError}>
            <Error>{error.message}</Error>
          </ErrorContainer> : null
      }
    </Container>

  );
});
