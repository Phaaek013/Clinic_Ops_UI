import '../../styles/ui/agendar-conta-passo-4-5.css';

export function AgendarContaPasso45() {
  return (
    <div className="ui-page ui-agendar-conta-passo-4-5 bg-background-light dark:bg-background-dark font-display text-text-main dark:text-gray-100 flex flex-col min-h-screen antialiased selection:bg-primary selection:text-text-main">
{/*Top Navigation*/}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-6 lg:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-4 text-text-main dark:text-white">
<div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-2xl">local_hospital</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LifeMed ClinicOps</h2>
</div>
<div className="hidden lg:flex flex-1 justify-end gap-8">
<div className="flex items-center gap-9">
<a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Início</a>
<a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Especialidades</a>
<a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Corpo Clínico</a>
<a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Contato</a>
</div>
</div>
<div className="lg:hidden">
<button className="p-2 text-text-main dark:text-white">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6 pb-24">
{/*Breadcrumbs*/}
<nav className="flex flex-wrap gap-2 py-2 mb-4 text-sm">
<a className="text-teal-600 dark:text-primary font-medium hover:underline" href="#">Início</a>
<span className="text-gray-400">/</span>
<span className="text-text-main dark:text-white font-medium">Agendar</span>
</nav>
{/*Page Header*/}
<div className="flex flex-col gap-2 mb-8">
<h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main dark:text-white">Agendar</h1>
<p className="text-text-muted dark:text-gray-400 text-base">Identifique-se para garantir seu horário com segurança.</p>
</div>
{/*Stepper*/}
<div className="w-full mb-10 overflow-x-auto pb-2">
<div className="min-w-[600px] flex items-center justify-between relative">
{/*Line Background*/}
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10 rounded-full"></div>
{/*Step 1: Done*/}
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="size-8 rounded-full bg-primary text-text-main flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<span className="text-xs font-bold text-teal-700 dark:text-primary">Especialidade</span>
</div>
{/*Step 2: Done*/}
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="size-8 rounded-full bg-primary text-text-main flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<span className="text-xs font-bold text-teal-700 dark:text-primary">Profissional</span>
</div>
{/*Step 3: Done*/}
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="size-8 rounded-full bg-primary text-text-main flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<span className="text-xs font-bold text-teal-700 dark:text-primary">Data e Hora</span>
</div>
{/*Step 4: Active*/}
<div className="flex flex-col items-center gap-2">
<div className="size-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark shadow-lg scale-110">
                        4
                    </div>
<span className="text-xs font-bold text-text-main dark:text-white">Identificação</span>
</div>
{/*Step 5: Disabled*/}
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center font-bold ring-4 ring-background-light dark:ring-background-dark">
                        5
                    </div>
<span className="text-xs font-medium text-slate-500">Confirmação</span>
</div>
</div>
</div>
{/*Layout Grid*/}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
{/*Left Column: Authentication Form*/}
<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
{/*Tabs*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl p-1 shadow-sm border border-slate-200 dark:border-slate-800 flex">
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold text-text-main bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 transition-all">
                        Criar conta
                    </button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-medium text-slate-500 hover:text-text-main dark:hover:text-white transition-all">
                        Entrar
                    </button>
</div>
{/*Content Area*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-card border border-slate-200 dark:border-slate-800">
<div className="mb-6">
<h3 className="text-xl font-bold text-text-main dark:text-white">Nova conta</h3>
<p className="text-sm text-text-muted mt-1">Preencha seus dados para criar seu perfil de paciente.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5 md:col-span-2">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="name">Nome Completo</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="name" placeholder="Ex: Maria Silva" type="text" />
</div>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="email">E-mail</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="email" placeholder="seu@email.com" type="email" />
</div>
{/*Example Error Message (Hidden by default)*/}
<p className="hidden text-xs text-red-500 flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px]">error</span>
                                    Este email já está em uso.
                                </p>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="phone">Celular <span className="text-slate-400 font-normal">(Opcional)</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">smartphone</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="phone" placeholder="(00) 00000-0000" type="tel" />
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="birthdate">Data de Nascimento</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="birthdate" type="date" />
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="password">Senha</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="password" placeholder="••••••••" type="password" />
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-text-main dark:text-gray-200" htmlFor="confirm-password">Confirmar Senha</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">lock_reset</span>
</div>
<input className="block w-full pl-10 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-text-main dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400" id="confirm-password" placeholder="••••••••" type="password" />
</div>
</div>
</div>
<div className="pt-2">
<div className="flex items-start">
<div className="flex h-6 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary bg-slate-50 dark:bg-slate-800 dark:border-slate-600" id="terms" name="terms" type="checkbox" />
</div>
<div className="ml-3 text-sm leading-6">
<label className="font-medium text-text-main dark:text-gray-200" htmlFor="terms">Eu concordo com os Termos de Uso</label>
<p className="text-slate-500 dark:text-slate-400">Li e aceito a <a className="text-teal-600 hover:text-teal-500 underline" href="#">Política de Privacidade</a> e o processamento dos meus dados de saúde.</p>
</div>
</div>
</div>
</form>
</div>
{/*Trust Section*/}
<div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-white dark:bg-slate-800 rounded-full text-teal-600 shadow-sm">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<p className="text-sm font-bold text-text-main dark:text-white">Seus dados estão seguros</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Seguimos rigorosamente a LGPD para proteção médica.</p>
</div>
</div>
<a className="text-sm font-medium text-teal-700 dark:text-primary hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">help</span>
                        Precisa de ajuda?
                    </a>
</div>
</div>
{/*Right Column: Sticky Summary*/}
<div className="lg:col-span-5 xl:col-span-4 relative h-full">
<div className="sticky top-24 space-y-4">
<div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-floating border border-slate-100 dark:border-slate-700 overflow-hidden">
{/*Card Header*/}
<div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
<h3 className="text-base font-bold text-text-main dark:text-white">Resumo do agendamento</h3>
<span className="bg-white dark:bg-slate-700 text-teal-700 dark:text-primary text-[10px] uppercase font-bold px-2 py-1 rounded border border-teal-100 dark:border-slate-600">Passo 4/5</span>
</div>
{/*Card Content*/}
<div className="p-6 flex flex-col gap-6">
{/*Date & Time Large*/}
<div className="flex items-center gap-4">
<div className="bg-primary/10 rounded-xl p-3 text-center min-w-[70px]">
<span className="block text-xs font-bold text-teal-700 dark:text-primary uppercase tracking-wide">Out</span>
<span className="block text-2xl font-bold text-text-main dark:text-white">14</span>
</div>
<div>
<div className="flex items-center gap-2 text-text-main dark:text-white font-bold text-lg">
<span className="material-symbols-outlined text-primary">schedule</span>
                                        10:30
                                    </div>
<span className="text-sm text-slate-500">Segunda-feira</span>
</div>
</div>
<hr className="border-dashed border-slate-200 dark:border-slate-700" />
{/*Details List*/}
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-slate-400 mt-0.5">medical_services</span>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Especialidade</p>
<p className="text-sm font-semibold text-text-main dark:text-white">Consulta Cardiológica</p>
<p className="text-xs text-slate-400">Duração aprox. 45 min</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="size-8 rounded-full overflow-hidden bg-slate-200 mt-0.5 flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Dr. Roberto Silva smiling professionally in a white coat" src="/avatar.svg" />
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Profissional</p>
<p className="text-sm font-semibold text-text-main dark:text-white">Dr. Roberto Silva</p>
<p className="text-xs text-slate-400">Cardiologista • CRM 123456</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-slate-400 mt-0.5">location_on</span>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Local</p>
<p className="text-sm font-semibold text-text-main dark:text-white">Unidade Centro - Sala 302</p>
<p className="text-xs text-slate-400">Av. Paulista, 1000 - São Paulo</p>
</div>
</div>
</div>
</div>
{/*Footer Alert*/}
<div className="bg-amber-50 dark:bg-amber-900/20 px-6 py-3 border-t border-amber-100 dark:border-amber-800/30 flex items-start gap-2">
<span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">info</span>
<p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                                Este horário está pré-reservado por <span className="font-bold">09:54</span> minutos. Complete o cadastro para confirmar.
                            </p>
</div>
</div>
{/*Map mini (Visual candy)*/}
<div className="rounded-xl overflow-hidden h-32 relative shadow-card group">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Top down view of a city map with streets and buildings" data-location="São Paulo" src="/avatar.svg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
<p className="text-white text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">map</span> Ver no mapa
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>
{/*Fixed Footer Action Bar*/}
<div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 px-6 py-4">
<div className="max-w-[1200px] mx-auto flex items-center justify-between">
<button className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                Voltar
            </button>
<div className="flex items-center gap-4">
<span className="text-xs text-slate-400 hidden sm:block">Você receberá um email de confirmação.</span>
<button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-text-main font-bold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed">
                    Criar conta e continuar
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</div>
    </div>
  );
}
