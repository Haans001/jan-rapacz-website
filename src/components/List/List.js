import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledListTitle = styled.h5`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xm};
  text-decoration: underline;
  margin: 5rem 0 1rem;
  letter-spacing: 1px;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-right: 15rem;

  li {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default function List({ title, data }) {
  return (
    <div>
      <StyledListTitle>{title}</StyledListTitle>
      <StyledList>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </StyledList>
    </div>
  );
}

List.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.string).isRequired,
};
