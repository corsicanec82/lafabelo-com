import { RichText } from 'prismic-reactjs';
import LinkTo from './LinkTo.jsx';

const BreadCrumbs = ({ title, items }) => {
  if (!items) {
    return null;
  }

  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{RichText.asText(title)}</h2>
          <ol>
            {items.map(({ name, link }) => (
              <li key={RichText.asText(link)}>
                <LinkTo href={RichText.asText(link)}>{RichText.asText(name)}</LinkTo>
              </li>
            ))}
            <li>{RichText.asText(title)}</li>
          </ol>
        </div>

      </div>
    </section>
  );
};

export default BreadCrumbs;
