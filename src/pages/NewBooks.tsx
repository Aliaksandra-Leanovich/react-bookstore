import { useEffect } from "react";
import styled from "styled-components";
import { ListHome } from "../components/ListHome/ListHome";
import { useAppDispatch } from "../store/hooks/hooks";
import { featchBooskItems } from "../store/slices/bookSlice";
import { typography } from "../ui/typography";

export const NewBooks = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(featchBooskItems());
  }, [dispatch]);
  return (
    <>
      <NewBooksTitle>All Books In Store:</NewBooksTitle>
      <ListHome />
    </>
  );
};
const NewBooksTitle = styled.h2`
  ${typography.H2}
  margin-bottom: 20px;
`;
