import React from "react";
import { View, Text, Image } from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Logo, Title, SubTitle, InputContainer, ButtonContainer } from './styles';


export default function ForgotPassword() {
    return (
        <Container>

            <Logo source={require('../../../assets/doglogo.png')} />

            <Title> Esqueceu sua senha? </Title>
            <SubTitle>Insira seu email que lhe enviaremos o link para redefinir sua senha</SubTitle>

            <InputContainer>
                <Input header placeholder="Insira seu email" />
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
