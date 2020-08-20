import React from 'react';
import styled from 'styled-components';

const LoadingBarsLarge = styled.div`
  animation: fadein .8s infinite alternate;
  background: #d9d8db;
  border-radius: 8px;
  margin-top: 1rem;
  padding-bottom: 10%;
  width: 100%;

  @keyframes fadein {
    from { opacity: 1; }
    to { opacity: .5; }
  }
`;

const LoadingBars = styled.div`
  animation: fadein .8s infinite alternate;
  background: #d9d8db;
  border-radius: 8px;
  margin-top: 1rem;
  padding-bottom: 4%;
  width: 100%;

  @keyframes fadein {
    from { opacity: 1; }
    to { opacity: .5; }
  }
`;

const BarsLoadingPlaceholder = () => (
  <section>
    <LoadingBarsLarge />
    <LoadingBars />
    <LoadingBars />
    <LoadingBars />
    <LoadingBars />
  </section>
);

export default BarsLoadingPlaceholder;
