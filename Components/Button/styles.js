import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
width: 250px;
height: 45px;
padding: 12px;
border-radius: 15px;
background-color: 
${props => props.backgroundColor};
`;

export const ButtonText = styled.Text`
font-size: 15px;
color: 
${props => props.textColor};
text-align: center;
`;
