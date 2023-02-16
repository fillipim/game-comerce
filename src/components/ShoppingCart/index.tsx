import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "store/Cart/cart.slice";
import { ImCart } from "react-icons/im";

import ProductCart from "components/ProductCart";
import { selectCart } from "store/Cart/cart.slice";
import * as S from "./ShoppingCart.style";

const ShoppingCart = () => {
  const cartState = useSelector(selectCart);
  const dispach = useDispatch();

  return cartState.isOpen ? (
    <S.Cart>
      <S.CartTitle tag="h3" size="size5">
        Carrinho de compras
      </S.CartTitle>
      <S.CartList>
        {cartState.items.map((game) => (
          <ProductCart game={game} />
        ))}
      </S.CartList>
    </S.Cart>
  ) : (
    <S.CartButton onClick={() => dispach(toggleCart())}>
      <ImCart/>
    </S.CartButton>
  );
};

export default ShoppingCart;
