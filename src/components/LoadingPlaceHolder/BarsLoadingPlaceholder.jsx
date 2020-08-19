import React from 'react';
import styled from 'styled-components';

const LoadingBars = styled.div`
  width: 100%;
  padding-bottom: 3%;
  margin-top: 12px;
  border-radius: 8px;
  background: #8f82a6;
  animation: fadein .8s infinite alternate;

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
