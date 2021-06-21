import React from 'react';

import { Container, Top, Logo, Title } from './stylesHeader';


import { AntDesign } from '@expo/vector-icons'; 

export default function newHeader() {
  return (
    <Container>
      <Top>
        <Logo 
        source={require('../../assets/Nubank_Logo.png')} />
        <Title>Thomas</Title>
      </Top>
      <AntDesign name="arrowdown" size={20} color="white" />
    </Container>
  );
}


   