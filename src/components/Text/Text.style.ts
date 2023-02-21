import styled, { css } from "styled-components";
import theme from "../../styles/theme";

type IText = {
  color?: "blue" | "grey" | "danger" | "dark" | "ligth" | "success";
  colorLevel?: keyof typeof theme.colors.dark;
  size?: keyof typeof theme.typography.sizes;
  fontWeight?: 300 | 400 | 600 | 700;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "small";
};

export const Text = styled("h1").attrs<IText>(({ tag }) => ({
  as: tag,
}))<IText>`
  ${({
    color = "grey",
    size = "lg",
    fontWeight = 700,
    colorLevel = "primary",
  }) => css`
    font-size: ${theme.typography.sizes[size]};
    color: ${`${theme.colors[color][colorLevel]}`.replace(`${color}:`, "")};
    font-weight: ${fontWeight};
  `}
`;
