export type TProduct = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
};
export type TGetProductsResponce = {
  amount: number;
  items: TProduct[];
  page: number;
  total: number;
};
