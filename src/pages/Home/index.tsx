import { Text } from "components/Text/Text.style";
import GamesList from "components/GameList";
import ShoppingCart from "components/ShoppingCart";
import * as S from "pages/Home/home.style";
import aboutImage from "assets/img/img-background.svg";

const Home = () => (
  <S.MainContainer>
    <ShoppingCart />
    <S.BackgroundImage alt="About" src={aboutImage}/>
    <S.BrandBox>
      <S.SideLeft>
        <S.BrandTitle tag="h1" color="ligth" colorLevel="primary">
          Game Commerce
        </S.BrandTitle>
        <Text tag="h2" size="lg">
          A melhor loja de games para você
        </Text>
        <S.ListProductsButton href="#products-list">
          Ver Produtos
        </S.ListProductsButton>
      </S.SideLeft>
    </S.BrandBox>
    <section id="products-list">
      <Text tag="h3" size="lg">
        Nossos Games
      </Text>
      <GamesList />
    </section>
  </S.MainContainer>
);

export default Home;
