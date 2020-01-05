import { TimelineMax, Power4 } from 'gsap';
import Splitting from 'splitting';

export default function getAboutPageTimelines(refs) {
  const timelines = {};

  function heroSectionTimeline() {
    const ref = refs.heroSectionTimeline;
    const tl = new TimelineMax();
    tl.staggerFrom(
      ref.childNodes,
      1,
      { opacity: 0, y: 100, ease: Power4.easeInOut },
      0.3
    );

    return tl;
  }
  function timelineSectionTimeline() {
    const ref = refs.timelineSectionTimeline;
    const tl = new TimelineMax();
    tl.staggerFrom(
      ref.children[0].childNodes,
      0.6,
      {
        opacity: 0,
        y: 100,
        ease: Power4.easeInOut,
      },
      0.3
    );
    tl.staggerFrom(
      ref.children[1].childNodes,
      1,
      { opacity: 0, x: 150, ease: Power4.easeInOut },
      0.1
    );
    return tl;
  }

  function skillsSectionTimeline() {
    const ref = refs.skillsSectionTimeline;
    const quote = ref.children[1].children[0];
    const quoteChars = Splitting({ target: quote, whitespace: true })[0].chars;

    console.log(quoteChars);

    const tl = new TimelineMax();
    tl.from(ref.children[0].childNodes[0], 1, {
      opacity: 0,
      y: 100,
      ease: Power4.easeInOut,
    });
    tl.addLabel('bars');
    tl.staggerFrom(ref.querySelectorAll('ul>li>div>div'), 1, {
      css: { width: '0%' },
      ease: Power4.easeOut,
    });
    tl.staggerFrom(
      ref.querySelectorAll('ul>li>div'),
      1,
      {
        css: { width: '0%' },
        ease: Power4.easeOut,
      },
      0,
      'bars'
    );
    tl.staggerFrom(
      ref.querySelectorAll('ul>li>h5'),
      1,
      { opacity: 0 },
      0,
      'bars'
    );
    tl.staggerFrom(
      quoteChars,
      1,
      { opacity: 0, y: 200, ease: Power4.easeOut },
      0.02,
      'bars+=0.4'
    );

    return tl;
  }

  function toolsSectionTimeline() {
    const ref = refs.toolsSectionTimeline;
    const header = ref.firstChild;
    const lists = ref.lastChild.children;

    const tl = new TimelineMax();
    tl.from(header, 0.6, { opacity: 0, y: 100, ease: Power4.easeInOut });
    tl.staggerFrom(lists, 1, { opacity: 0, x: -50, ease: Power4.easeOut }, 0.3);

    return tl;
  }

  function footerTimeline() {
    const ref = refs.footerTimeline;
    const tl = new TimelineMax();
    const icons = ref.lastChild.childNodes;
    tl.staggerFrom(
      Array.prototype.slice.call(ref.childNodes).slice(0, 2),
      1,
      { opacity: 0, y: 100, ease: Power4.easeInOut },
      0.2
    );
    tl.staggerFrom(
      icons,
      1,
      { opacity: 0, y: 100, ease: Power4.easeInOut },
      0.2
    );

    return tl;
  }

  timelines.heroSectionTimeline = heroSectionTimeline();
  timelines.timelineSectionTimeline = timelineSectionTimeline();
  timelines.skillsSectionTimeline = skillsSectionTimeline();
  timelines.toolsSectionTimeline = toolsSectionTimeline();
  timelines.footerTimeline = footerTimeline();

  return timelines;
}

export function getProjectTemplateTimeline(infoRef, imageRef) {
  const textNodes = infoRef.childNodes;
  const tl = new TimelineMax({ reverse: false });
  tl.staggerFrom(
    textNodes,
    0.8,
    { opacity: 0, y: 50, ease: Power4.easeInOut },
    0.2
  );
  tl.from(imageRef, 0.6, { opacity: 0, ease: Power4.easeIn }, '-=0.6');

  return tl;
}

export function getHomepageTimeline(
  paragraph,
  socialLinks,
  email,
  sectionTitle
) {
  const tl = new TimelineMax({ paused: true });
  tl.from(sectionTitle, 1, { y: 50, opacity: 0, ease: Power4.easeInOut });
  tl.from(paragraph, 1, { y: 50, opacity: 0, ease: Power4.easeInOut });
  tl.staggerFrom(
    socialLinks.childNodes,
    0.6,
    { opacity: 0, y: 30, ease: Power4.easeIn },
    0.2
  );
  tl.from(email, 0.4, { opacity: 0, x: 50, ease: Power4.easeIn });

  return tl;
}
