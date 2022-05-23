export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface INewBooksApi {
  books: IBook[];
  error: string;
  total: string;
}
export interface INewBookApi {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}
export interface IBooksSlice {
  books: IBook[];
  error: any;
  status: RequestStatusType;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
export interface IBookDetailsApi {
  author: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: { [key: string]: string };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}
export interface ISearchBookApi extends INewBooksApi {
  page: string;
}
