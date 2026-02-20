import '../../styles/ui/relatorios-lifemed-clinicops.css';

export function RelatoriosLifemedClinicops() {
  return (
    <div className="ui-page ui-relatorios-lifemed-clinicops font-display bg-background-light text-text-main antialiased overflow-hidden h-screen flex">
{/*Sidebar*/}
<aside className="w-64 bg-surface-light border-r border-border-color hidden md:flex flex-col h-full shrink-0 z-20">
<div className="p-6 flex items-center gap-3">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10 bg-primary/20 flex items-center justify-center text-primary-dark" data-alt="LifeMed Logo placeholder">
<span className="material-symbols-outlined text-[24px]">medical_services</span>
</div>
<div className="flex flex-col">
<h1 className="text-text-main text-base font-bold leading-normal">LifeMed</h1>
<p className="text-text-secondary text-xs font-medium leading-normal">ClinicOps Admin</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-background-light group transition-colors" href="#">
<span className="material-symbols-outlined text-[24px] text-text-secondary group-hover:text-text-main">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-background-light group transition-colors" href="#">
<span className="material-symbols-outlined text-[24px] text-text-secondary group-hover:text-text-main">calendar_today</span>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-background-light group transition-colors" href="#">
<span className="material-symbols-outlined text-[24px] text-text-secondary group-hover:text-text-main">group</span>
<span className="text-sm font-medium">Pacientes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-background-light group transition-colors" href="#">
<span className="material-symbols-outlined text-[24px] text-text-secondary group-hover:text-text-main">description</span>
<span className="text-sm font-medium">Prontuários</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#e7f3f3] text-text-main" href="#">
<span className="material-symbols-outlined text-[24px] text-primary-dark font-fill">bar_chart</span>
<span className="text-sm font-bold">Relatórios</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-background-light group transition-colors" href="#">
<span className="material-symbols-outlined text-[24px] text-text-secondary group-hover:text-text-main">settings</span>
<span className="text-sm font-medium">Configurações</span>
</a>
</nav>
<div className="p-4 border-t border-border-color">
<div className="flex items-center gap-3 px-3 py-2">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover" data-alt="User profile avatar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col overflow-hidden">
<p className="text-sm font-bold truncate">Dra. Ana Costa</p>
<p className="text-xs text-text-secondary truncate">Administradora</p>
</div>
</div>
</div>
</aside>
{/*Main Content Wrapper*/}
<div className="flex flex-col flex-1 h-full min-w-0 bg-background-light">
{/*Top Navbar*/}
<header className="bg-surface-light border-b border-border-color px-6 py-3 flex items-center justify-between shrink-0 h-16">
<div className="flex items-center gap-4">
<button className="md:hidden text-text-main">
<span className="material-symbols-outlined">menu</span>
</button>
<h2 className="text-lg font-bold text-text-main hidden sm:block">Relatórios Gerenciais</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary text-[20px]">search</span>
<input className="pl-10 pr-4 py-2 bg-background-light border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-64 placeholder-text-secondary" placeholder="Buscar relatórios..." type="text" />
</div>
<div className="flex gap-2">
<button className="size-10 flex items-center justify-center rounded-lg hover:bg-background-light text-text-main transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="size-10 flex items-center justify-center rounded-lg hover:bg-background-light text-text-main transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
</div>
</div>
</header>
{/*Main Scrollable Area*/}
<main className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative">
<div className="max-w-[1200px] mx-auto space-y-6 pb-10">
{/*Breadcrumbs*/}
<nav className="flex items-center gap-2 text-sm text-text-secondary">
<a className="hover:text-primary-dark transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-text-main font-medium">Relatórios</span>
</nav>
{/*Page Header*/}
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-3xl font-bold text-text-main tracking-tight">Visão Geral</h1>
<p className="text-text-secondary mt-1">Indicadores de performance e saúde operacional da clínica.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-light border border-border-color rounded-lg text-sm font-semibold text-text-main hover:bg-gray-50 transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Exportar PDF
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-text-main rounded-lg text-sm font-bold shadow-sm shadow-primary/30 hover:bg-primary-dark transition-colors">
<span className="material-symbols-outlined text-[18px]">share</span>
                            Compartilhar
                        </button>
</div>
</div>
{/*Sticky Filter Bar*/}
<div className="sticky top-0 z-10 bg-surface-light/95 backdrop-blur-md rounded-xl border border-border-color shadow-sm p-4">
<div className="flex flex-wrap items-center gap-3">
{/*Date Filter*/}
<div className="flex items-center gap-2 bg-background-light rounded-lg px-3 py-2 border border-border-color min-w-[240px]">
<span className="material-symbols-outlined text-text-secondary text-[20px]">calendar_month</span>
<select className="bg-transparent border-none text-sm font-medium text-text-main focus:ring-0 p-0 w-full cursor-pointer">
<option>Este Mês (01 Out - 31 Out)</option>
<option>Mês Passado (01 Set - 30 Set)</option>
<option>Últimos 7 dias</option>
<option>Personalizado...</option>
</select>
</div>
<div className="h-6 w-px bg-border-color hidden md:block"></div>
{/*Dropdown Filters*/}
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-color hover:bg-background-light text-sm font-medium text-text-main transition-colors">
<span className="material-symbols-outlined text-text-secondary text-[20px]">stethoscope</span>
                                Profissional: Todos
                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-color hover:bg-background-light text-sm font-medium text-text-main transition-colors">
<span className="material-symbols-outlined text-text-secondary text-[20px]">medical_services</span>
                                Serviço: Todos
                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-color hover:bg-background-light text-sm font-medium text-text-main transition-colors">
<span className="material-symbols-outlined text-text-secondary text-[20px]">filter_list</span>
                                Status: Concluído
                                <span className="px-1.5 py-0.5 rounded-full bg-primary/20 text-text-main text-xs font-bold">1</span>
<span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
</div>
<div className="flex-1"></div>
{/*Filter Actions*/}
<button className="text-sm font-medium text-text-secondary hover:text-primary-dark transition-colors px-3">Limpar filtros</button>
<button className="text-sm font-bold text-primary-dark bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg transition-colors">Salvar visão</button>
</div>
</div>
{/*Tabs*/}
<div className="border-b border-border-color">
<div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-2 pb-3 border-b-2 border-primary text-text-main font-bold whitespace-nowrap">
<span className="material-symbols-outlined text-[20px]">analytics</span>
                            Visão geral
                        </button>
<button className="flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-border-color text-text-secondary hover:text-text-main font-medium whitespace-nowrap transition-colors">
                            No-show &amp; Cancelamentos
                        </button>
<button className="flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-border-color text-text-secondary hover:text-text-main font-medium whitespace-nowrap transition-colors">
                            Ocupação
                        </button>
<button className="flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-border-color text-text-secondary hover:text-text-main font-medium whitespace-nowrap transition-colors">
                            Fila &amp; Espera
                        </button>
<button className="flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-border-color text-text-secondary hover:text-text-main font-medium whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">table_view</span>
                            Exportações
                        </button>
</div>
</div>
{/*KPI Grid*/}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*KPI Card 1*/}
<div className="bg-surface-light p-5 rounded-xl border border-border-color shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-medium text-text-secondary">Total Agendamentos</p>
<span className="material-symbols-outlined text-primary-dark p-1 bg-primary/10 rounded-md">event_available</span>
</div>
<div className="flex items-end gap-2">
<h3 className="text-3xl font-bold text-text-main">1.248</h3>
<span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<span className="material-symbols-outlined text-[12px] mr-0.5">trending_up</span>
                                +12%
                            </span>
</div>
<p className="text-xs text-text-secondary mt-1">vs. mês anterior</p>
</div>
{/*KPI Card 2*/}
<div className="bg-surface-light p-5 rounded-xl border border-border-color shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-medium text-text-secondary">Taxa de Ocupação</p>
<span className="material-symbols-outlined text-blue-600 p-1 bg-blue-50 rounded-md">pie_chart</span>
</div>
<div className="flex items-end gap-2">
<h3 className="text-3xl font-bold text-text-main">85%</h3>
<span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<span className="material-symbols-outlined text-[12px] mr-0.5">trending_down</span>
                                -2.4%
                            </span>
</div>
<p className="text-xs text-text-secondary mt-1">Capacidade total: 1.480</p>
</div>
{/*KPI Card 3*/}
<div className="bg-surface-light p-5 rounded-xl border border-border-color shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-medium text-text-secondary">Taxa de No-Show</p>
<span className="material-symbols-outlined text-orange-500 p-1 bg-orange-50 rounded-md">person_off</span>
</div>
<div className="flex items-end gap-2">
<h3 className="text-3xl font-bold text-text-main">4.2%</h3>
<span className="text-xs font-bold text-text-secondary bg-gray-100 px-1.5 py-0.5 rounded mb-1 flex items-center">
<span className="material-symbols-outlined text-[12px] mr-0.5">remove</span>
                                0%
                            </span>
</div>
<p className="text-xs text-text-secondary mt-1">Média do setor: 5.0%</p>
</div>
{/*KPI Card 4*/}
<div className="bg-surface-light p-5 rounded-xl border border-border-color shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<p className="text-sm font-medium text-text-secondary">Tempo Médio Espera</p>
<span className="material-symbols-outlined text-purple-600 p-1 bg-purple-50 rounded-md">hourglass_empty</span>
</div>
<div className="flex items-end gap-2">
<h3 className="text-3xl font-bold text-text-main">12m</h3>
<span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<span className="material-symbols-outlined text-[12px] mr-0.5">trending_down</span>
                                -3m
                            </span>
</div>
<p className="text-xs text-text-secondary mt-1">Meta: &lt;15m</p>
</div>
</div>
{/*Main Chart Section*/}
<div className="bg-surface-light p-6 rounded-xl border border-border-color shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-bold text-text-main">Evolução de Agendamentos</h3>
<p className="text-sm text-text-secondary">Comparativo Diário: Realizados vs Cancelados</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium">
<div className="flex items-center gap-1.5">
<span className="size-3 rounded-full bg-primary"></span>
                                Realizados
                            </div>
<div className="flex items-center gap-1.5">
<span className="size-3 rounded-full bg-gray-300"></span>
                                Cancelados
                            </div>
</div>
</div>
{/*CSS Mock Chart*/}
<div className="relative h-64 w-full flex items-end justify-between gap-1 sm:gap-2 px-2 pb-6 border-b border-border-color">
{/*Y-axis lines background*/}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
<div className="w-full h-px bg-gray-100 border-t border-dashed border-gray-200"></div>
<div className="w-full h-px bg-gray-100 border-t border-dashed border-gray-200"></div>
<div className="w-full h-px bg-gray-100 border-t border-dashed border-gray-200"></div>
<div className="w-full h-px bg-gray-100 border-t border-dashed border-gray-200"></div>
<div className="w-full h-px bg-gray-100 border-t border-dashed border-gray-200"></div>
</div>
{/*Mock Data Bars (Using pairs for Realized/Cancelled)*/}
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 1">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '15%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '40%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 2">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '10%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '55%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 3">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '5%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '30%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 4">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '20%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '60%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 5">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '12%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '75%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 6">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '8%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '45%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 7">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '18%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '65%'}}></div>
</div>
<div className="group relative flex-1 flex flex-col justify-end gap-1 h-full hover:bg-gray-50 rounded-t cursor-pointer transition-colors" title="Day 8">
<div className="w-full bg-gray-300 rounded-t-sm" style={{height: '5%'}}></div>
<div className="w-full bg-primary rounded-t-sm" style={{height: '80%'}}></div>
</div>
{/*Tooltip mock (visible on hover parent)*/}
<div className="absolute top-10 left-1/2 -translate-x-1/2 bg-surface-dark text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20">
                            45 Atendimentos
                        </div>
</div>
{/*X Axis Labels*/}
<div className="flex justify-between text-xs text-text-secondary mt-2 px-2">
<span>01 Out</span>
<span>05 Out</span>
<span>10 Out</span>
<span>15 Out</span>
<span>20 Out</span>
<span>25 Out</span>
<span>30 Out</span>
</div>
</div>
{/*Breakdown Section: Two Columns*/}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/*Chart: Top Services*/}
<div className="bg-surface-light p-6 rounded-xl border border-border-color shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-text-main">Top Serviços por Volume</h3>
<button className="text-primary-dark text-xs font-bold uppercase tracking-wide hover:underline">Ver tabela</button>
</div>
<div className="space-y-4 flex-1">
{/*Bar 1*/}
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Clínica Geral</span>
<span className="text-text-secondary">42% (524)</span>
</div>
<div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '42%'}}></div>
</div>
</div>
{/*Bar 2*/}
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Cardiologia</span>
<span className="text-text-secondary">28% (350)</span>
</div>
<div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{width: '28%'}}></div>
</div>
</div>
{/*Bar 3*/}
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Dermatologia</span>
<span className="text-text-secondary">15% (187)</span>
</div>
<div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-purple-400 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
{/*Bar 4*/}
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Pediatria</span>
<span className="text-text-secondary">10% (125)</span>
</div>
<div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-orange-400 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
{/*Bar 5*/}
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Outros</span>
<span className="text-text-secondary">5% (62)</span>
</div>
<div className="h-2 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-gray-400 rounded-full" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
{/*Chart: Top Professionals*/}
<div className="bg-surface-light p-6 rounded-xl border border-border-color shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-text-main">Top Profissionais</h3>
<button className="text-primary-dark text-xs font-bold uppercase tracking-wide hover:underline">Ver tabela</button>
</div>
<div className="space-y-4 flex-1">
{/*Profile 1*/}
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Avatar of Dr. Almeida" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex-1 space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Dr. Almeida</span>
<span className="text-text-main font-bold">142</span>
</div>
<div className="h-1.5 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-teal-600 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
{/*Profile 2*/}
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Avatar of Dra. Beatriz" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex-1 space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Dra. Beatriz</span>
<span className="text-text-main font-bold">128</span>
</div>
<div className="h-1.5 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-teal-600 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
{/*Profile 3*/}
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Avatar of Dr. Carlos" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex-1 space-y-1">
<div className="flex justify-between text-sm">
<span className="text-text-main font-medium">Dr. Carlos</span>
<span className="text-text-main font-bold">98</span>
</div>
<div className="h-1.5 w-full bg-background-light rounded-full overflow-hidden">
<div className="h-full bg-teal-600 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-border-color text-center">
<button className="text-sm text-text-secondary hover:text-text-main flex items-center justify-center gap-1 mx-auto">
                                Ver todos os 12 profissionais
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*Table Section*/}
<div className="bg-surface-light rounded-xl border border-border-color shadow-sm overflow-hidden">
<div className="p-6 border-b border-border-color flex flex-col sm:flex-row justify-between gap-4">
<div>
<h3 className="text-lg font-bold text-text-main">Resumo por Serviço</h3>
<p className="text-sm text-text-secondary">Detalhamento dos agendamentos do período.</p>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary text-[18px]">search</span>
<input className="pl-9 pr-4 py-2 bg-background-light border border-border-color rounded-lg text-sm focus:ring-1 focus:ring-primary w-48" placeholder="Filtrar tabela..." type="text" />
</div>
<button className="p-2 border border-border-color rounded-lg hover:bg-background-light text-text-secondary">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-background-light border-b border-border-color">
<tr>
<th className="px-6 py-4 font-bold text-text-main">Serviço</th>
<th className="px-6 py-4 font-bold text-text-main text-right">Total</th>
<th className="px-6 py-4 font-bold text-text-main text-right">Concluídos</th>
<th className="px-6 py-4 font-bold text-text-main text-right">Cancelados</th>
<th className="px-6 py-4 font-bold text-text-main text-right">No-show</th>
<th className="px-6 py-4 font-bold text-text-main text-right">Ocupação</th>
<th className="px-6 py-4 font-bold text-text-main text-center">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-border-color">
<tr className="hover:bg-background-light/50 transition-colors">
<td className="px-6 py-4 font-medium text-text-main">Consulta Clínica Geral</td>
<td className="px-6 py-4 text-text-secondary text-right">524</td>
<td className="px-6 py-4 text-text-main font-bold text-right">480</td>
<td className="px-6 py-4 text-red-500 text-right">24</td>
<td className="px-6 py-4 text-orange-500 text-right">20 (3.8%)</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-text-main font-bold">92%</span>
<div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="text-text-secondary hover:text-primary-dark p-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-background-light/50 transition-colors">
<td className="px-6 py-4 font-medium text-text-main">Cardiologia</td>
<td className="px-6 py-4 text-text-secondary text-right">350</td>
<td className="px-6 py-4 text-text-main font-bold text-right">310</td>
<td className="px-6 py-4 text-red-500 text-right">30</td>
<td className="px-6 py-4 text-orange-500 text-right">10 (2.8%)</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-text-main font-bold">88%</span>
<div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="text-text-secondary hover:text-primary-dark p-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-background-light/50 transition-colors">
<td className="px-6 py-4 font-medium text-text-main">Dermatologia</td>
<td className="px-6 py-4 text-text-secondary text-right">187</td>
<td className="px-6 py-4 text-text-main font-bold text-right">150</td>
<td className="px-6 py-4 text-red-500 text-right">25</td>
<td className="px-6 py-4 text-orange-500 text-right">12 (6.4%)</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-text-main font-bold">75%</span>
<div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="text-text-secondary hover:text-primary-dark p-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-background-light/50 transition-colors">
<td className="px-6 py-4 font-medium text-text-main">Pediatria</td>
<td className="px-6 py-4 text-text-secondary text-right">125</td>
<td className="px-6 py-4 text-text-main font-bold text-right">115</td>
<td className="px-6 py-4 text-red-500 text-right">5</td>
<td className="px-6 py-4 text-orange-500 text-right">5 (4.0%)</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-text-main font-bold">95%</span>
<div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="text-text-secondary hover:text-primary-dark p-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-border-color bg-background-light/30 flex items-center justify-between text-xs text-text-secondary">
<p>Mostrando 4 de 12 serviços</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-border-color rounded bg-white hover:bg-gray-50 disabled:opacity-50">Anterior</button>
<button className="px-3 py-1 border border-border-color rounded bg-white hover:bg-gray-50">Próximo</button>
</div>
</div>
</div>
{/*Footer Note for Privacy*/}
<div className="flex items-center justify-center gap-2 text-xs text-text-secondary py-4">
<span className="material-symbols-outlined text-[16px]">visibility_off</span>
<span>Dados sensíveis de pacientes estão ocultos nesta visão. Utilize a exportação detalhada para acesso completo.</span>
</div>
</div>
</main>
</div>
    </div>
  );
}
