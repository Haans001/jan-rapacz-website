import styled from 'styled-components';

export default styled.h5`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: uppercase;
`;

export const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  max-width: 60%;
  letter-spacing: 1px;
  margin-top: 5rem;
`;
