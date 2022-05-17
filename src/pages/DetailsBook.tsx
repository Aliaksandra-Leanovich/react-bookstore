import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <h1>ID:{id}</h1>
      <h2>{detailsBook?.title ? detailsBook.title : "No title"}</h2>
      <h2>{detailsBook?.price}</h2>
      <h2>{detailsBook?.author}</h2>
    </div>
  );
};
