import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { SmallStarSVGPath } from '../../assets/svg';

const MainLoadingBlock = styled.div`
  animation: fadein .8s infinite alternate;
  background: #8f82a6;
  border-radius: 8px;
  display: block;
  margin: 12px auto;
  padding-bottom: 5%;
  padding-top: 5%;
  text-align: center;
  width: 100%;

  @keyframes fadein {
    from { opacity: 1; }
    to { opacity: .5; }
  }
`;

const MainLoadingPlaceholder = () => (
  <section>
    <MainLoadingBlock>
      <div>
        <StarRatings
          starDimension="10vw"
          starSpacing="2rem"
          starEmptyColor="#d9d8db"
          svgIconPath={SmallStarSVGPath}
          svgIconViewBox="0 0 20 13"
        />
      </div>
    </MainLoadingBlock>
  </section>
);

export default MainLoadingPlaceholder;
