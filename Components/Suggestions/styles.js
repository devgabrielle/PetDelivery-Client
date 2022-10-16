import styled from 'styled-components';

export const Container = styled.View`
display: flex;
`;

export const Title = styled.Text`
font-size: 20px;
color: black;
font-weight: bold;
margin-top: 15px;
margin-left: 10px;
`;

export const SuggestionList = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false
})`
margin-left: 10px;
`;

export const SuggestionImage = styled.Image`
height: 60px;
width: 60px;
margin: 10px;
border-radius: 10px;
border: 1px;
border-color: #A16CE6;
`;

export const TitleItem = styled.Text`

`;
