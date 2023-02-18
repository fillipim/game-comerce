import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearCart, togglecart } from "store/Cart/cart.slice";

import { ImCart, ImArrowDown } from "react-icons/im";
import ProductCart from "components/ProductCart";
import * as S from "./ShoppingCart.style";
import { Text } from "styles/typography";
import { Button } from "components/Button/button.style";

const ShoppingCart = () => {
  const { cart, cartIsOpen } = useSelector(selectCart);
  const dispach = useDispatch();

  const handleClearCart = () => dispach(clearCart());
  const handleToggleCart = () => dispach(togglecart());
  
  const { subtotal, total, score } = useMemo(() => {
    const subtotal = cart.reduce((act, item) => act + item.price * item.amount, 0);
    const total = cart.reduce((act, item) => act + item.amount, 0);
    const score = cart.reduce((act, item) => act + item.score, 0);
    return { subtotal, total, score };
  }, [cart]);

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
          <S.CartCheckout>
            <div>
              <Text tag="span" color="grey3" size="size4">
                Total:
              </Text>
              <Text tag="span" color="grey3" size="size4">
                {total}
              </Text>
            </div>
            <div>
              <Text tag="span" color="grey3" size="size4">
                Subtotal:
              </Text>
              <Text tag="span" color="grey3" size="size4">
                R$ {`${subtotal}`.replace(".", ",")}
              </Text>
            </div>
            <div>
              <Text tag="span" color="grey3" size="size4">
                Score:
              </Text>
              <Text tag="span" color="grey3" size="size4">
                {score}
              </Text>
            </div>
          </S.CartCheckout>
          <Button buttonType="secondary" onClick={handleClearCart}>
            Limpar Carrinho
          </Button>
        </>
      )}
      <S.CloseCartButton onClick={handleToggleCart}>
        <ImArrowDown />
      </S.CloseCartButton>
    </S.Cart>
  ) : (
    <S.OpenCartButton total={total} onClick={handleToggleCart}>
      <ImCart />
    </S.OpenCartButton>
  );
};

export default ShoppingCart;
