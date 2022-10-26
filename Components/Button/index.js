import React from "react";

import { ButtonContainer, ButtonText } from './styles';

const Button = ({ backgroundColor, textColor, text }) => {
    return (
        <ButtonContainer
            backgroundColor={backgroundColor}
        >
            <ButtonText textColor={textColor}>{text}</ButtonText>
        </ButtonContainer>
    );
}

export default Button;
