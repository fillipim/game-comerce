import styled from "styled-components";

export const Purchase = styled.section`
  text-align: center;
  background-color: #fff;
  height: 100vh;
  a{
    text-decoration: none;
    color: ${({theme}) => theme.colors.success.secondary};
    font-weight: 600;
  }
  h2{
    padding: 1rem 0;
  }
`
export const PurchaseImage = styled.img`
    width: 60%;
    height: 60%;
    object-fit: contain;
    text-align: center;
`