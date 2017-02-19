'use strict';

import styled from 'styled-components';

import { fadeIn } from './animations';

const commonStyles = `
  margin: 0.15em;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #E52424;
`;


const MediumCircle = styled.div`
	width: 2.5em;
	height: 2.5em; 
	${commonStyles}
	animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

const SmallCircle = styled.div`
	width: 1.5em;
	height: 1.5em; 
  display: inline-block;
  ${commonStyles}
  animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

export {MediumCircle, SmallCircle};