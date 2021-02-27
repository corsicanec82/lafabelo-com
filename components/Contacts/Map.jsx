import { RichText } from 'prismic-reactjs';

const Map = ({ content }) => {
  if (!content) {
    return null;
  }

  const [data] = content.items;

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
