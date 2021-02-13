import { useTransition, animated } from 'react-spring';
import { RichText } from 'prismic-reactjs';

import LinkTo from './LinkTo.jsx';

const ReadMore = ({ link, text }) => {
  if (!link || !text) {
    return null;
  }

  return (
    <div className="text-center">
      <LinkTo href={link} className="btn-get-started">{text}</LinkTo>
    </div>
  );
};

const CarouselContent = ({ item }) => {
  const transitions = useTransition(null, null, {
    from: { transform: 'translate(0,200%)' },
    enter: { transform: 'translate(0,0%)' },
  });

  return transitions.map(({ key, props }) => (
    <animated.div key={key} className="carousel-content animated fadeInUp" style={{ ...props }}>
      {RichText.render(item.text)}
      <ReadMore
        link={RichText.asText(item.more_link)}
        text={RichText.asText(item.more_text)}
      />
    </animated.div>
  ));
};

export default CarouselContent;
