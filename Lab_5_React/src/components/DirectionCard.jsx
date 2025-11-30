import { Card } from 'react-bootstrap';
import FlipCard from './FlipCard';

export default function DirectionCard({ title, image, description, govInfo, laws, onMouseEnter }) {
  return (
    <Card className="mb-3 mx-auto float-in direction-card" onMouseEnter={onMouseEnter}>
      <Card.Body className="p-0">
        <Card.Title className="fw-bold mb-2 direction-card-title">
          {title}
        </Card.Title>

        <div className="my-2">
          <FlipCard image={image} alt={title} laws={laws} />
        </div>

        <Card.Text className="my-2">
          {description}
        </Card.Text>

        <Card.Text className="text-muted fst-italic direction-card-gov-info">
          {govInfo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
