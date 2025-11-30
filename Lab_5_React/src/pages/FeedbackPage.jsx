import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Tooltip from '../components/Tooltip';


export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    education: '',
    purpose: '',
    details: '',
    consent: false
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Form submitted:', formData);
      alert('Форму відправлено!');
    }

    setValidated(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      education: '',
      purpose: '',
      details: '',
      consent: false
    });
    setValidated(false);
  };

  return (
    <Container className="text-center py-4">
      <h2 className="mb-4 feedback-title">
        Форма зворотнього зв'язку
      </h2>

      <section className="mx-auto p-4 bg-white rounded shadow float-in feedback-section">
        <hr />
        <Form noValidate validated={validated} onSubmit={handleSubmit} onReset={handleReset}>

          {/* Персональна інформація */}
          <fieldset className="border border-2 rounded p-3 mb-3 fieldset-personal">
            <legend className="fw-bold px-2 fieldset-legend">
              Персональна інформація
            </legend>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="fw-medium">Прізвище та ім'я:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Введіть ваше ім'я"
              />
              <Form.Control.Feedback type="invalid">
                Будь ласка, введіть ваше ім'я
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-medium">E-mail:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
              <Form.Control.Feedback type="invalid">
                Будь ласка, введіть коректний email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label className="fw-medium">Вік:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                min="14"
                max="100"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Вік має бути від 14 до 100
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="education">
              <Form.Label className="fw-medium">Освіта:</Form.Label>
              <Form.Select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">-- Оберіть освіту --</option>
                <option value="повна">Повна</option>
                <option value="неповна">Неповна</option>
                <option value="вища">Вища</option>
                <option value="професійна">Професійна</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Будь ласка, оберіть освіту
              </Form.Control.Feedback>
            </Form.Group>
          </fieldset>

          {/* Мета зворотнього зв'язку */}
          <Form.Group className="mb-3" controlId="purpose">
            <Form.Label className="fw-medium">Мета зворотнього зв'язку:</Form.Label>
            <Form.Select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">-- Оберіть мету --</option>
              <option value="співпраця">Співпраця</option>
              <option value="скарга">Скарга на порушення права власності</option>
              <option value="пропозиція">Пропозиція</option>
              <option value="помилка">Наявність помилки</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Будь ласка, оберіть мету
            </Form.Control.Feedback>
          </Form.Group>

          {/* Детально з Tooltip */}
          <Form.Group className="mb-3" controlId="details">
            <Form.Label className="fw-medium">Детально:</Form.Label>
            <Tooltip text="Дякуючи Вам, ми стаємо кращі! Конкретизуйте мету звернення, будь ласка">
              <Form.Control
                as="textarea"
                name="details"
                rows={5}
                maxLength={500}
                placeholder="Введіть ваш коментар..."
                value={formData.details}
                onChange={handleChange}
                className="hover-highlight"
              />
            </Tooltip>
          </Form.Group>

          {/* Згода */}
          <Form.Group className="mb-4" controlId="consent">
            <Form.Check
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              label="Я надаю згоду на обробку моїх персональних даних"
              feedback="Ви повинні прийняти умови"
              feedbackType="invalid"
            />
          </Form.Group>

          {/* Кнопки */}
          <div className="d-flex justify-content-center gap-3">
            <Button type="submit" variant="primary" size="lg">
              Відправити
            </Button>
            <Button type="reset" variant="secondary" size="lg">
              Очистити форму
            </Button>
          </div>
        </Form>
        <hr />
      </section>
    </Container>
  );
}
