import styled from "styled-components";

export const GameList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: calc((100% / 4) - 10px);
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    li {
      width: calc((100% / 2) - 10px);
    }
  }
  @media (max-width: 580px) {
    display: block;
    li {
      width: 100%;
    }
  }
`;
