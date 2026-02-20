import '../../styles/ui/detalhe-paciente-lifemed.css';

export function DetalhePacienteLifemed() {
  return (
    <div className="ui-page ui-detalhe-paciente-lifemed bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden selection:bg-primary/30">
<div className="flex h-screen w-full">
{/*SIDEBAR*/}
<aside className="hidden lg:flex w-[280px] flex-col border-r border-border-light bg-background-light flex-shrink-0 h-full overflow-y-auto">
<div className="p-6 flex flex-col h-full justify-between">
<div className="flex flex-col gap-8">
{/*Brand*/}
<div className="flex gap-3 items-center">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" data-alt="LifeMed Logo Abstract Gradient" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<h1 className="text-text-main text-lg font-bold leading-none">LifeMed</h1>
<p className="text-text-secondary text-xs font-medium tracking-wide">ClinicOps</p>
</div>
</div>
{/*Navigation*/}
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-text-main font-semibold" href="#">
<span className="material-symbols-outlined text-primary-dark">group</span>
<span className="text-sm">Pacientes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">calendar_month</span>
<span className="text-sm font-medium">Agenda</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">payments</span>
<span className="text-sm font-medium">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">settings</span>
<span className="text-sm font-medium">Configurações</span>
</a>
</nav>
</div>
{/*User Profile Snippet in Sidebar (Optional for bottom area)*/}
<div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white border border-border-light shadow-sm cursor-pointer hover:shadow-md transition-shadow">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-8" data-alt="User Avatar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col overflow-hidden">
<span className="text-sm font-bold truncate">Dra. Ana</span>
<span className="text-xs text-text-secondary truncate">Administradora</span>
</div>
</div>
</div>
</aside>
{/*MAIN CONTENT WRAPPER*/}
<div className="flex-1 flex flex-col min-w-0 h-full bg-white relative">
{/*TOP NAVBAR*/}
<header className="h-16 border-b border-border-light flex items-center justify-between px-6 lg:px-8 bg-background-light/50 backdrop-blur-sm sticky top-0 z-30">
{/*Mobile Menu Button*/}
<button className="lg:hidden p-2 -ml-2 text-text-main">
<span className="material-symbols-outlined">menu</span>
</button>
{/*Search Bar*/}
<div className="hidden md:flex max-w-md w-full ml-4">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary-dark transition-colors">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-border-light text-text-main placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all sm:text-sm" placeholder="Buscar pacientes, prontuários..." type="text" value="" />
</div>
</div>
{/*Right Actions*/}
<div className="flex items-center gap-4 ml-auto">
<button className="p-2 rounded-full hover:bg-border-light text-text-main relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="p-2 rounded-full hover:bg-border-light text-text-main">
<span className="material-symbols-outlined">help</span>
</button>
{/*Mobile Avatar*/}
<div className="lg:hidden bg-center bg-no-repeat bg-cover rounded-full size-8 ml-2" data-alt="User Avatar Mobile" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
</div>
</header>
{/*SCROLLABLE PAGE CONTENT*/}
<main className="flex-1 overflow-y-auto bg-[#f8fcfc] p-4 md:p-8">
<div className="max-w-7xl mx-auto space-y-6">
{/*BREADCRUMBS*/}
<nav className="flex items-center text-sm text-text-secondary mb-2">
<a className="hover:text-primary-dark transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
<a className="hover:text-primary-dark transition-colors" href="#">Pacientes</a>
<span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span className="text-text-main font-medium">João da Silva</span>
</nav>
{/*PROFILE HEADER*/}
<div className="bg-white rounded-2xl shadow-sm border border-border-light p-6 md:p-8 relative overflow-hidden group">
{/*Background Pattern*/}
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none -mr-16 -mt-16"></div>
<div className="flex flex-col md:flex-row gap-6 md:items-center relative z-10">
{/*Avatar*/}
<div className="relative shrink-0">
<div className="size-24 md:size-32 rounded-full border-4 border-white shadow-md bg-cover bg-center" data-alt="Patient Portrait" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white size-5 rounded-full" title="Online / Cadastro Ativo"></div>
</div>
{/*Info*/}
<div className="flex-1 space-y-2">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-3xl font-bold text-text-main tracking-tight">João da Silva</h1>
<span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full tracking-wide">Ativo</span>
<span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wide">VIP</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-text-secondary text-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-lg">badge</span>
                                        ID: #84920
                                    </span>
<span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-lg">event</span>
                                        34 anos (12/05/1989)
                                    </span>
<span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-lg">corporate_fare</span>
                                        Unimed
                                    </span>
</div>
<div className="flex flex-wrap gap-2 mt-2">
<div className="px-2 py-1 bg-background-light border border-border-light rounded text-xs text-text-main flex items-center gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span>
                                        Cadastro Completo
                                    </div>
<div className="px-2 py-1 bg-background-light border border-border-light rounded text-xs text-text-main flex items-center gap-1">
<span className="material-symbols-outlined text-sm">notifications_active</span>
                                        Recebe SMS
                                    </div>
</div>
</div>
{/*Actions*/}
<div className="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 shrink-0">
<button className="flex-1 md:flex-none h-11 px-5 bg-primary hover:bg-primary-dark text-text-main font-bold rounded-xl transition-colors shadow-sm shadow-primary/20 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add_circle</span>
                                    Novo Agendamento
                                </button>
<button className="size-11 flex items-center justify-center border border-border-light rounded-xl hover:bg-background-light text-text-main transition-colors" title="Mais opções">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
{/*LAYOUT GRID*/}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
{/*LEFT COLUMN (TABS & CONTENT)*/}
<div className="lg:col-span-2 space-y-6">
{/*Tabs Navigation*/}
<div className="border-b border-border-light">
<nav aria-label="Tabs" className="-mb-px flex space-x-8 overflow-x-auto hide-scrollbar">
<a className="border-primary text-primary-dark whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-lg">overview</span>
                                        Visão Geral
                                    </a>
<a className="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-lg">calendar_month</span>
                                        Agendamentos
                                        <span className="ml-1 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">12</span>
</a>
<a className="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-lg">tune</span>
                                        Preferências
                                    </a>
</nav>
</div>
{/*TAB CONTENT: VISÃO GERAL*/}
<div className="space-y-6">
{/*Card: Dados Cadastrais*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light p-6">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<h3 className="text-lg font-bold text-text-main">Dados Cadastrais</h3>
<p className="text-sm text-text-secondary">Informações de contato e identificação.</p>
</div>
<button className="text-sm text-primary-dark font-semibold hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-base">edit</span>
                                            Editar
                                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
{/*Field Item*/}
<div className="group">
<label className="block text-xs font-medium text-text-secondary uppercase mb-1">Celular</label>
<div className="flex items-center gap-2">
<span className="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">(11) 9****-8821</span>
<button className="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
{/*Field Item*/}
<div className="group">
<label className="block text-xs font-medium text-text-secondary uppercase mb-1">E-mail</label>
<div className="flex items-center gap-2">
<span className="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">joa*****@gmail.com</span>
<button className="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
{/*Field Item*/}
<div className="group">
<label className="block text-xs font-medium text-text-secondary uppercase mb-1">CPF</label>
<div className="flex items-center gap-2">
<span className="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">***.452.89*-**</span>
<button className="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
{/*Field Item*/}
<div className="group">
<label className="block text-xs font-medium text-text-secondary uppercase mb-1">Contato de Emergência</label>
<div className="flex flex-col">
<span className="text-text-main font-medium text-sm">Maria Silva (Esposa)</span>
<span className="text-text-secondary text-xs">(11) 98765-4321</span>
</div>
</div>
{/*Field Item (Full Width)*/}
<div className="md:col-span-2 group">
<label className="block text-xs font-medium text-text-secondary uppercase mb-1">Endereço</label>
<div className="flex items-center gap-2">
<span className="text-text-main font-medium text-base truncate">Rua das Flores, 123 - Jardins, São Paulo - SP</span>
<button className="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Copiar endereço">
<span className="material-symbols-outlined text-lg">content_copy</span>
</button>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg text-xs font-medium">
<span className="material-symbols-outlined text-lg">lock</span>
                                        Nenhuma informação clínica é exibida nesta tela. Para prontuário, acesse o módulo clínico.
                                    </div>
</div>
{/*Card: Notas Operacionais & Sinais*/}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*Operational Notes*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light p-6 flex flex-col h-full">
<h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary">sticky_note_2</span>
                                            Notas Operacionais
                                        </h3>
<div className="bg-yellow-50/50 p-4 rounded-lg border border-yellow-100 flex-1 min-h-[120px]">
<p className="text-sm text-gray-700 leading-relaxed">
                                                Paciente prefere atendimentos no período da tarde. Sempre confirmar estacionamento. 
                                                <br /><br />
<strong>Obs:</strong> Documento atualizado em 12/01/2023.
                                            </p>
</div>
<button className="mt-3 text-xs text-text-secondary hover:text-primary-dark font-medium self-end">Adicionar nota</button>
</div>
{/*Quick Actions / Queue Status*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light p-6 flex flex-col">
<h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary">traffic</span>
                                            Status Operacional
                                        </h3>
<div className="flex-1 flex flex-col justify-center items-center py-4 gap-3 text-center">
<div className="size-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
<span className="material-symbols-outlined text-2xl">person_off</span>
</div>
<div>
<p className="text-sm font-medium text-text-main">Não está na fila hoje</p>
<p className="text-xs text-text-secondary">Nenhum agendamento para hoje.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<button className="py-2 px-3 border border-border-light rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/50 text-text-main transition-colors">
                                                Check-in
                                            </button>
<button className="py-2 px-3 border border-border-light rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/50 text-text-main transition-colors">
                                                Lista de Espera
                                            </button>
</div>
</div>
</div>
{/*Latest Appointments Preview (Mini Table)*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden">
<div className="px-6 py-4 border-b border-border-light flex justify-between items-center bg-gray-50/50">
<h3 className="font-bold text-text-main text-sm uppercase tracking-wide">Últimos Agendamentos</h3>
<a className="text-xs font-bold text-primary-dark hover:underline" href="#">Ver todos</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-text-secondary uppercase bg-gray-50 border-b border-border-light">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Data/Hora</th>
<th className="px-6 py-3 font-medium" scope="col">Serviço</th>
<th className="px-6 py-3 font-medium" scope="col">Profissional</th>
<th className="px-6 py-3 font-medium" scope="col">Status</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Ação</th>
</tr>
</thead>
<tbody className="divide-y divide-border-light">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-text-main">
                                                        Hoje, 14:00
                                                    </td>
<td className="px-6 py-4">Consulta Rotina</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="size-6 rounded-full bg-gray-200 bg-cover" data-alt="Doctor Avatar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
                                                        Dr. House
                                                    </td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Confirmado</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-text-main">
<span className="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors opacity-60">
<td className="px-6 py-4 font-medium text-text-main">
                                                        12/05/2023
                                                    </td>
<td className="px-6 py-4">Retorno</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="size-6 rounded-full bg-gray-200 bg-cover" data-alt="Doctor Avatar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
                                                        Dra. Grey
                                                    </td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">Realizado</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-text-main">
<span className="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/*RIGHT COLUMN (STICKY SUMMARY)*/}
<div className="lg:col-span-1 space-y-6">
{/*Next Appointment Widget*/}
<div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg p-6 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform group-hover:scale-125 transition-transform duration-500">
<span className="material-symbols-outlined text-9xl">alarm</span>
</div>
<h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">Próximo Agendamento</h3>
<div className="text-3xl font-bold mb-1">Amanhã</div>
<div className="text-lg font-medium opacity-90 mb-6">14:00 - Cardiologia</div>
<div className="flex gap-2 relative z-10">
<button className="bg-white text-primary-dark hover:bg-gray-50 text-sm font-bold py-2 px-4 rounded-lg shadow-sm flex-1 transition-colors">
                                        Ver detalhes
                                    </button>
<button className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-lg transition-colors backdrop-blur-sm" title="Reagendar">
<span className="material-symbols-outlined">edit_calendar</span>
</button>
</div>
</div>
{/*Financial Summary*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light p-5">
<h4 className="text-sm font-bold text-text-main mb-4 flex items-center justify-between">
                                    Resumo Financeiro
                                    <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-text-secondary">Em aberto</span>
<span className="text-sm font-bold text-red-500">R$ 150,00</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
</div>
<p className="text-xs text-text-secondary mt-2">1 fatura pendente (Venc. 10/10)</p>
</div>
</div>
{/*Activity Timeline*/}
<div className="bg-white rounded-xl shadow-sm border border-border-light p-6">
<h3 className="text-lg font-bold text-text-main mb-4">Atividade Recente</h3>
<div className="relative pl-4 border-l border-border-light space-y-6">
{/*Item 1*/}
<div className="relative">
<div className="absolute -left-[21px] top-1 bg-primary size-3 rounded-full border-2 border-white shadow-sm"></div>
<p className="text-sm font-medium text-text-main">Agendamento Confirmado</p>
<p className="text-xs text-text-secondary mt-0.5">Por <strong>Dra. Ana</strong> via Painel</p>
<p className="text-xs text-gray-400 mt-1">Hoje, 09:30</p>
</div>
{/*Item 2*/}
<div className="relative">
<div className="absolute -left-[21px] top-1 bg-gray-300 size-3 rounded-full border-2 border-white"></div>
<p className="text-sm font-medium text-text-main">Lembrete SMS Enviado</p>
<p className="text-xs text-text-secondary mt-0.5">Sistema Automático</p>
<p className="text-xs text-gray-400 mt-1">Ontem, 14:00</p>
</div>
{/*Item 3*/}
<div className="relative">
<div className="absolute -left-[21px] top-1 bg-gray-300 size-3 rounded-full border-2 border-white"></div>
<p className="text-sm font-medium text-text-main">Dados atualizados</p>
<p className="text-xs text-text-secondary mt-0.5">Alteração de endereço</p>
<p className="text-xs text-gray-400 mt-1">12/05/2023</p>
</div>
<button className="text-xs text-primary-dark font-semibold hover:underline mt-2">Ver todo o histórico</button>
</div>
</div>
</div>
</div> {/*End Grid*/}
{/*Footer Info*/}
<div className="text-center py-6">
<p className="text-xs text-gray-400">© 2023 LifeMed Systems. Dados protegidos por criptografia de ponta a ponta.</p>
</div>
</div>
</main>
</div>
</div>
    </div>
  );
}
