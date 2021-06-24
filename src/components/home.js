import React from 'react';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from './header/headerIndex';
import Tabs from './Tabs/indexTabs';
import Menu from './Menu/indexMenu';

import { Container, Content, Card, CardHeader, CardContent, Annotation, CardFooter, Title, Description } from './stylesHome';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home(){
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );
    
    function onHandlerStateChanged(event) {

    }
    
    return (
        <Container>
            <Header />
                
                <Content>
                    <Menu translateY={translateY} />

                    <PanGestureHandler                                    
                        onGestureEvent={animatedEvent}
                        onHandlerStateChange={onHandlerStateChanged}
                    >  
                        <Card style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [ -350, 100, 380 ],
                                    outputRange: [ -350, 100, 380 ],
                                    extrapolate: 'clamp',
                                }),
                            }],
                        }}                        
                        >
                            <CardHeader>
                                <MaterialIcons name="attach-money" size={24} color="#666" />
                                <MaterialIcons name="visibility-off" size={24} color="#666" />
                            </CardHeader>
                            <CardContent>
                                <Title>Saldo disponível</Title>
                                <Description>R$ 0,00</Description>    
                            </CardContent>
                            <CardFooter>
                                <Annotation>
                                    Transferência de R$ 0,00 recebida hoje de Edinaldo Santos.
                                </Annotation>
                            </CardFooter>
                        </Card>
                    </PanGestureHandler>

                </Content>

            <Tabs translateY={translateY} />
        </Container>
    )
}