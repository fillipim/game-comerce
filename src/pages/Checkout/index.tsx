import { MainContainer } from "pages/Home/home.style";
import checkoutImage from "assets/img/checkout-img.jpg";
import { Text } from "components/Text/Text.style";

const Checkout = () => (
  <MainContainer>
    <img src={checkoutImage} alt="Checkout image" title="Checkout image" />
    <Text tag="h1" size="lg" color="blue" colorLevel="secondary"></Text>
  </MainContainer>
);

export default Checkout;
