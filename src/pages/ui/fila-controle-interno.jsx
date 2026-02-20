import '../../styles/ui/fila-controle-interno.css';

export function FilaControleInterno() {
  return (
    <div className="ui-page ui-fila-controle-interno bg-background-light dark:bg-background-dark text-text-main font-display h-screen flex overflow-hidden selection:bg-primary/30">
{/*Sidebar*/}
<aside className="hidden md:flex flex-col w-72 bg-surface-light dark:bg-surface-dark border-r border-border-color h-full flex-shrink-0 z-20 transition-all duration-300">
<div className="p-6 pb-2">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 shrink-0 shadow-sm ring-2 ring-primary/20" data-alt="Abstract medical cross logo with teal gradient" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col overflow-hidden">
<h1 className="text-text-main text-base font-bold leading-none truncate">LifeMed</h1>
<p className="text-text-secondary text-xs font-medium leading-normal mt-1 truncate">ClinicOps System</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main/70 hover:bg-primary-light hover:text-text-main transition-colors group" href="#">
<span className="material-symbols-outlined text-[24px] group-hover:text-primary-dark transition-colors">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main/70 hover:bg-primary-light hover:text-text-main transition-colors group" href="#">
<span className="material-symbols-outlined text-[24px] group-hover:text-primary-dark transition-colors">calendar_month</span>
<span className="text-sm font-medium">Agendamentos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main/70 hover:bg-primary-light hover:text-text-main transition-colors group" href="#">
<span className="material-symbols-outlined text-[24px] group-hover:text-primary-dark transition-colors">group</span>
<span className="text-sm font-medium">Pacientes</span>
</a>
{/*Active Item*/}
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary-dark font-semibold shadow-sm ring-1 ring-primary/20" href="#">
<span className="material-symbols-outlined text-[24px] text-primary-dark fill-current">format_list_numbered</span>
<span className="text-sm">Fila</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main/70 hover:bg-primary-light hover:text-text-main transition-colors group" href="#">
<span className="material-symbols-outlined text-[24px] group-hover:text-primary-dark transition-colors">stethoscope</span>
<span className="text-sm font-medium">Profissionais</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main/70 hover:bg-primary-light hover:text-text-main transition-colors group" href="#">
<span className="material-symbols-outlined text-[24px] group-hover:text-primary-dark transition-colors">settings</span>
<span className="text-sm font-medium">Configurações</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-border-color">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-border-color cursor-pointer hover:border-primary/50 transition-colors">
<div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8" data-alt="User avatar profile picture showing a smiling professional" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col min-w-0">
<p className="text-text-main text-xs font-bold truncate">Dra. Ana Costa</p>
<p className="text-text-secondary text-[10px] truncate">Admin / Recepção</p>
</div>
</div>
</div>
</aside>
{/*Main Content*/}
<div className="flex-1 flex flex-col min-w-0 h-full relative bg-background-light/50">
{/*Top Navbar*/}
<header className="flex items-center justify-between gap-4 px-6 py-3 bg-surface-light dark:bg-surface-dark border-b border-border-color sticky top-0 z-10">
<div className="flex items-center gap-2 lg:hidden">
<button className="p-2 -ml-2 rounded-lg hover:bg-background-light text-text-main">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<div className="flex-1 flex items-center gap-4 max-w-xl">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary group-focus-within:text-primary-dark transition-colors">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="block w-full p-2.5 pl-10 text-sm text-text-main bg-background-light dark:bg-background-dark border-transparent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-text-secondary/60 transition-all" placeholder="Buscar em todo sistema (Alt + /)" type="text" />
<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
<kbd className="inline-flex items-center border border-border-color rounded px-1.5 text-[10px] font-medium text-text-secondary bg-white dark:bg-surface-dark">⌘K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 rounded-lg hover:bg-background-light text-text-secondary hover:text-primary-dark transition-colors">
<span className="material-symbols-outlined text-[22px]">notifications</span>
<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
<button className="p-2 rounded-lg hover:bg-background-light text-text-secondary hover:text-primary-dark transition-colors">
<span className="material-symbols-outlined text-[22px]">help</span>
</button>
<div className="h-6 w-px bg-border-color mx-1"></div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Online</span>
</div>
</div>
</header>
{/*Main Scrollable Area*/}
<main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-[1400px] mx-auto flex flex-col gap-6">
{/*Page Header*/}
<div className="flex flex-col gap-2">
{/*Breadcrumbs*/}
<div className="flex items-center gap-2 text-sm">
<a className="text-text-secondary hover:text-primary-dark transition-colors" href="#">Dashboard</a>
<span className="text-text-secondary/50">/</span>
<span className="text-text-main font-medium">Fila de Atendimento</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-bold text-text-main tracking-tight">Fila de Atendimento</h2>
<p className="text-text-secondary mt-1">Gerencie chamadas e o fluxo da recepção em tempo real.</p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-full">
<span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-[18px]">visibility_off</span>
<span className="text-xs font-medium text-yellow-700 dark:text-yellow-500">Nomes são abreviados na TV</span>
</div>
</div>
</div>
{/*Grid Layout*/}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
{/*LEFT COLUMN: Active Queue Management (Span 8)*/}
<div className="xl:col-span-8 flex flex-col gap-6">
{/*"Chamando agora" Card*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-primary/30 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
{/*Header Status*/}
<div className="flex justify-between items-center px-6 py-4 border-b border-border-color bg-background-light/30">
<h3 className="text-lg font-bold text-text-main flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dark animate-pulse">campaign</span>
                                    Chamando agora
                                </h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary-dark border border-primary/20">
<span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
                                    Aguardando comparecimento
                                </span>
</div>
<div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
{/*Big Ticket Number*/}
<div className="flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-dark rounded-xl border border-border-color min-w-[200px] text-center shadow-inner">
<span className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-1">Senha Atual</span>
<span className="text-6xl md:text-7xl font-extrabold text-text-main tracking-tighter tabular-nums">A042</span>
<span className="text-xs font-medium text-text-secondary mt-2 bg-white dark:bg-surface-light px-2 py-1 rounded border border-border-color">Preferencial</span>
</div>
{/*Details & Controls*/}
<div className="flex-1 flex flex-col justify-between w-full gap-6">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-text-secondary uppercase">Paciente</span>
<span className="text-lg font-bold text-text-main truncate">Roberto Silva Jr.</span>
<span className="text-sm text-text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">id_card</span> 
                                                ***.456.789-**
                                            </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-text-secondary uppercase">Destino</span>
<span className="text-lg font-bold text-text-main truncate">Consultório 03</span>
<span className="text-sm text-text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">medical_services</span> 
                                                Clínico Geral
                                            </span>
</div>
</div>
{/*Action Buttons*/}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-auto">
<button className="col-span-1 py-2.5 px-4 rounded-lg border border-primary text-primary-dark font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">replay</span>
                                            Chamar
                                        </button>
<button className="col-span-1 md:col-span-2 py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white dark:text-text-main font-bold shadow-md shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">play_arrow</span>
                                            Atender
                                        </button>
<button className="col-span-2 md:col-span-1 py-2.5 px-4 rounded-lg border border-border-color text-text-secondary hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors flex items-center justify-center gap-2 group/btn">
<span className="material-symbols-outlined text-[20px] group-hover/btn:text-red-600">cancel</span>
<span className="hidden md:inline">Ausente</span>
<span className="md:hidden">Marcar Ausente</span>
</button>
</div>
</div>
</div>
</div>
{/*"Próximos da fila" List*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-color flex flex-col flex-1">
<div className="px-6 py-5 border-b border-border-color flex items-center justify-between">
<h3 className="text-lg font-bold text-text-main">Próximos da fila</h3>
<div className="flex gap-2">
<button className="p-1.5 rounded hover:bg-background-light text-text-secondary" title="Filter">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
<button className="p-1.5 rounded hover:bg-background-light text-text-secondary" title="Options">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs font-semibold text-text-secondary uppercase bg-background-light dark:bg-background-dark/50 border-b border-border-color">
<th className="px-6 py-3 w-24">Senha</th>
<th className="px-6 py-3">Paciente</th>
<th className="px-6 py-3">Serviço</th>
<th className="px-6 py-3 hidden sm:table-cell">Horário</th>
<th className="px-6 py-3 hidden md:table-cell">Status</th>
<th className="px-6 py-3 w-16"></th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border-color">
{/*Row 1*/}
<tr className="hover:bg-background-light dark:hover:bg-surface-dark/80 transition-colors group">
<td className="px-6 py-4 font-bold text-text-main tabular-nums">A043</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="font-medium text-text-main">Maria O.</span>
<span className="text-xs text-text-secondary">Final **44</span>
</div>
</td>
<td className="px-6 py-4 text-text-main">Triagem</td>
<td className="px-6 py-4 text-text-secondary tabular-nums hidden sm:table-cell">10:15</td>
<td className="px-6 py-4 hidden md:table-cell">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                    Aguardando
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-text-main p-1 rounded-full hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</td>
</tr>
{/*Row 2*/}
<tr className="hover:bg-background-light dark:hover:bg-surface-dark/80 transition-colors group">
<td className="px-6 py-4 font-bold text-text-main tabular-nums">P012</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="font-medium text-text-main">João S.</span>
<span className="text-xs text-text-secondary">Final **89</span>
</div>
</td>
<td className="px-6 py-4 text-text-main">Ortopedia</td>
<td className="px-6 py-4 text-text-secondary tabular-nums hidden sm:table-cell">10:30</td>
<td className="px-6 py-4 hidden md:table-cell">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                                    Check-in
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-text-main p-1 rounded-full hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</td>
</tr>
{/*Row 3*/}
<tr className="hover:bg-background-light dark:hover:bg-surface-dark/80 transition-colors group">
<td className="px-6 py-4 font-bold text-text-main tabular-nums">A044</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="font-medium text-text-main">Carla M.</span>
<span className="text-xs text-text-secondary">Final **12</span>
</div>
</td>
<td className="px-6 py-4 text-text-main">Exames</td>
<td className="px-6 py-4 text-text-secondary tabular-nums hidden sm:table-cell">10:45</td>
<td className="px-6 py-4 hidden md:table-cell">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                                                    Na fila
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-text-secondary hover:text-text-main p-1 rounded-full hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*Pagination/Footer*/}
<div className="px-6 py-4 border-t border-border-color flex items-center justify-between text-sm text-text-secondary bg-background-light/30">
<span>Mostrando 3 de 12</span>
<div className="flex gap-2">
<button className="px-3 py-1 rounded border border-border-color hover:bg-white disabled:opacity-50">Anterior</button>
<button className="px-3 py-1 rounded border border-border-color hover:bg-white disabled:opacity-50">Próximo</button>
</div>
</div>
</div>
</div>
{/*RIGHT COLUMN: Check-in & Controls (Span 4)*/}
<div className="xl:col-span-4 flex flex-col gap-6">
{/*Metrics Widget*/}
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-color shadow-sm flex flex-col">
<span className="text-xs font-medium text-text-secondary uppercase">Aguardando</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-bold text-text-main">8</span>
<span className="material-symbols-outlined text-yellow-500 text-[20px]">hourglass_top</span>
</div>
</div>
<div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-color shadow-sm flex flex-col">
<span className="text-xs font-medium text-text-secondary uppercase">Em atendimento</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-bold text-text-main">3</span>
<span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
</div>
</div>
<div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-color shadow-sm flex flex-col">
<span className="text-xs font-medium text-text-secondary uppercase">Tempo médio</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-bold text-text-main">12<span className="text-sm font-normal text-text-secondary ml-1">min</span></span>
<span className="material-symbols-outlined text-primary-dark text-[20px]">timer</span>
</div>
</div>
<div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-color shadow-sm flex flex-col">
<span className="text-xs font-medium text-text-secondary uppercase">Ausentes</span>
<div className="flex items-end justify-between mt-2">
<span className="text-2xl font-bold text-text-main">1</span>
<span className="material-symbols-outlined text-red-400 text-[20px]">person_off</span>
</div>
</div>
</div>
{/*Check-in & Tools*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-color p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="font-bold text-text-main">Check-in rápido</h3>
<button className="text-primary-dark hover:bg-primary-light p-1 rounded transition-colors">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
{/*Search*/}
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary">
<span className="material-symbols-outlined text-[20px]">person_search</span>
</span>
<input className="w-full bg-background-light dark:bg-background-dark border border-border-color rounded-lg py-2.5 pl-10 pr-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="Nome, telefone ou CPF..." type="text" />
</div>
{/*Quick list*/}
<div className="flex flex-col gap-3 mt-2">
<p className="text-xs font-semibold text-text-secondary uppercase">Agendamentos Hoje</p>
<div className="flex items-center justify-between p-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-color group hover:border-primary/40 transition-colors cursor-pointer">
<div className="flex flex-col">
<span className="text-sm font-bold text-text-main">Ana Beatriz</span>
<span className="text-xs text-text-secondary">11:00 • Dermatologia</span>
</div>
<button className="p-1.5 rounded-md bg-primary/10 text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white">
<span className="material-symbols-outlined text-[20px]">login</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-background-light dark:bg-background-dark border border-border-color group hover:border-primary/40 transition-colors cursor-pointer">
<div className="flex flex-col">
<span className="text-sm font-bold text-text-main">Carlos Eduardo</span>
<span className="text-xs text-text-secondary">11:15 • Retorno</span>
</div>
<button className="p-1.5 rounded-md bg-primary/10 text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white">
<span className="material-symbols-outlined text-[20px]">login</span>
</button>
</div>
</div>
{/*Walk-in Action*/}
<button className="mt-2 w-full py-3 px-4 bg-text-main hover:bg-black text-white rounded-lg font-bold shadow-lg shadow-text-main/20 flex items-center justify-center gap-2 transition-transform active:scale-95">
<span className="material-symbols-outlined">add_circle</span>
                                Gerar senha (Walk-in)
                            </button>
</div>
{/*TV Controls*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-color overflow-hidden">
<div className="px-5 py-4 border-b border-border-color bg-background-light/30">
<h3 className="font-bold text-text-main flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary">tv</span>
                                    Configuração da TV
                                </h3>
</div>
<div className="p-5 flex flex-col gap-4">
{/*Toggle 1*/}
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-text-main">Exibir apenas senha</span>
<input className="sr-only peer" type="checkbox" />
<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
{/*Toggle 2*/}
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-text-main">Abreviar nomes</span>
<input checked="" className="sr-only peer" type="checkbox" />
<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<div className="pt-2">
<label className="block text-xs font-medium text-text-secondary mb-1">Mostrar destino</label>
<select className="w-full bg-background-light dark:bg-background-dark border border-border-color rounded-lg text-sm py-2 px-3 focus:ring-primary focus:border-primary">
<option>Nome da Sala e Número</option>
<option>Apenas Número da Sala</option>
<option>Não exibir destino</option>
</select>
</div>
<div className="bg-blue-50 dark:bg-blue-900/10 rounded p-2 flex gap-2 items-start mt-1">
<span className="material-symbols-outlined text-blue-500 text-[16px] mt-0.5">info</span>
<p className="text-xs text-blue-700 dark:text-blue-300 leading-tight">Alterações refletem na TV em tempo real.</p>
</div>
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
