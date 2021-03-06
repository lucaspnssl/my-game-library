import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import { Container, Content, Background, LoginContent } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Content>
                <Logo />
                <LoginContent>
                    <Input name="email" placeholder="Your E-mail" icon={FiMail} />
                    <Input name="password" placeholder="Your Password" type="password" icon={FiLock} />

                    <Button>
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

export default Dashboard;