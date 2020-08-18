/* eslint-disable no-multi-str */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

// single star
export const SmallStarSVG = styled.svg`
  fill: ${(props) => (props.filterCondition === props.rating ? '#520f54;' : '#f6b71d')};
  height: 10%;
  width: 10%;
`;

export const SmallStarSVGPath = 'M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.\
3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l\
-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z';

// helpful button
export const HelpfulSVG = styled.svg`
  display: inline-block;
  fill: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
  height: 28px;
  oveflow: hidden;
  pointer-events: none;
  vertical-align: middle;
  width: 28px;
`;

export const HelpfulSVGPath = 'M21.5 \
11.8c-.5-.5-1-.8-1.5-.8h-2.6c.2-.8.2-1.9-.3-3.1-.6-1.7-1.7-1.9-2.3-1.9-.8 0-1.7.6-1.9 1.3 0 \
.2-.1.4-.1.6-.1 1.1-.4 2.3-1 3.5-.2-.2-.5-.4-.8-.4H7c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h4c.6 0 \
1-.4 1-1v-.1c.6.4 1.2.8 1.6 1 .1.1.3.1.4.1h4c.1 0 .2 0 .4-.1h.1c.8-.3 1.8-1.4 2.1-2.3.3-.8  \
1.3-5.6 1.4-6.2.1-.5-.1-1.1-.5-1.6zM10 20H8v-7h2v7zm8.6-1c-.1.3-.6.8-.9 \
1h-3.5c-.5-.3-1.5-1-2.2-1.6v-4.3c.6-.2.8-.4.9-.5.1-.1.3-.3.5-.9.8-1.6  \
1.2-3.1 1.4-4.6V8h.1s.2.1.4.6c.6 1.5-.1 2.8-.2 2.8v.1c0 .1-.1.1-.1.2v.6c0 .1 0 .1.1.2 0 \
.1.1.1.1.2s.1.1.1.1 0 .1.1.1h.1c.1 0 .1.1.2.1h4.2s.1.1.1.2c-.4 2-1.2 5.2-1.4 5.8z';

// search magnifying glass
export const SearchMagnifyingGlassSVG = styled.svg`
  fill: #fff;
  height: 100%;
  width: 100%;
`;

export const SearchMagnifyingGlassSVGPath = 'M21.7 20.3l-3.4-3.4c2-2.7 1.8-6.4-.6-8.9C15 5.3 10.6 \
5.3 8 8c-2.7 2.7-2.7 7 0 9.6 1.3 1.3 3.1 2 4.8 2 1.4 0 2.8-.5 4-1.3l3.4 \
3.4c.2.2.5.3.7.3s.5-.1.7-.3c.5-.4.5-1 .1-1.4zM9.4 16.2c-1.9-1.9-1.9-4.9 \
0-6.8.9-.9 2.2-1.4 3.4-1.4s2.5.5 3.4 1.4c1.9 1.9 1.9 4.9 0 6.8-1.9 1.9-4.9 1.9-6.8 0z';

// show less up arrow
export const UpArrowSVG = styled.svg`
  display: inline-block;
  fill: #7f187f;
  height: 28px;
  overflow: hidden;
  pointer-events: none;
  vertical-align: middle;
  width: 28px;
`;

export const UpArrowSVGPath = 'M8.9 16.8c.4.4 1 .4 1.4.1l3.8-3.5 3.8 3.4c.4.4 1 .3 \
1.4-.1.4-.4.3-1-.1-1.4l-4.5-4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-4.5 4c-.3.4-.3 1.1.1 1.5z';

// show more down arrow
export const DownArrowSVG = styled.svg`
  width: 28px;
  height: 28px;
  display: inline-block;
  fill: #7f187f;
  vertical-align: middle;
  pointer-events: none;
  overflow: hidden;
`;

export const DownArrowSVGPath = 'M19.2 11.3c-.4-.4-1-.4-1.4-.1L14 14.7l-3.8-3.4c-.4-.\
4-1-.3-1.4.1-.4.4-.3 1 .1 1.4l4.5 4c.2.2.4.3.7.3s.5-.1.7-.3l4.5-4c.3-.4.3-1.1-.1-1.5z';
