import { Link, useLocation } from 'react-router-dom';
import { wizardRoutes } from '../mock/screenRoutes';

export function DashboardShowcase() {
  return (
    <section className="showcase dark">
      <h1>Dashboard ClinicOps (showcase)</h1>
      <div className="stats-grid">
        {['Agendamentos', 'Pacientes', 'Fila Interna', 'Pendências'].map((item, idx) => (
          <article key={item} className="stat-card">
            <h3>{item}</h3><p>{(idx + 2) * 17}</p>
          </article>
        ))}
      </div>
      <div className="kanban">
        <div><h4>Hoje</h4><p>Turno manhã: 12 consultas.</p></div>
        <div><h4>Amanhã</h4><p>8 confirmações pendentes.</p></div>
        <div><h4>Semana</h4><p>Taxa de presença 92%.</p></div>
      </div>
    </section>
  );
}

export function PacientesShowcase() {
  return (
    <section className="showcase">
      <h1>Pacientes Lifemed (showcase)</h1>
      <div className="toolbar"><input placeholder="Buscar paciente (mock)" /><button>Novo paciente</button></div>
      <table className="mock-table"><thead><tr><th>Nome</th><th>ID</th><th>Status</th></tr></thead>
      <tbody>{['Ana Sousa', 'Bruno Lima', 'Carla Dias'].map((name, i)=><tr key={name}><td>{name}</td><td>PT-00{i+1}</td><td>{i===2?'Aguardando':'Ativo'}</td></tr>)}</tbody></table>
    </section>
  );
}

export function NovoAgendamentoShowcase() {
  return (
    <section className="showcase">
      <h1>Novo agendamento interno (showcase)</h1>
      <div className="form-grid">
        <label>Paciente<select><option>Selecionar (mock)</option></select></label>
        <label>Serviço<select><option>Consulta Geral</option></select></label>
        <label>Profissional<select><option>Dra. Amanda</option></select></label>
        <label>Horário<select><option>14:00</option></select></label>
      </div>
      <Link className="cta" to="/ui/agendar-servico-passo-1-5">Iniciar wizard de agendamento</Link>
    </section>
  );
}

export function AgendarWizardShowcase() {
  const location = useLocation();
  const idx = wizardRoutes.indexOf(location.pathname);
  const progress = idx + 1;

  return (
    <section className="showcase">
      <h1>Agendar serviço (passo {progress}/5)</h1>
      <div className="wizard-progress">{wizardRoutes.map((step, i)=><span key={step} className={i<=idx?'on':''}>{i+1}</span>)}</div>
      <p>Conteúdo mock do passo {progress}. Sem persistência de dados clínicos.</p>
      <div className="wizard-nav">
        {idx > 0 ? <Link to={wizardRoutes[idx - 1]}>← Voltar</Link> : <span />}
        {idx < wizardRoutes.length - 1 ? <Link to={wizardRoutes[idx + 1]}>Próximo →</Link> : <Link to="/ui/dashboard-clinicops-dark-mode">Finalizar</Link>}
      </div>
    </section>
  );
}
