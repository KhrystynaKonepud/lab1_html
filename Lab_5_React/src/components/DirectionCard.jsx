import { Card } from 'react-bootstrap';
import FlipCard from './FlipCard';

export default function DirectionCard({ title, image, description, govInfo, laws, onMouseEnter }) {
  return (
    <Card
      className="mb-3 mx-auto float-in"
      style={{
        maxWidth: '1000px',
        borderLeft: '3px double #d2691e',
        borderTop: '3px double #d2691e',
        borderBottom: '3px double #d2691e',
        borderRight: '4px solid #d2691e',
        backgroundColor: '#fff8f2',
        padding: '12px'
      }}
      onMouseEnter={onMouseEnter}
    >
      <Card.Body className="p-0">
        <Card.Title className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
          {title}
        </Card.Title>

        <div className="my-2">
          <FlipCard image={image} alt={title} laws={laws} />
        </div>

        <Card.Text className="my-2">
          {description}
        </Card.Text>

        <Card.Text
          className="text-muted fst-italic"
          style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.2, color: '#555' }}
        >
          {govInfo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
