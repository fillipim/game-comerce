import { useDispatch, useSelector } from "react-redux";
import { ImCart } from "react-icons/im";

import ProductCart from "components/ProductCart";
import { selectCart } from "store/Cart/cart.slice";
import * as S from "./ShoppingCart.style";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const cartState = useSelector(selectCart);

  const handleCart = () =>
    cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);

  return cartIsOpen ? (
    <S.Cart>
      <S.CartTitle tag="h3" size="size5">
        Carrinho de compras
      </S.CartTitle>
      <S.CartList>
        {cartState.map((game) => (
          <ProductCart game={game} />
        ))}
      </S.CartList>
    </S.Cart>
  ) : (
    <S.CartButton onClick={handleCart}>
      <ImCart />
    </S.CartButton>
  );
};

export default ShoppingCart;
