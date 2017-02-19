'use strict';

import styled from 'styled-components';

const commonStyles = `
  display: inline-block;
  box-sizing: border-box;
  margin: auto 0.2em;
  width: 130px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  font-size: 16px;
  border: 2px solid #000;
  color: #000;
`;

const alternativeBackground = `
  background: #FFCC66; 
  color: #000;
`;

const Button = styled.button`
  ${commonStyles}
  background: #FFEEBB;
  
  &:active {
    ${alternativeBackground}
  }
  
  &:hover { 
    ${alternativeBackground}
  }
`;

const ActiveButton = styled.button`
  ${commonStyles}
  background: #FFCC66;
`;

export { Button, ActiveButton };