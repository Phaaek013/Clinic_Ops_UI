import '../../styles/ui/detalhe-agendamento-lifemed.css';

export function DetalheAgendamentoLifemed() {
  return (
    <div className="ui-page ui-detalhe-agendamento-lifemed bg-background-light text-text-primary font-display antialiased overflow-x-hidden">
<div className="flex min-h-screen w-full">
{/*Sidebar*/}
<aside className="hidden lg:flex flex-col w-72 bg-background-light border-r border-surface-accent h-screen sticky top-0 overflow-y-auto shrink-0 z-20">
<div className="flex flex-col h-full justify-between p-4">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" data-alt="LifeMed Logo - Abstract medical cross with leaves" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<h1 className="text-text-primary text-lg font-bold leading-tight">LifeMed</h1>
<p className="text-text-secondary text-xs font-medium tracking-wide uppercase">ClinicOps</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary hover:bg-surface-accent transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-primary">grid_view</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-accent text-text-primary group" href="#">
<span className="material-symbols-outlined filled">calendar_month</span>
<span className="text-sm font-bold">Agendamentos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary hover:bg-surface-accent transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-primary">group</span>
<span className="text-sm font-medium">Pacientes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary hover:bg-surface-accent transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-primary">payments</span>
<span className="text-sm font-medium">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-primary hover:bg-surface-accent transition-colors group" href="#">
<span className="material-symbols-outlined text-text-secondary group-hover:text-text-primary">settings</span>
<span className="text-sm font-medium">Configurações</span>
</a>
</nav>
</div>
<div className="px-3 py-4 border-t border-surface-accent">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat bg-cover rounded-full size-10" data-alt="User Avatar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<p className="text-sm font-bold text-text-primary">Dra. Julia M.</p>
<p className="text-xs text-text-secondary">Admin</p>
</div>
</div>
</div>
</div>
</aside>
{/*Main Content*/}
<main className="flex-1 flex flex-col min-w-0 bg-white/50">
{/*Top Navbar*/}
<header className="flex items-center justify-between border-b border-surface-accent px-6 py-3 bg-white sticky top-0 z-10">
<div className="flex items-center gap-4 lg:hidden">
<button className="p-2 -ml-2 text-text-secondary">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-bold text-lg">LifeMed</span>
</div>
{/*Breadcrumbs (Desktop)*/}
<div className="hidden lg:flex items-center gap-2 text-sm">
<a className="text-text-secondary hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="text-text-secondary/50">/</span>
<a className="text-text-secondary hover:text-primary transition-colors" href="#">Agendamentos</a>
<span className="text-text-secondary/50">/</span>
<span className="font-bold text-text-primary">#AG-8492</span>
</div>
<div className="flex items-center gap-4 ml-auto">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary text-[20px]">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-accent border-none rounded-lg text-sm text-text-primary placeholder:text-text-secondary focus:ring-2 focus:ring-primary/50 w-64 transition-all" placeholder="Buscar paciente ou ID..." type="text" />
</div>
<button className="size-10 flex items-center justify-center rounded-lg bg-surface-accent text-text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="size-10 flex items-center justify-center rounded-lg bg-surface-accent text-text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
</div>
</header>
{/*Page Content Scrollable*/}
<div className="flex-1 overflow-y-auto p-4 lg:p-8">
<div className="max-w-7xl mx-auto flex flex-col gap-6">
{/*Page Heading & Actions*/}
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 flex-wrap">
<h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">Agendamento #AG-8492</h1>
<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold border border-blue-200">Confirmado</span>
<span className="px-3 py-1 rounded-full bg-surface-accent text-text-secondary text-sm font-medium border border-transparent">Particular</span>
</div>
<p className="text-text-secondary text-sm md:text-base">Consulta Geral • 14 Out, 2023 • 10:00 - 10:30</p>
</div>
<div className="flex items-center gap-2 flex-wrap justify-end">
<button className="hidden sm:flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-surface-accent text-text-primary text-sm font-bold hover:bg-surface-accent transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">print</span>
<span>Imprimir</span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-surface-accent text-text-primary text-sm font-bold hover:bg-surface-accent transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">edit_calendar</span>
<span>Reagendar</span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm font-bold hover:bg-red-100 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">cancel</span>
<span>Cancelar</span>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all hover:translate-y-px">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span>Check-in</span>
</button>
<button className="sm:hidden flex items-center justify-center size-10 rounded-lg bg-white border border-surface-accent text-text-primary hover:bg-surface-accent shadow-sm">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/*Main Grid*/}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*Left Column: Details*/}
<div className="lg:col-span-2 flex flex-col gap-6">
{/*Appointment Details Card*/}
<div className="bg-white rounded-xl border border-surface-accent shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-surface-accent flex justify-between items-center bg-gray-50/50">
<h2 className="font-bold text-lg text-text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assignment</span>
                                        Detalhes do agendamento
                                    </h2>
