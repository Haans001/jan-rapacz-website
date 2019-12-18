import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import List from 'components/List/List';
import styled from 'styled-components';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12%;
  position: relative;
`;

const StyledMediaListWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  right: 12%;

  a {
    color: ${({ theme }) => theme.colors.lightGrey} !important;
  }
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
  return (
    <MainTemplate uri={uri}>
      <StyledWrapper>
        <StyledSectionTitle>contact</StyledSectionTitle>
        <StyledHeader>jan.rapacz@interia.pl</StyledHeader>
        <StyledParagraph>
          If you like to make business or you just looking for a company for a
          good beer don't hesitate to send me a message!
        </StyledParagraph>
        <StyledMediaListWrapper>
          <List title="Find me" data={Links} />
        </StyledMediaListWrapper>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  uri: PropTypes.string.isRequired,
};
