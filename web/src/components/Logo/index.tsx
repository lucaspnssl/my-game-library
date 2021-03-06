import React from 'react';

import { Container, Title } from './styles';

interface LogoProps {
    touchable?: boolean;
    text?: 'MY GAME LIBRARY' | 'MGL';
}

const Logo: React.FC<LogoProps> = ({ touchable = false, text = 'MY GAME LIBRARY' }) => (
    <Container touchable={touchable}>
        <Title>{text}</Title>
    </Container>
)

export default Logo;