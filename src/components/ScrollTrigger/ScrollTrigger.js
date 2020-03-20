import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'browser-monads';

export default class ScrollTrigger extends Component {
  componentDidUpdate() {
    const triggerRef = this.ref;
    const { scrollContainer, timeline, triggerOffset = 0 } = this.props;

    function playTimeline() {
      const rect = triggerRef.getBoundingClientRect();
      if (rect.top <= triggerOffset) {
        timeline.play();
      }
    }
    timeline.eventCallback('onComplete', () => {
      scrollContainer.removeEventListener('scroll', playTimeline);
    });

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', playTimeline);
    }
  }

  render() {
    const { children } = this.props;
    const childElement = React.Children.only(children);
    return React.cloneElement(childElement, {
      ref: el => {
        this.ref = el;
      },
    });
  }
}

ScrollTrigger.propTypes = {
  scrollContainer: PropTypes.instanceOf(Element).isRequired,
  timeline: PropTypes.objectOf().isRequired,
  triggerOffset: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
ScrollTrigger.defaultProps = {
  triggerOffset: 0,
};
