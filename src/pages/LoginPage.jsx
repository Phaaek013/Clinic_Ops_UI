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
      <form onSubmit={submit} className="login-card stitch-login-card">
        <p className="eyebrow">ClinicOps Portal</p>
        <h1>Entrar no Portal</h1>
        <p className="muted">Acesse o painel operacional da clínica com sua conta interna.</p>

        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Senha
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Entrar</button>
        <small className="muted">Demo: lifemed@demo.local / 123456</small>
      </form>
    </div>
  );
}
