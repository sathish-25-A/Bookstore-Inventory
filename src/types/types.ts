export type Book = {
    id: string;
    title: string;
    author: string;
    genre: string;
    price: number;
  };
  
  export type Filters = {
    genre?: string;
    author?: string;
  };
  