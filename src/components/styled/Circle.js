'use strict';

import styled from 'styled-components';

import { fadeIn } from './animations';

const commonStyles = `
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #E52424;
`;


const MediumCircle = styled.div`
	margin: 0.15em;
	width: 2.5em;
	height: 2.5em; 
	${commonStyles}
	animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

const SmallCircle = styled.div`
	margin-left: 0.2em;
	margin-right: 0.2em;
	width: 1.7em;
	height: 1.7em; 
  display: inline-block;
  ${commonStyles}
  animation: ${(props) => props.delay}s ${fadeIn} ease-out;
`;

export {MediumCircle, SmallCircle};