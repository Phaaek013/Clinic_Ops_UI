import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockUsers, setAuth } from '../app/storage';

export function LoginPage() {
  const [email, setEmail] = useState('internal@demo.local');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  function submit(e) {
    e.preventDefault();
    const user = mockUsers[email];
    if (!user || user.password !== password) {
      setError('Credenciais inválidas. Use as credenciais mock descritas na página.');
      return;
    }
    setAuth({ email, role: user.role });
    navigate(location.state?.from || user.defaultRoute, { replace: true });
  }

  return (
    <div className="login-page">
      <form onSubmit={submit} className="login-card">
        <img src="/logo.svg" alt="Logo" className="brand-login" />
        <h1>ClinicOps Demo Login</h1>
        <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Senha<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
        <ul>
          <li>lifemed@demo.local / 123456</li>
          <li>internal@demo.local / 123456</li>
          <li>admin@demo.local / 123456</li>
        </ul>
      </form>
    </div>
  );
}
