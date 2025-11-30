export default function FlipCard({ image, alt, laws }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={alt} tabIndex="0" />
        </div>
        <div className="flip-card-back">
          <h4>Законодавство</h4>
          <ul>
            {laws.map((law, i) => (
              <li key={i}>• {law}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
