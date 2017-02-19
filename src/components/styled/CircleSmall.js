'use strict';

import styled from 'styled-components';

import { fadeIn } from './animations';

const Circle = styled.div`
  margin: 0.15em;
  border: 1px solid #000;
  border-radius: 50%;
	width: 1.5em;
	height: 1.5em; 
	background-color: #7E3517;
  display: inline-block;
  animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

export default Circle;