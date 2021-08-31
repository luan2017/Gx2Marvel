import styled from 'styled-components';

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export const Close = styled.div`
    cursor: pointer;
    position: fixed;
    border-radius: 5px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-image {
    border: 4px solid #0A0F0D;
    height: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    
    img {
      height: 100%;
    }
  }
  .context {
    position: absolute;
    .name {
      display: flex;
      position: absolute;
      left: -170px;
      top: -190px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
      
      h2 {
        padding: 0.5rem 0.8rem;
        background-color: #f9f9f9;
        border: 4px solid #0A0F0D;
        color: #0A0F0D;
        font-size: 1rem;
      }
    }
    .description {
      padding: 2.5rem;
      height: 200px;
      border-top: 4px solid #0A0F0D;
      border-right: 4px solid #0A0F0D;
      border-bottom: 4px solid #0A0F0D;
      color: #0A0F0D;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(10, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
 

export const Title = styled.div`
  margin: 4rem 0;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 4px solid #EC1D24;
  color: black;
`;