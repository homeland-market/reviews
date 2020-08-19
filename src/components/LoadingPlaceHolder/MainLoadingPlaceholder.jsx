import React from 'react';
import styled from 'styled-components';

const MainLoadingBlock = styled.div`
  animation: fadein .8s infinite alternate;
  background: #8f82a6;
  border-radius: 8px;
  margin-bottom: 12px;
  margin-top: 12px;
  padding-bottom: 20%;
  width: 100%;

  @keyframes fadein {
    from { opacity: 1; }
    to { opacity: .5; }
  }
`;

const MainLoadingPlaceholder = () => (
  <section>
    <MainLoadingBlock />
  </section>
);

export default MainLoadingPlaceholder;
