import products from "database/products.json";
import * as S from "components/GameList/GameList.style";
import GameCard from "components/GameCard";

const GamesList = () => {
  return (
    <S.GameList>
      {products.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}
    </S.GameList>
  );
};

export default GamesList;
