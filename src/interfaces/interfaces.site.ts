export interface Iinputs {
  password: string;
  phoneNumber: number;
}

export interface ProductType {
  brand: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  features?: string[];
  reviews?: {
    user: string;
    rating: number;
    comment: string;
  }[];
}

export interface ICustomer {
  id: number;
  phone_number: string;
  password: string;
}
