import React, { useEffect, useState }  from 'react';
import { CharacterCard } from '../../components/ChacacterCard/Charactercard';
import Header from '../../components/Header/Header';
import { api,API_KEY, MD5, TIMESTAMP } from '../../services/api';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Container, Grid, Title, IconFavorite } from './styles';
import Loading from '../../components/Loading/Loading';

interface Characters {
  id: number;
  name: string;
  checked?: boolean;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const CharactersList: React.FC = () => {
  const LIMIT = 60;
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [selectedId, setSelectedId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [enableFavorites, setEnableFavorites] = useState(false);
  const [listCharacters, setListCharacters] = useState<Characters[]>([]);
  const [listSearch, setListSearch] =  useState<Characters[]>([]);
  const listFavorites = (listCharacters?.length > 0 && listCharacters?.filter(carachter => carachter?.checked === true)) || []

  useEffect(()=> {
    api.get(`characters?limit=${LIMIT}&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`)
    .then((response) => {
      setCharacters(response?.data?.data?.results)
    }).catch((error) => {
      console.log(error);
    })
  },[])

  useEffect(() => {
    if(characters.length > 0) {
      const newListCharacters =  characters.map(item => { return {...item, checked : false} })
      setListCharacters(newListCharacters)
      setListSearch([...newListCharacters])
    }
  },[characters])

  const handleEnableFavorites = () => {
    setEnableFavorites(true)
  }

  const handleDisableFavorites = () => {
    setEnableFavorites(false)
  }

  const handleOpenCardDetails = (id: number) => {
    setSelectedId(id)
    setOpenModal(true)
  }

  const handleCloseCardDetails = () => {
    setSelectedId(0)
    setOpenModal(false)
  }

  const handleCheckFavorite = ( id: number ) => {
    const newList = [...listCharacters]
    const characterIndex = listCharacters.findIndex(cht => cht.id === id)
    newList[characterIndex].checked = !newList[characterIndex].checked;  
    setListCharacters(newList);
  }

  const handleSearchCharacters = (name: string) => {
    const newList = [...listCharacters]
    if(name.length === 0) return setListCharacters(listSearch)
    if(name.length > 0){
      setListCharacters(newList.filter(cht => cht.name.toUpperCase().includes(name.toUpperCase())))
    }
  }

  return (
      <>
        <Header handleEnableFavorites={handleEnableFavorites} handleDisableFavorites={handleDisableFavorites} handleSearchCharacters={handleSearchCharacters}/>
        <Title>{!enableFavorites ? 'Her??is' :  ' Her??is Favoritos'}</Title>
        <Container>
          {listCharacters?.length > 0 ?
        <Grid>
              {
                !enableFavorites ? listCharacters.map((character) => (
                  <>
                  <div key={character?.id}>
                    <IconFavorite onClick={() => handleCheckFavorite(character?.id)} >{ !character.checked ? <FavoriteBorderIcon fontSize='medium' color='secondary' /> : <FavoriteIcon fontSize='medium' color='secondary'/>}</IconFavorite>
                    <div onClick={() => {handleOpenCardDetails(character?.id)}}>
                      <CharacterCard  id={character?.id} name={character?.name} image={`${character?.thumbnail?.path}/standard_fantastic.${character?.thumbnail?.extension}`}/>
                    </div>
                  </div>
                  </>
                )) : 
                listFavorites?.length > 0 ? listFavorites.map((character) => (
                  <>
                  <div key={character?.id}>
                    <IconFavorite key={character?.id} onClick={() => handleCheckFavorite(character?.id)} >{ !character.checked ? <FavoriteBorderIcon fontSize='medium' color='secondary' /> : <FavoriteIcon fontSize='medium' color='secondary'/>}</IconFavorite>
                    <div onClick={() => {handleOpenCardDetails(character?.id)}}>
                      <CharacterCard  id={character?.id} name={character?.name} image={`${character?.thumbnail?.path}/standard_fantastic.${character?.thumbnail?.extension}`}/>
                    </div>
                  </div>
                  </>
                  ))
                  :
                  <div className='favoriteMessage'>
                    <h1>Sem Favoritos...</h1>
                  </div> 
              }
        </Grid>
        : <Loading />}
        </Container>
        <CharacterDetails handleCloseCardDetails={handleCloseCardDetails} open={openModal} id={selectedId} />
    </>
    )
}

export default React.memo(CharactersList);