import React, { useCallback } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Logo from '../Logo';
import { Action, Actions, Container, Header, HeaderLogo, Profile, ProfileInfos } from './styles';

const Layout: React.FC = ({ children, ...rest }) => {
    const history = useHistory();

    const handleClickLogo = useCallback(() => {
        history.push('/dashboard');
    }, [history]);

    const handleClickLogOff = useCallback(() => {
        history.push('/');
    }, [history])

    return (
        <Container {...rest}>
            <Header>
                <HeaderLogo>
                    <Logo touchable onClick={handleClickLogo} />
                </HeaderLogo>
                <Profile>
                    <ProfileInfos>
                        <img src="https://dummyimage.com/400x400/404040/ffffff&text=Your+Name" alt="Name" />
                        <p>Lucas Panassolo</p>
                    </ProfileInfos>
                </Profile>
                <Actions>
                    <Action>
                        <FiClock />
                    </Action>
                    <Action onClick={handleClickLogOff}>
                        <FiPower />
                    </Action>
                </Actions>
            </Header>
            {children}
        </Container>
    );
}

export default Layout;