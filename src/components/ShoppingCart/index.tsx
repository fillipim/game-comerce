import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearCart, togglecart } from "store/Cart/cart.slice";

import { ImCart, ImArrowDown } from "react-icons/im";
import ProductCart from "components/ProductCart";
import * as S from "./ShoppingCart.style";
import { Text } from "styles/typography";
import { Button } from "components/Button/button.style";

const ShoppingCart = () => {
  const {cart, cartIsOpen} = useSelector(selectCart);
  const dispach = useDispatch();

  const handleCart = () => dispach(togglecart());

  const handleClearCart = () => {
    dispach(clearCart());
    dispach(togglecart());
  };

  return cartIsOpen ? (
    <S.Cart>
      <S.CartTitle tag="h3" size="size5">
        Carrinho de compras
      </S.CartTitle>
      {!cart.length ? (
        <div>
          <Text tag="span" size="size3" color="grey3">
            Seu carrinho esta vazio!
          </Text>
        </div>
      ) : (
        <>
          <S.CartList>
            {cart.map((game) => (
              <ProductCart key={game.id} game={game} />
            ))}
          </S.CartList>
          <Button buttonType="secondary" onClick={handleClearCart}>
            Limpar Carrinho
          </Button>
        </>
      )}
      <S.CloseCartButton onClick={handleCart}>
        <ImArrowDown />
      </S.CloseCartButton>
    </S.Cart>
  ) : (
    <S.OpenCartButton onClick={handleCart}>
      <ImCart />
    </S.OpenCartButton>
  );
};

export default ShoppingCart;
