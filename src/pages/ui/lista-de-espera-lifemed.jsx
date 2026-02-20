import '../../styles/ui/lista-de-espera-lifemed.css';

export function ListaDeEsperaLifemed() {
  return (
    <div className="ui-page ui-lista-de-espera-lifemed bg-background-light text-neutral-dark overflow-hidden">
<div className="flex h-screen w-full bg-[#f8fcfc]">
{/*SIDE NAVBAR*/}
<aside className="w-72 h-full flex flex-col border-r border-[#e7f3f3] bg-[#f8fcfc] shrink-0 overflow-y-auto hidden lg:flex">
<div className="flex h-full flex-col justify-between p-4">
<div className="flex flex-col gap-4">
{/*User Profile*/}
<div className="flex gap-3 items-center px-2 py-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm" data-alt="Portrait of Dr. Silva" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<h1 className="text-[#0d1b1b] text-base font-bold leading-normal">Dr. Silva</h1>
<p className="text-[#4c9a9a] text-sm font-normal leading-normal">Administrador</p>
</div>
</div>
{/*Navigation*/}
<nav className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span className="material-symbols-outlined text-[#0d1b1b] group-hover:text-[#0d1b1b]">dashboard</span>
<p className="text-[#0d1b1b] text-sm font-medium leading-normal">Dashboard</p>
</a>
{/*Active State*/}
<a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#e7f3f3]" href="#">
<span className="material-symbols-outlined fill text-[#0d1b1b]">calendar_today</span>
<p className="text-[#0d1b1b] text-sm font-bold leading-normal">Agendamentos</p>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span className="material-symbols-outlined text-[#0d1b1b]">group</span>
<p className="text-[#0d1b1b] text-sm font-medium leading-normal">Pacientes</p>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span className="material-symbols-outlined text-[#0d1b1b]">attach_money</span>
<p className="text-[#0d1b1b] text-sm font-medium leading-normal">Financeiro</p>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span className="material-symbols-outlined text-[#0d1b1b]">settings</span>
<p className="text-[#0d1b1b] text-sm font-medium leading-normal">Configurações</p>
</a>
</nav>
</div>
<div className="px-3 py-2">
<button className="flex items-center gap-3 w-full text-left rounded-lg p-2 hover:bg-red-50 text-red-600 transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm font-medium">Sair</span>
</button>
</div>
</div>
</aside>
{/*MAIN CONTENT*/}
<div className="flex flex-col flex-1 h-full overflow-hidden relative">
{/*TOP NAVBAR*/}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3f3] px-6 lg:px-10 py-3 bg-[#f8fcfc] shrink-0 z-20">
<div className="flex items-center gap-4 text-[#0d1b1b]">
{/*Mobile Menu Button*/}
<button className="lg:hidden p-2 text-[#0d1b1b]">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="size-8 text-primary">
<svg className="text-[#4c9a9a]" fill="none" viewBox="0 0 48 48" xmlns="/avatar.svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-[#0d1b1b] text-lg font-bold leading-tight tracking-[-0.015em]">LifeMed ClinicOps</h2>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#e7f3f3] text-[#0d1b1b] hover:bg-gray-200 transition-colors">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>notifications</span>
</button>
<button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#e7f3f3] text-[#0d1b1b] hover:bg-gray-200 transition-colors">
<span className="material-symbols-outlined" style={{fontSize: '20px'}}>help</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#e7f3f3]" data-alt="User profile picture" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
</div>
</header>
{/*SCROLLABLE CONTENT*/}
<main className="flex-1 overflow-y-auto bg-[#f8fcfc] p-4 lg:p-8">
<div className="max-w-[1200px] mx-auto flex flex-col gap-6">
{/*Breadcrumbs*/}
<div className="flex flex-wrap gap-2 items-center text-sm">
<a className="text-[#4c9a9a] font-medium hover:underline" href="#">Home</a>
<span className="text-[#4c9a9a] font-medium">/</span>
<a className="text-[#4c9a9a] font-medium hover:underline" href="#">Agendamentos</a>
<span className="text-[#4c9a9a] font-medium">/</span>
<span className="text-[#0d1b1b] font-medium">Lista de Espera</span>
</div>
{/*Page Heading & Meta*/}
<div className="flex flex-col gap-4">
<div className="flex flex-wrap justify-between items-start gap-4">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<h1 className="text-[#0d1b1b] text-3xl font-bold leading-tight tracking-tight">Lista de Espera</h1>
<span className="bg-[#13ecec] text-[#0d1b1b] text-xs font-bold px-2.5 py-1 rounded-full">14 pacientes</span>
</div>
<p className="text-[#4c9a9a] text-base font-normal">Gerencie os pacientes que solicitaram adiantamento de consulta.</p>
</div>
{/*Export or Action Button (Optional)*/}
{/*<button className="bg-[#0d1b1b] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-opacity-90">
                                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>download</span> Exportar
                            </button>*/}
</div>
{/*Info Box / Microcopy*/}
<div className="bg-[#e7f3f3] rounded-lg p-3 flex items-start gap-3 text-sm text-[#0d1b1b] border border-[#d0eaea]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '20px'}}>info</span>
<p className="leading-relaxed"><span className="font-bold">Atenção:</span> O contato com o paciente para adiantar o agendamento é feito manualmente. Utilize os botões de ação para registrar o contato.</p>
</div>
</div>
{/*FILTERS & SEARCH*/}
<div className="bg-white p-4 rounded-xl shadow-sm border border-[#e7f3f3] flex flex-col lg:flex-row gap-4 justify-between items-center">
{/*Search*/}
<div className="relative w-full lg:w-1/3">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4c9a9a] material-symbols-outlined" style={{fontSize: '20px'}}>search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm text-[#0d1b1b] focus:outline-none focus:ring-2 focus:ring-[#13ecec] focus:border-transparent placeholder-[#4c9a9a]" placeholder="Buscar por nome ou telefone..." type="text" />
</div>
{/*Dropdowns*/}
<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[140px] justify-between">
<span>Profissional</span>
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '20px'}}>keyboard_arrow_down</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[130px] justify-between">
<span>Serviço</span>
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '20px'}}>keyboard_arrow_down</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[120px] justify-between">
<span>Status</span>
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '20px'}}>keyboard_arrow_down</span>
</button>
</div>
</div>
</div>
{/*DATA TABLE CARD*/}
<div className="bg-white rounded-xl shadow-sm border border-[#e7f3f3] overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-[#f8fcfc] border-b border-[#e7f3f3]">
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Paciente</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Serviço</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Profissional</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Data Atual</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Solicitado em</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Prioridade</th>
<th className="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider text-right">Ações</th>
</tr>
</thead>
<tbody className="divide-y divide-[#e7f3f3]">
{/*Row 1*/}
<tr className="hover:bg-[#f8fcfc] group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Ana Clara" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0d1b1b]">Ana Clara Souza</span>
<span className="text-xs text-[#4c9a9a]">(11) 99876-5432</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Consulta Rotina</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Dr. Roberto Alves</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '16px'}}>event</span>
                                                24 Out, 2023
                                            </div>
