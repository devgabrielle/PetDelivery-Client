import styled from "styled-components";
import { StyleSheet } from "react-native";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
flex: 1;
background: #FFF;
`;

export const ProfileContainer = styled.ScrollView`
margin-top: 50px;
border-bottom-width: 3px;
border-color: #EBE6E3;
`;

export const Avatar = styled.Image`
height: 75px;
width: 75px;
border: 1px;
border-radius: 50;
`;

export const DescriptionProfile = styled.ScrollView`
margin-left: 20px;
`;

export const Name = styled.Text`
font-size: 20px;
font-weight: bold;
`;

export const Note = styled.Text`
font-size: 13px;
`;


export const OptionList = styled.ScrollView``;

export const Option = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 5px;
padding: 10px 20px;
border-bottom-width: 3px;
border-color: #EBE6E3;
`;

export const Info = styled.ScrollView`
margin-left: 20px;
`;

export const Title = styled.Text`
color: #333;
font-size: 16px;
`;

export const Description = styled.Text`
font-size: 14px;
color: #999;
`;

export const Wrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;

export const AdditionalMenu = styled.View`
margin-top: 80px;
`;

export const AdditionalOption = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 5px 0;
padding: 10px 20px;
border: 1px #EEE;
`;

export const OptionName = styled.Text`
margin-left: 25px;
color: #CCC;
font-size: 16px;
`;
