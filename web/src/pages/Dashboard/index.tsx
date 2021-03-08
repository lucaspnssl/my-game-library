import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import { Container, Introduction, IntroTitle, Actions, Action } from './styles';

const Dashboard: React.FC = () => {

    return (
        <Container>
            <Introduction>
                <IntroTitle>WELCOME<br />TO YOUR LIBRARY</IntroTitle>
                <p>The best way to organize your favorite hobby</p>
            </Introduction>
            <Actions>
                <Action>
                    <strong>
                        Library
                    </strong>
                    <FiMenu />
                </Action>
                <Action>
                    <strong>
                        Search
                    </strong>
                    <FiSearch />
                </Action>                
            </Actions>
        </Container>
    );
}

export default Dashboard;