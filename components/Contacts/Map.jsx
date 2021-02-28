import { RichText } from 'prismic-reactjs';

const Map = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="map-section">
      <iframe
        title={RichText.asText(data.company_name)}
        style={{ border: 0, width: '100%', height: 300 }}
        src={data.map_link.url}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Map;
