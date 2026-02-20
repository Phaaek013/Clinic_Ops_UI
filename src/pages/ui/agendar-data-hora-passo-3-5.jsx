import '../../styles/ui/agendar-data-hora-passo-3-5.css';

const screenHtml = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-surface-light/80 backdrop-blur-md px-10 py-3 dark:bg-surface-dark/90 dark:border-white/5">
<div class="flex items-center gap-4 text-text-main dark:text-white">
<div class="size-6 text-primary">
<span class="material-symbols-outlined text-3xl">local_hospital</span>
</div>
<h2 class="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">LifeMed ClinicOps</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="hidden md:flex items-center gap-9">
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Agendamentos</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Pacientes</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Médicos</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Configurações</a>
</nav>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 cursor-pointer hover:border-primary transition-colors" data-alt="User profile picture placeholder" style='background-image: none;'></div>
</div>
</header>
<main class="flex min-h-screen flex-col items-center pb-24">
<!-- Breadcrumbs & Header Container -->
<div class="w-full max-w-[1100px] px-4 pt-8">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 mb-6 text-sm">
<a class="text-text-secondary hover:text-primary transition-colors font-medium" href="#">Início</a>
<span class="text-text-secondary font-medium">/</span>
<span class="text-text-main dark:text-white font-medium">Agendar</span>
</div>
<!-- Page Heading -->
<div class="flex flex-col gap-2 mb-8">
<h1 class="text-text-main dark:text-white text-3xl md:text-4xl font-black tracking-tight">Agendar</h1>
<p class="text-text-secondary dark:text-gray-400 text-base md:text-lg">Escolha o melhor dia e horário para seu atendimento.</p>
</div>
<!-- Progress Bar (Stepper) -->
<div class="mb-10 w-full">
<div class="flex flex-col gap-3">
<div class="flex justify-between items-end">
<p class="text-text-main dark:text-white text-sm font-bold">Passo 3 de 5</p>
<span class="text-text-secondary dark:text-gray-500 text-xs font-semibold uppercase tracking-wider">Data &amp; Hora</span>
</div>
<div class="relative h-2 w-full rounded-full bg-border-light dark:bg-white/10 overflow-hidden">
<!-- Step 1 & 2 completed, Step 3 active (roughly 60%) -->
<div class="absolute top-0 left-0 h-full w-[60%] rounded-full bg-primary transition-all duration-500 ease-out"></div>
</div>
</div>
</div>
</div>
<!-- Two Column Layout Content -->
<div class="w-full max-w-[1100px] px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Column: Selection (Calendar & Slots) -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- Selected Professional Context Card -->
<div class="flex items-center justify-between gap-4 rounded-xl border border-border-light bg-surface-light p-4 shadow-sm dark:bg-surface-dark dark:border-white/5 transition-all hover:border-primary/30">
<div class="flex items-center gap-4">
<div class="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-border-light dark:border-white/10" data-alt="Photo of Dr. Silva" style='background-image: none;'></div>
<div class="flex flex-col">
<p class="text-text-main dark:text-white text-base font-bold line-clamp-1">Cardiologia • Dr. Silva</p>
<div class="flex items-center gap-1 text-text-secondary dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-[16px]">schedule</span>
<span>30 min estimado</span>
</div>
</div>
</div>
<button class="text-sm font-semibold text-primary hover:text-primary-hover px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
                        Trocar
                    </button>
