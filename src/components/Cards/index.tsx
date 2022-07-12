import { Cards, StyleButton, CardContainer } from './styles';

export interface CardProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: string;
}
export default function Card({
  id,
  photo,
  name,
  description,
  price,
}: CardProps) {
  console.log(photo);
  return (
    <Cards>
      <img src={photo} width="200" height="100" />
      {name}
      {description}
      {price}
      <StyleButton>Comprar</StyleButton>
    </Cards>
  );
}
