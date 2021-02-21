import { RichText } from 'prismic-reactjs';
import cn from 'classnames';
import Image from 'next/image';

import styles from './ContentList.module.css';

const ContentList = ({ content }) => {
  if (!content) {
    return null;
  }

  const { items } = content;

  return items.map((item, i) => {
    const imageUrl = `${item.image.url}`;
    const key = `item-${i}`;
    const even = i % 2 === 0;
    const sectionClass = cn('about-us', { 'section-bg': !even });
    const image = (
      <div className="about-us-item">
        {/* <Img loading="auto" fluid={item.item_imageSharp.childImageSharp.fluid} /> */}
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
          {/* FIXME: image must be relative or need change layout */}
          <Image src={imageUrl} layout="fill" objectFit="cover" className={styles.jopa} />
        </div>
      </div>
    );
    const content = RichText.render(item.content);

    return (
      <section key={key} className={sectionClass}>
        <div className="container">

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-right">
              {even ? content : image}
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              {even ? image : content}
            </div>
          </div>

        </div>
      </section>
    );
  });
};

export default ContentList;
