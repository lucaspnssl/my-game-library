import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #1a1a1a;
  height: 56px;
  border-radius: 55px;
  border: 0;
  padding: 0 16px;
  color: #d9d9d9;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 18px;

  &:hover {
    background: ${shade(0.2, '#1a1a1a')};
  }
`;
