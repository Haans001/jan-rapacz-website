// const ParallaxCache = () => {
//   const { parallaxController } = useController();
//   const timerId = useRef(0);
//   useLayoutEffect(() => {
//     setTimeout(() => parallaxController.update(), 100);
//     return () => clearTimeout(timerId);
//   }, [parallaxController]);

//   return <div />;
// };
// export default ParallaxCache;

import { withController } from 'react-scroll-parallax';
import React from 'react';
import PropTypes from 'prop-types';

class ParallaxCache extends React.Component {
  componentDidMount() {
    const { parallaxController } = this.props;
    setTimeout(() => parallaxController.update(), 200);
  }

  render() {
    return null;
  }
}

ParallaxCache.propTypes = {
  parallaxController: PropTypes.objectOf().isRequired,
};
export default withController(ParallaxCache);
