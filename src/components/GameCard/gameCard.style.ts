import { Button } from "components/Button/button.style";
import styled from "styled-components";
import { Text } from "components/Text/Text.style";

export const GameCard = styled.li`
  width: 23%;
  background-color: ${({ theme }) => theme.colors.ligth.primary};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    padding: 1rem 0;
  }
`;
export const GameImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const GamePrice = styled(Text)`
  margin-bottom: 1rem;
  display: block;
`;

export const GameScore = styled(Text)`
  margin-bottom: 1rem;
  display: block;
`;

export const AddToCartButton = styled(Button)`
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey.secondary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.ligth.primary};
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.primary};
  }
`;
