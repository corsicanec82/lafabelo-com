import { RichText } from 'prismic-reactjs';
import LinkTo from './LinkTo.jsx';

const BreadCrumbs = ({ title, breadcrumbs }) => {
  if (!breadcrumbs) {
    return null;
  }

  const { items } = breadcrumbs;

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
          </ol>
        </div>

      </div>
    </section>
  );
};

export default BreadCrumbs;
