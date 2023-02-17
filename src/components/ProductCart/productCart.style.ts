import styled from "styled-components";
import { Text } from "styles/typography";

export const StyleProductCart = styled.li`
  display: flex;
  margin-bottom: 1rem;
  text-align: start;
  div {
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
  ul {
    width: 60%;
    margin-left: 20px;
  }
  li {
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const GameTitle = styled.li`
  display: flex;
  h4 {
    padding-top: 5px;
    color: ${({ theme }) => theme.colors.grey.grey3};
  }
`;

export const GamePrice = styled(Text)`
  padding-right: 1rem;
`;
export const GameQtd = styled(Text)`
  padding: 1rem;
  font-size: 18px;
`;
