import { NavLink } from 'react-router-dom';
import TypeWriter from './TypeWriter';


export default function Header({ showAnnouncement = false }) {
  return (
    <>
      <header className="position-absolute top-0 start-50 translate-middle-x w-100 text-center py-3 px-2 shadow-sm header">
        <h1 className="fw-semibold mb-2 header-title">
          Корпорація DevStream
        </h1>
        <img
          src="/images/logowithnoback.png"
          alt="Логотип DevStream"
          className="img-fluid header-logo"
        />
        {showAnnouncement && (
          <div className="text-danger fw-bold mt-3 announcement">
            <TypeWriter
              text="  Важливо! З 24 грудня по 8 січня офіс працює в святковому режимі. З Новим Роком!"
              speed={50}
            />
          </div>
        )}
      </header>

      <nav className={`d-flex justify-content-center align-items-center gap-2 nav-container ${showAnnouncement ? 'with-announcement' : 'without-announcement'}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn fw-bold text-white nav-link-custom ${isActive ? 'active shadow' : ''}`
          }
        >
          Головна
        </NavLink>
        <NavLink
          to="/directions"
          className={({ isActive }) =>
            `btn fw-bold text-white nav-link-custom ${isActive ? 'active shadow' : ''}`
          }
        >
          Напрями діяльності
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `btn fw-bold text-white nav-link-custom ${isActive ? 'active shadow' : ''}`
          }
        >
          Зворотній зв'язок
        </NavLink>
      </nav>
    </>
  );
}
