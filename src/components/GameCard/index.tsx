import { useDispatch } from "react-redux";
import { IGame } from "types/interfaces";
import { addGameToCart } from "store/Cart/cart.slice";
import { Text } from "components/Text/Text.style";
import { Button } from "components/Button/button.style";
import * as S from "./gameCard.style";

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
        <Text tag="h4" size="lg" color="dark">
          {game.name}
        </Text>
      </div>
      <div>
        <S.GamePrice
          tag="span"
          size="sm"
          color="grey"
          colorLevel="secondary"
          fontWeight={700}
        >
          R$ {`${game.price}`.replace(".", ",")}
        </S.GamePrice>
        <S.GameScore tag="span" size="sm" color="grey" colorLevel="secondary">
          Score: {game.score}
        </S.GameScore>
        <Button
          buttonType="primary"
          onClick={handleGame}
          title="Adicionar produto ao cariinho"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </S.GameCard>
  );
};

export default GameCard;
