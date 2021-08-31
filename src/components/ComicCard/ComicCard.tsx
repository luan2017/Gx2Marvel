import React from 'react';
import { Container } from './styles';

interface ComicProps {
    image: string;
    title: string;
}

export const ComicCard:React.FC<ComicProps> = ({ image, title }: ComicProps) => {
  return (
    <Container>
      <div>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Container>
  );
}