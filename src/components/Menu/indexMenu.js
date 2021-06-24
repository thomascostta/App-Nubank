import React from 'react';

import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 

import { Conteiner, Nav, NavItem, NavText, SignOutButtonText, SignOutButton } from './stylesMenu';

export default function Menu({ translateY }) {
    return (
        <Conteiner style={{
            opacity: translateY.interpolate({
                inputRange: [ 0, 150],
                outputRange: [ 0, 1]
            }),
        }}
        >

            <Nav>
                <NavItem>
                    <Ionicons name="help-outline" size={24} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Ionicons name="person-outline" size={24} color="#FFF" />                   
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <AntDesign name="creditcard" size={24} color="#FFF" />
                    <NavText>Cartão de Crédito</NavText>
                </NavItem>
                <NavItem>
                    <Feather name="smartphone" size={24} color="#FFF" />
                    <NavText>Configurações</NavText>
                </NavItem>
            </Nav>

                <SignOutButton onPress = {() => {}}>
                    <SignOutButtonText>SAIR DO APP</SignOutButtonText>
                </SignOutButton>
        
        </Conteiner>
    )
};