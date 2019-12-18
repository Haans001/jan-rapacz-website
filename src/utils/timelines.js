import { TimelineMax, Power4 } from 'gsap';

function getAboutPageTimelines(refs) {
  const timelines = [];

  function heroSectionTimeline() {
    const ref = refs[0];
    const tl = new TimelineMax();
    tl.staggerFrom(
      ref.childNodes,
      1,
      { opacity: 0, y: 100, ease: Power4.easeInOut },
      0.3
    );

    timelines.push(tl);
  }
  function timelineSectionTimeline() {
    const ref = refs[1];
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
    timelines.push(tl);
  }

  function skillsSectionTimeline() {
    const ref = refs[2];
    const quote = ref.children[1].children[0];
    const quoteText = quote.textContent;
    quote.innerHTML = quote.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

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
      quote.childNodes,
      1,
      { opacity: 0, y: 200, ease: Power4.easeOut },
      0.02,
      'bars+=0.4',
      () => {
        quote.textContent = quoteText;
      }
    );

    timelines.push(tl);
  }

  function toolsSectionTimeline() {
    const ref = refs[3];
    const header = ref.firstChild;
    const lists = ref.lastChild.children;

    const tl = new TimelineMax();
    tl.from(header, 0.6, { opacity: 0, y: 100, ease: Power4.easeInOut });
    tl.staggerFrom(lists, 1, { opacity: 0, x: -50, ease: Power4.easeOut }, 0.3);

    timelines.push(tl);
  }

  function footerTimeline() {
    const ref = refs[4];
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

    timelines.push(tl);
  }

  heroSectionTimeline();
  timelineSectionTimeline();
  skillsSectionTimeline();
  toolsSectionTimeline();
  footerTimeline();

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

export default getAboutPageTimelines;
