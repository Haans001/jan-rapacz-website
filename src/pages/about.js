import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import MainTemplate from 'templates/MainTemplate';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';
import Button from 'components/Button/Button';
import List from 'components/List/List';
import arrow from 'assets/images/arrow.svg';
import StyledIcon from 'components/Icon/Icon';
import SVG from 'react-inlinesvg';
import quote from 'assets/images/quote.svg';
import instagram from 'assets/images/instagram.svg';
import linkedin from 'assets/images/linkedin.svg';
import facebook from 'assets/images/facebook.svg';
import Fade from 'react-reveal/Fade';

const ImagesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 350px;
`;

const StyledWrapper = styled.div`
  padding: 12%;
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.darkGrey};
  }
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.black};
  }
`;

const StyledSectionGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 10%;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 10rem;

  li {
    margin: 5rem 0;

    span {
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    p {
      color: ${({ theme }) => theme.colors.grey};
      font-size: ${({ theme }) => theme.fontSize.m};
      letter-spacing: 1px;
      margin: 0.5rem 0;
    }
  }
`;

const StyledSkillsList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-top: 7rem;

  li {
    margin: 5rem 0;

    h5 {
      font-weight: ${({ theme }) => theme.fontWeight.light};
      color: ${({ theme }) => theme.colors.grey};
      font-size: ${({ theme }) => theme.fontSize.m};
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledSkillBar = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 10px;

  div {
    height: 100%;
    width: ${({ widthPercent }) => `${widthPercent}%`};
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledQuote = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: italic;
  margin-top: 25rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level1};

  svg {
    position: absolute;
    top: -8rem;
    left: -8rem;
    z-index: -1;
  }
`;

const StyledDivider = styled.div`
  display: grid;
  place-items: center;
  height: 200px;
  margin: 15rem 0;

  &::after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledToolsListWrapper = styled.div`
  display: flex;
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledSocialIconsWrapper = styled.div`
  margin-top: 10rem;
  svg {
    margin: 4rem;
    cursor: pointer;
  }
`;

const timelineListData = [
  { time: '2019-now', content: 'Freelance in web-dev' },
  { time: '2017-2019', content: 'Front-end dev in Stronnet' },
  { time: '2014-2017', content: 'Learning in collage' },
  { time: '2001-2014', content: 'Looking for life passion :)' },
];

const skillsData = [
  { name: 'Code', percent: 90 },
  { name: 'Design', percent: 50 },
  { name: 'Concept & Strategy', percent: 65 },
  { name: 'Product design', percent: 30 },
];

const toolsData = [
  { title: 'Front-end', tools: ['React', 'HTML', 'Vue', 'ES6'] },
  { title: 'Styling', tools: ['CSS3', 'SCSS', 'Less'] },
  { title: 'Design', tools: ['Adobe XD', 'Figma', 'Sketch', 'Photoshop'] },
  {
    title: 'Backend',
    tools: ['Headless CMS (Contentful)', 'Express.js', 'Django', 'AWS Lambda'],
  },
];

const AboutPage = ({ children, uri, data }) => {
  const {
    allFile: { edges },
  } = data;

  return (
    <MainTemplate childeren={children} uri={uri}>
      <ImagesWrapper>
        {edges.map(edge => (
          <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
        ))}
      </ImagesWrapper>
      <StyledWrapper>
        <StyledSectionTitle>About</StyledSectionTitle>
        <StyledHeader>Jan Rapacz</StyledHeader>
        <StyledParagraph>
          Mutlitalented developer and designer based in Kraków in south Poland,
          focusing on best user experience and interface design. I got into web
          dev few years ago and I'm proudly developing my skills in all kinds of
          IT business. In free time I love to spent time with people I love and
          respect. I won't despite a great beer with good interlocutor 🍺.
        </StyledParagraph>
        <Button to="/">
          Contact Me <StyledIcon src={arrow} />
        </Button>
      </StyledWrapper>
      <StyledWrapper>
        <StyledSectionGrid>
          <div>
            <StyledSectionTitle>Timeline</StyledSectionTitle>
            <StyledHeader>
              School years and <u>proffesional</u> experience.
            </StyledHeader>
          </div>
          <div>
            <StyledList>
              {timelineListData.map(item => (
                <li key={item.title}>
                  <span>{item.time}</span>
                  <p>{item.content}</p>
                </li>
              ))}
            </StyledList>
          </div>
        </StyledSectionGrid>
      </StyledWrapper>
      <StyledWrapper>
        <StyledSectionGrid>
          <div>
            <StyledSectionTitle>skills</StyledSectionTitle>
            <StyledSkillsList>
              {skillsData.map(skill => (
                <li key={skill.name}>
                  <h5>{skill.name}</h5>
                  <StyledSkillBar widthPercent={skill.percent}>
                    <div />
                  </StyledSkillBar>
                </li>
              ))}
            </StyledSkillsList>
          </div>

          <StyledQuote>
            Learning is like an immeasurable sea. The more you drink it, the
            more thirsty you are.
            <SVG src={quote} />
          </StyledQuote>
        </StyledSectionGrid>
        <StyledDivider />
        <StyledHeader>Tools that i use</StyledHeader>
        <StyledToolsListWrapper>
          {toolsData.map(({ title, tools }) => (
            <List key={title} title={title} data={tools} />
          ))}
        </StyledToolsListWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledFooter>
          <StyledHeader>
            Thats my and my stuff. Ready to see my projects?
          </StyledHeader>
          <Button to="/">
            My Work <StyledIcon src={arrow} />
          </Button>
          <StyledSocialIconsWrapper>
            <SVG src={facebook} />
            <SVG src={linkedin} />
            <SVG src={instagram} />
          </StyledSocialIconsWrapper>
        </StyledFooter>
      </StyledWrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

AboutPage.propTypes = {
  data: propTypes.shape({
    allFile: propTypes.shape({
      edges: propTypes.arrayOf(propTypes.shape()),
    }),
  }).isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  uri: propTypes.string,
};

AboutPage.defaultProps = {
  children: [],
  uri: '/',
};

export default AboutPage;
