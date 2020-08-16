/* eslint-disable no-multi-str */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

export const SmallStarSVG = styled.svg`
  fill: ${(props) => (props.filterCondition === props.score ? '#520f54;' : '#f6b71d')};
  width: 10%;
  height: 10%;
`;

export const StarSVGPath = styled.path`
  d: path("M6.64 10.94L3.7
  12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1
  1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46
  1.56-1.44 1.04l-2.92-1.54z");
`;

export const fiveStarsSVGPath = 'M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.\
3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l\
-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z';
