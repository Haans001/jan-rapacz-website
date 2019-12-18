import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import propTypes from 'prop-types';
import styled from 'styled-components';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12%;
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
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

const IndexPage = ({ uri }) => {
  return (
    <MainTemplate uri={uri}>
      <StyledWrapper>
        <StyledSectionTitle>Portfolio</StyledSectionTitle>
        <StyledHeader>
          <StyledSpan>Hello,</StyledSpan>
          <br /> Is it me you're looking for?
        </StyledHeader>
        <StyledParagraph>
          I'm a polish web developer and 3th year student of technical collage.
          I've worked with many local brands. Currently I'm looking for
          internship. New expriences and challanges are fuel my life. Get in
          touch if you are interested!
        </StyledParagraph>
        <StyledMediaList>
          {socials.map(({ name, url }) => (
            <li key={name}>
              <StyledMediaLink href={url}>{name}</StyledMediaLink>
            </li>
          ))}
        </StyledMediaList>
        <StyledMail>name@randommail.com</StyledMail>
      </StyledWrapper>
    </MainTemplate>
  );
};

IndexPage.propTypes = {
  uri: propTypes.string.isRequired,
};

export default IndexPage;
