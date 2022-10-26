import styled from "styled-components";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: true
})`
flex: 1;
background: #FFF;
`;

export const TopContainer = styled.View`
flex-direction: row;
margin-top: 30px;
align-items: center;
`;

export const InputContainer = styled.View`
margin-right: -95px;
margin-left: 2px;
`;



export const Title = styled.Text`
font-size: 20px;
margin-left: 10px;
margin-top: 10px;
`;

export const Categories = styled.View`
margin-top: 10px;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`;

export const Box01 = styled.TouchableOpacity`
width: 185px;
height: 110px;
border-radius: 20px;
margin-top: 15px;
`;

export const SuggestionImage = styled.Image`
width: 187px;
height: 115px;
border-radius: 20px;
`;

