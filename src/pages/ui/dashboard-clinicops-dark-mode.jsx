import '../../styles/ui/dashboard-clinicops-dark-mode.css';

export function DashboardClinicopsDarkMode() {
  return (
    <div className="ui-page ui-dashboard-clinicops-dark-mode bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex overflow-hidden">
{/*Sidebar*/}
<aside className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen bg-white dark:bg-[#111817] z-20">
<div className="p-6 flex items-center gap-3">
<div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl">clinical_notes</span>
</div>
<div>
<h1 className="text-base font-bold leading-none">ClinicOps</h1>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Management Hub</p>
</div>
</div>
<nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium" href="#">
<span className="material-symbols-outlined text-[22px]">dashboard</span>
<span className="text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">calendar_today</span>
<span className="text-sm">Agenda</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">group</span>
<span className="text-sm">Patients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">hourglass_empty</span>
<span className="text-sm">Waiting List</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">queue</span>
<span className="text-sm">Queue</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">event_available</span>
<span className="text-sm">Availability</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-[22px]">assessment</span>
<span className="text-sm">Reports</span>
</a>
</nav>
<div className="p-4 border-t border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-xl">
<div className="size-10 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar with professional look" src="/avatar.svg" />
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Dr. Helena Smith</p>
<span className="inline-flex px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">Admin</span>
</div>
</div>
</div>
</aside>
{/*Main Wrapper*/}
<div className="flex-1 flex flex-col h-screen overflow-hidden">
{/*Topbar*/}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#111817]/80 backdrop-blur-md flex items-center justify-between px-8 z-10">
<div className="flex items-center gap-6">
<h2 className="text-xl font-bold">Dashboard</h2>
<div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-sm text-slate-500">calendar_month</span>
<span className="text-sm font-medium">Today, Oct 24</span>
<span className="material-symbols-outlined text-sm text-slate-500">keyboard_arrow_down</span>
</div>
</div>
<div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search patient by name or ID..." type="text" />
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm">person_search</span>
                    All Professionals
                </button>
<div className="size-px h-6 bg-slate-300 dark:bg-slate-700 mx-1"></div>
<button className="p-2 text-slate-500 hover:text-primary relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111817]"></span>
</button>
<button className="p-2 text-slate-500 hover:text-primary">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</header>
{/*Content*/}
<main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
{/*Row 1: StatCards*/}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-[#1c2725] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">event_note</span>
</span>
<span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +5%
                        </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Agendamentos hoje</p>
<h3 className="text-3xl font-bold mt-1">42</h3>
</div>
<div className="bg-white dark:bg-[#1c2725] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
<span className="material-symbols-outlined">pending_actions</span>
</span>
<span className="text-orange-500 text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_down</span> -2%
                        </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pendentes</p>
<h3 className="text-3xl font-bold mt-1">12</h3>
</div>
<div className="bg-white dark:bg-[#1c2725] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
<span className="material-symbols-outlined">hourglass_top</span>
</span>
<span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +10%
                        </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Lista de espera</p>
<h3 className="text-3xl font-bold mt-1">08</h3>
</div>
<div className="bg-white dark:bg-[#1c2725] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-red-500/10 rounded-lg text-red-500">
<span className="material-symbols-outlined">person_off</span>
</span>
<span className="text-red-500 text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +1%
                        </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Faltas ontem</p>
<h3 className="text-3xl font-bold mt-1">03</h3>
</div>
</div>
{/*Row 2: Agenda & Queue*/}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
{/*Agenda Table*/}
<div className="xl:col-span-2 bg-white dark:bg-[#1c2725] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h4 className="font-bold text-lg">Agenda de hoje</h4>
<button className="text-primary text-sm font-semibold hover:underline">Ver tudo</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 text-left">
<th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Time</th>
<th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Patient</th>
<th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Service</th>
<th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Professional</th>
<th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-400">08:00</td>
<td className="px-6 py-4 text-sm font-semibold">Joao Silva</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Consultation</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Dr. Helena S.</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500">Confirmed</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-400">08:30</td>
<td className="px-6 py-4 text-sm font-semibold">Maria Oliveira</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Follow-up</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Dr. Helena S.</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500">Waiting</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-400">09:00</td>
<td className="px-6 py-4 text-sm font-semibold">Carlos Souza</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Blood Test</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Dra. Taylor</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-500">Pending</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-400">09:30</td>
<td className="px-6 py-4 text-sm font-semibold">Ana Costa</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Consultation</td>
<td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Dr. Helena S.</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500">Confirmed</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*Queue Management*/}
<div className="bg-white dark:bg-[#1c2725] rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<h4 className="font-bold text-lg">Fila agora</h4>
</div>
<div className="p-6 flex-1 flex flex-col items-center justify-center text-center border-b border-slate-200 dark:border-slate-800">
<p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Agora Chamando</p>
<h2 className="text-4xl font-extrabold mb-1">MARIA O.</h2>
<p className="text-slate-400 text-sm mb-6">Guichê 03 • Dr. Helena</p>
<div className="flex gap-2 w-full">
<button className="flex-1 bg-primary text-background-dark py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-lg">campaign</span> Chamada
                            </button>
<button className="px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</div>
</div>
<div className="p-4 space-y-3 overflow-y-auto max-h-[220px] custom-scrollbar">
<p className="text-[10px] font-bold text-slate-500 uppercase ml-2">Próximos da Fila</p>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-slate-400">#04</span>
<span className="text-sm font-semibold">Roberto Dias</span>
</div>
<button className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl">play_circle</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700">
<div className="flex items-center gap-3">
<span className="text-xs font-bold text-slate-400">#05</span>
<span className="text-sm font-semibold">Juliana Paes</span>
</div>
<button className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl">play_circle</span>
</button>
</div>
</div>
</div>
</div>
{/*Row 3: Bottom Lists*/}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*Pending Confirmations*/}
<div className="bg-white dark:bg-[#1c2725] rounded-xl border border-slate-200 dark:border-slate-800">
<div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h4 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-orange-400">notification_important</span>
                            Pendências de confirmação
                        </h4>
<span className="bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded text-[10px] font-bold">12 NOVOS</span>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-500">FM</div>
<div>
<p className="text-sm font-bold">Fernando Mendes</p>
<p className="text-xs text-slate-500">Amanhã • 14:00</p>
</div>
</div>
<div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500/20">
<span className="material-symbols-outlined text-xl">check</span>
</button>
<button className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg hover:text-primary">
<span className="material-symbols-outlined text-xl">chat_bubble</span>
</button>
</div>
</div>
<div className="flex items-center justify-between group border-t border-slate-100 dark:border-slate-800 pt-4">
<div className="flex items-center gap-3">
<div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-500">AL</div>
<div>
<p className="text-sm font-bold">Alice Lima</p>
<p className="text-xs text-slate-500">Amanhã • 15:30</p>
</div>
</div>
<div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500/20">
<span className="material-symbols-outlined text-xl">check</span>
</button>
<button className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg hover:text-primary">
<span className="material-symbols-outlined text-xl">chat_bubble</span>
</button>
</div>
</div>
</div>
</div>
{/*Waiting List*/}
<div className="bg-white dark:bg-[#1c2725] rounded-xl border border-slate-200 dark:border-slate-800">
<div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h4 className="font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400">list_alt</span>
                            Lista de espera
                        </h4>
<button className="text-primary text-xs font-bold">+ Adicionar</button>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-500">PR</div>
<div>
<p className="text-sm font-bold">Paula Rangel</p>
<p className="text-xs text-slate-500">Preferência: Manhã • Pediatria</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20">
<span className="material-symbols-outlined text-xl">add_task</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
<div className="flex items-center justify-between group border-t border-slate-100 dark:border-slate-800 pt-4">
<div className="flex items-center gap-3">
<div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-500">GM</div>
<div>
<p className="text-sm font-bold">Gilberto Mota</p>
<p className="text-xs text-slate-500">Preferência: Sexta • Geral</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20">
<span className="material-symbols-outlined text-xl">add_task</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500">
<span className="material-symbols-outlined text-xl">delete</span>
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
