import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { SmallStarSVGPath } from '../../assets/svg';

const MainLoadingBlock = styled.div`
  animation: fadein .8s infinite alternate;
  background: #d9d8db;
  border-radius: 8px;
  display: block;
  margin: 12px auto;
  padding-bottom: 4%;
  padding-top: 4%;
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
          starDimension="5vw"
          starSpacing="2rem"
          starEmptyColor="#b8b8b8"
          svgIconPath={SmallStarSVGPath}
          svgIconViewBox="0 0 20 13"
        />
      </div>
    </MainLoadingBlock>
  </section>
);

export default MainLoadingPlaceholder;
