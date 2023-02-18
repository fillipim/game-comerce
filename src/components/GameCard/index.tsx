import { useDispatch } from "react-redux";
import { IGame } from "interfaces";
import { Text } from "styles/typography";
import * as S from "./gameCard.style";
import { addGameToCart } from "store/Cart/cart.slice";
import { Button } from "components/Button/button.style";

const GameCard = ({ game }: { game: IGame }) => {
  const dispach = useDispatch();
  const handleGame = () => dispach(addGameToCart(game));

  return (
    <S.GameCard>
      <div>
        <S.GameImage
          alt={game.name}
          src={require(`assets/${game.image}`)}
          title={game.name}
        />
        <Text tag="h4" size="size3" color="grey4">
          {game.name}
        </Text>
      </div>
      <div>
        <S.GamePrice tag="span" size="size4" color="grey2" fontWeight={700}>
          R$ {`${game.price.toFixed(2)}`.replace(".", ",")}
        </S.GamePrice>
        <Text tag="span" size="size4" color="grey3">
          Score: {game.score}
        </Text>
        <Button buttonType="primary" onClick={handleGame}>
          Adicionar ao carrinho
        </Button>
      </div>
    </S.GameCard>
  );
};

export default GameCard;