<button className="text-sm text-primary font-bold hover:underline">Editar Detalhes</button>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
{/*Service*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Serviço</label>
<div className="relative">
<select className="w-full bg-surface-accent border-transparent rounded-lg text-text-primary text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary py-2.5 pl-3 pr-10 appearance-none cursor-pointer">
<option>Consulta Geral</option>
<option>Retorno</option>
<option>Exame de Rotina</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary pointer-events-none text-xl">expand_more</span>
</div>
</div>
{/*Professional*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Profissional</label>
<div className="relative">
<select className="w-full bg-surface-accent border-transparent rounded-lg text-text-primary text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary py-2.5 pl-3 pr-10 appearance-none cursor-pointer">
<option>Dr. Ana Silva</option>
<option>Dr. Roberto Campos</option>
<option>Qualquer disponível</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary pointer-events-none text-xl">expand_more</span>
</div>
</div>
{/*Date*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Data</label>
<div className="relative group">
<input className="w-full bg-surface-accent border-transparent rounded-lg text-text-primary text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary py-2.5 px-3" type="date" value="2023-10-14" />
</div>
</div>
{/*Time*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Horário (Início - Fim)</label>
<div className="flex gap-2 items-center">
<input className="flex-1 bg-surface-accent border-transparent rounded-lg text-text-primary text-sm font-medium focus:ring-2 focus:ring-primary focus:border-primary py-2.5 px-3" type="time" value="10:00" />
<span className="text-text-secondary">-</span>
<input className="flex-1 bg-gray-100 border-transparent rounded-lg text-text-secondary text-sm font-medium py-2.5 px-3 cursor-not-allowed" readOnly="" type="time" value="10:30" />
</div>
</div>
{/*Location (Read Only)*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Local / Unidade</label>
<div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-surface-accent">
<span className="material-symbols-outlined text-text-secondary text-lg">location_on</span>
<span className="text-sm font-medium text-text-primary">Matriz - Sala 04</span>
</div>
</div>
{/*Origin (Read Only)*/}
<div className="flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Origem</label>
<div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-surface-accent">
<span className="material-symbols-outlined text-text-secondary text-lg">smartphone</span>
<span className="text-sm font-medium text-text-primary">App do Paciente</span>
</div>
</div>
{/*Notes*/}
<div className="md:col-span-2 flex flex-col gap-1.5">
<label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Observações Operacionais</label>
<textarea className="w-full bg-surface-accent border-transparent rounded-lg text-text-primary text-sm font-normal placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary focus:border-primary p-3 resize-none" placeholder="Ex: Paciente solicitou acesso para cadeirante. (Não inserir dados clínicos)" rows="3"></textarea>
<p className="text-xs text-text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">info</span>
                                            Sem informações clínicas visíveis nesta tela.
                                        </p>
</div>
{/*Inline Alert / Validation*/}
<div className="md:col-span-2 p-3 rounded-lg bg-blue-50 border border-blue-100 flex items-start gap-3">
<span className="material-symbols-outlined text-blue-500 mt-0.5">schedule</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-bold text-blue-800">Próximos horários disponíveis</p>
<p className="text-xs text-blue-600">Este profissional tem disponibilidade para adiantar às 09:30.</p>
<button className="text-xs font-bold text-blue-700 underline self-start mt-1">Sugerir novo horário</button>
</div>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 border-t border-surface-accent flex justify-end gap-3">
<button className="px-4 py-2 rounded-lg text-text-primary text-sm font-bold hover:bg-gray-200 transition-colors">Descartar</button>
<button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-colors opacity-50 cursor-not-allowed">Salvar Alterações</button>
</div>
</div>
{/*Quick Actions Card (Additional utilities)*/}
<div className="bg-white rounded-xl border border-surface-accent shadow-sm p-6">
<h3 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wide">Ações de Atendimento</h3>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-accent text-text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[18px]">person_off</span>
                                        Marcar No-show
                                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-accent text-text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[18px]">send</span>
                                        Enviar Lembrete (WhatsApp)
                                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-accent text-text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
                                        Copiar Link de Pagamento
                                    </button>
