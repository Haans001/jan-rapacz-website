import React, { useState } from 'react';
import SEO from 'components/SEO/SEO';
import Navigation from 'components/Navigation/Navigation';
import Hamburger from 'components/Hamburger/Hamburger';
import GlobalStyle from 'assets/css/GlobalStyle';
import GlobalTheme from 'assets/css/theme';
import propTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

const Perspective = styled.div`
  perspective: 1500px;
  position: absolute;
  width: 100%;
`;

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  min-height: 100vh;
  height: 0;
  position: relative;
  outline: 2px solid white;
  transition: transform 0.2s ease-in-out;
  ${({ active }) =>
    active
      ? css`
          height: 100vh;
          overflow: hidden;
          transform: translateZ(-1800px) translateX(30%) rotateY(-45deg);
        `
      : null}
  overflow : ${({ overflow }) => (overflow ? `visble` : `hidden`)};    
`;

export default function MainTemplate({ children, uri }) {
  const [toggled, toggle] = useState(false);
  const [delayedOverflow, setOverflow] = useState(true);

  const handleToggle = () => {
    toggle(!toggled);
    if (toggled) {
      setTimeout(() => setOverflow(true), 200);
    } else setOverflow(false);
  };

  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={GlobalTheme}>
        <>
          <Perspective active={toggled}>
            <Navigation pathname={uri} handleToggle={handleToggle} />
            <StyledWrapper active={toggled} overflow={delayedOverflow}>
              <Hamburger handleToggle={handleToggle} />
              {children}
            </StyledWrapper>
          </Perspective>
        </>
      </ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  uri: propTypes.string,
};
MainTemplate.defaultProps = {
  children: [],
  uri: '/',
};
