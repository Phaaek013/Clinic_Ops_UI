import { Link, useLocation } from 'react-router-dom';
import { screenRoutes } from '../mock/screenRoutes';

export function Sidebar() {
  const location = useLocation();
  const mainItems = screenRoutes.slice(0, 10);

  return (
    <aside className="sidebar">
      <img src="/logo.svg" alt="ClinicOps" className="brand" />
      <p className="sidebar-title">ClinicOps Demo</p>
      <nav>
        {mainItems.map((item) => (
          <Link key={item.route} to={item.route} className={location.pathname === item.route ? 'active' : ''}>
            {item.folder.replaceAll('_', ' ')}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
