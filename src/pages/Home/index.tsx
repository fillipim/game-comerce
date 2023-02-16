import * as S from "pages/Home/home.style";
import bg from "assets/img-background.svg";
import { Text } from "styles/typography";
import GamesList from "components/GameList";
import ShoppingCart from "components/ShoppingCart";

const Home = () => (
    <S.MainContainer>
      <ShoppingCart />
      <S.BackgroundImage alt="BackGround" src={bg} />
      <S.BrandBox>
        <S.SideLeft>
          <S.BrandTitle tag="h1">Game Commerce</S.BrandTitle>
          <Text tag="h2" size="size1">
            A melhor Loja de games para você
          </Text>
          <S.ListProductsButton href="#products-list">
            Ver Produtos
          </S.ListProductsButton>
        </S.SideLeft>
      </S.BrandBox>
      <section id="products-list">
        <Text tag="h3" size="size2">
          Nossos Games
        </Text>
        <GamesList />
      </section>
    </S.MainContainer>
);

export default Home;
