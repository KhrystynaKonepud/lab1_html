import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import DirectionCard from '../components/DirectionCard';
import Modal from '../components/Modal';
import { useDirections } from '../hooks/useDirections';

export default function DirectionsPage() {
  const { directions, loading } = useDirections();
  const [modalOpen, setModalOpen] = useState(false);
  const [shownModals, setShownModals] = useState({});

  const handleCardHover = (cardId) => {
    if (!shownModals[cardId]) {
      setModalOpen(true);
      setShownModals(prev => ({ ...prev, [cardId]: true }));
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return (
      <Container className="text-center mt-5 pt-5">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Завантаження...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <>
      <Container as="main" className="mt-5 pt-5">
        {directions.map((direction) => (
          <DirectionCard
            key={direction.id}
            title={direction.title}
            image={direction.image}
            description={direction.description}
            govInfo={direction.govInfo}
            laws={direction.laws}
            onMouseEnter={() => handleCardHover(direction.id)}
          />
        ))}
      </Container>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}
