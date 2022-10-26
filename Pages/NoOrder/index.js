import React from "react";

import { Container, Image, Warning, Message, Suggetion } from './styles';

export default function NoOrder() {
    return (
        <Container>
            <Image source={require('../../../assets/cart.png')} />

            <Warning>Nenhum pedido em andamento</Warning>
            <Message>
                <Suggetion>Que tal um Banho e Tosa para o seu Pet?</Suggetion>
                <Suggetion>É só selecionar Inicio</Suggetion>
            </Message>
        </Container>
    );
};
