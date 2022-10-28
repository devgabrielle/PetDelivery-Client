import React from "react";
import { View, Text, Image } from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Logo, Title, InputContainer, ForgotPassword, ButtonContainer, CreateAccount } from './styles';


export default function SignIn() {
    return (
        <Container>

            <Logo source={require('../../../assets/doglogo.png')} />

            <Title> Login </Title>

            <InputContainer>
                <Input header placeholder="Insira seu email" />
                <Input header placeholder="Insira sua senha" />
            </InputContainer>

            <ForgotPassword >
                <Button
                    text="Esqueci minha senha"
                    textColor="red" >
                </Button>
            </ForgotPassword>

            <ButtonContainer>
                <Button
                    backgroundColor="#A16CE6"
                    text="ENTRAR"
                    textColor="white" >
                </Button>
            </ButtonContainer>

            <CreateAccount>
                <Button
                    text="Criar nova Conta"
                    textColor="#A16CE6" 
                    >
                </Button>
            </CreateAccount>
        </Container >
    );
};
