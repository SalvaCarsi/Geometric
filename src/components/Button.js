'use strict';

import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  margin: auto 0.2em;
  width: 130px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  border: 2px solid #000;
  color: #000;
  background: #FFEEBB;
  
  &:active {
    background: #FFCC66;
    color: #000;
  }
`;

export default Button;