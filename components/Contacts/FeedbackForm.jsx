import { RichText } from 'prismic-reactjs';

const FeedbackForm = ({ content }) => {
  if (!content) {
    return null;
  }

  const [data] = content.items;

  return (
    <div className="row mt-5 justify-content-center" data-aos="fade-up">
      <div className="col-lg-10">
        <form action="" method="post" className="php-email-form">
          <div className="form-row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder={RichText.asText(data.placeholder_name)} data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate" />
            </div>
            <div className="col-md-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder={RichText.asText(data.placeholder_email)} data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder={RichText.asText(data.placeholder_subject)} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate" />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder={RichText.asText(data.placeholder_message)} />
            <div className="validate" />
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">{RichText.asText(data.submit)}</button></div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
