import styled, { css } from "styled-components";

export const Button = styled.button<{ buttonType: string }>`
  padding: 1rem;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
  font-size: 16px;
  ${({ buttonType }) => {
    switch (buttonType) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.dark.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.blue.secondary};
          }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.grey.secondary};
        `;
    }
  }};
  color: ${({ theme }) => theme.colors.ligth.primary};
`;
