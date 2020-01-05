import styled from 'styled-components';
import media from 'utils/media';

export const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  font-weight: 700;
  letter-spacing: 2px;

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.mobile.l};
    margin-top: 4rem;
  `}
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 60%;
  letter-spacing: 1px;
  margin-top: 3.5rem;

  ${media.tablet`
    max-width:100%;
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
    margin-top: 0;
  `}
`;

const StyledSectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: uppercase;

  ${media.tablet`
    font-size:${({ theme }) => theme.fontSize.mobile.m};
  `}
`;
export default StyledSectionTitle;
