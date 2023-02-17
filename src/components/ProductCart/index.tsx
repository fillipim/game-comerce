import * as S from "./productCart.style";
import { Text } from "styles/typography";
import { IGameCart } from "interfaces";
import { FaTrash } from "react-icons/fa";

const ProductCart = ({ game }: { game: IGameCart }) => {
  return (
    <S.StyleProductCart>
      <div>
        <img src={require(`assets/${game.image}`)} alt="" />
      </div>
      <ul>
        <S.GameTitle>
          <Text tag="h4" size="size5">
            {game.name}
          </Text>
        </S.GameTitle>
        <S.GamePrice>
          <Text tag="span" size="size5">
            R$ {game.price}
          </Text>
          <Text tag="span" size="size5">
            Qtd: {game.amount}
          </Text>
        </S.GamePrice>
        <li>
          <button>
            <FaTrash />
          </button>
        </li>
      </ul>
    </S.StyleProductCart>
  );
};

export default ProductCart;
