import React, { useContext, useEffect, useState } from 'react';
import Link from 'gatsby-plugin-transition-link';
import TransitionContext from 'utils/TransitionContext';
import { TimelineMax } from 'gsap';

const TransitionLink = props => {
  const data = useContext(TransitionContext);
  const [tl, setTl] = useState(null);

  useEffect(() => {
    const { transitionBox } = data;
    let timeline;
    if (transitionBox) {
      timeline = new TimelineMax({ paused: true });
      timeline.to(data.transitionBox, 1, { css: { width: '100%' } });
      timeline.set(data.transitionBox, { css: { right: 0 } });
      timeline.to(data.transitionBox, 1, { css: { width: 0 } });
      setTl(timeline);
    } else {
      timeline = null;
    }
  }, [data]);

  return (
    <Link
      to="/"
      exit={{ trigger: ({ exit, node }) => console.log(exit, node) }}
      entry={{ trigger: ({ entry, node }) => tl && tl.play() }}
    >
      {props.children}
    </Link>
  );
};

export default TransitionLink;
