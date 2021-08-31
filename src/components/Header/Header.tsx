import React, { useEffect, useState } from 'react';

import { Head, ButtonFavorite } from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeaderProps {
    handleEnableFavorites: () => void;
    handleDisableFavorites: () => void;
    handleSearchCharacters: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({handleEnableFavorites, handleDisableFavorites, handleSearchCharacters}: HeaderProps) => {
    const [searchValue, setSearchValue] = useState('');

   useEffect(() => {
    handleSearchCharacters(searchValue)
   },[searchValue])

  return (
<>
    <Head>
    <a onClick={() => handleDisableFavorites()} >
        <h1 className={'title'}>
            <b>GX2</b>Marvel
        </h1>
    </a>
        <div>
            <input
                placeholder="Pesquisar personagem"
                onChange={e => setSearchValue(e.target.value)}
                className={'input'}
            />
            <a onClick={() => handleEnableFavorites()} >
                <ButtonFavorite><FavoriteIcon fontSize='small' color='secondary'/>Favoritos</ButtonFavorite>
            </a>
        </div>
    </Head>
</>
);
}

export default Header;