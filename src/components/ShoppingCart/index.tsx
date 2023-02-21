import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { ImCart } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { selectCart, clearCart, togglecart } from "store/Cart/cart.slice";
import ProductCart from "components/ProductCart";
import { Text } from "components/Text/Text.style";
import * as S from "./ShoppingCart.style";
import { Button } from "components/Button/button.style";
import { showToast } from "utils/showToast";

const ShoppingCart = () => {
  const { cart, cartIsOpen } = useSelector(selectCart);
  const dispach = useDispatch();
  const navigate = useNavigate();
  const handleCart = () => dispach(togglecart());

  const handleClearCart = () => {
    dispach(clearCart());
    dispach(togglecart());
  };

  const handleCheckout = () => {
    dispach(clearCart());
    navigate("/checkout")
    showToast("success", "Compra finalizada!")
  };

  const { subtotal, total, score } = useMemo(() => {
    const subtotal = cart
      .reduce((act, item) => act + item.price * item.amount, 0)
      .toFixed(2);
    const total = cart.reduce((act, item) => act + item.amount, 0);
    const score = cart.reduce((act, item) => act + item.score, 0);
    return { subtotal, total, score };
  }, [cart]);

  return cartIsOpen ? (
    <S.Cart>
      <S.CartTitle tag="h3" size="sm">
        Carrinho de compras
      </S.CartTitle>
      {!cart.length ? (
        <div>
          <Text tag="span" size="md" color="grey" colorLevel="secondary">
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
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                Total:
              </Text>
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                {total}
              </Text>
            </div>
            <div>
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                Subtotal:
              </Text>
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                R$ {`${subtotal}`.replace(".", ",")}
              </Text>
            </div>
            <div>
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                Score:
              </Text>
              <Text tag="span" color="grey" size="sm" colorLevel="secondary">
                {score}
              </Text>
            </div>
          </S.CartCheckout>
          <S.CheckoutButton buttonType="secondary" onClick={handleCheckout}>Finalizar compra</S.CheckoutButton>
          <Button buttonType="secondary" onClick={handleClearCart}>
            Limpar carrinho
          </Button>
        </>
      )}
      <S.CloseCartButton onClick={handleCart}>
        <CgClose />
      </S.CloseCartButton>
    </S.Cart>
  ) : (
    <S.OpenCartButton onClick={handleCart}>
      <ImCart />
    </S.OpenCartButton>
  );
};

export default ShoppingCart;
