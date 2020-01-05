import React, { useRef, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHeader, StyledParagraph } from 'utils/typography';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Scrollmagic from 'scrollmagic';
import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import { getProjectTemplateTimeline } from 'utils/timelines';
import media from 'utils/media';
// import ParallaxCache from 'utils/ParallaxCache';

const StyledImage = styled(Image)`
  overflow: hidden;
`;

const StyledLine = styled.div`
  position: absolute;
  width: 2px;
  height: calc(100vw / 3);
  left: ${({ counter }) => (counter % 2 === 0 ? `75%` : `-15%`)};
  top: -20%;
  background: #090909;
  z-index: -1;

  &::before {
    position: absolute;
    content: '';
    width: 11px;
    border-radius: 1000px;
    height: 10px;
    left: -5px;
    top: -10px;
    background: #090909;
  }
`;

const StyledProjectInfo = styled.div`
  width: 130%;
  transform: translateX(15%);
  z-index: ${({ theme }) => theme.zIndex.level2};
  position: relative;

  ${media.tablet`
    transform:none;
    width:100%;

      ${StyledLine}{
        display:none;
      }
  `}
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;

  ${StyledImage} {
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      opacity: 0.3;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.black};
      transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  &:hover {
    ${StyledImage} {
      transform: scale(1.1);

      &::after {
        opacity: 0;
      }
    }
  }

  ${media.tablet`
    transform: translate(10%, -20%);
  `}
`;
const StyledWrapper = styled.div`
  width: 100%;
  padding: 17% 12%;
  display: grid;
  grid-template-columns: 30% auto;
  background: ${({ theme }) => theme.colors.black};
  position: relative;

  &:nth-of-type(even) {
    grid-template-columns: auto 30%;

    ${StyledProjectInfo} {
      grid-column: 2;
      transform: translateX(-10%);

      ${media.tablet`
        transform: none;
      `}
    }
    ${StyledImageWrapper} {
      grid-column: 1;
    }
    grid-auto-flow: dense;
  }

  ${media.tablet`
    grid-template-columns:initial;
    padding: 12%;

    &:nth-of-type(even) {
    grid-template-columns:initial;

    ${StyledProjectInfo} {
      grid-column: 1;
    }
    ${StyledImageWrapper} {
      grid-column: 2;
    }   
  }


  `}
`;

const StyledProjectParagraph = styled(StyledParagraph)`
  max-width: initial;
  position: relative;

  &::after {
    position: absolute;
    width: 50px;
    height: 5px;
    top: 5px;
    left: -60px;
    content: '';
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xm};
  display: block;
  padding: 2rem 0;
`;

export default function ProjectTemplate({
  image,
  title,
  paragraph,
  counter,
  controller,
}) {
  const infoRef = useRef(null);
  const imageRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = getProjectTemplateTimeline(infoRef.current, imageRef.current);
    new Scrollmagic.Scene({
      triggerElement: triggerRef.current,
    })
      .setTween(tl)
      .addTo(controller);
  }, []);

  return (
    <StyledWrapper ref={triggerRef}>
      <StyledProjectInfo>
        <StyledLine counter={counter} />
        <Parallax y={[100, -100]}>
          <div ref={infoRef}>
            <StyledHeader>{title}</StyledHeader>
            <StyledProjectParagraph>{paragraph}</StyledProjectParagraph>
            <StyledLink to="/">read more >></StyledLink>
          </div>
        </Parallax>
      </StyledProjectInfo>
      <Parallax y={[20, -20]}>
        <StyledImageWrapper ref={imageRef}>
          <StyledImage fluid={image} />
        </StyledImageWrapper>
      </Parallax>
    </StyledWrapper>
  );
}

ProjectTemplate.propTypes = {
  image: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  controller: PropTypes.shape().isRequired,
};
