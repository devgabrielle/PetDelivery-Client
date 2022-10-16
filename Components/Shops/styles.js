import styled from "styled-components";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
flex: 1;
background: #FFF;
`;

export const Title = styled.Text`
font-size: 20px;
color: black;
font-weight: bold;
margin-top: 10px;
margin-left: 10px;
`;

export const ShopContainer = styled.View`
flex-direction: row;
margin-top: 10px;
`;

export const AvatarShop = styled.Image`
height: 50px;
width: 50px;
margin-left: 20px;
margin-top: 10px;
border: 1px;
border-radius: 50px;
`;

export const DescriptionShop = styled.View`
flex-direction: column;
justify-content: center;
`;

export const NameShop = styled.Text`
font-size: 15px;
margin-top: 1px;
margin-left: 20px;
`;

export const Icon = styled.Image`
height: 40px;
width: 40px;
margin-top: 20px;
margin-left: 100px;
`;
