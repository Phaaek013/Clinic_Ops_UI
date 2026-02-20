import '../../styles/ui/selecao-de-modelo-de-anamnese-p02a.css';

export function SelecaoDeModeloDeAnamneseP02a() {
  return (
    <div className="ui-page ui-selecao-de-modelo-de-anamnese-p02a bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen flex overflow-hidden">
<aside className="w-20 lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:flex flex-col">
<div className="p-6 flex items-center gap-3">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span className="material-icons-round text-slate-900">analytics</span>
</div>
<span className="font-bold text-xl tracking-tight hidden lg:block">ClinicOps</span>
</div>
<nav className="flex-1 px-4 space-y-2 mt-4">
<div className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span className="material-icons-round">dashboard</span>
<span className="font-medium hidden lg:block">Dashboard</span>
</div>
<div className="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-lg cursor-pointer">
<span className="material-icons-round text-primary">person</span>
<span className="font-bold hidden lg:block">Pacientes</span>
</div>
<div className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span className="material-icons-round">calendar_today</span>
<span className="font-medium hidden lg:block">Agenda</span>
</div>
<div className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
<span className="material-icons-round">settings</span>
<span className="font-medium hidden lg:block">Configurações</span>
</div>
</nav>
<div className="p-4 border-t border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="/avatar.svg" />
<div className="hidden lg:block">
<p className="text-sm font-bold">Dr. Ricardo Silva</p>
<p className="text-xs text-slate-500">Cardiologista</p>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col h-screen overflow-hidden">
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6">
<div className="flex flex-col gap-4">
<nav className="flex text-xs font-medium text-slate-400 gap-2 items-center">
<span>Pacientes</span>
<span className="material-icons-round text-xs">chevron_right</span>
<span>Anamnese Segura</span>
<span className="material-icons-round text-xs">chevron_right</span>
<span>Novo registro</span>
<span className="material-icons-round text-xs">chevron_right</span>
<span className="text-primary">Escolher modelo</span>
</nav>
<div className="flex justify-between items-start">
<div>
<h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Escolher modelo de Anamnese Segura</h1>
<p className="text-slate-500 text-sm mt-1">Selecione o template técnico adequado para o atendimento atual.</p>
</div>
<div className="flex gap-2">
<div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2 border border-slate-200 dark:border-slate-700">
<span className="material-icons-round text-slate-400 text-sm">person</span>
<span className="text-xs font-semibold">Paciente: Ana Maria de Sousa</span>
</div>
<div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2 border border-slate-200 dark:border-slate-700">
<span className="material-icons-round text-slate-400 text-sm">event</span>
<span className="text-xs font-semibold">Ref: #48293</span>
</div>
</div>
</div>
<div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30 p-3 rounded-lg flex items-start gap-3">
<span className="material-icons-round text-amber-500 mt-0.5">gpp_maybe</span>
<p className="text-xs text-amber-800 dark:text-amber-200 font-medium leading-relaxed">
                    Dados sensíveis — acesso auditado para segurança e conformidade (LGPD). Acessos e alterações podem ser auditados conforme permissões.
                </p>
</div>
<div className="flex items-center w-full max-w-md mt-2">
<div className="flex items-center gap-2 flex-1">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-slate-900 font-bold text-sm">1</div>
<span className="text-sm font-bold text-slate-900 dark:text-white">Modelo</span>
</div>
<div className="h-px bg-slate-200 dark:bg-slate-800 w-12 mx-4"></div>
<div className="flex items-center gap-2 flex-1 opacity-50">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-sm">2</div>
<span className="text-sm font-medium">Formulário</span>
</div>
</div>
</div>
</header>
<div className="flex-1 flex overflow-hidden">
<section className="flex-1 flex flex-col bg-slate-50 dark:bg-background-dark overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-wrap gap-4">
<div className="relative flex-1 min-w-[300px]">
<span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="Buscar modelo por nome, especialidade ou tag..." type="text" />
</div>
<div className="flex gap-2">
<select className="rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 text-sm font-medium py-2.5 px-4 focus:ring-primary focus:border-primary">
<option>Especialidade</option>
<option>Cardiologia</option>
<option>Geral</option>
<option>Pediatria</option>
</select>
<select className="rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 text-sm font-medium py-2.5 px-4 focus:ring-primary focus:border-primary">
<option selected="">Status: Todos</option>
<option>Ativos</option>
<option>Inativos</option>
</select>
<button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="material-icons-round text-sm">sort</span>
                        Mais recentes
                    </button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
<div className="bg-white dark:bg-slate-900 border-2 border-primary rounded-xl p-5 shadow-sm relative ring-4 ring-primary/5">
<div className="absolute top-4 right-4 text-primary">
<span className="material-icons-round">check_circle</span>
</div>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">medical_services</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Anamnese Geral</h3>
<div className="flex gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v2.4.1</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Template padrão para atendimento clínico geral. Coleta dados de identificação, histórico de doenças e queixas principais.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-xs text-slate-400">Campos</p>
<p className="text-sm font-bold">42</p>
</div>
<div className="text-center">
<p className="text-xs text-slate-400">Usos</p>
<p className="text-sm font-bold">12.4k</p>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500">
<span className="material-symbols-outlined text-3xl">favorite</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Cardiologia Avançada</h3>
<div className="flex gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v1.8</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Focado em histórico cardiovascular, fatores de risco e exames de imagem específicos para cardiologia.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-xs text-slate-400">Campos</p>
<p className="text-sm font-bold">58</p>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500">
<span className="material-symbols-outlined text-3xl">accessibility_new</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Ortopedia e Trauma</h3>
<div className="flex gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold uppercase">Ativo</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">v3.0</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Anamnese direcionada para lesões musculoesqueléticas, mapeamento de dor e amplitude de movimento.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-4">
<div className="text-center">
<p className="text-xs text-slate-400">Campos</p>
<p className="text-sm font-bold">35</p>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm opacity-50 grayscale select-none cursor-not-allowed">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
<span className="material-symbols-outlined text-3xl">child_care</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Pediatria (0-12 anos)</h3>
<div className="flex gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold uppercase">Inativo</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-6">Em atualização técnica. Previsão de retorno em 48h.</p>
<div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
<span className="text-xs text-slate-400">Indisponível para seleção</span>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<div><h3 className="font-bold">Neurologia Clínica</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Foco em avaliação neurológica central e periférica, escalas de consciência e déficits.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">45 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/20 rounded-lg flex items-center justify-center text-pink-500">
<span className="material-symbols-outlined text-3xl">pregnant_woman</span>
</div>
<div><h3 className="font-bold">Ginecologia e Obstetrícia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Histórico obstétrico completo, ciclos menstruais e rastreio de neoplasias.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">52 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center text-emerald-500">
<span className="material-symbols-outlined text-3xl">medication</span>
</div>
<div><h3 className="font-bold">Endocrinologia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Acompanhamento de doenças metabólicas, tireoide e diabetes.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">39 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-500">
<span className="material-symbols-outlined text-3xl">personal_injury</span>
</div>
<div><h3 className="font-bold">Dermatologia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Mapeamento de lesões, fototipos e histórico de exposição solar.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">31 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center text-cyan-500">
<span className="material-symbols-outlined text-3xl">pulmonology</span>
</div>
<div><h3 className="font-bold">Pneumologia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Histórico respiratório, tabagismo e sintomas obstrutivos.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">48 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm opacity-50 grayscale select-none cursor-not-allowed">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
<span className="material-symbols-outlined text-3xl">microbiology</span>
</div>
<div><h3 className="font-bold">Infectologia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase">Inativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6">Em revisão de conformidade regulatória.</p>
<div className="mt-auto pt-4 border-t border-slate-100"><span className="text-xs">Indisponível</span></div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-500">
<span className="material-symbols-outlined text-3xl">stethoscope</span>
</div>
<div><h3 className="font-bold">Urologia</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Template focado no sistema geniturinário masculino e feminino.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">42 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-all group">
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-500">
<span className="material-symbols-outlined text-3xl">blind</span>
</div>
<div><h3 className="font-bold">Geriatria</h3><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold uppercase">Ativo</span></div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Avaliação geriátrica ampla, polifarmácia e mobilidade.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<div className="text-sm font-bold">64 campos</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50">Pré-visualizar</button>
<button className="px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100">Selecionar</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<aside className="w-[420px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h2 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Resumo do Modelo</h2>
<span className="text-xs bg-primary/20 text-slate-900 dark:text-primary px-2 py-1 rounded font-bold">SELECIONADO</span>
</div>
<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-4xl">medical_services</span>
</div>
<div>
<h3 className="text-lg font-bold">Anamnese Geral</h3>
<p className="text-xs text-slate-400">Última revisão: 05 de Maio de 2024</p>
</div>
</div>
<div className="space-y-6">
<div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
<div className="relative mb-8">
<div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span className="material-icons-round text-[14px] text-slate-900 font-bold">1</span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white">Identificação do Paciente</h4>
<p className="text-xs text-slate-500 mt-1">Dados pessoais, convênio, acompanhante e procedência.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">8 campos</span>
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">Obrigatório</span>
</div>
</div>
<div className="relative mb-8">
<div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span className="material-icons-round text-[14px] text-slate-400 font-bold">2</span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white">Queixa Principal (QP)</h4>
<p className="text-xs text-slate-500 mt-1">Motivo central da consulta em palavras do paciente.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">1 campo longo</span>
</div>
</div>
<div className="relative mb-8">
<div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span className="material-icons-round text-[14px] text-slate-400 font-bold">3</span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white">História da Doença Atual (HDA)</h4>
<p className="text-xs text-slate-500 mt-1">Cronologia, evolução, fatores de melhora e piora.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">12 campos</span>
</div>
</div>
<div className="relative mb-8">
<div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span className="material-icons-round text-[14px] text-slate-400 font-bold">4</span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white">Histórico Pessoal e Familiar</h4>
<p className="text-xs text-slate-500 mt-1">Antecedentes patológicos, cirúrgicos e hereditários.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">15 campos</span>
</div>
</div>
<div className="relative mb-4">
<div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
<span className="material-icons-round text-[14px] text-slate-400 font-bold">5</span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white">Hábitos de Vida</h4>
<p className="text-xs text-slate-500 mt-1">Tabagismo, etilismo, atividade física e alimentação.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">6 campos</span>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50 dark:bg-slate-900/80">
<button className="w-full py-3 bg-primary text-slate-900 font-extrabold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                    Selecionar e continuar
                    <span className="material-icons-round">arrow_forward</span>
</button>
<div className="grid grid-cols-2 gap-2">
<button className="py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800">
                        Voltar
                    </button>
<button className="py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800">
                        Selecionar e voltar
                    </button>
</div>
</div>
</aside>
</div>
</main>
    </div>
  );
}
