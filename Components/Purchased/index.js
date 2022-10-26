import React from "react";

import {
    Container, Title, Date,
    Wrapper, Restaurant, RestaurantImage, Info, Name, OrderNumber, OrderDetails, Order,
    Menu, MenuButton, MenuText, Evalution
} from './styles';

export default function Purchased() {
    return (
        <Container>
            <Title> Histórico</Title>
            <Date> Sex - 25 de Agosto de 2022</Date>

            <Wrapper>
                <Restaurant>
                    <RestaurantImage source={require('../../../assets/avatar.png')} />
                    <Info>
                        <Name>Nô Rações</Name>
                        <OrderNumber>Pedido concluido - Nº 1401</OrderNumber>
                    </Info>
                </Restaurant>
                <OrderDetails>
                    <Order>Ração Cachorro 10kg</Order>
                    <Order>Shampoo Anti-Pulgas Canino</Order>
                </OrderDetails>



                <Evalution></Evalution>


                
                <Menu>
                    <MenuButton>
                        <MenuText>Ajuda</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuText>Detalhes</MenuText>
                    </MenuButton>
                </Menu>
            </Wrapper>
        </Container>
    );
};
