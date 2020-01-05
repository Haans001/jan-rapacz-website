import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import media from 'utils/media';

const StyledHamburger = styled.div`
  width: 50px;
  height: 18px;
  cursor: pointer;
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 1000;

  &::after {
    position: absolute;
    background: #1c1c1c;
    height: 4px;
    top: 0;
    right: 0;
    content: '';
    width: 100%;
  }
  &::before {
    position: absolute;
    background: #1c1c1c;
    height: 4px;
    bottom: 0;
    right: 0;
    content: '';
    width: 40px;
  }

  ${media.tablet`
  top: 50px;
  right:30px;
`}
`;

export default function Hamburger({ handleToggle }) {
  return <StyledHamburger onClick={handleToggle} />;
}

Hamburger.propTypes = {
  handleToggle: propTypes.func.isRequired,
};
