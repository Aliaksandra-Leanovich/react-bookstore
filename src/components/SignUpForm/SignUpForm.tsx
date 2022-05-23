import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpButton, SignUpInput, StyledSignUpForm } from "./styles";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        navigate(routes.SIGNIN);
      })
      .catch(console.error);
  };
  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpInput
        type="email"
        {...register("email")}
        placeholder="Enter your email"
      />
      <SignUpInput
        type="password"
        {...register("password")}
        placeholder="Enter your password"
      />
      <SignUpButton type="submit">Sign Up</SignUpButton>
    </StyledSignUpForm>
  );
};
