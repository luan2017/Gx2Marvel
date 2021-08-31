import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100vh;
    color: black;
`;

export const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .not-found {
        position: relative;
        height: 180px;
        margin-bottom: 20px;
        z-index: -1;
    }

    h1 {
        font-family: montserrat,sans-serif;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        font-size: 224px;
        font-weight: 900;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: -12px;
        color: #030005;
        text-transform: uppercase;
        text-shadow: -1px -1px 0 #8400ff, 1px 1px 0 #ff005a;
        letter-spacing: -20px;
    }

    a {
        font-family: montserrat,sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: #ff005a;
        text-decoration: none;
        border: 2px solid;
        background: 0 0;
        padding: 10px 40px;
        font-size: 14px;
        font-weight: 700;
        -webkit-transition: .2s all;
        transition: .2s all;
    }

    h3 {
        font-size: 2rem;
        font-family: montserrat,sans-serif;
        /* transform: translate(-50%,-50%); */
        /* font-weight: 900; */
        margin-top: 0;
        margin-bottom: 0;
        color: #030005;
        text-transform: uppercase;
        text-shadow: -1px 4px 0 #8400ff, -3px -28px 0 #ff005a;
    }
`;