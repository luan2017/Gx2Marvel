import styled from 'styled-components'


export const Head = styled.head`
     display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5vh;


    .title{
        font-size: 5vh;
        color: red;
        font-weight: 300;
        cursor: pointer;
    }

    .input{
        padding: 1.2vh 1.5vh;
        font-family: inherit;
        font-size: inherit;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        outline: none;
        margin-right: 10px;
        width: auto;
        min-width: 20vw;
    }

    @media screen and (min-width: 0px) and (max-width: 650px){
         flex-direction: column;
    }
`;

export const ButtonFavorite = styled.button`
    cursor: pointer;
    font-weight: bold;
    color: red;
    border-radius: 5px;
    font-size: 16px;
    text-transform: uppercase;
    padding: 6px;

    &:hover {
        transition: 0.5s;
        transform: scale(1.05);
    }
`;
