import React from "react";

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import {
    Container, Logo, Title, SuggetionBox, SubTitle, Btn, TextButton, InputContainer, ButtonContainer
} from './styles';


export default function CreateAccount() {
    return (
        <Container>

            <Logo source={require('../../../assets/doglogo.png')} />

            <Title> Criar uma nova conta </Title>
            <SuggetionBox>
                <SubTitle> Já é registrado? </SubTitle>
                <Btn>
                    <TextButton>Acesse aqui</TextButton>
                </Btn>
            </SuggetionBox>

            <InputContainer>
                <Input header placeholder="Insira seu nome completo" />
                <Input header placeholder="Insira seu email" />
                <Input header placeholder="Insira seu celular/Whatsapp" />
                <Input header placeholder="*******" />
            </InputContainer>


            <ButtonContainer>
                <Button
                    backgroundColor="#A16CE6"
                    text="ENTRAR"
                    textColor="white" >
                </Button>
            </ButtonContainer>
        </Container >
    );
};
