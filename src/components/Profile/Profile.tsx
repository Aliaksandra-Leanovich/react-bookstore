import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelector";
import { setUser, setUserName } from "../../store/slices/userSlice";
import {
  ChangeForm,
  ChangeInput,
  LabelInput,
  SaveButton,
  StyledProfile,
} from "./styles";

export const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { name, email } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(setUserName(data.name));
    dispatch(setUser(data.email));
  };
  return (
    <StyledProfile>
      <ChangeForm onSubmit={handleSubmit(onSubmit)}>
        <LabelInput>Name</LabelInput>
        <ChangeInput type="text" placeholder={name} {...register("name")} />
        <LabelInput>Email</LabelInput>
        <ChangeInput placeholder={email} type="email" {...register("email")} />
        <SaveButton type="submit">Save changes</SaveButton>
      </ChangeForm>
    </StyledProfile>
  );
};
