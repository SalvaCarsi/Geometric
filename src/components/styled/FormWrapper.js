'use strict';

import styled from 'styled-components';

const FormWrapper = styled.div`
  border: 2px solid #000;
  text-align: center;
  padding: 0.1em 0.1em;
  margin: auto 2em auto 2em;
  background: #E8E8E8;
  
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (min-width: 769px) {
    height: 530px;
  }
  
`;

export default FormWrapper;