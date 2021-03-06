import React from 'react';
import SEO from 'components/SEO/SEO';
import Navigation from 'components/Navigation/Navigation';
import Hamburger from 'components/Hamburger/Hamburger';
import GlobalStyle from 'assets/css/GlobalStyle';
import GlobalTheme from 'assets/css/theme';
import propTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import media from 'utils/media';

const Perspective = styled.div`
  perspective: 1500px;
  position: absolute;
  height: 100vh;
  width: 100%;
`;

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height:0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  transition: transform 0.2s ease-in-out;
  ${({ active }) =>
    active
      ? css`
          height: 100vh;
          overflow: hidden;
          transform: translateZ(-1800px) translateX(30%) rotateY(-45deg);
          outline: 2px solid white;

          ${media.tablet`
            transform: translateZ(-1800px) translateX(60%) rotateY(-45deg);
          `}
        `
      : null}
  overflow-y : ${({ overflow }) => (overflow ? `scroll` : `hidden`)};    
`;

export default class MainTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      overflow: true,
      timerId: null,
      scrollContainer: null,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillUnmount() {
    const { timerId } = this.state;
    clearTimeout(timerId);
  }

  setOverflow = overflow => this.setState({ overflow });

  handleToggle() {
    const { toggled } = this.state;
    this.setState({
      toggled: !toggled,
    });

    if (toggled) {
      this.setState({
        timerId: setTimeout(() => this.setOverflow(true), 200),
      });
    } else {
      this.setOverflow(false);
    }
  }

  render() {
    const { toggled, overflow } = this.state;
    const { uri, children } = this.props;
    return (
      <>
        <SEO />
        <GlobalStyle />
        <ThemeProvider theme={GlobalTheme}>
          <>
            <Hamburger handleToggle={this.handleToggle} />
            <Perspective active={toggled}>
              <Navigation pathname={uri} handleToggle={this.handleToggle} />
              <StyledWrapper
                id="scrollContainer"
                active={toggled}
                overflow={overflow}
              >
                {children}
              </StyledWrapper>
            </Perspective>
          </>
        </ThemeProvider>
      </>
    );
  }
}

MainTemplate.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  uri: propTypes.string.isRequired,
};
MainTemplate.defaultProps = {
  children: [],
};
