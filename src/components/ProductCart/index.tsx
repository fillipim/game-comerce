import { StyleProductCart } from "./productCart.style";
import { Text } from "styles/typography";
import { IGameCart } from "interfaces";

const ProductCart = ({game}: {game: IGameCart}) => {
  return (
    <StyleProductCart>
      <div>
        <img src={require(`assets/${game.image}`)} alt="" />
      </div>
      <div>
        <Text tag="h3" size="size5">
          {game.name}
        </Text>
        <button>Remover</button>
        <Text tag="span" size="size5">
          {game.price}
        </Text>
        <span>Qtd: {game.amount}</span>
      </div>
    </StyleProductCart>
  );
};

export default ProductCart;