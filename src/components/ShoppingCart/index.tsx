import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearCart } from "store/Cart/cart.slice";

import { ImCart } from "react-icons/im";
import ProductCart from "components/ProductCart";
import * as S from "./ShoppingCart.style";
import { Text } from "styles/typography";

const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const cartState = useSelector(selectCart);
  const dispach = useDispatch();

  const handleCart = () =>
    cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);

  const handleClearCart = () => {
    dispach(clearCart());
    setCartIsOpen(false);
  };

  return cartIsOpen ? (
    <S.Cart>
      <S.CartTitle tag="h3" size="size5">
        Carrinho de compras
      </S.CartTitle>
      {!cartState.length ? (
        <Text tag="span" size="size3" color="grey3">
          Seu carrinho esta vazio!
        </Text>
      ) : (
        <S.CartList>
          {cartState.map((game) => (
            <ProductCart game={game} />
          ))}
        </S.CartList>
      )}
      <S.CartButton onClick={handleClearCart}>Limpar Carrinho</S.CartButton>
      <button onClick={handleCart}>Fechar</button>
    </S.Cart>
  ) : (
    <S.OpenCartButton onClick={handleCart}>
      <ImCart />
    </S.OpenCartButton>
  );
};

export default ShoppingCart;
