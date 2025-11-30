import { Container, Table} from 'react-bootstrap';
import { useFounders } from '../hooks/useFounders';

export default function HomePage() {
  const { founders } = useFounders();

  return (
    <Container as="main" className="my-4">
      <article className="p-4 mx-auto float-in article-intro">
        <h2 className="mb-3 article-title">
          Мета створення корпорації 👨‍💼
        </h2>
        <hr className="article-divider" />
        <p className="article-text">
          <i><b>DevStream</b></i> — це сучасна IT-корпорація, що об'єднує талановитих фахівців у сфері
          інформаційних технологій. Основна мета компанії — створення якісних програмних
          продуктів, впровадження інноваційних технологій та підтримка цифрової трансформації
          бізнесу в Україні та за її межами. Також вагомою діяльністю нашої компанії є співпраця з <em>Міністерством цифрової трансформації України</em>.
        </p>
        <p className="article-text">
          Корпорація активно розвиває напрямки <em>аутсорсингу та аутстафінгу</em>,
          забезпечуючи українських розробників можливістю працювати над міжнародними проєктами
          і реалізовувати свій потенціал на глобальному рівні.
        </p>
        <p className="article-text">
          <u>DevStream</u> також займається навчанням і підготовкою висококваліфікованих IT-спеціалістів,
          сприяє працевлаштуванню фахівців у провідних компаніях за кордоном,
          створює умови для професійного зростання та розвитку кар'єри у сфері технологій.
        </p>
      </article>

      <section className="p-4 mx-auto mt-4 section-tasks">
        <h3 className="mb-3 article-title">
          Завдання для досягнення мети:
        </h3>
        <ol type="I" className="tasks-list">
          <li>Розробка програмного забезпечення для бізнесу та освіти.</li>
          <li>Проведення тренінгів та навчальних програм для розробників.</li>
          <li>Партнерство з державними установами міжнародними компаніями.</li>
        </ol>
      </section>

      <div className="text-center my-5">
        <Table bordered hover responsive className="mx-auto table-container">
          <caption className="text-center">
            <b>Інформація про засновників корпорації DevStream</b>
          </caption>
          <thead className="table-light">
            <tr>
              <th rowSpan="2">ПІБ</th>
              <th colSpan="2">Досвід роботи</th>
              <th rowSpan="2">Освіта</th>
              <th rowSpan="2">Рівень</th>
            </tr>
            <tr>
              <th>Компанії</th>
              <th>Стаж</th>
            </tr>
          </thead>
          <tbody>
            {founders.map((founder) => (
              <tr key={founder.id}>
                <td>{founder.name}</td>
                <td>{founder.companies}</td>
                <td>{founder.experience}</td>
                <td>{founder.education}</td>
                <td>{founder.level}</td>
              </tr>
            ))}
            <tr className="table-secondary">
              <td colSpan="2">Загальний досвід засновників</td>
              <td colSpan="3">30 років</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-center">
                <i>Дані оновлено у 2025 році</i>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <aside className="mx-5 my-4">
        <h3 className="links-title">Корисні посилання</h3>
        <ul className="list-unstyled d-flex gap-4">
          <li>
            <a
              href="https://alcor-bpo.com/outsourcing-vs-outstaffing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline"
            >
              Аутсорсинг та Аутстафінг
            </a>
          </li>
          <li>
            <a
              href="https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D0%BD%D1%96%D1%81%D1%82%D1%80%D1%81%D1%82%D0%B2%D0%BE_%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D1%97_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%97_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Міністерство цифрової трансформації України
            </a>
          </li>
        </ul>
      </aside>

      <hr />
    </Container>
  );
}