</td>
<td className="px-6 py-4 text-sm text-[#4c9a9a]">10 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                                                Alta
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>visibility</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>check</span>
</button>
</div>
</td>
</tr>
{/*Row 2*/}
<tr className="hover:bg-[#f8fcfc] group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Marcos Oliveira" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0d1b1b]">Marcos Oliveira</span>
<span className="text-xs text-[#4c9a9a]">(11) 98765-4321</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Retorno</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Dra. Helena Costa</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '16px'}}>event</span>
                                                28 Out, 2023
                                            </div>
</td>
<td className="px-6 py-4 text-sm text-[#4c9a9a]">12 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                                                Média
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>visibility</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>check</span>
</button>
</div>
</td>
</tr>
{/*Row 3*/}
<tr className="hover:bg-[#f8fcfc] group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Julia Mendes" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0d1b1b]">Julia Mendes</span>
<span className="text-xs text-[#4c9a9a]">(21) 99123-4567</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Exame Cardiológico</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Dr. Silva</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '16px'}}>event</span>
                                                01 Nov, 2023
                                            </div>
</td>
<td className="px-6 py-4 text-sm text-[#4c9a9a]">15 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                                                Baixa
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>visibility</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>check</span>
</button>
</div>
</td>
</tr>
{/*Row 4*/}
<tr className="hover:bg-[#f8fcfc] group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Fernando Lima" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0d1b1b]">Fernando Lima</span>
<span className="text-xs text-[#4c9a9a]">(11) 98888-7777</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Dermatologia Geral</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b]">Dra. Helena Costa</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '16px'}}>event</span>
                                                03 Nov, 2023
                                            </div>
</td>
<td className="px-6 py-4 text-sm text-[#4c9a9a]">16 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                                                Média
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>visibility</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>check</span>
</button>
</div>
</td>
</tr>
{/*Row 5 - Contacted Example (Ghosted/Different Status)*/}
<tr className="hover:bg-[#f8fcfc] bg-gray-50/50 group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3 opacity-60">
<div className="size-10 rounded-full bg-cover bg-center bg-gray-200 grayscale" data-alt="Patient Paulo Cesar" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#0d1b1b]">Paulo Cesar</span>
<span className="text-xs text-[#4c9a9a]">(11) 97777-6666</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b] opacity-60">Consulta Rotina</td>
<td className="px-6 py-4 text-sm text-[#0d1b1b] opacity-60">Dr. Roberto Alves</td>
<td className="px-6 py-4 opacity-60">
<div className="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span className="material-symbols-outlined text-[#4c9a9a]" style={{fontSize: '16px'}}>event</span>
                                                05 Nov, 2023
                                            </div>
</td>
<td className="px-6 py-4 text-sm text-[#4c9a9a] opacity-60">18 Out, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500 border border-gray-200">
                                                Contatado
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-60">
<button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] cursor-not-allowed" disabled="">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>visibility</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-green-100 text-green-700 cursor-default" disabled="">
<span className="material-symbols-outlined" style={{fontSize: '18px'}}>done_all</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*Pagination*/}
<div className="bg-[#f8fcfc] border-t border-[#e7f3f3] px-6 py-4 flex items-center justify-between">
<span className="text-sm text-[#4c9a9a]">Mostrando <span className="font-bold text-[#0d1b1b]">1-5</span> de <span className="font-bold text-[#0d1b1b]">14</span> pacientes</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-[#e7f3f3] bg-white text-sm text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] disabled:opacity-50 disabled:cursor-not-allowed">Anterior</button>
<button className="px-3 py-1.5 rounded-lg border border-[#e7f3f3] bg-white text-sm text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b]">Próximo</button>
</div>
</div>
</div>
{/*LOADING SKELETON (Hidden visual example for dev reference)*/}
{/*In a real app, this would replace the table content while loading*/}
<div className="hidden flex-col gap-4 p-4 border border-dashed border-[#4c9a9a] rounded-xl bg-gray-50 opacity-50">
<p className="text-xs font-bold uppercase text-[#4c9a9a]">Estado: Carregando (Exemplo)</p>
<div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
<div className="h-16 bg-gray-200 rounded animate-pulse w-full"></div>
<div className="h-16 bg-gray-200 rounded animate-pulse w-full"></div>
</div>
</div>
</main>
</div>
</div>
    </div>
  );
}
