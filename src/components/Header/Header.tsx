import React from 'react';

import { Head, ButtonFavorite } from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeaderProps {
    handleEnableFavorites: () => void;
    handleDisableFavorites: () => void;
}

const Header: React.FC<HeaderProps> = ({handleEnableFavorites, handleDisableFavorites}: HeaderProps) => {
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
                // onChange={e => setSearchValue(e.target.value)}
                // onKeyUp={submitSearch}
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