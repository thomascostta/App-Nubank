import React from 'react';

import Header from './header/headerIndex';
import Tabs from './Tabs/indexTabs';

import { Container, Content, Card, CardHeader, CardContent, Annotation, CardFooter, Title, Description } from './stylesHome';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home(){
    return (
        <Container>
            <Header />
                
                <Content>
                     <Card>
                        <CardHeader>
                            <MaterialIcons name="attach-money" size={24} color="#666" />
                            <MaterialIcons name="visibility-off" size={24} color="#666" />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 120.000,00</Description>    
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Transferência de R$ 367,00 recebida hoje de Edinaldo Santos.
                            </Annotation>
                        </CardFooter>
                    </Card>
                </Content>
                
            <Tabs />
        </Container>
    )
}