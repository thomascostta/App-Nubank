import { Animated, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Conteiner = styled(Animated.ScrollView)`
    margin: 0 30px;
`;

export const Nav = styled.View`
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
    color: #FFF;
    font-size: 15px;
    margin-left: 20px;
`; 

export const SignOutButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-top: 15px;
`;