import React from "react";

import { Container, Title, ShopContainer, AvatarShop, DescriptionShop, NameShop, Icon } from './styles';

export default function Schedule() {
    return (
        <Container>
            <Title> Lojas </Title>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/pontos.png')} />
                <DescriptionShop>
                    <NameShop> PetShop do Nonô</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 35-50 min - Gratis </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/favicon.png')} />
                <DescriptionShop>
                    <NameShop> Raçoes Amigo</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 40-50 min - Gratis </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/racao.png')} />
                <DescriptionShop>
                    <NameShop> Planet Pets</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 45-60 min - R$ 4,00 </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/doglogo.png')} />
                <DescriptionShop>
                    <NameShop> Mundo Cão</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 35-50 min - Gratis </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/osso.png')} />
                <DescriptionShop>
                    <NameShop> Petz</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 35-50 min - Gratis </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

            <ShopContainer>
                <AvatarShop source={require('../../../assets/higiene.png')} />
                <DescriptionShop>
                    <NameShop> American Pet</NameShop>
                    <NameShop> * 4,9 - Realengo - 1,7km</NameShop>
                    <NameShop> 60-120 min - R$ 15,00 </NameShop>
                </DescriptionShop>

                <Icon source={require('../../../assets/pontos.png')} />
            </ShopContainer>

        </Container>
    );

}
