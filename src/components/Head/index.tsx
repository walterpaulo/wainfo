import React from 'react';
import { Text2 } from '../Text2';
import { H2 } from '../Text2/style';
import { Container } from './style';

export const Header = () =>{
    return(
        <Container>
            <Text2 size='96px' color='var(--secondary-bg-color)'>
                wainfo
            </Text2>
        </Container>
    )
}