import { RichText } from 'prismic-reactjs';
import cn from 'classnames';

const CompaniesList = ({ companies }) => {
  if (!companies) {
    return null;
  }

  return companies.map((company, i) => {
    const key = `item-${i}`;
    const companyClass = cn('row justify-content-center', { 'mt-5': i !== 0 });

    return (
      <div key={key} className={companyClass} data-aos="fade-up">
        <div className="col-lg-10">
          <div className="info-wrap">

            <div className="row">
              <div className="col text-center">
                {RichText.render(company.name)}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 info">
                <i className="icofont-google-map" />
                {RichText.render(company.location)}
              </div>

              <div className="col-lg-4 info mt-4 mt-lg-0">
                <i className="icofont-envelope" />
                {RichText.render(company.emails)}
              </div>

              <div className="col-lg-4 info mt-4 mt-lg-0">
                <i className="icofont-phone" />
                {RichText.render(company.phones)}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  });
};

export default CompaniesList;
