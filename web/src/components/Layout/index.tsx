import React, { useCallback } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Logo from '../Logo';
import { Action, Actions, Container, Header, HeaderLogo } from './styles';

const Layout: React.FC = ({ children, ...rest }) => {
    const history = useHistory();

    const handleClickLogo = useCallback(() => {
        history.push('/dashboard');
    }, [history])

    return (
        <Container {...rest}>
            <Header>
                <HeaderLogo>
                    <Logo touchable onClick={handleClickLogo} />
                </HeaderLogo>
                <Actions>
                    <Action>
                        <FiClock />
                    </Action>
                    <Action>
                        <FiPower />
                    </Action>
                </Actions>
            </Header>
            {children}
        </Container>
    );
}

export default Layout;