import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { window } from 'browser-monads';
import MainTemplate from 'templates/MainTemplate';
import StyledSectionTitle, {
  StyledHeader,
  StyledParagraph,
} from 'utils/typography';
import ScrollTrigger from 'components/ScrollTrigger/ScrollTrigger';
import media from 'utils/media';
import Button from 'components/Button/Button';
import List from 'components/List/List';
import arrow from 'assets/images/arrow.svg';
import Icon from 'components/Icon/Icon';
import SVG from 'react-inlinesvg';
import quote from 'assets/images/quote.svg';
import instagram from 'assets/images/instagram.svg';
import linkedin from 'assets/images/linkedin.svg';
import facebook from 'assets/images/facebook.svg';
import getAboutTimelines from 'utils/timelines';
import SplitText from 'react-pose-text';

const ImagesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 250px;

  ${media.desktop`
    grid-template-columns: initial;
     div:nth-child(3), div:nth-child(2){
      display:none;
    }
  `}
`;

const StyledArrow = styled(Icon)`
  width: 15px;
  height: 100%;
`;

const StyledWrapper = styled.div`
  padding: 12%;

  &:nth-of-type(3) {
    padding: 5% 12% 12%;
  }
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

  ${media.tablet`
    grid-template-columns: initial;
    grid-gap: 0;
  `}
`;

const StyledTimelineList = styled.ul`
  list-style-type: none;
  margin-top: 10rem;

  li {
    margin: 5rem 0;
    font-size: ${({ theme }) => theme.fontSize.m};

    span {
      color: ${({ theme }) => theme.colors.blue};
    }

    p {
      color: ${({ theme }) => theme.colors.grey};
      letter-spacing: 2px;
      margin: 0.5rem 0;
    }

    ${media.tablet`
      font-size: ${({ theme }) => theme.fontSize.mobile.m};
    `}
  }

  ${media.tablet`
      margin: 0;
      padding: 0;
  `}
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

  ${media.tablet`
      width:100%;
  `}

  div {
    height: 100%;
    width: ${({ widthPercent }) => `${widthPercent}%`};
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledQuoteWrapper = styled.div`
  position: relative;
  margin-top: 25rem;

  ${media.tablet`
    margin-top: 5rem;
  `}
`;

const StyledQuote = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.level1};
  position: relative;

  ${media.tablet`
      font-size: 3.4rem;
  `}
  /* stylelint-disable */
  span {
    display: inline-block;
  }
  /* stylelint-enable */
`;

const StyledQuoteIcon = styled(SVG)`
  position: absolute;
  top: -6rem;
  left: -6rem;

  ${media.tablet`
      left:-2rem;
      top: -3rem;
      width: 100px;
  `}
