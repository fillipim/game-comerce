import styled from "styled-components";
import { Text } from "styles/typography";

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 5%;
  h3 {
    margin: 2rem 0;
  }
`;
export const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  inset: 0;
  object-fit: contain;
  @media (max-width: 520px) {
    object-fit: cover;
    height: 100vh;
  }
`;

export const BrandBox = styled.section`
  width: 100%;
  display: flex;
  margin-top: 200px;
  margin-bottom: 30%;
  h2 {
    color: ${({ theme }) => theme.colors.brand.primary};
    margin: 2rem 0;
  }
`;

export const ListProductsButton = styled.a`
  padding: 1rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  color: ${({ theme }) => theme.colors.grey.grey0};
  @media (max-width: 520px) {
    display: none;
  }
`;

export const BrandTitle = styled(Text)`
  font-size: 50px;
  font-weight: 500;
`;
export const SideLeft = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
