import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ListItem } from "../components/ListItem/ListItem";
import { bookApi } from "../services/bookService";
import { ISearchBookApi } from "../services/types";
import { typography } from "../ui/typography";

export const Search = () => {
  const { title = "", page = "" } = useParams();
  const [searchBook, setSearchBook] = useState<ISearchBookApi>();
  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchBook(books);
    });
  }, [title, page]);
  return (
    <>
      <SearchTitle>
        Total according to your search: {searchBook?.total} books
      </SearchTitle>
      <SearchDesc>Current Page: {searchBook?.page}</SearchDesc>
      <StyledBookList>
        {searchBook?.books.map((book) => {
          return <ListItem key={book.isbn13} book={book} />;
        })}
      </StyledBookList>
    </>
  );
};

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 960px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
const SearchTitle = styled.h3`
  ${typography.H3}
`;
const SearchDesc = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 20px;
`;
