import React from "react";

import { Container, TextInput } from './styles';

const Input = ({placeholder, header, backgroundColor}) => {
    return (
        <Container header={header}>
            <TextInput 
            backgroundColor={backgroundColor}
            placeholder={placeholder} />
        </Container>
    );
}

export default Input;
