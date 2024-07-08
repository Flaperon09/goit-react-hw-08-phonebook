import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import {
  FormWrapper, Form, Label, TitleLabel,
  ButtonWrapper, Button, Input
 } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TitleLabel>Email</TitleLabel>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <TitleLabel>Password</TitleLabel>
        <Input type="password" name="password" />
      </Label>
      <ButtonWrapper>
        <Button type="submit">Log In</Button>
      </ButtonWrapper>
    </Form>
    </FormWrapper>
  );
};