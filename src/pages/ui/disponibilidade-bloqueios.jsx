import '../../styles/ui/disponibilidade-bloqueios.css';

const screenHtml = `<div class="flex h-screen w-full flex-row overflow-hidden">
<!-- SideNavBar -->
<aside class="flex w-72 flex-col justify-between border-r border-border-light bg-background-light p-4 overflow-y-auto hidden md:flex shrink-0">
<div class="flex flex-col gap-4">
<div class="flex gap-3 px-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="LifeMed Logo" style='background-image: none;'></div>
<div class="flex flex-col">
<h1 class="text-[#0d1b1b] text-base font-bold leading-normal">LifeMed</h1>
<p class="text-secondary text-xs font-normal leading-normal">ClinicOps Admin</p>
</div>
</div>
<nav class="flex flex-col gap-1 mt-4">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">dashboard</span>
<p class="text-[#0d1b1b] text-sm font-medium">Dashboard</p>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">calendar_month</span>
<p class="text-[#0d1b1b] text-sm font-medium">Agenda</p>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">groups</span>
<p class="text-[#0d1b1b] text-sm font-medium">Pacientes</p>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#e7f3f3] text-primary-content transition-colors" href="#">
<span class="material-symbols-filled text-[#0d1b1b]">schedule</span>
<p class="text-[#0d1b1b] text-sm font-bold">Disponibilidade</p>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">payments</span>
<p class="text-[#0d1b1b] text-sm font-medium">Financeiro</p>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d1b1b]">settings</span>
<p class="text-[#0d1b1b] text-sm font-medium">Configurações</p>
</a>
</nav>
</div>
<div class="px-3">
<button class="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#0fd6d6] transition-colors text-primary-content text-sm font-bold leading-normal tracking-[0.015em]">
<span class="material-symbols-outlined text-lg">add</span>
<span class="truncate">Novo Agendamento</span>
</button>
</div>
</aside>
<!-- Main Content -->
<main class="flex flex-1 flex-col h-full overflow-hidden relative">
<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-background-light px-8 py-3 shrink-0">
<div class="flex items-center gap-4 lg:hidden">
<button class="text-[#0d1b1b]"><span class="material-symbols-outlined">menu</span></button>
</div>
<div class="flex items-center gap-4 flex-1 max-w-xl">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xl">search</span>
<input class="w-full bg-[#e7f3f3] border-none rounded-lg py-2 pl-10 pr-4 text-sm text-[#0d1b1b] placeholder-secondary focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="Buscar pacientes, médicos ou agendamentos..."/>
</div>
</div>
<div class="flex items-center gap-4 ml-8">
<button class="relative p-2 rounded-lg hover:bg-[#e7f3f3] text-[#0d1b1b] transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div class="h-8 w-[1px] bg-border-light"></div>
<div class="flex items-center gap-3">
<div class="text-right hidden sm:block">
<p class="text-sm font-bold text-[#0d1b1b]">Dra. Ana Costa</p>
<p class="text-xs text-secondary">Administradora</p>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-sm" data-alt="User Avatar" style='background-image: none;'></div>
</div>
</div>
</header>
<!-- Scrollable Page Content -->
<div class="flex-1 overflow-y-auto bg-background-light">
<div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
<!-- Breadcrumbs & Heading -->
<div class="flex flex-col gap-1">
<nav class="flex items-center gap-2 text-sm">
<a class="text-secondary hover:text-primary hover:underline transition-colors" href="#">Dashboard</a>
<span class="text-secondary">/</span>
<a class="text-secondary hover:text-primary hover:underline transition-colors" href="#">Disponibilidade</a>
<span class="text-secondary">/</span>
<span class="text-[#0d1b1b] font-semibold">Bloqueios</span>
</nav>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
<div class="flex flex-col">
<h2 class="text-3xl font-bold text-[#0d1b1b] tracking-tight">Bloqueios</h2>
<p class="text-secondary text-sm mt-1">Gerencie exceções e dias sem atendimento na clínica.</p>
</div>
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f3f3] text-secondary text-xs font-bold uppercase tracking-wider border border-[#d0eaea]">
<span class="material-symbols-outlined text-[16px]">lock</span>
                            Somente ADMIN
                        </span>
</div>
</div>
<!-- Tabs -->
<div class="border-b border-border-light">
<div class="flex gap-8">
<a class="pb-3 text-sm font-medium text-secondary hover:text-[#0d1b1b] border-b-[3px] border-transparent transition-all" href="#">Regras semanais</a>
<a class="pb-3 text-sm font-bold text-[#0d1b1b] border-b-[3px] border-primary" href="#">Bloqueios</a>
<a class="pb-3 text-sm font-medium text-secondary hover:text-[#0d1b1b] border-b-[3px] border-transparent transition-all" href="#">Políticas</a>
</div>
</div>
<!-- Scope Controls -->
<div class="bg-surface-light rounded-xl p-5 shadow-sm border border-border-light flex flex-col md:flex-row md:items-center justify-between gap-4">
<div class="flex flex-col md:flex-row gap-4 items-start md:items-center flex-1">
<div class="flex flex-col gap-1.5 w-full md:w-auto min-w-[280px]">
<label class="text-xs font-bold text-secondary uppercase tracking-wide">Aplicar bloqueio em</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1b1b]">domain</span>
<select class="w-full bg-[#f8fcfc] border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block pl-10 p-2.5 font-medium cursor-pointer">
<option value="clinic">Clínica LifeMed (Todos)</option>
<option value="professional">Profissional Específico</option>
</select>
</div>
</div>
<!-- Separator for visual structure -->
<div class="hidden md:block w-px h-10 bg-border-light"></div>
<div class="flex items-center gap-2 text-secondary text-xs bg-[#f8fcfc] px-3 py-2 rounded-lg border border-border-light">
<span class="material-symbols-outlined text-[16px]">public</span>
                             Horário de Brasília (GMT-3)
                        </div>
</div>
<button class="flex items-center gap-2 text-secondary hover:text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#e7f3f3] transition-colors border border-dashed border-secondary/30 hover:border-primary">
<span class="material-symbols-outlined text-[18px]">content_copy</span>
                        Copiar do padrão da clínica
                    </button>
</div>
<!-- Main Workspace Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full pb-10">
<!-- Left Column: Calendar Visualization -->
<div class="lg:col-span-4 flex flex-col gap-4">
<div class="bg-surface-light rounded-xl shadow-sm border border-border-light p-5">
<div class="flex items-center justify-between mb-4">
<h3 class="font-bold text-[#0d1b1b]">Calendário</h3>
<div class="flex gap-1">
<button class="p-1 rounded-md hover:bg-[#e7f3f3] text-secondary"><span class="material-symbols-outlined">chevron_left</span></button>
<span class="text-sm font-semibold text-[#0d1b1b] pt-1">Outubro 2023</span>
<button class="p-1 rounded-md hover:bg-[#e7f3f3] text-secondary"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<!-- Calendar Grid Mockup -->
<div class="grid grid-cols-7 gap-1 text-center mb-2">
<span class="text-xs font-medium text-secondary py-1">D</span>
<span class="text-xs font-medium text-secondary py-1">S</span>
<span class="text-xs font-medium text-secondary py-1">T</span>
<span class="text-xs font-medium text-secondary py-1">Q</span>
<span class="text-xs font-medium text-secondary py-1">Q</span>
<span class="text-xs font-medium text-secondary py-1">S</span>
<span class="text-xs font-medium text-secondary py-1">S</span>
</div>
<div class="grid grid-cols-7 gap-1 text-center text-sm">
<span class="p-2 text-gray-300">29</span>
<span class="p-2 text-gray-300">30</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">1</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">2</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">3</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">4</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">5</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">6</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">7</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">8</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">9</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">10</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">11</span>
<div class="relative group cursor-pointer">
<span class="flex items-center justify-center w-full h-full text-white bg-red-400 rounded-lg shadow-sm font-bold">12</span>
</div>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">13</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">14</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">15</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">16</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">17</span>
<div class="relative group cursor-pointer">
<span class="flex items-center justify-center w-full h-full text-[#0d1b1b] bg-amber-200 rounded-lg shadow-sm font-bold">18</span>
</div>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">19</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">20</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">21</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">22</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">23</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">24</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">25</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">26</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">27</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">28</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">29</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">30</span>
<span class="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">31</span>
<span class="p-2 text-gray-300">1</span>
<span class="p-2 text-gray-300">2</span>
</div>
<div class="mt-4 flex flex-wrap gap-2">
<span class="inline-flex items-center gap-1 text-xs text-secondary bg-[#f8fcfc] px-2 py-1 rounded border border-border-light cursor-pointer hover:border-primary">
                                    Hoje
                                </span>
<span class="inline-flex items-center gap-1 text-xs text-secondary bg-[#f8fcfc] px-2 py-1 rounded border border-border-light cursor-pointer hover:border-primary">
                                    Próx. 7 dias
                                </span>
<span class="inline-flex items-center gap-1 text-xs text-white bg-primary px-2 py-1 rounded border border-transparent shadow-sm font-bold">
                                    Este mês
                                </span>
</div>
<div class="mt-4 pt-4 border-t border-border-light flex gap-4 text-xs">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-red-400"></div>
<span class="text-secondary">Bloqueio Total</span>
</div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-amber-200"></div>
<span class="text-secondary">Parcial</span>
</div>
</div>
</div>
<!-- Mini Stats or Info -->
<div class="bg-primary/5 rounded-xl p-4 border border-primary/20">
<h4 class="text-sm font-bold text-[#0d1b1b] mb-2">Resumo de Outubro</h4>
<div class="flex justify-between items-center text-sm">
<span class="text-secondary">Dias bloqueados:</span>
<span class="font-bold text-[#0d1b1b]">2 dias</span>
</div>
</div>
</div>
<!-- Right Column: List -->
<div class="lg:col-span-8 flex flex-col gap-4">
<div class="flex items-center justify-between">
<h3 class="font-bold text-lg text-[#0d1b1b]">Bloqueios Cadastrados</h3>
<button class="flex items-center gap-2 bg-primary hover:bg-[#0fd6d6] text-primary-content text-sm font-bold px-4 py-2 rounded-lg shadow-sm shadow-primary/20 transition-all active:scale-95">
<span class="material-symbols-outlined text-[20px]">add</span>
                                Novo bloqueio
                            </button>
</div>
<div class="bg-surface-light rounded-xl shadow-sm border border-border-light overflow-hidden flex flex-col h-full">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead class="bg-[#f8fcfc] border-b border-border-light">
<tr>
<th class="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider w-[240px]">Data / Período</th>
<th class="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">Tipo</th>
<th class="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">Escopo</th>
<th class="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">Motivo</th>
<th class="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider text-right">Ações</th>
</tr>
</thead>
<tbody class="divide-y divide-border-light">
<!-- Row 1 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="py-4 px-4 align-top">
<div class="flex items-start gap-3">
<div class="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-lg p-2 min-w-[48px]">
<span class="text-xs font-bold uppercase">OUT</span>
<span class="text-lg font-bold leading-none">12</span>
</div>
<div class="flex flex-col">
<p class="text-sm font-bold text-[#0d1b1b]">12 Out 2023</p>
<span class="text-xs text-secondary flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined text-[14px]">history_toggle_off</span>
                                                            Dia inteiro
                                                        </span>
</div>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                                    Bloqueio Total
                                                 </span>
</td>
<td class="py-4 px-4 align-top">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary bg-[#e7f3f3] p-1 rounded text-[18px]">domain</span>
<span class="text-sm text-[#0d1b1b]">Clínica (Todos)</span>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="text-sm text-secondary">Feriado Nacional</span>
</td>
<td class="py-4 px-4 align-top text-right">
<button class="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors"><span class="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="py-4 px-4 align-top">
<div class="flex items-start gap-3">
<div class="flex flex-col items-center justify-center bg-amber-50 text-amber-600 rounded-lg p-2 min-w-[48px]">
<span class="text-xs font-bold uppercase">OUT</span>
<span class="text-lg font-bold leading-none">18</span>
</div>
<div class="flex flex-col">
<p class="text-sm font-bold text-[#0d1b1b]">18 Out 2023</p>
<span class="text-xs text-secondary flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined text-[14px]">schedule</span>
                                                            08:00 - 12:00
                                                        </span>
</div>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                                                    Parcial
                                                 </span>
</td>
<td class="py-4 px-4 align-top">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-cover bg-center" data-alt="Doctor Avatar" style='background-image: none;'></div>
<span class="text-sm text-[#0d1b1b]">Dr. Roberto</span>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="text-sm text-secondary">Reunião Externa</span>
</td>
<td class="py-4 px-4 align-top text-right">
<button class="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors"><span class="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-[#f8fcfc] group transition-colors">
<td class="py-4 px-4 align-top">
<div class="flex items-start gap-3">
<div class="flex flex-col items-center justify-center bg-gray-50 text-gray-500 rounded-lg p-2 min-w-[48px]">
<span class="text-xs font-bold uppercase">NOV</span>
<span class="text-lg font-bold leading-none">02</span>
</div>
<div class="flex flex-col">
<p class="text-sm font-bold text-[#0d1b1b]">02 Nov 2023</p>
<span class="text-xs text-secondary flex items-center gap-1 mt-0.5">
<span class="material-symbols-outlined text-[14px]">history_toggle_off</span>
                                                            Dia inteiro
                                                        </span>
</div>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                                    Bloqueio Total
                                                 </span>
</td>
<td class="py-4 px-4 align-top">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary bg-[#e7f3f3] p-1 rounded text-[18px]">domain</span>
<span class="text-sm text-[#0d1b1b]">Clínica (Todos)</span>
</div>
</td>
<td class="py-4 px-4 align-top">
<span class="text-sm text-secondary">Finados</span>
</td>
<td class="py-4 px-4 align-top text-right">
<button class="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors"><span class="material-symbols-outlined text-[20px]">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="mt-auto border-t border-border-light bg-[#f8fcfc] p-3 flex items-center justify-between">
<span class="text-xs text-secondary">Mostrando 1-3 de 12 bloqueios</span>
<div class="flex gap-1">
<button class="px-2 py-1 rounded border border-border-light bg-white text-secondary text-xs disabled:opacity-50" disabled="">Anterior</button>
<button class="px-2 py-1 rounded border border-border-light bg-white text-[#0d1b1b] hover:border-primary text-xs">Próximo</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- MODAL OVERLAY: New Block -->
<!-- This modal simulates the "Novo Bloqueio" action being active -->
<div aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b1b]/60 backdrop-blur-sm p-4 animate-fade-in" role="dialog">
<div class="bg-surface-light w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
<!-- Header -->
<div class="flex items-center justify-between px-6 py-4 border-b border-border-light bg-[#f8fcfc]">
<div>
<h3 class="text-lg font-bold text-[#0d1b1b]">Novo Bloqueio</h3>
<p class="text-xs text-secondary">Defina uma exceção na agenda.</p>
</div>
<button class="text-secondary hover:text-[#0d1b1b] p-1 rounded-full hover:bg-border-light transition-colors">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Body -->
<div class="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
<!-- Scope Field -->
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b]">Onde aplicar?</label>
<div class="grid grid-cols-2 gap-3">
<label class="cursor-pointer relative">
<input checked="" class="peer sr-only" name="scope" type="radio"/>
<div class="p-3 rounded-lg border border-border-light bg-white hover:bg-[#f8fcfc] peer-checked:border-primary peer-checked:bg-[#e7f3f3] peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col items-center gap-1">
<span class="material-symbols-outlined text-secondary peer-checked:text-[#0d1b1b]">domain</span>
<span class="text-sm font-medium text-[#0d1b1b]">Clínica Inteira</span>
</div>
</label>
<label class="cursor-pointer relative">
<input class="peer sr-only" name="scope" type="radio"/>
<div class="p-3 rounded-lg border border-border-light bg-white hover:bg-[#f8fcfc] peer-checked:border-primary peer-checked:bg-[#e7f3f3] peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col items-center gap-1">
<span class="material-symbols-outlined text-secondary peer-checked:text-[#0d1b1b]">person</span>
<span class="text-sm font-medium text-[#0d1b1b]">Profissional</span>
</div>
</label>
</div>
</div>
<!-- Date & Time -->
<div class="flex flex-col gap-3 p-4 rounded-lg bg-[#f8fcfc] border border-border-light">
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b]">Data</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary">calendar_today</span>
<input class="w-full bg-white border border-border-light rounded-lg pl-10 pr-3 py-2 text-sm text-[#0d1b1b] focus:ring-primary focus:border-primary" type="text" value="25/12/2023"/>
</div>
</div>
<div class="flex items-center justify-between mt-2">
<label class="text-sm font-medium text-[#0d1b1b] flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">history_toggle_off</span>
                        Dia inteiro
                    </label>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<!-- Time Range (Hidden if All Day is checked, but shown dimmed for design context) -->
<div class="grid grid-cols-2 gap-4 opacity-50 pointer-events-none">
<div class="flex flex-col gap-1">
<label class="text-xs text-secondary">Início</label>
<input class="w-full bg-white border border-border-light rounded-lg p-2 text-sm" type="time" value="08:00"/>
</div>
<div class="flex flex-col gap-1">
<label class="text-xs text-secondary">Fim</label>
<input class="w-full bg-white border border-border-light rounded-lg p-2 text-sm" type="time" value="18:00"/>
</div>
</div>
</div>
<!-- Reason -->
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b]">Motivo</label>
<select class="w-full bg-white border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
<option>Feriado</option>
<option>Manutenção</option>
<option>Ausência Médica</option>
<option>Outro</option>
</select>
</div>
<!-- Notes -->
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b]">Observação <span class="text-secondary font-normal text-xs">(Opcional)</span></label>
<textarea class="w-full bg-white border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 resize-none h-20" placeholder="Detalhes adicionais sobre este bloqueio..."></textarea>
</div>
<!-- Notification -->
<div class="flex items-start gap-2 pt-2">
<input class="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary mt-0.5" id="notify" type="checkbox"/>
<label class="text-sm text-[#0d1b1b] cursor-pointer select-none" for="notify">Notificar recepção e médicos afetados por e-mail.</label>
</div>
</div>
<!-- Footer -->
<div class="px-6 py-4 border-t border-border-light bg-[#f8fcfc] flex justify-end gap-3">
<button class="px-4 py-2 text-sm font-bold text-[#0d1b1b] hover:bg-border-light rounded-lg transition-colors">Cancelar</button>
<button class="px-6 py-2 text-sm font-bold text-primary-content bg-primary hover:bg-[#0fd6d6] rounded-lg shadow-sm transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">check</span>
                Salvar Bloqueio
            </button>
</div>
</div>
</div>`;

export function UiDisponibilidadeBloqueiosPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/disponibilidade-bloqueios" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
