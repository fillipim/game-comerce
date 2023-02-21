import checkoutImage from "assets/img/checkout-img.jpg";
import { Text } from "components/Text/Text.style";
import * as S from "./checkout.style";
import { Link } from "react-router-dom";

const Checkout = () => (
  <S.Purchase>
    <S.PurchaseImage
      src={checkoutImage}
      alt="Checkout image"
      title="Checkout image"
    />
    <Text tag="h1" size="xl" color="blue" colorLevel="secondary">
      Sua compra foi finalizada
    </Text>
    <Text tag="h2" size="sm" color="blue" colorLevel="secondary">
      Volte para a pagina inicial para fazer mais compras
    </Text>
    <Link to="/">Voltar</Link>
  </S.Purchase>
);

export default Checkout;
