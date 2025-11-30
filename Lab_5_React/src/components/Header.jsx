import { NavLink } from 'react-router-dom';
import TypeWriter from './TypeWriter';

export default function Header({ showAnnouncement = false }) {
  return (
    <>
      <header
        className="position-absolute top-0 start-50 translate-middle-x w-100 text-center py-3 px-2 shadow-sm"
        style={{ zIndex: 1000, backgroundColor: 'var(--soft-blue)' }}
      >
        <h1
          className="fw-semibold mb-2"
          style={{ fontSize: '1.9rem', color: 'var(--accent-blue)', margin: '0 0 6px 0' }}
        >
          Корпорація DevStream
        </h1>
        <img
          src="/images/logowithnoback.png"
          alt="Логотип DevStream"
          className="img-fluid"
          style={{
            width: '220px',
            transition: 'transform 0.25s ease',
            verticalAlign: 'middle'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        {showAnnouncement && (
          <div
            className="text-danger fw-bold mt-3"
            style={{
              fontSize: '1.3em',
              minHeight: '60px',
              lineHeight: 1.4
            }}
          >
            <TypeWriter
              text="Увага! З 24 грудня по 8 січня офіс працює в святковому режимі. З Новим Роком!"
              speed={50}
            />
          </div>
        )}
      </header>

      <nav
        className="d-flex justify-content-center align-items-center gap-2"
        style={{ marginTop: '200px', padding: '8px 0' }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn fw-bold text-white ${isActive ? 'shadow' : ''}`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'var(--bright)' : 'var(--accent-blue)',
            padding: '10px 18px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, transform 0.1s ease'
          })}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bright)'}
          onMouseLeave={(e) => {
            if (!e.target.classList.contains('active')) {
              e.target.style.backgroundColor = 'var(--accent-blue)';
            }
          }}
        >
          Головна
        </NavLink>
        <NavLink
          to="/directions"
          className={({ isActive }) =>
            `btn fw-bold text-white ${isActive ? 'shadow' : ''}`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'var(--bright)' : 'var(--accent-blue)',
            padding: '10px 18px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, transform 0.1s ease'
          })}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bright)'}
          onMouseLeave={(e) => {
            if (!e.target.classList.contains('active')) {
              e.target.style.backgroundColor = 'var(--accent-blue)';
            }
          }}
        >
          Напрями діяльності
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `btn fw-bold text-white ${isActive ? 'shadow' : ''}`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'var(--bright)' : 'var(--accent-blue)',
            padding: '10px 18px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, transform 0.1s ease'
          })}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bright)'}
          onMouseLeave={(e) => {
            if (!e.target.classList.contains('active')) {
              e.target.style.backgroundColor = 'var(--accent-blue)';
            }
          }}
        >
          Зворотній зв'язок
        </NavLink>
      </nav>
    </>
  );
}