</div>
<!-- Calendar Section -->
<div class="rounded-2xl border border-border-light bg-surface-light p-6 shadow-sm dark:bg-surface-dark dark:border-white/5">
<div class="flex flex-col md:flex-row gap-8">
<!-- Calendar Picker -->
<div class="flex-1 max-w-sm mx-auto md:mx-0">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold text-text-main dark:text-white">Março 2024</h3>
<div class="flex gap-2">
<button class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-background-light dark:hover:bg-white/5 text-text-secondary transition-colors">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-background-light dark:hover:bg-white/5 text-text-secondary transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Days Header -->
<div class="grid grid-cols-7 mb-2 text-center">
<span class="text-xs font-semibold text-text-secondary uppercase">D</span>
<span class="text-xs font-semibold text-text-secondary uppercase">S</span>
<span class="text-xs font-semibold text-text-secondary uppercase">T</span>
<span class="text-xs font-semibold text-text-secondary uppercase">Q</span>
<span class="text-xs font-semibold text-text-secondary uppercase">Q</span>
<span class="text-xs font-semibold text-text-secondary uppercase">S</span>
<span class="text-xs font-semibold text-text-secondary uppercase">S</span>
</div>
<!-- Calendar Grid -->
<div class="grid grid-cols-7 gap-y-2 text-center text-sm">
<!-- Disabled past/empty days -->
<span class="py-2 text-gray-300 dark:text-gray-700">25</span>
<span class="py-2 text-gray-300 dark:text-gray-700">26</span>
<span class="py-2 text-gray-300 dark:text-gray-700">27</span>
<span class="py-2 text-gray-300 dark:text-gray-700">28</span>
<span class="py-2 text-gray-300 dark:text-gray-700">29</span>
<span class="py-2">1</span>
<span class="py-2">2</span>
<span class="py-2">3</span>
<span class="py-2">4</span>
<span class="py-2">5</span>
<span class="py-2">6</span>
<span class="py-2">7</span>
<span class="py-2">8</span>
<span class="py-2">9</span>
<span class="py-2">10</span>
<span class="py-2">11</span>
<!-- Selected Day -->
<button class="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-text-main font-bold shadow-md ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-surface-dark">12</button>
<span class="py-2">13</span>
<span class="py-2">14</span>
<span class="py-2">15</span>
<span class="py-2">16</span>
<span class="py-2">17</span>
<span class="py-2">18</span>
<span class="py-2">19</span>
<span class="py-2">20</span>
<span class="py-2">21</span>
<span class="py-2">22</span>
<span class="py-2">23</span>
<span class="py-2">24</span>
<span class="py-2">25</span>
<span class="py-2">26</span>
<span class="py-2">27</span>
<span class="py-2">28</span>
<span class="py-2">29</span>
<span class="py-2">30</span>
</div>
<button class="mt-6 w-full text-center text-sm font-medium text-primary hover:underline">
                                Próximo horário disponível
                            </button>
</div>
<!-- Divider for mobile/desktop -->
<div class="hidden md:block w-px bg-border-light dark:bg-white/10"></div>
<div class="block md:hidden h-px w-full bg-border-light dark:bg-white/10"></div>
<!-- Time Slots Area -->
<div class="flex-1 flex flex-col">
<div class="flex items-center justify-between mb-4">
<h4 class="font-bold text-text-main dark:text-white">Terça, 12 de Março</h4>
<span class="text-xs font-medium text-text-secondary bg-background-light dark:bg-white/5 px-2 py-1 rounded">GMT-3</span>
</div>
<!-- Time Filters (Morning/Afternoon) -->
<div class="flex gap-2 mb-4">
<button class="text-xs font-semibold px-3 py-1.5 rounded-full bg-text-main text-white dark:bg-white dark:text-text-main">Manhã</button>
<button class="text-xs font-semibold px-3 py-1.5 rounded-full bg-background-light text-text-secondary hover:bg-border-light dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 transition-colors">Tarde</button>
</div>
<!-- Slots Grid -->
<div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">08:00</button>
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">08:30</button>
<!-- Selected Slot -->
<button class="relative border-2 border-primary bg-primary/10 text-primary-darker py-2 rounded-lg text-sm font-bold shadow-sm dark:text-primary">
                                    09:00
                                    <span class="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-black">
