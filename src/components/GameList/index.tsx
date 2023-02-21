import products from "utils/data/products.json";
import * as S from "components/GameList/GameList.style";
import GameCard from "components/GameCard";

const GamesList = () => (
  <S.GameList>
    {products.map(game => <GameCard key={game.id} game={game} />)}
  </S.GameList>
);

export default GamesList;