</div>
</div>
</div>
{/*Right Column: Context*/}
<div className="flex flex-col gap-6">
{/*Patient Card*/}
<div className="bg-white rounded-xl border border-surface-accent shadow-sm p-6 flex flex-col gap-4">
<div className="flex items-start justify-between">
<h3 className="font-bold text-text-primary text-sm uppercase tracking-wide">Paciente</h3>
<a className="text-primary text-xs font-bold hover:underline flex items-center gap-1" href="#">
                                        Ver perfil <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
<div className="flex items-center gap-4">
<div className="size-14 rounded-full bg-cover bg-center shadow-inner" data-alt="Patient Profile Photo" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div>
<p className="font-bold text-lg text-text-primary leading-tight">Maria Oliveira</p>
<p className="text-sm text-text-secondary">32 anos • Mulher</p>
</div>
</div>
<div className="space-y-3 pt-2 border-t border-surface-accent">
{/*Contact Info with Mask*/}
<div className="flex flex-col gap-1">
<span className="text-xs text-text-secondary font-medium">Celular</span>
<div className="flex items-center justify-between bg-surface-accent/50 p-2 rounded-md group">
<span className="text-sm font-mono text-text-primary tracking-wide">(11) 9****-****</span>
<button className="text-text-secondary hover:text-primary transition-colors" title="Revelar">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-text-secondary font-medium">Email</span>
<div className="flex items-center justify-between bg-surface-accent/50 p-2 rounded-md group">
<span className="text-sm font-mono text-text-primary tracking-wide">ma***@gmail.com</span>
<button className="text-text-secondary hover:text-primary transition-colors" title="Revelar">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</div>
</div>
<div className="flex gap-2 flex-wrap pt-2">
<span className="px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded text-xs font-bold">VIP</span>
<span className="px-2 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded text-xs font-bold">Alergia: Penicilina</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<button className="text-xs font-bold text-text-primary bg-gray-50 hover:bg-gray-100 py-2 rounded border border-surface-accent">Copiar Contato</button>
<button className="text-xs font-bold text-text-primary bg-gray-50 hover:bg-gray-100 py-2 rounded border border-surface-accent">Lista de Espera</button>
</div>
</div>
{/*Policy / Finance Card*/}
<div className="bg-white rounded-xl border border-surface-accent shadow-sm p-6">
<h3 className="font-bold text-text-primary text-sm uppercase tracking-wide mb-3">Política &amp; Financeiro</h3>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm border-b border-surface-accent pb-2">
<span className="text-text-secondary">Valor</span>
<span className="font-bold text-text-primary">R$ 350,00</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-surface-accent pb-2">
<span className="text-text-secondary">Status</span>
<span className="font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Pendente</span>
</div>
<div className="text-xs text-text-secondary bg-blue-50 p-2 rounded border border-blue-100 mt-1">
<p className="font-bold text-blue-800 mb-1">Política de Cancelamento</p>
<p>Cancelamento gratuito até 24h antes. Taxa de 50% após este prazo.</p>
</div>
</div>
</div>
{/*Audit Timeline*/}
<div className="bg-white rounded-xl border border-surface-accent shadow-sm p-6">
<h3 className="font-bold text-text-primary text-sm uppercase tracking-wide mb-4">Histórico</h3>
<div className="relative timeline-line flex flex-col gap-6 pl-2">
{/*Timeline Item 1*/}
<div className="relative z-10 pl-6">
<div className="absolute left-[9px] top-1 size-3 bg-primary rounded-full ring-4 ring-white"></div>
<p className="text-sm font-bold text-text-primary">Agendamento Confirmado</p>
<p className="text-xs text-text-secondary mt-0.5">Automático via WhatsApp • Hoje, 08:30</p>
</div>
{/*Timeline Item 2*/}
<div className="relative z-10 pl-6">
<div className="absolute left-[9px] top-1 size-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
<p className="text-sm font-bold text-text-primary">Lembrete Enviado</p>
<p className="text-xs text-text-secondary mt-0.5">Sistema • Ontem, 14:00</p>
</div>
{/*Timeline Item 3*/}
<div className="relative z-10 pl-6">
<div className="absolute left-[9px] top-1 size-3 bg-gray-300 rounded-full ring-4 ring-white"></div>
<p className="text-sm font-bold text-text-primary">Agendamento Criado</p>
<p className="text-xs text-text-secondary mt-0.5">Por Dra. Julia M. • 12 Out, 09:15</p>
</div>
</div>
<button className="w-full mt-4 text-xs font-bold text-text-secondary hover:text-primary py-2 border border-dashed border-surface-accent rounded hover:bg-surface-accent transition-colors">
                                    Ver histórico completo
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
