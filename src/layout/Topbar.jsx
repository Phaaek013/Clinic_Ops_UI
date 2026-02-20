import { useNavigate } from 'react-router-dom';
import { clearAuth, getAuth } from '../app/storage';

export function Topbar() {
  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <header className="topbar">
      <div>
        <strong>{auth?.role || 'Guest'}</strong>
      </div>
      <div className="topbar-right">
        <img src="/avatar.svg" alt="user avatar" className="avatar" />
        <button onClick={() => { clearAuth(); navigate('/login'); }}>Sair</button>
      </div>
    </header>
  );
}
