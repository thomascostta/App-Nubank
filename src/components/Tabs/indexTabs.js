import React from 'react';

import { Container, TabsContainer, TabItem, TabText } from './stylesTabs';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
            <Ionicons name="person-add" size={24} color="#FFF" />
            <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
            <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
           <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
            <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
           <AntDesign name="lock" size={24} color="#FFF" />
            <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}


   