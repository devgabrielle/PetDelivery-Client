import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, AddressMenu, Location } from './styles';

export default function Address() {
    return (
        <Container>
            <AddressMenu>
                <MaterialIcons
                    name="location-on"
                    size={35}
                    color="grey" />

                <Location>  Receber agora em {'\n'}  Rua Tiapira, 258</Location>

                <MaterialIcons
                    name="keyboard-arrow-down"
                    size={35}
                    color="grey" />

            </AddressMenu>
        </Container>
    );
}
