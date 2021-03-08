import React from 'react';

import { Container, Title } from './styles';

type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
    touchable?: boolean;
    text?: 'MY GAME LIBRARY' | 'MGL';
}


const Logo: React.FC<LogoProps> = ({ touchable = false, text = 'MY GAME LIBRARY', children, ...rest }) => (
    <Container touchable={touchable} {...rest}>
        <Title>{text}</Title>
        {children}
    </Container>
)

export default Logo;