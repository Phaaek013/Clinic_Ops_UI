import '../../styles/ui/editor-de-anamnese-segura-p03.css';

export function UiEditorDeAnamneseSeguraP03Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/editor-de-anamnese-segura-p03">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <script src="/placeholder.svg">
          </script>
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "background-light": "#f6f8f8",
            "background-dark": "#102222",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope"]
            &#125;,
            borderRadius: &#123; "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-display">
          <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
            <div className="bg-slate-100 dark:bg-slate-800/80 py-2.5 px-6 flex items-center justify-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-[18px] text-slate-500">
                lock_person
              </span>
              <span className="tracking-wide">
                Registro de Conformidade: Dados sensíveis com acesso restrito e auditado (LGPD).
              </span>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <nav className="flex items-center space-x-2 text-xs text-slate-400 dark:text-slate-500 mb-1">
                    <a className="hover:text-primary transition-colors" href="#">
                      Pacientes
                    </a>
                    <span className="material-icons-round text-[10px]">
                      chevron_right
                    </span>
                    <a className="hover:text-primary transition-colors" href="#">
                      Anamnese Segura
                    </a>
                    <span className="material-icons-round text-[10px]">
                      chevron_right
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">
                      Registro #AG-4022
                    </span>
                  </nav>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      Registro de Anamnese Segura
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold tracking-wider uppercase">
                      Rascunho
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden lg:flex items-center gap-2 mr-4 text-xs text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75">
                      </span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary">
                      </span>
                    </span>
                    <span>
                      Salvo há 10s
                    </span>
                  </div>
                  <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2">
                    <span className="material-icons-round text-lg">
                      arrow_back
                    </span>
                    Voltar
                  </button>
                  <button className="px-4 py-2 text-sm font-semibold bg-primary text-slate-900 hover:opacity-90 rounded-lg shadow-sm transition-all flex items-center gap-2">
                    <span className="material-icons-round text-lg">
                      task_alt
                    </span>
                    Finalizar registro
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <span className="material-icons-round">
                      more_vert
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
                  <span className="material-icons-round text-sm text-slate-400">
                    person
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Paciente:
                    <strong>
                      Maria Eduarda Silva
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
                  <span className="material-icons-round text-sm text-slate-400">
                    event
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Agendamento:
                    <strong>
                      #4492 - 24 Out 2023
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
                  <span className="material-icons-round text-sm text-slate-400">
                    manage_accounts
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Responsável:
                    <strong>
                      Dr. Ricardo Fontes
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/80 rounded-full border border-slate-100 dark:border-slate-700">
                  <span className="material-icons-round text-sm text-slate-400">
                    description
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Modelo:
                    <strong>
                      Registro Padrão V2
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex space-x-8 overflow-x-auto custom-scrollbar">
                <button className="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">
                  Resumo
                </button>
                <button className="py-4 px-1 border-b-2 border-primary text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap transition-all">
                  Formulário
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all flex items-center gap-1.5">
                  Anexos
                  <span className="bg-slate-100 dark:bg-slate-800 px-1.5 rounded-full text-[10px]">
                    2
                  </span>
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">
                  Histórico
                  &amp;
                  Auditoria
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap transition-all">
                  Exportar / Imprimir
                </button>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Modo de Visualização:
                    </span>
                    <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <button className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 rounded-md">
                        Leitura
                      </button>
                      <button className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-700 text-primary shadow-sm rounded-md border border-slate-200/50 dark:border-slate-600">
                        Edição
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1">
                      <span className="material-icons-round text-base">
                        save
                      </span>
                      Salvar rascunho
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-1">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary">
                        </span>
                        1. Queixa Principal e Duração
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                        Obrigatório
                      </span>
                    </div>
                    <div className="p-6">
                      <textarea className="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary transition-all text-sm" placeholder="Descreva a queixa principal relatada..." rows="3">
                      </textarea>
                    </div>
                  </section>
                  <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-2">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary">
                        </span>
                        2. Histórico do Atendimento Atual
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase">
                            Início do Evento
                          </label>
                          <input className="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm" type="text" value="Aproximadamente 3 semanas" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase">
                            Intensidade (0-10)
                          </label>
                          <select className="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm">
                            <option>
                              6 - Moderada/Alta
                            </option>
                            <option>
                              7 - Alta
                            </option>
                            <option>
                              8 - Severa
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Evolução do Quadro
                        </label>
                        <div className="border border-slate-200 dark:border-slate-800 rounded-lg">
                          <div className="p-2 border-b border-slate-100 dark:border-slate-800 flex gap-2">
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              <span className="material-icons-round text-sm">
                                format_bold
                              </span>
                            </button>
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              <span className="material-icons-round text-sm">
                                format_italic
                              </span>
                            </button>
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              <span className="material-icons-round text-sm">
                                format_list_bulleted
                              </span>
                            </button>
                          </div>
                          <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm p-4" placeholder="Observações detalhadas do atendimento..." rows="6">
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden" id="section-3">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary">
                        </span>
                        3. Antecedentes Pessoais e Familiares
                      </h3>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Condição Metabólica
                          </span>
                          <input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Condição Cardiovascular
                          </span>
                          <input checked="" className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Hábitos de Risco
                          </span>
                          <input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300 dark:bg-slate-800" type="checkbox" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Observações Complementares
                        </label>
                        <textarea className="w-full bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Informações adicionais...">
                        </textarea>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <aside className="col-span-12 lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-icons-round text-primary text-lg">
                      fact_check
                    </span>
                    Itens Pendentes
                  </h4>
                  <div className="space-y-3">
                    <a className="group flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg hover:border-red-300 dark:hover:border-red-800 transition-all cursor-pointer" href="#section-4">
                      <span className="material-icons-round text-red-500 text-sm mt-0.5">
                        error_outline
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-red-800 dark:text-red-400">
                            Seção obrigatória pendente
                          </p>
                          <span className="material-symbols-outlined text-[14px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            open_in_new
                          </span>
                        </div>
                        <p className="text-[10px] text-red-600/80 dark:text-red-500/80 mt-0.5">
                          Clique para navegar até a seção.
                        </p>
                      </div>
                    </a>
                    <a className="group flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer" href="#section-1">
                      <span className="material-icons-round text-slate-400 text-sm mt-0.5">
                        check_circle
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-600 dark:text-slate-400">
                            Queixa e Histórico
                          </p>
                          <span className="material-symbols-outlined text-[14px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            open_in_new
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500/80 mt-0.5">
                          Preenchimento validado.
                        </p>
                      </div>
                    </a>
                  </div>
                  <button className="w-full mt-6 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      history_edu
                    </span>
                    Ver registro de auditoria
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Controle de Versão
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-bold">
                      V1.0
                    </span>
                  </div>
                  <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                    <div className="relative pl-7">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900">
                      </div>
                      <p className="text-xs font-bold">
                        Rascunho criado
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Hoje, 14:20 por Dr. Ricardo
                      </p>
                    </div>
                    <div className="relative pl-7 opacity-50">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-900">
                      </div>
                      <p className="text-xs font-bold">
                        Pendente de Finalização
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Aguardando dados complementares
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-xl p-6 text-white shadow-xl">
                  <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                    Contexto do Atendimento
                  </p>
                  <h5 className="text-sm font-bold mb-4">
                    Resumo do Atendimento
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-xs text-slate-400">
                        Tipo:
                      </span>
                      <span className="text-xs font-medium">
                        Primeira Consulta
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-xs text-slate-400">
                        Setor:
                      </span>
                      <span className="text-xs font-medium">
                        Cardiologia
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs text-slate-400">
                        Prioridade:
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-yellow-400">
                        </span>
                        <span className="text-xs font-medium">
                          Moderada
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 flex gap-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <button className="flex-1 py-3 text-sm font-bold bg-primary text-slate-900 rounded-lg">
              Finalizar Registro
            </button>
            <button className="p-3 text-slate-500 border border-slate-200 dark:border-slate-700 rounded-lg">
              <span className="material-icons-round">
                save
              </span>
            </button>
          </div>
        </body>
      </html>
    </section>
  );
}
