import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h4 {
    color: white;
  }

  .favoriteMessage {
    width: 89%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const IconFavorite = styled.button`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    background-color: black;
    border-radius: 10px;
`;
 
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
    font-size: 35px;
    letter-spacing: -1.4px;
    word-spacing: 1.8px;
    color: var(--primary);
    font-weight: 500;
    text-decoration: none solid rgb(68, 68, 68);
    font-variant: normal;
    border-bottom: solid 2px;
    border-color: var(--primary);
`;