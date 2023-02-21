import styled from "styled-components";
import { Text } from "components/Text/Text.style";
import { Button } from "components/Button/button.style";

export const Cart = styled.div`
  position: fixed;
  right: 49px;
  width: 300px;
  bottom: -58%;
  animation: 0.5s cart-animation ease-in-out;
  animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.ligth.secondary};
  padding: 1rem;
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
      bottom: 5px;
    }
  }
  @media (max-width: 520px) {
    width: 90%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }
`;

export const CartTitle = styled(Text)`
  padding: 1rem;
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme.colors.blue.secondary};
  text-align: center;
  border-radius: 8px;
`;

export const CartList = styled.ul`
  width: 100%;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey.secondary};
  height: 200px;
  overflow-y: scroll;
  @media (max-width: 520px) {
    max-height: 200px;
  }
  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.ligth.secondary}; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue.secondary}; /* color of the scroll thumb */
    border-radius: 20px; 
    border: 1px solid ${({ theme }) => theme.colors.ligth.secondary}; /* creates padding around scroll thumb */
  }
`;

export const OpenCartButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 49px;
  bottom: 33px;
  color: azure;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue.secondary};
  font-size: 18px;
  text-align: center;
`;

export const CloseCartButton = styled.button`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.danger.secondary};
  background-color: ${({ theme }) => theme.colors.ligth.secondary};
  position: absolute;
  right: 0px;
  top: -25px;
`;

export const CartCheckout = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
`;

export const CheckoutButton = styled(Button)`
  margin-bottom: 0.75rem;
  background-color: ${({ theme }) => theme.colors.success.secondary};
`;
