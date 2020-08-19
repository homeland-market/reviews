import React from 'react';
import styled from 'styled-components';

const MainLoadingBlock = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-bottom: 20%;
  border-radius: 8px;
  background: #8f82a6;
  animation: fadein .8s infinite alternate;

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
