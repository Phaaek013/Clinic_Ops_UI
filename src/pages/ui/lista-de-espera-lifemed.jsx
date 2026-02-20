import '../../styles/ui/lista-de-espera-lifemed.css';

const screenHtml = `<div class="flex h-screen w-full bg-[#f8fcfc]">
<!-- SIDE NAVBAR -->
<aside class="w-72 h-full flex flex-col border-r border-[#e7f3f3] bg-[#f8fcfc] shrink-0 overflow-y-auto hidden lg:flex">
<div class="flex h-full flex-col justify-between p-4">
<div class="flex flex-col gap-4">
<!-- User Profile -->
<div class="flex gap-3 items-center px-2 py-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm" data-alt="Portrait of Dr. Silva" style='background-image: none;'></div>
<div class="flex flex-col">
<h1 class="text-[#0d1b1b] text-base font-bold leading-normal">Dr. Silva</h1>
<p class="text-[#4c9a9a] text-sm font-normal leading-normal">Administrador</p>
</div>
</div>
<!-- Navigation -->
<nav class="flex flex-col gap-2 mt-4">
<a class="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#0d1b1b] group-hover:text-[#0d1b1b]">dashboard</span>
<p class="text-[#0d1b1b] text-sm font-medium leading-normal">Dashboard</p>
</a>
<!-- Active State -->
<a class="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#e7f3f3]" href="#">
<span class="material-symbols-outlined fill text-[#0d1b1b]">calendar_today</span>
<p class="text-[#0d1b1b] text-sm font-bold leading-normal">Agendamentos</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">group</span>
<p class="text-[#0d1b1b] text-sm font-medium leading-normal">Pacientes</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">attach_money</span>
<p class="text-[#0d1b1b] text-sm font-medium leading-normal">Financeiro</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3f3] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">settings</span>
<p class="text-[#0d1b1b] text-sm font-medium leading-normal">Configurações</p>
</a>
</nav>
</div>
<div class="px-3 py-2">
<button class="flex items-center gap-3 w-full text-left rounded-lg p-2 hover:bg-red-50 text-red-600 transition-colors">
<span class="material-symbols-outlined">logout</span>
<span class="text-sm font-medium">Sair</span>
</button>
</div>
</div>
</aside>
<!-- MAIN CONTENT -->
<div class="flex flex-col flex-1 h-full overflow-hidden relative">
<!-- TOP NAVBAR -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3f3] px-6 lg:px-10 py-3 bg-[#f8fcfc] shrink-0 z-20">
<div class="flex items-center gap-4 text-[#0d1b1b]">
<!-- Mobile Menu Button -->
<button class="lg:hidden p-2 text-[#0d1b1b]">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="size-8 text-primary">
<svg class="text-[#4c9a9a]" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-[#0d1b1b] text-lg font-bold leading-tight tracking-[-0.015em]">LifeMed ClinicOps</h2>
</div>
<div class="flex items-center gap-4">
<div class="flex gap-2">
<button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#e7f3f3] text-[#0d1b1b] hover:bg-gray-200 transition-colors">
<span class="material-symbols-outlined" style="font-size: 20px;">notifications</span>
</button>
<button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#e7f3f3] text-[#0d1b1b] hover:bg-gray-200 transition-colors">
<span class="material-symbols-outlined" style="font-size: 20px;">help</span>
</button>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#e7f3f3]" data-alt="User profile picture" style='background-image: none;'></div>
</div>
</header>
<!-- SCROLLABLE CONTENT -->
<main class="flex-1 overflow-y-auto bg-[#f8fcfc] p-4 lg:p-8">
<div class="max-w-[1200px] mx-auto flex flex-col gap-6">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 items-center text-sm">
<a class="text-[#4c9a9a] font-medium hover:underline" href="#">Home</a>
<span class="text-[#4c9a9a] font-medium">/</span>
<a class="text-[#4c9a9a] font-medium hover:underline" href="#">Agendamentos</a>
<span class="text-[#4c9a9a] font-medium">/</span>
<span class="text-[#0d1b1b] font-medium">Lista de Espera</span>
</div>
<!-- Page Heading & Meta -->
<div class="flex flex-col gap-4">
<div class="flex flex-wrap justify-between items-start gap-4">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">
<h1 class="text-[#0d1b1b] text-3xl font-bold leading-tight tracking-tight">Lista de Espera</h1>
<span class="bg-[#13ecec] text-[#0d1b1b] text-xs font-bold px-2.5 py-1 rounded-full">14 pacientes</span>
</div>
<p class="text-[#4c9a9a] text-base font-normal">Gerencie os pacientes que solicitaram adiantamento de consulta.</p>
</div>
<!-- Export or Action Button (Optional) -->
<!-- <button class="bg-[#0d1b1b] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-opacity-90">
                                <span class="material-symbols-outlined" style="font-size: 18px;">download</span> Exportar
                            </button> -->
</div>
<!-- Info Box / Microcopy -->
<div class="bg-[#e7f3f3] rounded-lg p-3 flex items-start gap-3 text-sm text-[#0d1b1b] border border-[#d0eaea]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 20px;">info</span>
<p class="leading-relaxed"><span class="font-bold">Atenção:</span> O contato com o paciente para adiantar o agendamento é feito manualmente. Utilize os botões de ação para registrar o contato.</p>
</div>
</div>
<!-- FILTERS & SEARCH -->
<div class="bg-white p-4 rounded-xl shadow-sm border border-[#e7f3f3] flex flex-col lg:flex-row gap-4 justify-between items-center">
<!-- Search -->
<div class="relative w-full lg:w-1/3">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-[#4c9a9a] material-symbols-outlined" style="font-size: 20px;">search</span>
<input class="w-full pl-10 pr-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm text-[#0d1b1b] focus:outline-none focus:ring-2 focus:ring-[#13ecec] focus:border-transparent placeholder-[#4c9a9a]" placeholder="Buscar por nome ou telefone..." type="text"/>
</div>
<!-- Dropdowns -->
<div class="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<div class="relative group">
<button class="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[140px] justify-between">
<span>Profissional</span>
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 20px;">keyboard_arrow_down</span>
</button>
</div>
<div class="relative group">
<button class="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[130px] justify-between">
<span>Serviço</span>
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 20px;">keyboard_arrow_down</span>
</button>
</div>
<div class="relative group">
<button class="flex items-center gap-2 px-4 py-2.5 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg text-sm font-medium text-[#0d1b1b] hover:bg-[#e7f3f3] transition-colors min-w-[120px] justify-between">
<span>Status</span>
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 20px;">keyboard_arrow_down</span>
</button>
</div>
</div>
</div>
<!-- DATA TABLE CARD -->
<div class="bg-white rounded-xl shadow-sm border border-[#e7f3f3] overflow-hidden flex flex-col">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr class="bg-[#f8fcfc] border-b border-[#e7f3f3]">
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Paciente</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Serviço</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Profissional</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Data Atual</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Solicitado em</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider">Prioridade</th>
<th class="px-6 py-4 text-xs font-bold text-[#4c9a9a] uppercase tracking-wider text-right">Ações</th>
</tr>
</thead>
<tbody class="divide-y divide-[#e7f3f3]">
<!-- Row 1 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Ana Clara" style='background-image: none;'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-[#0d1b1b]">Ana Clara Souza</span>
<span class="text-xs text-[#4c9a9a]">(11) 99876-5432</span>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Consulta Rotina</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Dr. Roberto Alves</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 16px;">event</span>
                                                24 Out, 2023
                                            </div>
</td>
<td class="px-6 py-4 text-sm text-[#4c9a9a]">10 Out, 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                                                Alta
                                            </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
</button>
<button class="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span class="material-symbols-outlined" style="font-size: 18px;">check</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Marcos Oliveira" style='background-image: none;'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-[#0d1b1b]">Marcos Oliveira</span>
<span class="text-xs text-[#4c9a9a]">(11) 98765-4321</span>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Retorno</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Dra. Helena Costa</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 16px;">event</span>
                                                28 Out, 2023
                                            </div>
</td>
<td class="px-6 py-4 text-sm text-[#4c9a9a]">12 Out, 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                                                Média
                                            </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
</button>
<button class="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span class="material-symbols-outlined" style="font-size: 18px;">check</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Julia Mendes" style='background-image: none;'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-[#0d1b1b]">Julia Mendes</span>
<span class="text-xs text-[#4c9a9a]">(21) 99123-4567</span>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Exame Cardiológico</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Dr. Silva</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 16px;">event</span>
                                                01 Nov, 2023
                                            </div>
</td>
<td class="px-6 py-4 text-sm text-[#4c9a9a]">15 Out, 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                                                Baixa
                                            </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
</button>
<button class="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span class="material-symbols-outlined" style="font-size: 18px;">check</span>
</button>
</div>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-gray-200" data-alt="Patient Fernando Lima" style='background-image: none;'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-[#0d1b1b]">Fernando Lima</span>
<span class="text-xs text-[#4c9a9a]">(11) 98888-7777</span>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Dermatologia Geral</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b]">Dra. Helena Costa</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 16px;">event</span>
                                                03 Nov, 2023
                                            </div>
</td>
<td class="px-6 py-4 text-sm text-[#4c9a9a]">16 Out, 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                                                Média
                                            </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors" title="Ver contato">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
</button>
<button class="size-8 flex items-center justify-center rounded-lg bg-[#13ecec] bg-opacity-20 text-[#00b2b2] hover:bg-opacity-40 transition-colors" title="Marcar como contatado">
<span class="material-symbols-outlined" style="font-size: 18px;">check</span>
</button>
</div>
</td>
</tr>
<!-- Row 5 - Contacted Example (Ghosted/Different Status) -->
<tr class="hover:bg-[#f8fcfc] bg-gray-50/50 group transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3 opacity-60">
<div class="size-10 rounded-full bg-cover bg-center bg-gray-200 grayscale" data-alt="Patient Paulo Cesar" style='background-image: none;'></div>
<div class="flex flex-col">
<span class="text-sm font-bold text-[#0d1b1b]">Paulo Cesar</span>
<span class="text-xs text-[#4c9a9a]">(11) 97777-6666</span>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b] opacity-60">Consulta Rotina</td>
<td class="px-6 py-4 text-sm text-[#0d1b1b] opacity-60">Dr. Roberto Alves</td>
<td class="px-6 py-4 opacity-60">
<div class="flex items-center gap-2 text-sm font-medium text-[#0d1b1b]">
<span class="material-symbols-outlined text-[#4c9a9a]" style="font-size: 16px;">event</span>
                                                05 Nov, 2023
                                            </div>
</td>
<td class="px-6 py-4 text-sm text-[#4c9a9a] opacity-60">18 Out, 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500 border border-gray-200">
                                                Contatado
                                            </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-60">
<button class="size-8 flex items-center justify-center rounded-lg bg-white border border-[#e7f3f3] text-[#4c9a9a] cursor-not-allowed" disabled="">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
</button>
<button class="size-8 flex items-center justify-center rounded-lg bg-green-100 text-green-700 cursor-default" disabled="">
<span class="material-symbols-outlined" style="font-size: 18px;">done_all</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="bg-[#f8fcfc] border-t border-[#e7f3f3] px-6 py-4 flex items-center justify-between">
<span class="text-sm text-[#4c9a9a]">Mostrando <span class="font-bold text-[#0d1b1b]">1-5</span> de <span class="font-bold text-[#0d1b1b]">14</span> pacientes</span>
<div class="flex items-center gap-2">
<button class="px-3 py-1.5 rounded-lg border border-[#e7f3f3] bg-white text-sm text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] disabled:opacity-50 disabled:cursor-not-allowed">Anterior</button>
<button class="px-3 py-1.5 rounded-lg border border-[#e7f3f3] bg-white text-sm text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b]">Próximo</button>
</div>
</div>
</div>
<!-- LOADING SKELETON (Hidden visual example for dev reference) -->
<!-- In a real app, this would replace the table content while loading -->
<div class="hidden flex-col gap-4 p-4 border border-dashed border-[#4c9a9a] rounded-xl bg-gray-50 opacity-50">
<p class="text-xs font-bold uppercase text-[#4c9a9a]">Estado: Carregando (Exemplo)</p>
<div class="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
<div class="h-16 bg-gray-200 rounded animate-pulse w-full"></div>
<div class="h-16 bg-gray-200 rounded animate-pulse w-full"></div>
</div>
</div>
</main>
</div>
</div>`;

export function UiListaDeEsperaLifemedPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/lista-de-espera-lifemed" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
