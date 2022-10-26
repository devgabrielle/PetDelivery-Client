import styled from 'styled-components';

export const Container = styled.View`
background-color: 
${props => props.backgroundColor ? backgroundColor : '#ECEEF2'};
display: flex;
height: 45px;
width: 320px;
flex-direction: row;
justify-content: center;
align-self: center;
margin: 10px;
border: 0.8px;
border-radius: 10px;
`;

export const TextInput = styled.TextInput`
flex: 1;
border-radius: 10px;
padding: 15px 20px;
`;
