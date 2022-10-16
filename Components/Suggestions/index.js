import React from 'react'

import { Container, Title, SuggestionList, SuggestionImage, TitleItem } from './styles';

export default function Suggestions() {
    return (
        <Container>
            <Title>Sugestões</Title>
            <SuggestionList horizontal>
                <SuggestionImage
                    onPress={() => true}
                    source={require('../../../assets/racao.png')} />

                <SuggestionImage
                    onPress={() => true}
                    source={require('../../../assets/remedio.png')} />

                <SuggestionImage
                    onPress={() => true}
                    source={require('../../../assets/osso.png')} />

                <SuggestionImage
                    onPress={() => true}
                    source={require('../../../assets/higiene.png')} />

                <SuggestionImage
                    onPress={() => true}
                    source={require('../../../assets/pontos.png')} />

            </SuggestionList>

        </Container>
    )
}