`;

const StyledDivider = styled.div`
  display: grid;
  place-items: center;
  height: 200px;
  margin: 15rem 0;

  ${media.tablet`
      margin: 12rem;
  `}

  &::after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledToolsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledSocialIconsWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  svg {
    margin: 4rem;
    cursor: pointer;
  }

  ${media.tablet`
    margin-top: 3rem;
  `}
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

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.triggers = {};
    this.timelines = {};
    this.state = {
      scrollContainer: null,
    };
  }

  componentDidMount() {
    this.timelines = getAboutTimelines(this.triggers);
    this.setState({
      scrollContainer: document.getElementById('scrollContainer'),
    });
  }

  getTimeline = timeline => timeline && timeline;

  render() {
    const { uri, data } = this.props;
    const {
      allFile: { edges },
    } = data;
    const { scrollContainer } = this.state;

    return (
      <MainTemplate uri={uri}>
        <ImagesWrapper>
          {edges.map(edge => (
            <Img fluid={edge.node.childImageSharp.fluid} key={edge.node.id} />
          ))}
        </ImagesWrapper>
        <ScrollTrigger
          scrollContainer={scrollContainer}
          timeline={this.getTimeline(this.timelines.heroSectionTimeline)}
          triggerOffset={window.innerHeight / 2}
        >
          <div>
            <StyledWrapper
              ref={trigger => {
                this.triggers.heroSectionTimeline = trigger;
              }}
            >
              <StyledSectionTitle>About</StyledSectionTitle>
              <StyledHeader>Jan Rapacz</StyledHeader>
              <StyledParagraph>
                Mutlitalented developer and designer based in Kraków in south
                Poland, focusing on best user experience and interface design. I
                got into web dev few years ago and I'm proudly developing my
                skills in all kinds of IT business. In free time I love to spent
                time with people I love and respect. I won't despite a great
                beer with good interlocutor 🍺.
              </StyledParagraph>
              <Button to="/">
                Contact Me <StyledArrow src={arrow} />
              </Button>
            </StyledWrapper>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          scrollContainer={scrollContainer}
          timeline={this.getTimeline(this.timelines.timelineSectionTimeline)}
          triggerOffset={window.innerHeight / 2}
        >
          <StyledWrapper>
            <StyledSectionGrid
              ref={trigger => {
                this.triggers.timelineSectionTimeline = trigger;
              }}
            >
              <div>
                <StyledSectionTitle>Timeline</StyledSectionTitle>
                <StyledHeader>
                  School years and <u>proffesional</u> experience.
                </StyledHeader>
              </div>
              <StyledTimelineList>
                {timelineListData.map(item => (
                  <li key={item.time}>
                    <span>{item.time}</span>
                    <p>{item.content}</p>
                  </li>
                ))}
              </StyledTimelineList>
            </StyledSectionGrid>
          </StyledWrapper>
        </ScrollTrigger>
        <StyledWrapper>
          <ScrollTrigger
            scrollContainer={scrollContainer}
            timeline={this.getTimeline(this.timelines.skillsSectionTimeline)}
            triggerOffset={window.innerHeight / 2}
          >
            <div>
              <StyledSectionGrid
                ref={trigger => {
                  this.triggers.skillsSectionTimeline = trigger;
                }}
              >
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
                <StyledQuoteWrapper>
                  <StyledQuote>
                    <SplitText>
                      Learning is like an immeasurable sea. The more you drink
                      it, the more thirsty you are.
                    </SplitText>
                  </StyledQuote>
                  <StyledQuoteIcon cacheRequests={false} src={quote} />
                </StyledQuoteWrapper>
              </StyledSectionGrid>
            </div>
          </ScrollTrigger>
          <StyledDivider />
          <ScrollTrigger
            scrollContainer={scrollContainer}
            timeline={this.getTimeline(this.timelines.toolsSectionTimeline)}
            triggerOffset={window.innerHeight / 2}
          >
            <div>
              <div
                ref={trigger => {
                  this.triggers.toolsSectionTimeline = trigger;
                }}
              >
                <StyledHeader>Tools that i use</StyledHeader>
                <StyledToolsListWrapper>
                  {toolsData.map(({ title, tools }) => (
                    <List key={title} title={title} data={tools} />
                  ))}
                </StyledToolsListWrapper>
              </div>
            </div>
          </ScrollTrigger>
        </StyledWrapper>
        <ScrollTrigger
          scrollContainer={scrollContainer}
          timeline={this.getTimeline(this.timelines.footerTimeline)}
          triggerOffset={window.innerHeight / 2}
        >
          <StyledWrapper>
            <StyledFooter
              ref={trigger => {
                this.triggers.footerTimeline = trigger;
              }}
            >
              <StyledHeader>
                Thats my and my stuff. Ready to see my projects?
              </StyledHeader>
              <Button to="/">
                My Work <StyledArrow src={arrow} />
              </Button>
              <StyledSocialIconsWrapper>
                <Icon src={facebook} />
                <Icon src={linkedin} />
                <Icon src={instagram} />
              </StyledSocialIconsWrapper>
            </StyledFooter>
          </StyledWrapper>
        </ScrollTrigger>
      </MainTemplate>
    );
  }
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
      edges {
        node {
          id
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
  uri: propTypes.string,
};

AboutPage.defaultProps = {
  uri: '/',
};

export default AboutPage;
