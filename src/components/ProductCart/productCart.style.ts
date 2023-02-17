import styled from "styled-components"

export const StyleProductCart = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    animation: fadeInRight 1s;
    div:nth-child(1){
        width: 70px;
        height: 70px;
        background-color: #E0E0E0;
        border-radius: 5px;
    }
    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        padding: .3px;
        width: 70%;
        height: fit-content;
    }
    div:nth-child(2) > span, h3{
        display: block;
        margin-top: 5px;
        width: 50%;
    }
    div:nth-child(2) > button{
        color: #BDBDBD;
        cursor: pointer;
    }
    img{
      width: 100%;
      object-fit: contain;
    }
`