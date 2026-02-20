import '../../styles/ui/novo-registro-de-anamnese-hub-de-modelo-p02.css';

const screenHtml = `<header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 sticky top-0 z-30">
<div class="flex items-center gap-4">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons text-white">medical_services</span>
</div>
<h1 class="font-bold text-lg tracking-tight">ClinicOps <span class="text-slate-400 font-normal">| Vortix</span></h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
<span class="material-icons">notifications_none</span>
</button>
<div class="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
<img alt="Avatar do profissional" class="w-full h-full object-cover" src="/placeholder.svg"/>
</div>
</div>
</header>
<div class="flex flex-1">
<main class="flex-1 p-8 pb-32 max-w-7xl mx-auto w-full">
<div class="flex flex-col gap-2 mb-8">
<nav class="flex items-center gap-2 text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">
<span>Pacientes</span>
<span class="material-icons text-sm">chevron_right</span>
<span>Anamnese Segura</span>
<span class="material-icons text-sm">chevron_right</span>
<span class="text-primary">Novo registro</span>
</nav>
<div class="flex flex-wrap items-center justify-between gap-4">
<div class="flex flex-col">
<div class="flex items-center gap-3">
<h2 class="text-2xl font-bold tracking-tight">Novo registro de Anamnese Segura</h2>
<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/50 uppercase tracking-wider">Rascunho</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Inicie um novo registro selecionando o modelo de formulário adequado.</p>
</div>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
<div class="lg:col-span-2 flex flex-wrap gap-3 items-center">
<div class="bg-white dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<div class="text-xs">
<span class="text-slate-400 block uppercase font-bold text-[9px] mb-0.5">Paciente</span>
<span class="font-semibold">Ricardo S. Oliveira | ID: 9942</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm">
<span class="material-icons text-slate-400 text-lg">event</span>
<div class="text-xs">
<span class="text-slate-400 block uppercase font-bold text-[9px] mb-0.5">Agendamento</span>
<span class="font-semibold">15 Set 2023 | Consulta Geral</span>
</div>
</div>
</div>
<div class="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 flex items-center gap-3">
<span class="material-symbols-outlined text-primary">lock</span>
<div class="text-sm">
<span class="font-bold block text-slate-800 dark:text-primary">Dados sensíveis</span>
<span class="text-xs text-slate-600 dark:text-slate-300">Acesso auditado para segurança e conformidade (LGPD)</span>
</div>
</div>
</div>
<div class="flex items-center justify-center mb-12">
<div class="flex items-center w-full max-w-xl">
<div class="flex flex-col items-center flex-1 relative">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 shadow-lg shadow-primary/20">1</div>
<span class="text-sm font-bold mt-2 text-primary">Modelo</span>
<div class="absolute top-5 left-1/2 w-full h-1 bg-primary/20"></div>
</div>
<div class="flex flex-col items-center flex-1 relative">
<div class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-bold z-10">2</div>
<span class="text-sm font-medium mt-2 text-slate-400">Formulário</span>
</div>
</div>
</div>
<div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
<div class="xl:col-span-3 space-y-8">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-12 flex flex-col items-center justify-center text-center">
<div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-slate-400 text-3xl font-light">description</span>
</div>
<h3 class="text-lg font-bold mb-2">Nenhum modelo selecionado</h3>
<p class="text-slate-500 max-w-sm mb-6">Escolha um dos modelos sugeridos abaixo ou busque por um modelo específico para continuar.</p>
<button class="bg-primary hover:opacity-90 transition-opacity text-slate-900 font-bold px-8 py-3 rounded-lg flex items-center gap-2">
<span class="material-symbols-outlined text-xl">search</span>
                            Escolher modelo
                        </button>
</div>
<div class="space-y-4">
<h4 class="font-bold text-sm uppercase tracking-wider text-slate-400">Modelos sugeridos</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl hover:border-primary/50 cursor-pointer transition-all group shadow-sm flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary">assignment</span>
</div>
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-bold">POPULAR</span>
</div>
<h5 class="font-bold text-sm mb-1">Anamnese Geral</h5>
<p class="text-xs text-slate-500 mb-6 line-clamp-2">Padrão estruturado para consultas iniciais de clínica médica.</p>
<div class="mt-auto">
<button class="w-full py-2 mb-4 text-[11px] font-bold text-primary border border-primary/30 rounded hover:bg-primary hover:text-slate-900 transition-all uppercase tracking-wider">Selecionar</button>
<div class="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-3">
<span>24 campos</span>
<span>Ativo</span>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl hover:border-primary/50 cursor-pointer transition-all group shadow-sm flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary">favorite</span>
</div>
</div>
<h5 class="font-bold text-sm mb-1">Cardiologia</h5>
<p class="text-xs text-slate-500 mb-6 line-clamp-2">Focado em histórico cardiovascular e fatores de risco específicos.</p>
<div class="mt-auto">
<button class="w-full py-2 mb-4 text-[11px] font-bold text-primary border border-primary/30 rounded hover:bg-primary hover:text-slate-900 transition-all uppercase tracking-wider">Selecionar</button>
<div class="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-3">
<span>32 campos</span>
<span>Ativo</span>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl hover:border-primary/50 cursor-pointer transition-all group shadow-sm flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary">history</span>
</div>
</div>
<h5 class="font-bold text-sm mb-1">Retorno</h5>
<p class="text-xs text-slate-500 mb-6 line-clamp-2">Acompanhamento simplificado para evolução de tratamento.</p>
<div class="mt-auto">
<button class="w-full py-2 mb-4 text-[11px] font-bold text-primary border border-primary/30 rounded hover:bg-primary hover:text-slate-900 transition-all uppercase tracking-wider">Selecionar</button>
<div class="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-3">
<span>12 campos</span>
<span>Ativo</span>
</div>
</div>
</div>
</div>
</div>
</div>
<aside class="space-y-6">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h4 class="font-bold flex items-center gap-2 mb-4 text-sm text-slate-800 dark:text-slate-100">
<span class="material-symbols-outlined text-primary text-lg">verified_user</span>
                            Segurança do módulo
                        </h4>
<ul class="space-y-4">
<li class="flex gap-3">
<div class="w-5 h-5 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
<span class="material-icons text-[12px] text-primary font-bold">check</span>
</div>
<div class="text-sm">
<p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Criptografia em repouso e em trânsito</p>
</div>
</li>
<li class="flex gap-3">
<div class="w-5 h-5 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
<span class="material-icons text-[12px] text-primary font-bold">check</span>
</div>
<div class="text-sm">
<p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Acesso por perfil</p>
</div>
</li>
<li class="flex gap-3">
<div class="w-5 h-5 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
<span class="material-icons text-[12px] text-primary font-bold">check</span>
</div>
<div class="text-sm">
<p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Auditoria de acesso e edição</p>
</div>
</li>
</ul>
</div>
<div class="bg-slate-900 dark:bg-slate-900/50 rounded-xl p-5 text-white border border-slate-800">
<div class="flex items-center gap-3 mb-3">
<span class="material-symbols-outlined text-primary">help</span>
<h5 class="font-bold text-sm">Precisa de ajuda?</h5>
</div>
<p class="text-slate-400 text-xs mb-4 leading-relaxed">Não encontrou o modelo ideal para este paciente? Solicite ao administrador da unidade.</p>
<button class="w-full py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded transition-colors uppercase tracking-wider">
                            Suporte ClinicOps
                        </button>
</div>
</aside>
</div>
</main>
</div>
<footer class="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 z-40">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<div class="flex items-center gap-2 text-slate-400 text-xs italic">
<span class="material-symbols-outlined text-sm">info</span>
<span>O rascunho será criado ao iniciar o formulário.</span>
</div>
<div class="flex items-center gap-3">
<button class="px-6 py-2.5 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    Cancelar
                </button>
<button class="px-8 py-2.5 rounded-lg font-bold bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed flex items-center gap-2" disabled="">
                    Continuar para formulário
                    <span class="material-icons text-sm">arrow_forward</span>
</button>
</div>
</div>
</footer>`;

export function UiNovoRegistroDeAnamneseHubDeModeloP02Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/novo-registro-de-anamnese-hub-de-modelo-p02" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
