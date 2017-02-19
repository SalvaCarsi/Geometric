'use strict';

import styled from 'styled-components';

const commonStyles = `
  display: inline-block;
  box-sizing: border-box;
  margin: auto 0.2em;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  border: 2px solid #000;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100px;
    height: 30px;
  }
  @media (min-width: 769px) {
    font-size: 25px;
    width: 250px;
    height: 50px;  
  }
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