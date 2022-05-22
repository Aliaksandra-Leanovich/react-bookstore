import styled from "styled-components";
import { ListHome } from "../components/ListHome/ListHome";
import { typography } from "../ui/typography";

export const NewBooks = () => {
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
