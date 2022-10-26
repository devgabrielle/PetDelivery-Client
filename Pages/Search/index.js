import React from "react";

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import { Container, TopContainer, InputContainer, Title, Categories, Box01, SuggestionImage } from './styles';

export default function Search() {
    return (
        <Container>
            <TopContainer>
                <InputContainer>
                    <Input header placeholder={"Item ou loja"} />
                </InputContainer>

                <Button
                    textColor={'red'}
                    text={"Cancelar"}
                />
            </TopContainer>

            <Title>Categorias</Title>

            <Categories>
                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-gato.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/banho-tosa.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

                <Box01>
                    <SuggestionImage source={require('../../../assets/racao-cachorro.png')} />
                </Box01>

            </Categories>
        </Container>
    );
}
