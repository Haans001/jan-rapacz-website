import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

const IndexPage = props => {
  return <MainTemplate {...props}></MainTemplate>;
};

export default IndexPage;
