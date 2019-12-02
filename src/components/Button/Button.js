import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  padding: 1.5rem 2rem 1.5rem 1rem;
  position: relative;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  z-index: ${({ theme }) => theme.zIndex.level2};
  margin-top: 3rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &::after {
    position: absolute;
    display: inline-block;
    content: '';
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    z-index: ${({ theme }) => theme.zIndex.levelMinus};
    transition: width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  svg {
    margin-left: 1rem;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export default StyledButton;
