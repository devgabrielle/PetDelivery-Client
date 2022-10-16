import React from "react";

import { Container, Image } from './styles';

export default function Schedule() {
    return (
        <Container>
                <Image 
                onPress={() => true}
                source={require('../../../assets/schedule.png')} />

        </Container>
    );
}
