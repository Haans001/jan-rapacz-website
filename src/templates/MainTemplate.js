import React from 'react';
import SEO from 'components/SEO/SEO';
import GlobalStyle from 'assets/css/GlobalStyle';
import theme from 'assets/css/theme';
import propTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

export default function MainTemplate({ children }) {
  console.log(theme);
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
MainTemplate.defaultProps = {
  children: [],
};
