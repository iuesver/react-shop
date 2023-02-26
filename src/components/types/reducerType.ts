export interface item {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
}

export interface readAction {
  type: string;
  payload: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: { rate: number; count: number };
  };
}

export interface cartAction {
  type: string;
  payload: {
    id: number;
    title: string;
    price: number;
    image: string;
    count: number;
  };
}

export interface cartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
}
