import '../../styles/ui/anamnese-segura-lista-de-registros.css';

export function UiAnamneseSeguraListaDeRegistrosPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/anamnese-segura-lista-de-registros">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Anamnese Segura - ClinicOps
          </title>
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
            "display": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123;
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
            &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen flex">
          <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
                <span className="material-icons-round">
                  analytics
                </span>
                <span>
                  Vortix
                </span>
              </div>
            </div>
            <nav className="flex-1 px-4 space-y-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-icons-round">
                  dashboard
                </span>
                Painel Geral
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold" href="#">
                <span className="material-icons-round">
                  person
                </span>
                Pacientes
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-icons-round">
                  calendar_today
                </span>
                Agendamentos
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-icons-round">
                  settings
                </span>
                Configurações
              </a>
            </nav>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img alt="Profile picture of a professional doctor" className="w-full h-full object-cover" src="/placeholder.svg" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate">
                    Dr. Ricardo Silva
                  </p>
                  <p className="text-[10px] text-slate-500 truncate uppercase tracking-wider">
                    CRM/SP 123456
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 flex flex-col h-screen overflow-hidden">
            <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8">
              <div className="flex items-center gap-4">
                <span className="text-slate-400">
                  Pacientes
                </span>
                <span className="material-icons-round text-slate-300 text-sm">
                  chevron_right
                </span>
                <span className="font-semibold">
                  Perfil do Paciente
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons-round">
                    notifications
                  </span>
                </button>
                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800">
                </div>
                <button className="flex items-center gap-2 text-sm font-medium">
                  Modo Escuro
                  <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full">
                    </div>
                  </div>
                </button>
              </div>
            </header>
            <div className="px-8 pt-8 pb-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-icons-round text-3xl">
                      account_circle
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-bold tracking-tight">
                        Mariana Ferreira de Souza
                      </h1>
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase">
                        ID: 88291-A
                      </span>
                    </div>
                    <div className="flex gap-4 mt-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-widest">
                          CPF:
                        </span>
                        <span className="masked-data">
                          445.***.***-09
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span className="font-medium text-slate-400 uppercase text-[10px] tracking-widest">
                          NASC:
                        </span>
                        <span>
                          12/04/1988 (35 anos)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/30 px-4 py-3 rounded-lg">
                  <span className="material-icons-round text-amber-500">
                    lock
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-amber-800 dark:text-amber-500 uppercase tracking-wide">
                      Dados Sensíveis
                    </p>
                    <p className="text-[11px] text-amber-700 dark:text-amber-600/80">
                      Todo acesso a esta ficha é auditado e registrado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  Cadastro
                </button>
                <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  Agendamentos
                </button>
                <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary relative">
                  Anamnese Segura
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse">
                  </span>
                </button>
                <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  Exames
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-8 bg-background-light dark:bg-background-dark">
              <div className="max-w-7xl mx-auto flex gap-6">
                <div className="flex-1 space-y-6">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[240px] relative">
                      <span className="material-icons-round absolute left-3 top-2.5 text-slate-400 text-sm">
                        search
                      </span>
                      <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50" placeholder="Buscar registro..." type="text" />
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium py-2 pr-8 focus:ring-2 focus:ring-primary/50">
                        <option>
                          Status: Todos
                        </option>
                        <option>
                          Rascunho
                        </option>
                        <option>
                          Finalizado
                        </option>
                      </select>
                      <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium py-2 pr-8 focus:ring-2 focus:ring-primary/50">
                        <option>
                          Período: Últimos 90 dias
                        </option>
                        <option>
                          Último Ano
                        </option>
                        <option>
                          Todo Histórico
                        </option>
                      </select>
                      <button className="bg-primary text-slate-900 font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:brightness-105 transition-all">
                        <span className="material-icons-round text-sm">
                          add
                        </span>
                        Novo Registro
                      </button>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Data / Hora
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Origem
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Profissional
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                            Status
                          </th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold">
                              15 Set 2023
                            </div>
                            <div className="text-[11px] text-slate-400">
                              14:30h
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="material-icons-round text-slate-300 text-sm">
                                event
                              </span>
                              <span className="text-xs font-medium">
                                Agendamento #7721
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-medium">
                              Dr. Ricardo Silva
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Cardiologia
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                              Finalizado
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" title="Abrir">
                                <span className="material-icons-round text-lg">
                                  visibility
                                </span>
                              </button>
                              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Exportar">
                                <span className="material-icons-round text-lg">
                                  file_download
                                </span>
                              </button>
                              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Auditoria">
                                <span className="material-icons-round text-lg">
                                  history
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold">
                              02 Set 2023
                            </div>
                            <div className="text-[11px] text-slate-400">
                              09:15h
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-slate-500">
                              <span className="material-icons-round text-slate-300 text-sm">
                                description
                              </span>
                              <span className="text-xs font-medium italic">
                                Registro Avulso
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-medium">
                              Dra. Amanda Costa
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Nutrologia
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 text-[10px] font-bold rounded-full uppercase tracking-wider">
                              Rascunho
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors" title="Abrir">
                                <span className="material-icons-round text-lg">
                                  edit
                                </span>
                              </button>
                              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Exportar">
                                <span className="material-icons-round text-lg">
                                  file_download
                                </span>
                              </button>
                              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Auditoria">
                                <span className="material-icons-round text-lg">
                                  history
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <aside className="w-72 shrink-0 space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Ações Operacionais
                    </h3>
                    <div className="space-y-2">
                      <a className="flex items-center gap-3 p-3 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group" href="#">
                        <span className="material-icons-round text-slate-400 group-hover:text-primary">
                          assignment_ind
                        </span>
                        <span>
                          Histórico de Auditoria
                        </span>
                      </a>
                      <a className="flex items-center gap-3 p-3 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group" href="#">
                        <span className="material-icons-round text-slate-400 group-hover:text-primary">
                          policy
                        </span>
                        <span>
                          Política de Privacidade
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-900 dark:bg-primary/5 rounded-xl p-5 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons-round text-primary">
                        security
                      </span>
                      <h4 className="text-xs font-bold uppercase tracking-widest">
                        Segurança de Dados
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Este sistema utiliza criptografia de ponta-a-ponta. Qualquer alteração em registros finalizados requer justificativa formal.
                    </p>
                    <button className="w-full py-2 bg-slate-800 dark:bg-primary/20 hover:bg-slate-700 dark:hover:bg-primary/30 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors">
                      Ver Certificado de Auditoria
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </main>
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <input checked="" className="hidden" id="tab-vincular" name="modal-tab" type="radio" />
            <input className="hidden" id="tab-avulso" name="modal-tab" type="radio" />
            <div className="modal-content bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 relative">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">
                    Novo Registro de Anamnese
                  </h2>
                  <p className="text-sm text-slate-500">
                    Selecione como deseja iniciar este registro.
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="material-icons-round text-[14px] text-slate-400">
                      verified_user
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Dados sensíveis — acesso restrito e auditado
                    </span>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <span className="material-icons-round">
                    close
                  </span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl relative">
                  <label className="btn-vincular flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-slate-500 cursor-pointer transition-all" htmlFor="tab-vincular">
                    <span className="material-icons-round text-sm">
                      link
                    </span>
                    Vincular
                  </label>
                  <label className="btn-avulso flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-slate-500 cursor-pointer transition-all" htmlFor="tab-avulso">
                    <span className="material-icons-round text-sm">
                      history_edu
                    </span>
                    Avulso
                  </label>
                </div>
                <div className="space-y-4">
                  <div className="field-agendamento space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Selecionar Agendamento
                    </label>
                    <div className="relative group">
                      <span className="material-icons-round absolute left-3 top-2.5 text-slate-400 text-sm">
                        event
                      </span>
                      <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                        <option>
                          Agendamento Hoje - 16:30h (Cardiologia)
                        </option>
                        <option>
                          Agendamento 18 Set - 09:00h (Cardiologia)
                        </option>
                        <option>
                          Nenhum selecionado
                        </option>
                      </select>
                      <span className="material-icons-round absolute right-3 top-2.5 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Modelo de Anamnese
                    </label>
                    <div className="relative">
                      <span className="material-icons-round absolute left-3 top-2.5 text-slate-400 text-sm">
                        assignment
                      </span>
                      <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 appearance-none">
                        <option>
                          Anamnese Padrão - Cardiologia
                        </option>
                        <option>
                          Check-up Geral (Completo)
                        </option>
                        <option>
                          Primeira Consulta / Triagem
                        </option>
                        <option>
                          Retorno Rápido
                        </option>
                      </select>
                      <span className="material-icons-round absolute right-3 top-2.5 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="field-motivo hidden space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Motivo do registro avulso
                      <span className="text-slate-400 font-normal lowercase">
                        (opcional)
                      </span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-sm">
                        edit_note
                      </span>
                      <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50" placeholder="Ex: Intercorrência emergencial ou consulta externa" type="text" />
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex gap-3">
                  <span className="material-icons-round text-blue-500 text-sm">
                    info
                  </span>
                  <p className="text-xs text-blue-700 dark:text-blue-400 leading-normal">
                    Vincular ao agendamento melhora a rastreabilidade do atendimento e facilita auditoria e relatórios.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex gap-3 justify-end">
                <button className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  Cancelar
                </button>
                <button className="px-8 py-2 bg-primary text-slate-900 font-bold rounded-lg text-sm hover:brightness-105 shadow-lg shadow-primary/20 transition-all">
                  Iniciar Registro
                </button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </section>
  );
}
