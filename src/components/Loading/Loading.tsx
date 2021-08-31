import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ContainerSpinner } from './styles';

const Loading: React.FC = () => {
  return(
    <ContainerSpinner>
        <ContainerSpinner> <CircularProgress size={60} color="secondary" /> </ContainerSpinner>
    </ContainerSpinner>
  );
}

export default Loading;