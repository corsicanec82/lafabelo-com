import { RichText } from 'prismic-reactjs';
import cn from 'classnames';
import Image from 'next/image';

const ContentList = ({ blocks }) => {
  if (!blocks) {
    return null;
  }

  return blocks.map((item, i) => {
    const imageUrl = `${item.image.url}`;
    const key = `item-${i}`;
    const even = i % 2 === 0;
    const sectionClass = cn('about-us', { 'section-bg': !even });
    const image = (
      <div className="about-us-item">
        <Image
          src={imageUrl}
          layout="responsive"
          objectFit="cover"
          width="1600"
          height="1200"
        />
      </div>
    );
    const text = RichText.render(item.text);

    return (
      <section key={key} className={sectionClass}>
        <div className="container">

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-right">
              {even ? text : image}
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              {even ? image : text}
            </div>
          </div>

        </div>
      </section>
    );
  });
};

export default ContentList;
