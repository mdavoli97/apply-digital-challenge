export type IGames = {
  id: number;
  genre: string;
  image: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
};

export type IGamesData = {
  games: IGames[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
