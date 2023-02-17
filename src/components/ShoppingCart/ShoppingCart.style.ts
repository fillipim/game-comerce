import styled from "styled-components";
import { Text } from "styles/typography";

export const Cart = styled.div`
  position: fixed;
  right: 49px;
  bottom: -58%;
  animation: 0.5s cart-animation ease-in-out;
  animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  padding: 0 1rem;
  border-radius: 8px;
  text-align: center;
  @keyframes cart-animation {
    0% {
      bottom: -58%;
    }
    90% {
      bottom: 10px;
    }
    100% {
      bottom: 0;
    }
  }
  div {
    width: 300px;
  }
`;

export const CartTitle = styled(Text)`
  padding: 1rem;
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  text-align: center;
  border-radius: 8px;
`;

export const CartList = styled.ul`
  width: 300px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey.grey3};
  height: 300px;
  overflow-y: scroll;
`;

export const OpenCartButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 49px;
  bottom: 33px;
  color: azure;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  font-size: 18px;
  text-align: center;
`;

export const CloseCartButton = styled.button`
  font-size: 20px;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.brand.secondary};
`;
