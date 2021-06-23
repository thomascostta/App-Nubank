import React from 'react';

import Header from './header/headerIndex';
import Tabs from './Tabs/indexTabs';

import { Container } from './stylesHome';

export default function Home(){
    return (
        <Container>
            <Header />
            <Tabs />
        </Container>
    )
}