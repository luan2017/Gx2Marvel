import React from 'react';

import { Container, Content } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
        <Content>
            <h3>Página Não Encontrada!</h3>
            <div className='not-found'>
                <h1>404</h1>
            </div>
            <a href="/">Voltar</a>
        </Content>
    </Container>
  );
}

export default NotFound;