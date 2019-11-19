import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 15%;
  top: 25%;
`;

const StyledLink = styled(Link)`
  color: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
`;

const links = ['about', 'work', 'contact'];

export default function Navigation({ pathname, handleToggle }) {
  return (
    <StyledList>
      <StyledLink onClick={handleToggle} active={pathname === '/'}>
        home
      </StyledLink>
      {links.map(link => (
        <li key={link}>
          <StyledLink
            onClick={handleToggle}
            active={pathname === `/${link}`}
            to={`/${link}`}
          >
            {link}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
}

Navigation.propTypes = {
  pathname: propTypes.string.isRequired,
  handleToggle: propTypes.func.isRequired,
};
