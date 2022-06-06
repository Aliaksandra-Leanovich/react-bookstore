import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ListItem } from "../components/ListItem/ListItem";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/booksSelector";
import { fetchBooksBySearch } from "../store/slices/bookSlice";
import { typography } from "../ui/typography";

export const Search = () => {
  const { title = "", page = "" } = useParams();
  const { books, total } = useAppSelector(getBooks);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (total && +page < Math.ceil(+total) / 10) {
      navigate(`/react-bookstore/search/${title}/${Number(page) + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (+page > 1) {
      navigate(`/react-bookstore/search/${title}/${Number(page) - 1}`);
    }
  };

  useEffect(() => {
    dispatch(fetchBooksBySearch({ title, page }));
  }, [title, dispatch, page]);
  return (
    <>
      <div>
        <button type="button" onClick={handleNextPage}>
          Next
        </button>
        <button type="button" onClick={handlePrevPage}>
          Prev
        </button>
      </div>
      <SearchTitle>Total according to your search: {total} books</SearchTitle>
      <SearchDesc>Current Page: {page}</SearchDesc>
      <StyledBookList>
        {books.map((book) => {
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
