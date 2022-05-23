import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { DetailedBook } from "../components/DetailedBook/DetailedBook";
import { bookApi } from "../services/bookService";
import { IBookDetailsApi } from "../services/types/intex";

export const DetailsBook = () => {
  const { id = "" } = useParams();
  const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    bookApi.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

  return (
    <div>
      <ButtonBack type="button" handleBack={handleBack}>
        Back
      </ButtonBack>
      <DetailedBook key={id} detailsBook={detailsBook}></DetailedBook>
    </div>
  );
};
