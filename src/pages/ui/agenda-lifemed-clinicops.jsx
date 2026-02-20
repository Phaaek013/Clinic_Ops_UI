import '../../styles/ui/agenda-lifemed-clinicops.css';

const screenHtml = `<!-- Sidebar -->
<aside class="w-64 flex flex-col h-full bg-surface dark:bg-surface-dark border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex-shrink-0 z-20 transition-all duration-300">
<div class="p-6 flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" data-alt="LifeMed Logo with abstract medical cross" style='background-image: none;'></div>
<div class="flex flex-col">
<h1 class="text-[#0d1b1b] dark:text-white text-lg font-bold leading-none">LifeMed</h1>
<p class="text-[#4c9a9a] text-xs font-medium uppercase tracking-wider mt-1">ClinicOps</p>
</div>
</div>
<nav class="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
<a class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#e7f3f3] dark:hover:bg-[#2a3f3f] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white">grid_view</span>
<p class="text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white text-sm font-medium">Dashboard</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 group" href="#">
<span class="material-symbols-outlined text-primary-dark dark:text-primary fill-1">calendar_today</span>
<p class="text-primary-dark dark:text-primary text-sm font-bold">Agenda</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#e7f3f3] dark:hover:bg-[#2a3f3f] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white">group</span>
<p class="text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white text-sm font-medium">Pacientes</p>
</a>
<a class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#e7f3f3] dark:hover:bg-[#2a3f3f] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white">attach_money</span>
<p class="text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white text-sm font-medium">Financeiro</p>
</a>
<div class="h-px bg-[#e7f3f3] dark:bg-[#2a3f3f] my-2"></div>
<a class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#e7f3f3] dark:hover:bg-[#2a3f3f] transition-colors group" href="#">
<span class="material-symbols-outlined text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white">settings</span>
<p class="text-[#4c9a9a] group-hover:text-[#0d1b1b] dark:text-gray-400 dark:group-hover:text-white text-sm font-medium">Configurações</p>
</a>
</nav>
<div class="p-4 mt-auto">
<div class="bg-gradient-to-br from-[#e7f3f3] to-white dark:from-[#2a3f3f] dark:to-[#1a2c2c] p-4 rounded-xl border border-[#e7f3f3] dark:border-[#2a3f3f]">
<div class="flex items-center gap-3 mb-3">
<div class="bg-white p-2 rounded-lg shadow-sm">
<span class="material-symbols-outlined text-primary-dark">support_agent</span>
</div>
<div>
<p class="text-xs font-bold text-[#0d1b1b] dark:text-white">Precisa de ajuda?</p>
<p class="text-[10px] text-[#4c9a9a]">Fale com o suporte</p>
</div>
</div>
<button class="w-full py-2 bg-primary text-[#0d1b1b] text-xs font-bold rounded-lg hover:bg-opacity-90 transition-opacity">
                    Abrir Chat
                </button>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col h-full overflow-hidden relative">
<!-- Header -->
<header class="h-16 bg-surface dark:bg-surface-dark border-b border-[#e7f3f3] dark:border-[#2a3f3f] flex items-center justify-between px-6 flex-shrink-0 z-10">
<div class="flex items-center gap-4">
<button class="lg:hidden text-[#4c9a9a] hover:text-[#0d1b1b]">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="flex flex-col">
<h2 class="text-lg font-bold text-[#0d1b1b] dark:text-white leading-tight">Agenda</h2>
<p class="text-xs text-[#4c9a9a] hidden sm:block">Gerencie os agendamentos da clínica</p>
</div>
</div>
<div class="flex items-center gap-4">
<!-- Search -->
<div class="hidden md:flex items-center bg-[#f8fcfc] dark:bg-[#102222] rounded-lg border border-[#e7f3f3] dark:border-[#2a3f3f] h-10 w-64 px-3 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
<span class="material-symbols-outlined text-[#4c9a9a] text-[20px]">search</span>
<input class="bg-transparent border-none text-sm text-[#0d1b1b] dark:text-white placeholder-[#4c9a9a] focus:ring-0 w-full ml-2" placeholder="Buscar paciente, médico..." type="text"/>
</div>
<div class="h-8 w-px bg-[#e7f3f3] dark:bg-[#2a3f3f] mx-2"></div>
<!-- Actions -->
<button class="relative p-2 text-[#4c9a9a] hover:bg-[#e7f3f3] dark:hover:bg-[#2a3f3f] rounded-lg transition-colors">
<span class="material-symbols-outlined text-[24px]">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1a2c2c]"></span>
</button>
<!-- Profile -->
<button class="flex items-center gap-2 pl-2 hover:bg-[#f8fcfc] dark:hover:bg-[#102222] rounded-full pr-4 py-1 border border-transparent hover:border-[#e7f3f3] dark:hover:border-[#2a3f3f] transition-all">
<div class="size-8 rounded-full bg-cover bg-center" data-alt="User profile picture of a doctor" style='background-image: none;'></div>
<div class="hidden lg:flex flex-col items-start">
<p class="text-xs font-bold text-[#0d1b1b] dark:text-white leading-none">Dr. Ricardo</p>
<p class="text-[10px] text-[#4c9a9a] leading-none mt-1">Admin</p>
</div>
<span class="material-symbols-outlined text-[#4c9a9a] text-[16px] ml-1">expand_more</span>
</button>
</div>
</header>
<!-- Agenda Toolbar -->
<div class="bg-surface dark:bg-surface-dark px-6 py-4 border-b border-[#e7f3f3] dark:border-[#2a3f3f] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 z-10 shadow-sm">
<!-- Date Nav -->
<div class="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
<button class="px-3 py-1.5 text-xs font-bold text-[#0d1b1b] bg-white border border-[#e7f3f3] rounded-md hover:bg-[#f8fcfc] transition-colors shadow-sm">Hoje</button>
<div class="flex items-center gap-1">
<button class="size-8 flex items-center justify-center rounded-full hover:bg-[#e7f3f3] text-[#0d1b1b] transition-colors">
<span class="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<span class="text-lg font-bold text-[#0d1b1b] dark:text-white min-w-[140px] text-center">23 - 27 Out</span>
<button class="size-8 flex items-center justify-center rounded-full hover:bg-[#e7f3f3] text-[#0d1b1b] transition-colors">
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
<!-- View & Actions -->
<div class="flex items-center gap-3 w-full md:w-auto">
<!-- Filters -->
<div class="hidden lg:flex items-center gap-2">
<button class="flex items-center gap-2 px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm font-medium text-[#0d1b1b] dark:text-gray-300 hover:border-primary transition-colors">
<span class="material-symbols-outlined text-[18px] text-[#4c9a9a]">person</span>
                        Dr. House
                        <span class="material-symbols-outlined text-[16px] text-[#4c9a9a] ml-1">expand_more</span>
</button>
<button class="flex items-center gap-2 px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm font-medium text-[#0d1b1b] dark:text-gray-300 hover:border-primary transition-colors">
<span class="material-symbols-outlined text-[18px] text-[#4c9a9a]">door_front</span>
                        Sala 01
                        <span class="material-symbols-outlined text-[16px] text-[#4c9a9a] ml-1">expand_more</span>
</button>
</div>
<div class="h-6 w-px bg-[#e7f3f3] dark:bg-[#2a3f3f] mx-1 hidden lg:block"></div>
<!-- Toggle -->
<div class="bg-[#e7f3f3] dark:bg-[#102222] p-1 rounded-lg flex items-center">
<button class="px-3 py-1.5 rounded-md text-xs font-bold text-[#4c9a9a] hover:text-[#0d1b1b] transition-colors">Dia</button>
<button class="px-3 py-1.5 rounded-md text-xs font-bold bg-white dark:bg-[#2a3f3f] text-[#0d1b1b] dark:text-white shadow-sm transition-all">Semana</button>
</div>
<button class="ml-2 flex items-center gap-2 bg-primary hover:bg-opacity-90 text-[#0d1b1b] px-4 py-2 rounded-lg text-sm font-bold shadow-soft transition-all active:scale-95">
<span class="material-symbols-outlined text-[20px]">add</span>
<span class="hidden sm:inline">Agendar</span>
</button>
</div>
</div>
<!-- Calendar Container -->
<div class="flex-1 overflow-y-auto bg-white dark:bg-[#1a2c2c] relative flex flex-col w-full h-full">
<!-- Week Header (Sticky) -->
<div class="calendar-grid-cols sticky top-0 z-20 bg-white dark:bg-[#1a2c2c] border-b border-[#e7f3f3] dark:border-[#2a3f3f] shadow-sm">
<!-- Time Col Header -->
<div class="h-14 border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex items-end justify-center pb-2">
<span class="text-[10px] font-bold text-[#4c9a9a]">GMT-3</span>
</div>
<!-- Day Headers -->
<div class="h-14 border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#f8fcfc] transition-colors">
<span class="text-xs text-[#4c9a9a] font-medium mb-0.5">SEG</span>
<div class="size-8 rounded-full flex items-center justify-center text-sm font-bold text-[#0d1b1b] dark:text-white group-hover:bg-[#e7f3f3] dark:group-hover:bg-[#2a3f3f]">23</div>
</div>
<div class="h-14 border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex flex-col items-center justify-center bg-[#f0fdfd] dark:bg-[#102222]/50 border-b-2 border-b-primary">
<span class="text-xs text-primary-dark dark:text-primary font-bold mb-0.5">TER</span>
<div class="size-8 rounded-full flex items-center justify-center text-sm font-bold text-white bg-primary shadow-sm">24</div>
</div>
<div class="h-14 border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#f8fcfc] transition-colors">
<span class="text-xs text-[#4c9a9a] font-medium mb-0.5">QUA</span>
<div class="size-8 rounded-full flex items-center justify-center text-sm font-bold text-[#0d1b1b] dark:text-white group-hover:bg-[#e7f3f3] dark:group-hover:bg-[#2a3f3f]">25</div>
</div>
<div class="h-14 border-r border-[#e7f3f3] dark:border-[#2a3f3f] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#f8fcfc] transition-colors">
<span class="text-xs text-[#4c9a9a] font-medium mb-0.5">QUI</span>
<div class="size-8 rounded-full flex items-center justify-center text-sm font-bold text-[#0d1b1b] dark:text-white group-hover:bg-[#e7f3f3] dark:group-hover:bg-[#2a3f3f]">26</div>
</div>
<div class="h-14 flex flex-col items-center justify-center group cursor-pointer hover:bg-[#f8fcfc] transition-colors">
<span class="text-xs text-[#4c9a9a] font-medium mb-0.5">SEX</span>
<div class="size-8 rounded-full flex items-center justify-center text-sm font-bold text-[#0d1b1b] dark:text-white group-hover:bg-[#e7f3f3] dark:group-hover:bg-[#2a3f3f]">27</div>
</div>
</div>
<!-- Scrollable Grid Area -->
<div class="relative calendar-grid-cols min-h-[960px]">
<!-- Current Time Indicator (Red Line) - Positioned absolutely based on time -->
<div class="absolute w-full z-10 pointer-events-none flex items-center" style="top: 340px;"> <!-- Example: 10:something AM -->
<div class="w-[60px] text-right pr-2 text-[10px] font-bold text-red-500">10:45</div>
<div class="flex-1 h-px bg-red-500 relative">
<div class="absolute -top-1 -left-1 size-2 bg-red-500 rounded-full"></div>
</div>
</div>
<!-- Time Column (8am to 6pm) -->
<div class="border-r border-[#e7f3f3] dark:border-[#2a3f3f] bg-[#f8fcfc] dark:bg-[#102222]">
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">08:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">09:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">10:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">11:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">12:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">13:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">14:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">15:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">16:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">17:00</div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] text-[10px] text-[#4c9a9a] font-medium pr-2 pt-2 text-right">18:00</div>
</div>
<!-- Monday Column -->
<div class="relative border-r border-[#e7f3f3] dark:border-[#2a3f3f] group">
<!-- Grid Lines -->
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors relative"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors relative"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors relative"></div>
<!-- Event 1: 10:30 - 11:30 -->
<div class="absolute top-[200px] left-1 right-1 h-[60px] bg-red-50 border-l-4 border-red-400 rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col justify-center">
<div class="flex justify-between items-start">
<span class="text-xs font-bold text-[#0d1b1b] truncate">Maria Oliveira</span>
<span class="material-symbols-outlined text-[14px] text-red-500">cancel</span>
</div>
<p class="text-[10px] text-red-800 truncate">Consulta Rotina</p>
</div>
</div>
<!-- Tuesday Column (Today) -->
<div class="relative border-r border-[#e7f3f3] dark:border-[#2a3f3f] bg-[#fdfdfd] dark:bg-[#1a2c2c] group">
<!-- Empty Slot Placeholders (Interactive) -->
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f0fdfd] transition-colors relative cursor-pointer hover:after:content-['+'] hover:after:absolute hover:after:inset-0 hover:after:flex hover:after:items-center hover:after:justify-center hover:after:text-primary hover:after:text-2xl hover:after:bg-primary/5"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f0fdfd] transition-colors relative cursor-pointer"></div>
<!-- Event 2: 09:00 - 10:00 Confirmed -->
<div class="absolute top-[80px] left-1 right-1 h-[80px] bg-primary/10 border-l-4 border-primary rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all flex flex-col z-10">
<div class="flex justify-between items-start mb-1">
<span class="text-xs font-bold text-[#0d1b1b] dark:text-white truncate">João Silva</span>
<span class="bg-primary text-[#0d1b1b] text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">Conf</span>
</div>
<p class="text-[10px] text-[#4c9a9a] truncate font-medium">Cardiologia • Retorno</p>
<div class="mt-auto flex items-center gap-1 text-[#0d1b1b] dark:text-gray-300">
<span class="material-symbols-outlined text-[12px]">schedule</span>
<span class="text-[10px]">09:00 - 10:00</span>
</div>
</div>
<!-- Event 3: 13:00 - 13:45 Checked In -->
<div class="absolute top-[400px] left-1 right-1 h-[60px] bg-green-50 border-l-4 border-green-500 rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col justify-center z-10">
<div class="flex justify-between items-start">
<span class="text-xs font-bold text-[#0d1b1b] truncate">Ana Costa</span>
<span class="material-symbols-outlined text-[16px] text-green-600">check_circle</span>
</div>
<p class="text-[10px] text-green-800 truncate">Exames Gerais</p>
</div>
<!-- Ghost/Drag Preview (Conflict) -->
<div class="absolute top-[650px] left-1 right-1 h-[60px] bg-red-100/50 border-2 border-dashed border-red-400 rounded-md p-2 flex items-center justify-center opacity-70 z-0">
<span class="text-xs font-bold text-red-600 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">warning</span>
                            Conflito
                        </span>
</div>
<!-- Grid filler -->
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f]"></div>
</div>
<!-- Wednesday Column -->
<div class="relative border-r border-[#e7f3f3] dark:border-[#2a3f3f] group">
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<!-- Event 4 -->
<div class="absolute top-[160px] left-1 right-1 h-[90px] bg-orange-50 border-l-4 border-orange-400 rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col">
<div class="flex justify-between items-start mb-1">
<span class="text-xs font-bold text-[#0d1b1b] truncate">Roberto M.</span>
<span class="material-symbols-outlined text-[14px] text-orange-500">hourglass_empty</span>
</div>
<p class="text-[10px] text-orange-800 truncate font-medium">Primeira Consulta</p>
<div class="mt-auto flex items-center gap-1 text-orange-800">
<span class="material-symbols-outlined text-[12px]">person</span>
<span class="text-[10px]">Dr. Ricardo</span>
</div>
</div>
</div>
<!-- Thursday Column -->
<div class="relative border-r border-[#e7f3f3] dark:border-[#2a3f3f] group">
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<!-- Empty state illustration if needed, or just grid -->
</div>
<!-- Friday Column -->
<div class="relative group">
<div class="h-20 border-b border-[#e7f3f3] dark:border-[#2a3f3f] group-hover:bg-[#f8fcfc] transition-colors"></div>
<!-- Event 5 -->
<div class="absolute top-[320px] left-1 right-1 h-[40px] bg-blue-50 border-l-4 border-blue-400 rounded-md p-2 shadow-sm cursor-pointer hover:shadow-md transition-all flex flex-col justify-center">
<div class="flex justify-between items-start">
<span class="text-xs font-bold text-[#0d1b1b] truncate">Equipe</span>
</div>
<p class="text-[9px] text-blue-800 truncate">Reunião Interna</p>
</div>
</div>
</div>
</div>
</main>
<!-- Modal: New Appointment (Hidden by default, showing structure) -->
<!-- Remove 'hidden' class to see the modal overlay -->
<div class="hidden fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b1b]/60 backdrop-blur-sm" id="new-appointment-modal">
<div class="bg-white dark:bg-[#1a2c2c] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
<div class="px-6 py-4 border-b border-[#e7f3f3] dark:border-[#2a3f3f] flex items-center justify-between">
<h3 class="text-lg font-bold text-[#0d1b1b] dark:text-white">Novo Agendamento</h3>
<button class="text-[#4c9a9a] hover:text-[#0d1b1b] dark:hover:text-white">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
<!-- Patient Search -->
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Paciente</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-[#4c9a9a]">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm" placeholder="Buscar por nome ou CPF..." type="text"/>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Profissional</label>
<select class="w-full px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm">
<option>Dr. Ricardo</option>
<option>Dr. House</option>
</select>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Serviço</label>
<select class="w-full px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm">
<option>Consulta Geral</option>
<option>Cardiologia</option>
<option>Exame de Sangue</option>
</select>
</div>
</div>
<div class="grid grid-cols-3 gap-4">
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Data</label>
<input class="w-full px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm" type="date" value="2023-10-24"/>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Hora</label>
<input class="w-full px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm" type="time" value="09:00"/>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-sm font-bold text-[#0d1b1b] dark:text-gray-300">Duração</label>
<select class="w-full px-3 py-2 bg-[#f8fcfc] dark:bg-[#102222] border border-[#e7f3f3] dark:border-[#2a3f3f] rounded-lg text-sm">
<option>30 min</option>
<option>45 min</option>
<option>60 min</option>
</select>
</div>
</div>
<div class="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-900/50">
<input class="rounded text-primary focus:ring-primary border-gray-300" id="waitlist" type="checkbox"/>
<label class="text-sm font-medium text-yellow-800 dark:text-yellow-200" for="waitlist">Paciente deseja adiantar (Lista de Espera)</label>
</div>
</div>
<div class="p-6 border-t border-[#e7f3f3] dark:border-[#2a3f3f] bg-[#f8fcfc] dark:bg-[#102222] flex justify-end gap-3">
<button class="px-4 py-2 text-sm font-bold text-[#4c9a9a] hover:text-[#0d1b1b] transition-colors">Cancelar</button>
<button class="px-6 py-2 bg-primary text-[#0d1b1b] text-sm font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Salvar Agendamento</button>
</div>
</div>
</div>
<!-- Details Card (Interactive Overlay) - Simulating "Open" state for a clicked event -->
<div class="absolute top-[160px] left-[380px] z-30 w-[320px] bg-white dark:bg-[#1a2c2c] rounded-xl shadow-2xl border border-[#e7f3f3] dark:border-[#2a3f3f] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
<div class="bg-primary/10 p-4 border-b border-primary/20 flex justify-between items-start">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-[#1a2c2c]" data-alt="Patient avatar" style='background-image: none;'></div>
<div>
<h4 class="text-base font-bold text-[#0d1b1b] dark:text-white leading-tight">João Silva</h4>
<span class="text-[10px] font-bold uppercase tracking-wider text-primary-dark dark:text-primary">Convênio Unimed</span>
</div>
</div>
<button class="size-6 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[18px] text-[#0d1b1b] dark:text-white">close</span>
</button>
</div>
<div class="p-4 flex flex-col gap-3">
<div class="flex items-center gap-2 text-sm text-[#0d1b1b] dark:text-gray-300">
<span class="material-symbols-outlined text-[#4c9a9a]">medical_services</span>
<span class="font-medium">Cardiologia • Retorno</span>
</div>
<div class="flex items-center gap-2 text-sm text-[#0d1b1b] dark:text-gray-300">
<span class="material-symbols-outlined text-[#4c9a9a]">calendar_month</span>
<span class="font-medium">Terça, 24 Out • 09:00 - 10:00</span>
</div>
<div class="flex items-center gap-2 text-sm text-[#0d1b1b] dark:text-gray-300">
<span class="material-symbols-outlined text-[#4c9a9a]">stethoscope</span>
<span class="font-medium">Dr. Ricardo</span>
</div>
<div class="h-px bg-[#e7f3f3] dark:bg-[#2a3f3f] my-1"></div>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center gap-1.5 py-2 px-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-xs font-bold transition-colors">
<span class="material-symbols-outlined text-[16px]">check</span> Confirmar
                </button>
<button class="flex items-center justify-center gap-1.5 py-2 px-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold transition-colors">
<span class="material-symbols-outlined text-[16px]">login</span> Check-in
                </button>
<button class="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#f8fcfc] hover:bg-[#e7f3f3] text-[#0d1b1b] border border-[#e7f3f3] rounded-lg text-xs font-bold transition-colors">
<span class="material-symbols-outlined text-[16px]">edit_calendar</span> Reagendar
                </button>
<button class="flex items-center justify-center gap-1.5 py-2 px-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg text-xs font-bold transition-colors">
<span class="material-symbols-outlined text-[16px]">cancel</span> Cancelar
                </button>
</div>
<button class="w-full mt-1 flex items-center justify-center gap-2 text-xs font-bold text-[#4c9a9a] hover:text-primary transition-colors py-1">
<span class="material-symbols-outlined text-[16px]">print</span>
                Imprimir Ficha
            </button>
</div>
</div>`;

export function UiAgendaLifemedClinicopsPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/agenda-lifemed-clinicops" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
