import React from 'react';

import { Container, Top, Logo, Title } from './stylesHeader';


import { MaterialIcons } from '@expo/vector-icons';

export default function newHeader() {
  return (
    <Container>
      <Top>
        <Logo 
        source={require('../../assets/Nubank_Logo.png')} />
        <Title>Felipe Oliveira Pocoio</Title>
      </Top>
      <MaterialIcons name="arrow-drop-down" size={24} color="#FFF" />
    </Container>
  );
}


   