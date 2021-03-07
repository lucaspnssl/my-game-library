import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import { Container, Content, Background, LoginContent } from './styles';

const SignIn: React.FC = () => {
    const history = useHistory();

    const handleClickLogInButton = useCallback(() => {
        history.push('/dashboard');
    }, [history])

    return (
        <Container>
            <Content>
                <LoginContent>
                    <Logo />
                    <Input name="email" placeholder="Your E-mail" icon={FiMail} />
                    <Input name="password" placeholder="Your Password" type="password" icon={FiLock} />

                    <Button onClick={handleClickLogInButton}>
                        Log In
                    </Button>

                    <Link to="/signup">
                        <FiLogIn />
                        Sign Up
                    </Link>
                </LoginContent>
            </Content>
            <Background />
        </Container>
    )
}

export default SignIn;