import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layout/PublicLayout';
import { AppShell } from '../layout/AppShell';
import { ProtectedGuard } from './guards';
import { LoginPage } from '../pages/LoginPage';
import { screenRoutes, showcaseRoutes, wizardRoutes } from '../mock/screenRoutes';
import { ScreenshotPage } from '../components/ScreenshotPage';
import { uiPagesByRoute } from '../pages/ui';
import {
  AgendaShowcase,
  AgendarWizardShowcase,
  DashboardShowcase,
  NovoAgendamentoShowcase,
  PacienteDetalheShowcase,
  PacientesShowcase
} from '../pages/ShowcasePages';

const showcaseMap = {
  '/ui/dashboard-clinicops-dark-mode': DashboardShowcase,
  '/ui/agenda-lifemed-clinicops': AgendaShowcase,
  '/ui/pacientes-lifemed-clinicops': PacientesShowcase,
  '/ui/detalhe-paciente-lifemed': PacienteDetalheShowcase,
  '/ui/novo-agendamento-interno': NovoAgendamentoShowcase
};

for (const wRoute of wizardRoutes) {
  showcaseMap[wRoute] = AgendarWizardShowcase;
}

function makePage(route) {
  const UiPage = uiPagesByRoute[route.route];
  if (UiPage) {
    return <UiPage />;
  }

  const Showcase = showcaseMap[route.route];
  if (Showcase && showcaseRoutes.includes(route.route)) {
    return <Showcase />;
  }

  const flowLinks = [
    { to: '/ui/dashboard-clinicops-dark-mode', label: 'Ir para dashboard' },
    { to: '/ui/novo-agendamento-interno', label: 'Novo agendamento' },
    { to: '/ui/agendar-servico-passo-1-5', label: 'Fluxo agendar (passo 1)' }
  ];

  return <ScreenshotPage title={route.folder} image={route.image} flowLinks={flowLinks} />;
}

const publicRoutes = screenRoutes.filter((r) => r.isPublic);
const protectedRoutes = screenRoutes.filter((r) => !r.isPublic);

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      ...publicRoutes.map((route) => ({ path: route.route, element: makePage(route) }))
    ]
  },
  {
    element: <ProtectedGuard />,
    children: [
      {
        element: <AppShell />,
        children: [
          ...protectedRoutes.map((route) => ({ path: route.route, element: makePage(route) }))
        ]
      }
    ]
  },
  { path: '/', element: <Navigate to="/login" replace /> }
]);
