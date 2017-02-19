'use strict';

import styled from 'styled-components';

import { fadeIn } from './animations';

const commonStyles = `
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #E52424;
`;


const MediumCircle = styled.div`
	${commonStyles}
	animation: ${(props) => props.delay}s ${fadeIn} ease-out;
	
	@media (max-width: 768px) {
		margin: 0.1em;
		width: 2.5em;
		height: 2.5em; 
  }
  @media (min-width: 769px) {
		margin: 0.4em;
		width: 3.9em;
		height: 3.9em;  
  }
`;

const SmallCircle = styled.div`
  display: inline-block;
  ${commonStyles}
  animation: ${(props) => props.delay}s ${fadeIn} ease-out;
  
  @media (max-width: 768px) {
		margin-left: 0.2em;
		margin-right: 0.2em;
		width: 1.5em;
		height: 1.5em; 
  }
  @media (min-width: 769px) {
		margin-left: 0.4em;
		margin-right: 0.4em;
		width: 2.4em;
		height: 2.4em; 
  }
`;

export {MediumCircle, SmallCircle};