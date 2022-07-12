import { useEffect, useState } from 'react';
import { apiProducts } from '../../pages/services';

export interface Iproduto {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: string;
}

export const Products = ({
  id,
  photo,
  name,
  description,
  price,
}: Iproduto) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await apiProducts();
      setProducts(data.products);
    };
    getData();
  }, []);
  console.log(products);
};
