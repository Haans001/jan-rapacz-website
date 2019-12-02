import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 60%;
  letter-spacing: 1px;
  margin-top: 3.5rem;
`;

const StyledSectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: uppercase;
`;
export default StyledSectionTitle;
