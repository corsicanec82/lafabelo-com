import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import cn from 'classnames';

import CarouselContent from './CarouselContent';

const Carousel = ({ items }) => {
  if (!items) {
    return null;
  }

  const slides = items.map((item, id) => ({ id, ...item }));

  const [index, setIndex] = useState(0);

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 5, tension: 370, friction: 26 },
  });

  const slidePrevious = (e) => {
    e.preventDefault();
    const nextIndex = index - 1;
    setIndex(nextIndex < 0 ? slides.length - 1 : nextIndex);
  };

  const slideNext = (e) => {
    e.preventDefault();
    const nextIndex = index + 1;
    setIndex(nextIndex === slides.length ? 0 : nextIndex);
  };

  const goToSlide = (i) => (e) => {
    e.preventDefault();
    setIndex(i);
  };

  useEffect(() => {
    const timerId = setInterval(() => setIndex((state) => (state + 1) % 3), 8000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <div className="carousel-inner" role="listbox">

          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} className="carousel-item active" style={{ ...props, backgroundImage: `url(${item.image.url})` }}>
              <div className="carousel-container">
                {item.id === index && <CarouselContent item={item} />}
              </div>
            </animated.div>
          ))}

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev" onClick={slidePrevious}>
          <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next" onClick={slideNext}>
          <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>

        <ol className="carousel-indicators" id="hero-carousel-indicators">
          {slides.map(({ id }) => {
            const liClass = cn({ active: index === id });
            return (
              /* eslint-disable-next-line */
              <li key={id} className={liClass} data-target="#carouselExampleIndicators" data-slide-to="1" onClick={goToSlide(id)} />
            );
          })}
        </ol>

      </div>
    </section>
  );
};

export default Carousel;
