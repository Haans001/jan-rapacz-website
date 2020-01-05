import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Scrollmagic from 'scrollmagic';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import ProjectTemplate from 'templates/ProjectTemplate';
import StyledSectionTitle, { StyledHeader } from 'utils/typography';
import media from 'utils/media';
import ParallaxCache from 'utils/ParallaxCache';

const StyledImageWrapper = styled.div``;

const StyledSectionGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10%;
  grid-template-columns: 50% auto;
  padding: 12%;

  ${media.tablet`
    grid-template-columns: initial;
    grid-gap:0;

    ${StyledImageWrapper}{
      display:none;
    }
  `}
`;
const StyledTitleTextWrapper = styled.div`
  margin-top: 10rem;
`;
const StyledFooter = styled.div`
  padding: 12%;
  background: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`;

const projectsData = [
  {
    title: 'Tasteful',
    paragraph:
      'Page design and branding for one of the most popular cafe in Cracow.',
  },
  {
    title: 'Bornfight',
    paragraph:
      'Modern web design made for local sport team brand.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nisi porttitor, ultricies risus a, consequat velit.',
  },
  {
    title: 'The art of guitars',
    paragraph:
      'I help my good friend who opened music store, by making a ad website with modern and minimalistic desing.',
  },
];

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default class WorkPage extends Component {
  constructor() {
    super();
    this.controller = new Scrollmagic.Controller();
  }

  render() {
    const { uri, data } = this.props;
    const {
      titleImage: {
        childImageSharp: { titleImage },
      },
    } = data;
    const {
      allFile: { projectImages },
    } = data;

    return (
      <MainTemplate uri={uri}>
        <ParallaxCache />
        <StyledSectionGrid>
          <StyledTitleTextWrapper>
            <StyledSectionTitle>Work</StyledSectionTitle>
            <StyledHeader>All of my best projects</StyledHeader>
          </StyledTitleTextWrapper>
          <StyledImageWrapper>
            <Img fluid={titleImage} />
          </StyledImageWrapper>
        </StyledSectionGrid>
        {projectsData.map(({ title, paragraph }, index) => (
          <ProjectTemplate
            key={title}
            title={title}
            counter={index}
            paragraph={paragraph}
            image={projectImages[index].childImageSharp.fluid}
            controller={this.controller}
          />
        ))}
        <StyledFooter>
          <StyledHeader>
            See all of my projects on my{' '}
            <StyledLink href="https://github.com/Haans001?tab=repositories">
              github
            </StyledLink>
            .
          </StyledHeader>
        </StyledFooter>
      </MainTemplate>
    );
  }
}

export const query = graphql`
  query {
    titleImage: file(relativePath: { eq: "work.jpg" }) {
      childImageSharp {
        titleImage: fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      projectImages: nodes {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

WorkPage.propTypes = {
  uri: PropTypes.string.isRequired,
  data: PropTypes.shape({
    titleImage: PropTypes.shape(),
    allFile: PropTypes.shape({
      projectImages: PropTypes.arrayOf(PropTypes.shape()),
    }),
  }).isRequired,
};
