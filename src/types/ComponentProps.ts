export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
  };
export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export interface LoaderProps {
  visible: boolean;
}

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}