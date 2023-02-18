import styled, { css } from "styled-components";

export const Button = styled.button<{ buttonType: string }>`
  padding: 1rem;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.grey.grey0};
  margin-top: 1rem;
  ${({ theme, buttonType }) => {
    switch (buttonType) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.grey.grey3};
          &:hover {
            background-color: ${({ theme }) => theme.colors.brand.secondary};
          }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.grey.grey2};
        `;
    }
  }};
  @media (min-width: 1040px) {
    font-size: 18px
  }
`;
