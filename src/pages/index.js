import React, { useRef, useEffect } from 'react';
import MainTemplate from 'templates/MainTemplate';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import media from 'utils/media';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';
import Typing from 'react-typing-animation';
import { getHomepageTimeline } from 'utils/timelines';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12%;
  background: ${({ theme }) => theme.colors.black};

  ${media.tablet`
    display:flex;
    flex-direction:column;
    justify-content: center;
  `}
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}
`;

const StyledMediaLink = styled.a`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    text-decoration: none;
  }
`;
const StyledMediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin-top: 5rem;

  li {
    margin-right: 4rem;
  }
`;
const StyledMail = styled.span`
  position: absolute;
  transform: rotate(-90deg);
  cursor: pointer;
  right: 0;
  top: 50%;
  color: ${({ theme }) => theme.colors.grey};

  ${media.tablet`
  display: block;
  transform: rotate(0) !important;
  position: initial;
  margin-top: 2rem;
  `}
`;

const socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/jan.rapacz.3',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/rape_cz/',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/?lang=pl',
  },
  {
    name: 'linkedin',
    url: 'https://pl.linkedin.com/',
  },
];

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const CursorSpan = styled.span`
  font-weight: 100;
  color: white;
  font-size: 1em;
  padding-left: 2px;
  transition: ease-in;
  animation: ${blink} 0.7s step-end infinite;
`;

const Cursor = ({ className }) => (
  <CursorSpan className={className}>|</CursorSpan>
);

const IndexPage = ({ uri }) => {
  const paragraph = useRef(null);
  const socialLinks = useRef(null);
  const email = useRef(null);
  const sectionTitle = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = getHomepageTimeline(
      paragraph.current,
      socialLinks.current,
      email.current,
      sectionTitle.current
    );
  }, []);

  return (
    <MainTemplate uri={uri}>
      <StyledWrapper>
        <StyledSectionTitle ref={sectionTitle}>Portfolio</StyledSectionTitle>
        <StyledHeader>
          <Typing
            speed={50}
            cursor={<Cursor />}
            onFinishedTyping={() => tl.current.play()}
          >
            <StyledSpan>
              Hello,
              <Typing.Delay ms={2000} />
            </StyledSpan>
            <br />
            <span>Im a developer and designer</span>
            <Typing.Delay ms={2000} />
            <Typing.Backspace count={27} />
            Is it me you're looking for?
            <Typing.Delay ms={1000} />
          </Typing>
        </StyledHeader>
        <StyledParagraph ref={paragraph}>
          I'm a polish web developer and 3th year student of technical collage.
          I've worked with many local brands. Currently I'm looking for
          internship. New expriences and challanges are fuel my life. Get in
          touch if you are interested!
        </StyledParagraph>
        <StyledMediaList ref={socialLinks}>
          {socials.map(({ name, url }) => (
            <li key={name}>
              <StyledMediaLink href={url}>{name}</StyledMediaLink>
            </li>
          ))}
        </StyledMediaList>
        <StyledMail ref={email}>name@randommail.com</StyledMail>
      </StyledWrapper>
    </MainTemplate>
  );
};

IndexPage.propTypes = {
  uri: propTypes.string.isRequired,
};
Cursor.propTypes = { className: propTypes.string };
Cursor.defaultProps = { className: '' };

export default IndexPage;
