import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container, ProfileContainer, Avatar, DescriptionProfile, Name, Note,
    OptionList, Option, Info, Title, Description,
    AdditionalMenu, AdditionalOption, OptionName, Wrapper
} from './styles';

export default function Profile() {
    return (
        <Container>
            <ProfileContainer>
                <Option onPress={() => { }} >
                    <Avatar source={require('../../../assets/avatar.png')} />
                    <DescriptionProfile>
                        <Name>Gabrielle Soares</Name>
                        <Note>Editar perfil</Note>
                    </DescriptionProfile>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </Option>
            </ProfileContainer>


            <OptionList>
                <Option onPress={() => { }}>
                    <MaterialIcons
                        name="notifications-none"
                        size={28}
                        color="grey"
                    />
                    <Info>
                        <Title>Notificações</Title>
                        <Description>Minha central de notificações</Description>
                    </Info>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </Option>
            </OptionList>

            <OptionList>
                <Option onPress={() => { }}>
                    <MaterialIcons
                        name="favorite-border"
                        size={28}
                        color="grey"
                    />
                    <Info>
                        <Title>Favoritos</Title>
                        <Description>Meus locais favoritos</Description>
                    </Info>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </Option>
            </OptionList>

            <OptionList>
                <Option onPress={() => { }}>
                    <MaterialIcons
                        name="credit-card"
                        size={28}
                        color="grey"
                    />
                    <Info>
                        <Title>Formas de pagamento</Title>
                        <Description>Minhas formas de pagamento</Description>
                    </Info>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </Option>
            </OptionList>

            <OptionList>
                <Option onPress={() => { }}>
                    <MaterialIcons
                        name="location-on"
                        size={28}
                        color="grey"
                    />
                    <Info>
                        <Title>Endereço</Title>
                        <Description>Meus endereços de entrega</Description>
                    </Info>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </Option>
            </OptionList>



            <AdditionalMenu>
                <AdditionalOption>
                    <Wrapper>
                        <MaterialIcons
                            name="help-outline"
                            size={28}
                            color="grey"
                        />
                        <OptionName>Ajuda</OptionName>
                    </Wrapper>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </AdditionalOption>

                <AdditionalOption>
                    <Wrapper>
                        <MaterialIcons
                            name="settings"
                            size={28}
                            color="grey"
                        />
                        <OptionName>Configurações</OptionName>
                    </Wrapper>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </AdditionalOption>

                <AdditionalOption>
                    <Wrapper>
                        <MaterialIcons
                            name="security"
                            size={28}
                            color="grey"
                        />
                        <OptionName>Segurança</OptionName>
                    </Wrapper>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={35}
                        color="grey"
                    />
                </AdditionalOption>


            </AdditionalMenu>
        </Container>
    );
};
