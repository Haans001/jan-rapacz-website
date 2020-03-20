import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import List from 'components/List/List';
import styled from 'styled-components';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';
import media from 'utils/media';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12%;
  position: relative;

  ${media.tablet`
    display:flex;
    flex-direction:column;
    justify-content: center;
  `}
`;

const StyledContactHeader = styled(StyledHeader)`
  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xm};
    margin-top: 0 !important;
  `}
`;

const StyledMediaListWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  right: 12%;

  li {
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.lightGrey} !important;
  }

  ${media.tablet`
    position:initial;
  `}
`;

const MediaLinks = [
  { title: 'Instagram', url: 'https://www.instagram.com/rape_cz/' },
  { title: 'Facebook', url: 'https://www.facebook.com/jan.rapacz.3' },
  { title: 'Linkedin', url: 'https://pl.linkedin.com/' },
];

const Links = MediaLinks.map(({ title, url }) => (
  <a key={title} href={url}>
    {title}
  </a>
));

const ContactPage = ({ uri }) => {
  const textNodes = useRef(null);
  const list = useRef(null);

  return (
    <MainTemplate uri={uri}>
      <StyledWrapper>
        <div ref={textNodes}>
          <StyledSectionTitle>contact</StyledSectionTitle>
          <StyledContactHeader>jan.rapacz@interia.pl</StyledContactHeader>
          <StyledParagraph>
            If you like to make business or you just looking for a company for a
            good beer don't hesitate to send me a message 🍺!
          </StyledParagraph>
        </div>
        <StyledMediaListWrapper>
          <List ref={list} title="Find me" data={Links} />
        </StyledMediaListWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  uri: PropTypes.string.isRequired,
};
