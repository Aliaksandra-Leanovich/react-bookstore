import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { bookApi } from "../services/bookService";
import { ISearchBookApi } from "../services/types/intex";

export const Search = () => {
  const { title = "", page = "" } = useParams();
  const [searchBook, setSearchBook] = useState<ISearchBookApi>();
  // const navigate = useNavigate();

  // const handleNextPage = () => {
  //   navigate(`search/${title}/${Number(page) + 1}`);
  // };
  // const handlePrevPage = () => {
  //   navigate(`search/${title}/${Number(page) - 1}`);
  // };
  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchBook(books);
    });
  }, [title, page]);
  return (
    <div>
      <h1>Search</h1>
      {/* <div>
        <button type="button" onClick={handleNextPage}>
          Next
        </button>
        <button type="button" onClick={handlePrevPage}>
          Prev
        </button>
      </div> */}
      <h2> total {searchBook?.total}</h2>
      <p> error {searchBook?.error}</p>
      <p>current page{searchBook?.page}</p>
      <StyledBookList>
        {searchBook?.books.map((book) => {
          return (
            <StyledBookItem key={book.isbn13}>
              <Link to={`/books/${book.isbn13}`}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.subtitle}</p>
                <p>{book.price}</p>
                <p>{book.isbn13}</p>
              </Link>
            </StyledBookItem>
          );
        })}
      </StyledBookList>
    </div>
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
const StyledBookItem = styled.div`
  padding: 1rem;
  border: 1px solid grey;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
