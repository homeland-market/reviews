import React from 'react';
import styled from 'styled-components';

const LoadingBars = styled.div`
  animation: fadein .8s infinite alternate;
  background: #8f82a6;
  border-radius: 8px;
  margin-top: 12px;
  padding-bottom: 3%;
  width: 100%;

  @keyframes fadein {
    from { opacity: 1; }
    to { opacity: .5; }
  }
`;

const BarsLoadingPlaceholder = () => (
  <section>
    <LoadingBars />
    <LoadingBars />
    <LoadingBars />
    <LoadingBars />
    <LoadingBars />
  </section>
);

export default BarsLoadingPlaceholder;