<span class="material-symbols-outlined text-[10px] font-bold">check</span>
</span>
</button>
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">09:30</button>
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">10:00</button>
<!-- Disabled Slot -->
<button class="border border-transparent bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-gray-600 py-2 rounded-lg text-sm font-medium cursor-not-allowed decoration-slice line-through opacity-60" disabled="">10:30</button>
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">11:00</button>
<button class="border border-border-light bg-surface-light dark:bg-surface-dark dark:border-white/10 hover:border-primary text-text-main dark:text-gray-200 py-2 rounded-lg text-sm font-medium transition-all">11:30</button>
</div>
<div class="mt-6 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 flex items-start gap-3">
<span class="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-sm mt-0.5">info</span>
<p class="text-xs text-yellow-800 dark:text-yellow-200 leading-relaxed">Alta procura para este dia. Recomendamos concluir o agendamento em até 5 minutos para garantir seu horário.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Sticky Summary -->
<div class="lg:col-span-4 relative">
<div class="sticky top-24 rounded-2xl border border-border-light bg-surface-light p-6 shadow-sm dark:bg-surface-dark dark:border-white/5">
<h3 class="text-lg font-bold text-text-main dark:text-white mb-6 border-b border-border-light dark:border-white/5 pb-4">Resumo do agendamento</h3>
<div class="flex flex-col gap-6">
<!-- Service Info -->
<div class="flex items-start gap-3">
<div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-xl">medical_services</span>
</div>
<div>
<p class="text-sm font-medium text-text-secondary dark:text-gray-400">Serviço</p>
<p class="text-base font-bold text-text-main dark:text-white">Cardiologia Check-up</p>
<p class="text-xs text-text-secondary dark:text-gray-500 mt-1">Presencial</p>
</div>
</div>
<!-- Professional Info -->
<div class="flex items-start gap-3">
<div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-xl">person</span>
</div>
<div>
<p class="text-sm font-medium text-text-secondary dark:text-gray-400">Profissional</p>
<p class="text-base font-bold text-text-main dark:text-white">Dr. Silva</p>
<p class="text-xs text-text-secondary dark:text-gray-500 mt-1">CRM/SP 123456</p>
</div>
</div>
<!-- Date & Time Info (Active Step) -->
<div class="flex items-start gap-3 rounded-lg bg-background-light dark:bg-white/5 p-3 border border-border-light dark:border-white/5">
<div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary dark:bg-surface-dark">
<span class="material-symbols-outlined text-xl">calendar_today</span>
</div>
<div>
<p class="text-sm font-medium text-text-secondary dark:text-gray-400">Data &amp; Hora</p>
<p class="text-base font-bold text-text-main dark:text-white">12 de Março, 09:00</p>
<p class="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">check_circle</span>
                                    Disponível
                                </p>
</div>
</div>
<!-- Location Info -->
<div class="flex items-start gap-3">
<div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-xl">location_on</span>
</div>
<div>
<p class="text-sm font-medium text-text-secondary dark:text-gray-400">Local</p>
<p class="text-base font-bold text-text-main dark:text-white">Unidade Paulista</p>
<p class="text-xs text-text-secondary dark:text-gray-500 mt-1">Av. Paulista, 1000 - Sala 304</p>
</div>
</div>
</div>
<div class="mt-8 pt-4 border-t border-border-light dark:border-white/5">
<div class="flex justify-between items-center mb-2">
<span class="text-sm text-text-secondary dark:text-gray-400">Valor da consulta</span>
<span class="text-base font-bold text-text-main dark:text-white">R$ 350,00</span>
</div>
<p class="text-xs text-text-secondary dark:text-gray-500 text-right">Pagamento no próximo passo</p>
</div>
</div>
</div>
</div>
<!-- Sticky Footer for Actions -->
<div class="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-border-light dark:bg-surface-dark/90 dark:border-white/5 p-4 z-40">
<div class="max-w-[1100px] mx-auto flex items-center justify-between">
<button class="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-light hover:bg-background-light text-text-main font-bold transition-all dark:border-white/10 dark:text-white dark:hover:bg-white/5">
<span class="material-symbols-outlined text-lg">arrow_back</span>
                    Voltar
                </button>
<button class="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary-hover text-text-main font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none">
                    Continuar
                    <span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</main>`;

export function UiAgendarDataHoraPasso35Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/agendar-data-hora-passo-3-5" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
