import { Button } from "components/Button/button.style";
import styled from "styled-components";
import { Text } from "styles/typography";

export const GameCard = styled.li`
    width: 23%;
    background-color: ${({theme}) => theme.colors.grey.grey0};
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        padding: 1rem 0;
    }
`
export const GameImage = styled.img`
    width: 100%;
    object-fit: contain;
`
export const GamePrice = styled(Text)`
    margin-bottom: 1rem;
    display: block;
`

export const AddToCartButton = styled(Button)`
    padding: 1rem;
    width: 100%;
    background-color: ${({theme}) => theme.colors.grey.grey2};
    border-radius: 8px;
    margin-top: auto;
    color: ${({theme}) => theme.colors.grey.grey0};
    transition: all .3s;
    &:hover{
        background-color: ${({theme}) => theme.colors.brand.primary};
    }
`
