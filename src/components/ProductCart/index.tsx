import { useDispatch } from "react-redux";
import { removeGameToCart, addGameToCart } from "store/Cart/cart.slice";
import { Text } from "components/Text/Text.style";
import { IGameCart } from "types/interfaces";
import { FaMinus, FaPlus } from "react-icons/fa";
import * as S from "./productCart.style";

const ProductCart = ({ game }: { game: IGameCart }) => {
  const dispach = useDispatch();

  const removeCartProduct = () => dispach(removeGameToCart(game.id));
  const addCartProduct = () => dispach(addGameToCart(game));

  return (
    <S.StyleProductCart>
      <img src={require(`assets/img/${game.image}`)} alt={`${game.image}`} title={game.image}/>
      <ul>
        <S.GameTitle>
          <Text tag="h4" size="xs">
            {game.name}
          </Text>
        </S.GameTitle>
        <li>
          <S.GamePrice tag="span" size="sm" color="grey" colorLevel="secondary">
            R$ {`${game.price.toFixed(2)}`.replace(".", ",")}
          </S.GamePrice>
          <div>
            <button onClick={addCartProduct} title="Adicionar um produto">
              <FaPlus />
            </button>
            <S.GameAmount tag="span" color="grey" colorLevel="secondary" title="Quantidade">
              {game.amount}
            </S.GameAmount>
            <button onClick={removeCartProduct} title="Remover um produto">
              <FaMinus />
            </button>
          </div>
        </li>
      </ul>
    </S.StyleProductCart>
  );
};

export default ProductCart;
