import { Link, useLocation } from 'react-router-dom';
import { wizardRoutes } from '../mock/screenRoutes';

const wizardSteps = [
  { title: 'Serviço', subtitle: 'Selecione o tipo de atendimento.' },
  { title: 'Profissional', subtitle: 'Escolha o profissional disponível.' },
  { title: 'Data & Hora', subtitle: 'Defina horário e duração.' },
  { title: 'Conta', subtitle: 'Associe convênio e responsável.' },
  { title: 'Confirmação', subtitle: 'Revise e confirme o agendamento.' }
];

const patients = [
  { id: 'PT-001', name: 'Ana Sousa', phone: '(11) 99991-0203', status: 'Ativo', lastVisit: '15/02/2026' },
  { id: 'PT-002', name: 'Bruno Lima', phone: '(11) 98822-1113', status: 'Ativo', lastVisit: '12/02/2026' },
  { id: 'PT-003', name: 'Carla Dias', phone: '(11) 97754-4432', status: 'Aguardando', lastVisit: '08/02/2026' },
  { id: 'PT-004', name: 'Diego Moura', phone: '(11) 96637-8012', status: 'Ativo', lastVisit: '02/02/2026' }
];

function SurfaceCard({ title, subtitle, children }) {
  return (
    <article className="surface-card">
      <div className="surface-card-head">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </article>
  );
}

export function DashboardShowcase() {
  return (
    <section className="showcase dashboard-showcase">
      <header className="showcase-head">
        <h1>Dashboard ClinicOps</h1>
        <button>Exportar relatório</button>
      </header>
      <div className="stats-grid">
        {[
          ['Agendamentos hoje', '42'],
          ['Pacientes em espera', '8'],
          ['Taxa comparecimento', '92%'],
          ['Cancelamentos', '3']
        ].map(([label, value]) => (
          <SurfaceCard key={label} title={value} subtitle={label} />
        ))}
      </div>
      <div className="split-grid">
        <SurfaceCard title="Agenda do dia" subtitle="Próximos atendimentos">
          <ul className="timeline-list">
            <li><strong>08:30</strong> Dra. Amanda — Consulta Geral</li>
            <li><strong>09:20</strong> Dr. Lucas — Retorno cardiologia</li>
            <li><strong>10:10</strong> Dra. Marina — Exames laboratoriais</li>
          </ul>
        </SurfaceCard>
        <SurfaceCard title="Pendências internas" subtitle="Atenção da equipe">
          <ul className="timeline-list">
            <li>2 guias de convênio para validar.</li>
            <li>1 prontuário aguardando assinatura.</li>
            <li>5 confirmações de consulta para hoje.</li>
          </ul>
        </SurfaceCard>
      </div>
    </section>
  );
}

export function AgendaShowcase() {
  return (
    <section className="showcase agenda-showcase">
      <header className="showcase-head">
        <h1>Agenda LifeMed</h1>
        <div className="inline-actions">
          <button className="btn-muted">Semana</button>
          <button>Novo agendamento</button>
        </div>
      </header>
      <div className="agenda-board">
        {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((day, index) => (
          <div key={day} className="agenda-column">
            <h4>{day}</h4>
            <p>22/02 + {index}</p>
            <div className="agenda-slot">09:00 · Consulta Geral</div>
            <div className="agenda-slot">11:00 · Exame Rotina</div>
            <div className="agenda-slot muted">15:00 · Horário livre</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PacientesShowcase() {
  return (
    <section className="showcase">
      <header className="showcase-head">
        <h1>Pacientes</h1>
        <div className="inline-actions">
          <input placeholder="Buscar por nome, CPF ou ID" />
          <button>Novo paciente</button>
        </div>
      </header>
      <table className="mock-table">
        <thead>
          <tr><th>Paciente</th><th>ID</th><th>Telefone</th><th>Última visita</th><th>Status</th></tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.id}</td>
              <td>{patient.phone}</td>
              <td>{patient.lastVisit}</td>
              <td><span className={`badge ${patient.status === 'Ativo' ? 'ok' : 'warn'}`}>{patient.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function PacienteDetalheShowcase() {
  const patient = patients[0];

  return (
    <section className="showcase">
      <header className="showcase-head">
        <h1>Detalhes do paciente</h1>
        <button>Editar cadastro</button>
      </header>
      <div className="split-grid">
        <SurfaceCard title={patient.name} subtitle={patient.id}>
          <p><strong>Telefone:</strong> {patient.phone}</p>
          <p><strong>Status:</strong> {patient.status}</p>
          <p><strong>Última visita:</strong> {patient.lastVisit}</p>
        </SurfaceCard>
        <SurfaceCard title="Histórico recente" subtitle="Últimos atendimentos">
          <ul className="timeline-list">
            <li>15/02/2026 — Consulta clínica geral.</li>
            <li>01/02/2026 — Solicitação de exame laboratorial.</li>
            <li>16/01/2026 — Avaliação de retorno.</li>
          </ul>
        </SurfaceCard>
      </div>
    </section>
  );
}

export function NovoAgendamentoShowcase() {
  return (
    <section className="showcase">
      <header className="showcase-head">
        <h1>Novo agendamento interno</h1>
      </header>
      <div className="form-grid">
        <label>Paciente<select><option>Ana Sousa</option></select></label>
        <label>Serviço<select><option>Consulta Geral</option></select></label>
        <label>Profissional<select><option>Dra. Amanda Prado</option></select></label>
        <label>Sala<select><option>Sala 3</option></select></label>
        <label>Data<input type="date" defaultValue="2026-02-24" /></label>
        <label>Hora<input type="time" defaultValue="09:00" /></label>
      </div>
      <Link className="cta" to="/ui/agendar-servico-passo-1-5">Ir para wizard completo</Link>
    </section>
  );
}

export function AgendarWizardShowcase() {
  const location = useLocation();
  const idx = wizardRoutes.indexOf(location.pathname);
  const step = wizardSteps[idx] || wizardSteps[0];

  return (
    <section className="showcase wizard-showcase">
      <header className="showcase-head">
        <h1>Agendar atendimento</h1>
        <p>Passo {idx + 1} de {wizardRoutes.length}</p>
      </header>
      <div className="wizard-progress">
        {wizardRoutes.map((route, i) => (
          <span key={route} className={i <= idx ? 'on' : ''}>{i + 1}</span>
        ))}
      </div>
      <SurfaceCard title={step.title} subtitle={step.subtitle}>
        <p>Conteúdo demonstrativo convertido para React a partir do export Stitch.</p>
      </SurfaceCard>
      <div className="wizard-nav">
        {idx > 0 ? <Link to={wizardRoutes[idx - 1]}>← Voltar</Link> : <span />}
        {idx < wizardRoutes.length - 1 ? <Link to={wizardRoutes[idx + 1]}>Próximo →</Link> : <Link to="/ui/dashboard-clinicops-dark-mode">Finalizar</Link>}
      </div>
    </section>
  );
}
