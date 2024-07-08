import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operationsAuth';
import {
  FormWrapper, Form, Label, ButtonWrapper,
  TitleLabel, Button, Input
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        <TitleLabel>Username</TitleLabel>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <TitleLabel>Email</TitleLabel>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <TitleLabel>Password</TitleLabel>
        <Input type="password" name="password" />
      </Label>
      <ButtonWrapper>
        <Button type="submit">Register</Button>
      </ButtonWrapper>
    </Form>
    </FormWrapper>
  );
};