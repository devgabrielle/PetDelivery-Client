import React from "react";

import Address from '../../Components/Address';
import Schedule from "../../Components/Schedule";
import Suggestions from "../../Components/Suggestions";
import Shops from '../../Components/Shops';


import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <Address />
            <Schedule />
            <Suggestions />
            <Shops />
        </Container>
    );
}
