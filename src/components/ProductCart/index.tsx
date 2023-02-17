import { useDispatch } from "react-redux";
import { removeGameToCart, addGameToCart } from "store/Cart/cart.slice";
import { Text } from "styles/typography";
import { IGameCart } from "interfaces";
import { FaMinus, FaPlus } from "react-icons/fa";
import * as S from "./productCart.style";

const ProductCart = ({ game }: { game: IGameCart }) => {
  const dispach = useDispatch();

  const removeCartProduct = () => dispach(removeGameToCart(game.id));
  const addCartProduct = () => dispach(addGameToCart(game));

  return (
    <S.StyleProductCart>
      <img src={require(`assets/${game.image}`)} alt="" />
      <ul>
        <S.GameTitle>
          <Text tag="h4" size="size5">
            {game.name}
          </Text>
        </S.GameTitle>
        <li>
          <S.GamePrice tag="span" size="size5" color="grey4">
            R$ {game.price}
          </S.GamePrice>
        </li>
        <li>
          <div>
            <button onClick={addCartProduct}>
              <FaPlus />
            </button>
            <S.GameQtd tag="span" color="grey4">
              {game.amount}
            </S.GameQtd>
            <button onClick={removeCartProduct}>
              <FaMinus />
            </button>
          </div>
        </li>
      </ul>
    </S.StyleProductCart>
  );
};

export default ProductCart;
