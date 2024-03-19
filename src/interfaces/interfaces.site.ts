export interface Iinputs {
  password: string;
  phoneNumber: number;
}

export interface ProductType {
  brand: string;
  description: string;
  features: string[];
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
}
