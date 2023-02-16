import styled, {css} from "styled-components";
import theme from "./theme";

type IText = {
    color?: keyof typeof theme.colors.grey
    size?: keyof typeof theme.typography.sizes
    fontWeight?: 300 | 400 | 600 | 700
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "small"
}
export const Text = styled('h1').attrs<IText>(({ tag }) => ({
    as: tag
  }))<IText>`
    ${({
      color = 'grey0',
      size = 'size1',
      fontWeight = 700
    }) => css`
      font-size: ${theme.typography.sizes[size]};
      color: ${theme.colors.grey[color]};
      font-weight: ${fontWeight};
    `}
  `