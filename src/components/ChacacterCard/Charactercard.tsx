import React from 'react'

import { Container, Content } from './styles';

interface CharactersProps {
    id?: number;
    name: string;
    image: string;
  }

export const CharacterCard: React.FC<CharactersProps> = ({ image, name }: CharactersProps) => {
  return (
    <Container>
        <a>
          <Content>
            <div>
              <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
          </Content>
        </a>
    </Container>
  );
}