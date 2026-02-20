import '../../styles/ui/editor-de-anamnese-segura-p03.css';

const screenHtml = `<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
<div class="bg-slate-100 dark:bg-slate-800/80 py-2.5 px-6 flex items-center justify-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
<span class="material-symbols-outlined text-[18px] text-slate-500">lock_person</span>
<span class="tracking-wide">Registro de Conformidade: Dados sensíveis com acesso restrito e auditado (LGPD).</span>
</div>
<div class="max-w-7xl mx-auto px-6 py-4">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<nav class="flex items-center space-x-2 text-xs text-slate-400 dark:text-slate-500 mb-1">
<a class="hover:text-primary transition-colors" href="#">Pacientes</a>
<span class="material-icons-round text-[10px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Anamnese Segura</a>
<span class="material-icons-round text-[10px]">chevron_right</span>
<span class="text-slate-600 dark:text-slate-300">Registro #AG-4022</span>
</nav>
<div class="flex items-center gap-3">
<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Registro de Anamnese Segura</h1>
<span class="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold tracking-wider uppercase">Rascunho</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="hidden lg:flex items-center gap-2 mr-4 text-xs text-slate-400">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span>Salvo há 10s</span>
</div>
<button class="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2">
<span class="material-icons-round text-lg">arrow_back</span>
            Voltar
          </button>
<button class="px-4 py-2 text-sm font-semibold bg-primary text-slate-900 hover:opacity-90 rounded-lg shadow-sm transition-all flex items-center gap-2">
<span class="material-icons-round text-lg">task_alt</span>
            Finalizar registro
          </button>
<button class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span class="material-icons-round">more_vert</span>
</button>
</div>
</div>
<div class="flex flex-wrap gap-2 mt-4">
<div class="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
<span class="material-icons-round text-sm text-slate-400">person</span>
<span class="text-xs font-medium text-slate-600 dark:text-slate-300">Paciente: <strong>Maria Eduarda Silva</strong></span>
</div>
<div class="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
<span class="material-icons-round text-sm text-slate-400">event</span>
<span class="text-xs font-medium text-slate-600 dark:text-slate-300">Agendamento: <strong>#4492 - 24 Out 2023</strong></span>
</div>
<div class="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
<span class="material-icons-round text-sm text-slate-400">manage_accounts</span>
<span class="text-xs font-medium text-slate-600 dark:text-slate-300">Responsável: <strong>Dr. Ricardo Fontes</strong></span>
</div>
<div class="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
<span class="material-icons-round text-sm text-slate-400">description</span>
<span class="text-xs font-medium text-slate-600 dark:text-slate-300">Modelo: <strong>Registro Padrão V2</strong></span>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-6">
<div class="flex space-x-8 overflow-x-auto custom-scrollbar">
<button class="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">Resumo</button>
<button class="py-4 px-1 border-b-2 border-primary text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap transition-all">Formulário</button>
<button class="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all flex items-center gap-1.5">Anexos <span class="bg-slate-100 dark:bg-slate-800 px-1.5 rounded-full text-[10px]">2</span></button>
<button class="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">Histórico &amp; Auditoria</button>
<button class="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">Exportar / Imprimir</button>
</div>
</div>
</header>
<main class="max-w-7xl mx-auto px-6 py-8">
<div class="grid grid-cols-12 gap-8">
<div class="col-span-12 lg:col-span-8 space-y-6">
<div class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center gap-4">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Modo de Visualização:</span>
<div class="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
<button class="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 rounded-md">Leitura</button>
<button class="px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-700 text-primary shadow-sm rounded-md border border-slate-200/50 dark:border-slate-600">Edição</button>
</div>
</div>
<div class="flex items-center gap-2">
<button class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1">
<span class="material-icons-round text-base">save</span>
              Salvar rascunho
            </button>
</div>
</div>
<div class="space-y-6">
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-1">
<div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
<h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
                1. Queixa Principal e Duração
              </h3>
<span class="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Obrigatório</span>
</div>
<div class="p-6">
<textarea class="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary transition-all text-sm" placeholder="Descreva a queixa principal relatada..." rows="3"></textarea>
</div>
</section>
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-2">
<div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
                2. Histórico do Atendimento Atual
              </h3>
</div>
<div class="p-6 space-y-4">
<div class="grid grid-cols-2 gap-4">
<div class="space-y-1.5">
<label class="text-xs font-bold text-slate-500 uppercase">Início do Evento</label>
<input class="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm" type="text" value="Aproximadamente 3 semanas"/>
</div>
<div class="space-y-1.5">
<label class="text-xs font-bold text-slate-500 uppercase">Intensidade (0-10)</label>
<select class="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm">
<option>6 - Moderada/Alta</option>
<option>7 - Alta</option>
<option>8 - Severa</option>
</select>
</div>
</div>
<div class="space-y-1.5">
<label class="text-xs font-bold text-slate-500 uppercase">Evolução do Quadro</label>
<div class="border border-slate-200 dark:border-slate-800 rounded-lg">
<div class="p-2 border-b border-slate-100 dark:border-slate-800 flex gap-2">
<button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span class="material-icons-round text-sm">format_bold</span></button>
<button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span class="material-icons-round text-sm">format_italic</span></button>
<button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span class="material-icons-round text-sm">format_list_bulleted</span></button>
</div>
<textarea class="w-full bg-transparent border-none focus:ring-0 text-sm p-4" placeholder="Observações detalhadas do atendimento..." rows="6"></textarea>
</div>
</div>
</div>
</section>
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-3">
<div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 class="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary"></span>
                3. Antecedentes Pessoais e Familiares
              </h3>
</div>
<div class="p-6 grid grid-cols-2 gap-6">
<div class="space-y-3">
<div class="flex items-center justify-between">
<span class="text-sm font-medium">Condição Metabólica</span>
<input class="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox"/>
</div>
<div class="flex items-center justify-between">
<span class="text-sm font-medium">Condição Cardiovascular</span>
<input checked="" class="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox"/>
</div>
<div class="flex items-center justify-between">
<span class="text-sm font-medium">Hábitos de Risco</span>
<input class="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox"/>
</div>
</div>
<div class="space-y-1.5">
<label class="text-xs font-bold text-slate-500 uppercase">Observações Complementares</label>
<textarea class="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Informações adicionais..."></textarea>
</div>
</div>
</section>
</div>
</div>
<aside class="col-span-12 lg:col-span-4 space-y-6">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
<h4 class="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="material-icons-round text-primary text-lg">fact_check</span>
            Itens Pendentes
          </h4>
<div class="space-y-3">
<a class="group flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg hover:border-red-300 dark:hover:border-red-800 transition-all cursor-pointer" href="#section-4">
<span class="material-icons-round text-red-500 text-sm mt-0.5">error_outline</span>
<div class="flex-1">
<div class="flex items-center justify-between">
<p class="text-xs font-bold text-red-800 dark:text-red-400">Seção obrigatória pendente</p>
<span class="material-symbols-outlined text-[14px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<p class="text-[10px] text-red-600/80 dark:text-red-500/80 mt-0.5">Clique para navegar até a seção.</p>
</div>
</a>
<a class="group flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer" href="#section-1">
<span class="material-icons-round text-slate-400 text-sm mt-0.5">check_circle</span>
<div class="flex-1">
<div class="flex items-center justify-between">
<p class="text-xs font-bold text-slate-600 dark:text-slate-400">Queixa e Histórico</p>
<span class="material-symbols-outlined text-[14px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<p class="text-[10px] text-slate-500/80 mt-0.5">Preenchimento validado.</p>
</div>
</a>
</div>
<button class="w-full mt-6 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">history_edu</span>
            Ver registro de auditoria
          </button>
</div>
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
<div class="flex items-center justify-between mb-4">
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Controle de Versão</h4>
<span class="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-bold">V1.0</span>
</div>
<div class="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
<div class="relative pl-7">
<div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
<p class="text-xs font-bold">Rascunho criado</p>
<p class="text-[10px] text-slate-500">Hoje, 14:20 por Dr. Ricardo</p>
</div>
<div class="relative pl-7 opacity-50">
<div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-900"></div>
<p class="text-xs font-bold">Pendente de Finalização</p>
<p class="text-[10px] text-slate-500">Aguardando dados complementares</p>
</div>
</div>
</div>
<div class="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-xl p-6 text-white shadow-xl">
<p class="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Contexto do Atendimento</p>
<h5 class="text-sm font-bold mb-4">Resumo do Atendimento</h5>
<div class="space-y-3">
<div class="flex justify-between items-center py-2 border-b border-white/10">
<span class="text-xs text-slate-400">Tipo:</span>
<span class="text-xs font-medium">Primeira Consulta</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-white/10">
<span class="text-xs text-slate-400">Setor:</span>
<span class="text-xs font-medium">Cardiologia</span>
</div>
<div class="flex justify-between items-center py-2">
<span class="text-xs text-slate-400">Prioridade:</span>
<span class="flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
<span class="text-xs font-medium">Moderada</span>
</span>
</div>
</div>
</div>
</aside>
</div>
</main>
<div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 flex gap-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
<button class="flex-1 py-3 text-sm font-bold bg-primary text-slate-900 rounded-lg">Finalizar Registro</button>
<button class="p-3 text-slate-500 border border-slate-200 dark:border-slate-700 rounded-lg"><span class="material-icons-round">save</span></button>
</div>`;

export function UiEditorDeAnamneseSeguraP03Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/editor-de-anamnese-segura-p03" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
