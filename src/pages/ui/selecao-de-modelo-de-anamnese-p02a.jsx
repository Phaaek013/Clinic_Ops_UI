import '../../styles/ui/selecao-de-modelo-de-anamnese-p02a.css';

const screenHtml = `<aside class="w-20 lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span class="material-icons-round text-slate-900">analytics</span>
</div>
<span class="font-bold text-xl tracking-tight hidden lg:block">ClinicOps</span>
</div>
<nav class="flex-1 px-4 space-y-2 mt-4">
<div class="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span class="material-icons-round">dashboard</span>
<span class="font-medium hidden lg:block">Dashboard</span>
</div>
<div class="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-lg cursor-pointer">
<span class="material-icons-round text-primary">person</span>
<span class="font-bold hidden lg:block">Pacientes</span>
</div>
<div class="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span class="material-icons-round">calendar_today</span>
<span class="font-medium hidden lg:block">Agenda</span>
</div>
<div class="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span class="material-icons-round">settings</span>
<span class="font-medium hidden lg:block">Configurações</span>
</div>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full object-cover" src="/placeholder.svg"/>
<div class="hidden lg:block">
<p class="text-sm font-bold">Dr. Ricardo Silva</p>
<p class="text-xs text-slate-500">Cardiologista</p>
</div>
</div>
</div>
</aside>
<main class="flex-1 flex flex-col h-screen overflow-hidden">
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6">
<div class="flex flex-col gap-4">
<nav class="flex text-xs font-medium text-slate-400 gap-2 items-center">
<span>Pacientes</span>
<span class="material-icons-round text-xs">chevron_right</span>
<span>Anamnese Segura</span>
<span class="material-icons-round text-xs">chevron_right</span>
<span>Novo registro</span>
<span class="material-icons-round text-xs">chevron_right</span>
<span class="text-primary">Escolher modelo</span>
</nav>
<div class="flex justify-between items-start">
<div>
<h1 class="text-2xl font-extrabold text-slate-900 dark:text-white">Escolher modelo de Anamnese Segura</h1>
<p class="text-slate-500 text-sm mt-1">Selecione o template técnico adequado para o atendimento atual.</p>
</div>
<div class="flex gap-2">
<div class="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2 border border-slate-200 dark:border-slate-700">
<span class="material-icons-round text-slate-400 text-sm">person</span>
<span class="text-xs font-semibold">Paciente: Ana Maria de Sousa</span>
</div>
<div class="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2 border border-slate-200 dark:border-slate-700">
<span class="material-icons-round text-slate-400 text-sm">event</span>
<span class="text-xs font-semibold">Ref: #48293</span>
</div>
</div>
</div>
<div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30 p-3 rounded-lg flex items-start gap-3">
<span class="material-icons-round text-amber-500 mt-0.5">gpp_maybe</span>
<p class="text-xs text-amber-800 dark:text-amber-200 font-medium leading-relaxed">
                    Dados sensíveis — acesso auditado para segurança e conformidade (LGPD). Acessos e alterações podem ser auditados conforme permissões.
                </p>
</div>
<div class="flex items-center w-full max-w-md mt-2">
<div class="flex items-center gap-2 flex-1">
<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-slate-900 font-bold text-sm">1</div>
<span class="text-sm font-bold text-slate-900 dark:text-white">Modelo</span>
</div>
<div class="h-px bg-slate-200 dark:bg-slate-800 w-12 mx-4"></div>
<div class="flex items-center gap-2 flex-1 opacity-50">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-sm">2</div>
<span class="text-sm font-medium">Formulário</span>
</div>
</div>
</div>
</header>
<div class="flex-1 flex overflow-hidden">
<section class="flex-1 flex flex-col bg-slate-50 dark:bg-background-dark overflow-hidden">
<div class="p-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-wrap gap-4">
<div class="relative flex-1 min-w-[300px]">
<span class="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="Buscar modelo por nome, especialidade ou tag..." type="text"/>
</div>
<div class="flex gap-2">
<select class="rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 text-sm font-medium py-2.5 px-4 focus:ring-primary focus:border-primary">
<option>Especialidade</option>
<option>Cardiologia</option>
<option>Geral</option>
<option>Pediatria</option>
</select>
<select class="rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 text-sm font-medium py-2.5 px-4 focus:ring-primary focus:border-primary">
<option selected="">Status: Todos</option>
<option>Ativos</option>
<option>Inativos</option>
</select>
<button class="flex items-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-icons-round text-sm">sort</span>
                        Mais recentes
                    </button>
</div>
</div>
<div class="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
<div class="bg-white dark:bg-slate-900 border-2 border-primary rounded-xl p-5 shadow-sm relative ring-4 ring-primary/5">
<div class="absolute top-4 right-4 text-primary">
<span class="material-icons-round">check_circle</span>
</div>
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">medical_services</span>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white">Anamnese Geral</h3>
<div class="flex gap-2 mt-1">
<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v2.4.1</span>
</div>
</div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Template padrão para atendimento clínico geral. Coleta dados de identificação, histórico de doenças e queixas principais.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="text-center">
<p class="text-xs text-slate-400">Campos</p>
<p class="text-sm font-bold">42</p>
</div>
<div class="text-center">
<p class="text-xs text-slate-400">Usos</p>
<p class="text-sm font-bold">12.4k</p>
</div>
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined text-3xl">favorite</span>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white">Cardiologia Avançada</h3>
<div class="flex gap-2 mt-1">
<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v1.8</span>
</div>
</div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Focado em histórico cardiovascular, fatores de risco e exames de imagem específicos para cardiologia.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="text-center">
<p class="text-xs text-slate-400">Campos</p>
<p class="text-sm font-bold">58</p>
</div>
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500">
<span class="material-symbols-outlined text-3xl">accessibility_new</span>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white">Ortopedia e Trauma</h3>
<div class="flex gap-2 mt-1">
<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v3.0</span>
</div>
</div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Anamnese direcionada para lesões musculoesqueléticas, mapeamento de dor e amplitude de movimento.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="text-center">
<p class="text-xs text-slate-400">Campos</p>
<p class="text-sm font-bold">35</p>
</div>
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm opacity-50 grayscale select-none cursor-not-allowed">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-3xl">child_care</span>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white">Pediatria (0-12 anos)</h3>
<div class="flex gap-2 mt-1">
<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">Inativo</span>
</div>
</div>
</div>
<p class="text-sm text-slate-500 mb-6">Em atualização técnica. Previsão de retorno em 48h.</p>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<span class="text-xs text-slate-400">Indisponível para seleção</span>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500">
<span class="material-symbols-outlined text-3xl">psychology</span>
</div>
<div><h3 class="font-bold">Neurologia Clínica</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Foco em avaliação neurológica central e periférica, escalas de consciência e déficits.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">45 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center text-pink-500">
<span class="material-symbols-outlined text-3xl">pregnant_woman</span>
</div>
<div><h3 class="font-bold">Ginecologia e Obstetrícia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Histórico obstétrico completo, ciclos menstruais e rastreio de neoplasias.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">52 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center text-emerald-500">
<span class="material-symbols-outlined text-3xl">medication</span>
</div>
<div><h3 class="font-bold">Endocrinologia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Acompanhamento de doenças metabólicas, tireoide e diabetes.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">39 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-500">
<span class="material-symbols-outlined text-3xl">personal_injury</span>
</div>
<div><h3 class="font-bold">Dermatologia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Mapeamento de lesões, fototipos e histórico de exposição solar.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">31 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center text-cyan-500">
<span class="material-symbols-outlined text-3xl">pulmonology</span>
</div>
<div><h3 class="font-bold">Pneumologia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Histórico respiratório, tabagismo e sintomas obstrutivos.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">48 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm opacity-50 grayscale select-none cursor-not-allowed">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-3xl">microbiology</span>
</div>
<div><h3 class="font-bold">Infectologia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase">Inativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6">Em revisão de conformidade regulatória.</p>
<div class="mt-auto pt-4 border-t border-slate-100"><span class="text-xs">Indisponível</span></div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-500">
<span class="material-symbols-outlined text-3xl">stethoscope</span>
</div>
<div><h3 class="font-bold">Urologia</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Template focado no sistema geniturinário masculino e feminino.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">42 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div class="flex flex-col h-full">
<div class="flex items-center gap-3 mb-4">
<div class="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-500">
<span class="material-symbols-outlined text-3xl">blind</span>
</div>
<div><h3 class="font-bold">Geriatria</h3><span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p class="text-sm text-slate-500 mb-6 flex-1">Avaliação geriátrica ampla, polifarmácia e mobilidade.</p>
<div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div class="text-sm font-bold">64 campos</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button class="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<aside class="w-[420px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h2 class="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Resumo do Modelo</h2>
<span class="text-xs bg-primary/20 text-slate-900 dark:text-primary px-2 py-1 rounded font-bold">SELECIONADO</span>
</div>
<div class="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div class="flex items-center gap-4 mb-8">
<div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-4xl">medical_services</span>
</div>
<div>
<h3 class="text-lg font-bold">Anamnese Geral</h3>
<p class="text-xs text-slate-400">Última revisão: 05 de Maio de 2024</p>
</div>
</div>
<div class="space-y-6">
<div class="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
<div class="relative mb-8">
<div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span class="material-icons-round text-[14px] text-slate-900 font-bold">1</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Identificação do Paciente</h4>
<p class="text-xs text-slate-500 mt-1">Dados pessoais, convênio, acompanhante e procedência.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">8 campos</span>
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">Obrigatório</span>
</div>
</div>
<div class="relative mb-8">
<div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span class="material-icons-round text-[14px] text-slate-400 font-bold">2</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Queixa Principal (QP)</h4>
<p class="text-xs text-slate-500 mt-1">Motivo central da consulta em palavras do paciente.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">1 campo longo</span>
</div>
</div>
<div class="relative mb-8">
<div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span class="material-icons-round text-[14px] text-slate-400 font-bold">3</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">História da Doença Atual (HDA)</h4>
<p class="text-xs text-slate-500 mt-1">Cronologia, evolução, fatores de melhora e piora.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">12 campos</span>
</div>
</div>
<div class="relative mb-8">
<div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span class="material-icons-round text-[14px] text-slate-400 font-bold">4</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Histórico Pessoal e Familiar</h4>
<p class="text-xs text-slate-500 mt-1">Antecedentes patológicos, cirúrgicos e hereditários.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">15 campos</span>
</div>
</div>
<div class="relative mb-4">
<div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span class="material-icons-round text-[14px] text-slate-400 font-bold">5</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Hábitos de Vida</h4>
<p class="text-xs text-slate-500 mt-1">Tabagismo, etilismo, atividade física e alimentação.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">6 campos</span>
</div>
</div>
</div>
</div>
</div>
<div class="p-6 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50 dark:bg-slate-900/80">
<button class="w-full py-3 bg-primary text-slate-900 font-extrabold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                    Selecionar e continuar
                    <span class="material-icons-round">arrow_forward</span>
</button>
<div class="grid grid-cols-2 gap-2">
<button class="py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800">
                        Voltar
                    </button>
<button class="py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800">
                        Selecionar e voltar
                    </button>
</div>
</div>
</aside>
</div>
</main>`;

export function UiSelecaoDeModeloDeAnamneseP02aPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/selecao-de-modelo-de-anamnese-p02a" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
