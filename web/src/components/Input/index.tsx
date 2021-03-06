import React, { InputHTMLAttributes, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: React.CSSProperties;
    icon?: React.ComponentType<IconBaseProps>;
  }
  

const Input: React.FC<InputProps> = ({containerStyle = {}, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Container style={containerStyle}>
            {Icon && <Icon size={20} />}
            <input
                defaultValue={''}
                ref={inputRef}
                {...rest}
            />
        </Container>
    );
}

export default Input;