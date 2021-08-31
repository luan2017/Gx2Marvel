import React, { useEffect, useState } from 'react';
import { ComicCard } from '../../components/ComicCard/ComicCard';
import { api,API_KEY, MD5, TIMESTAMP } from '../../services/api'
import {Container, Content, Grid,Title,Close} from './styles'

import Dialog from '@material-ui/core/Dialog'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Loading from '../../components/Loading/Loading';


interface Character {
  name: string;
  description: string;
  thumbnail: {
    path?: string;
    extension?: string;
  }
}

interface Comics {
  title: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  }
}

interface CharacterDetailsProps {
  open: boolean;
  id: number;
  handleCloseCardDetails: () => void;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({open, id, handleCloseCardDetails}: CharacterDetailsProps) => {
  const [characterDetails, setCharacterDetails] = useState<Character>();
  const [comics, setComics] = useState<Comics[]>([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => { 
    setLoading(true)
    if(id > 0){
      api.get(`characters/${id}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`)
      .then((response) => {
        setCharacterDetails(response.data.data.results[0]);
      }).catch((error) => {
        setLoading(false)
        console.log(error);
      })


      api.get(`characters/${id}/comics?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`)
      .then((response) => {
        setComics(response.data.data.results);
        setLoading(false)
      }).catch((error) => {
        setLoading(false)
        console.log(error);
      })
    }

  },[id])

  useEffect(() => {
    setCharacterDetails({
      name: '',
      description: '',
      thumbnail: {
      },
    })

    setComics([
      {
        title: '',
        thumbnail: {},
      }
    ])

  },[handleCloseCardDetails])


  return (
    <>
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth={'lg'}
      open={open}
      >
    <Close className="onClose" onClick={() => handleCloseCardDetails()}>
      <CloseIcon color={'secondary'} fontSize={'large'}/>
    </Close>
    <Container>
      <Title>DETALHES DO HERÓI</Title>
      {
         loading ? <Loading /> : (
        <>
          {characterDetails && (
            <>
              <Content>
                <div className="container-image">
                  <img src={`${characterDetails.thumbnail.path}/standard_fantastic.${characterDetails.thumbnail.extension}`} alt="3-D Man" />
                </div>
                <div className="context">
                  <div className="name">
                    <h2>{characterDetails?.name || 'Herói'}</h2>
                  </div>
                </div>
              </Content>

              <Title>{`${characterDetails.name}'s COMICS`}</Title> 
              <Grid>
                {
                  comics.length > 0 && comics.map(comic => (
                    <ComicCard key={comic.title} image={`${comic?.thumbnail?.path}/portrait_uncanny.${comic?.thumbnail?.extension}`} title={comic?.title} />
                  ))
                }
              </Grid>
            </>
          )}
        </>)
      }
    </Container>
    </Dialog>
  </>
  )
}

export default CharacterDetails;