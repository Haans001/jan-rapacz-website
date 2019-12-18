import React from 'react';
import { string } from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({ src }) => (
  <div>
    <SVG src={src} />
  </div>
);

Icon.propTypes = {
  src: string.isRequired,
};

export default Icon;
