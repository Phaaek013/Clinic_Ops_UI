import '../../styles/ui/anexos-do-registro-de-anamnese-p03c.css';

export function UiAnexosDoRegistroDeAnamneseP03cPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/anexos-do-registro-de-anamnese-p03c">
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Anexos do Registro de Anamnese (P03c) - ClinicOps
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
            "display": ["Manrope"]
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
        <body className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen flex flex-col">
          <div className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4" id="modal-remover">
            <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full shadow-2xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 text-red-500 mb-4">
                  <span className="material-icons-round text-2xl">
                    warning
                  </span>
                  <h3 className="text-lg font-bold">
                    Confirmar Remoção
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Você está prestes a remover o arquivo
                  <span className="font-bold text-slate-900 dark:text-white">
                    laudo_cardiologico_v1.pdf
                  </span>
                  . Esta ação é irreversível.
                </p>
                <div className="mb-4">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Motivo da remoção
                  </label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm p-3 focus:ring-primary focus:border-primary" placeholder="Descreva brevemente o motivo..." rows="3">
                  </textarea>
                </div>
                <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 rounded-lg mb-6">
                  <span className="material-icons-round text-amber-500 text-sm">
                    history_edu
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium italic">
                    Esta ação será registrada em auditoria
                  </span>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all" onClick="document.getElementById('modal-remover').classList.add('hidden')">
                    Cancelar
                  </button>
                  <button className="px-6 py-2 text-sm font-bold bg-red-500 text-white rounded-lg shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all">
                    Remover Arquivo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <header className="bg-white dark:bg-background-dark border-b border-primary/10 px-8 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 space-x-2">
                <span className="hover:text-primary cursor-pointer">
                  Pacientes
                </span>
                <span className="material-icons-round text-[14px]">
                  chevron_right
                </span>
                <span className="hover:text-primary cursor-pointer">
                  Anamnese Segura
                </span>
                <span className="material-icons-round text-[14px]">
                  chevron_right
                </span>
                <span className="text-slate-800 dark:text-slate-100">
                  Registro #AG-4022
                </span>
              </nav>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Registro de Anamnese Segura
                  </h1>
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-amber-200 dark:border-amber-800/50">
                    Rascunho
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                    Voltar
                  </button>
                  <button className="px-6 py-2 text-sm font-bold bg-primary text-slate-900 rounded-lg shadow-lg shadow-primary/20 hover:brightness-105 transition-all">
                    Finalizar Registro
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-500">
                    <span className="material-icons-round">
                      more_horiz
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 max-w-7xl w-full mx-auto px-8 py-6">
            <div className="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 mb-8">
              <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Resumo
              </button>
              <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Formulário
              </button>
              <button className="pb-4 text-sm font-bold text-slate-900 dark:text-primary border-b-2 border-primary relative flex items-center gap-2">
                Anexos
                <span className="bg-primary/20 text-slate-800 dark:text-primary px-2 py-0.5 rounded-full text-[10px]">
                  2
                </span>
              </button>
              <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Histórico
                &amp;
                Auditoria
              </button>
              <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Exportar / Imprimir
              </button>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 space-y-6">
                <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Gerenciar Arquivos
                    </h3>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 uppercase tracking-tight">
                      <span className="material-icons-round text-[14px]">
                        info
                      </span>
                      Formatos: PDF, JPG, PNG (Max 10MB)
                    </span>
                  </div>
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/40 p-8 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                      <span className="material-icons-round">
                        cloud_upload
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Arraste documentos ou clique para buscar
                    </p>
                    <p className="text-xs text-slate-400">
                      Seleção múltipla disponível para envio seguro
                    </p>
                    <button className="mt-4 px-4 py-2 bg-primary/10 text-slate-900 dark:text-primary text-xs font-bold rounded-lg border border-primary/20 hover:bg-primary hover:text-slate-900 transition-all uppercase tracking-wide">
                      Adicionar Anexo
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-visible shadow-sm">
                  <div className="overflow-x-auto overflow-y-visible">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900/50 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800">
                          <th className="px-6 py-4">
                            Arquivo / Permissão
                          </th>
                          <th className="px-6 py-4">
                            Tipo/Tamanho
                          </th>
                          <th className="px-6 py-4">
                            Data/Hora
                          </th>
                          <th className="px-6 py-4">
                            Enviado por
                          </th>
                          <th className="px-6 py-4">
                            Tags
                          </th>
                          <th className="px-6 py-4 text-right">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="bg-primary/[0.02]">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="material-icons-round text-primary animate-pulse">
                                insert_drive_file
                              </span>
                              <div>
                                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                                  exame_sangue_ag4022.pdf
                                </div>
                                <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                                  <span className="material-icons-round text-[11px]">
                                    lock
                                  </span>
                                  Restrito
                                </div>
                                <div className="w-48 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                                  <div className="bg-primary h-full rounded-full" style={{width: "65%"}}>
                                  </div>
                                </div>
                                <span className="text-[10px] text-primary font-bold mt-1 inline-block uppercase tracking-wider">
                                  Enviando 65%...
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              PDF / 2.4 MB
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              15/10/2023 - 14:22
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                              <div className="w-5 h-5 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-[8px] font-bold">
                                DR
                              </div>
                              Dra. Rita Mendes
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-400 text-[9px] font-bold uppercase rounded border border-slate-200 dark:border-slate-700">
                              Aguardando...
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-300 cursor-not-allowed">
                              <span className="material-icons-round text-[18px]">
                                cancel
                              </span>
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors group relative">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="material-icons-round text-slate-400">
                                picture_as_pdf
                              </span>
                              <div>
                                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                                  laudo_cardiologico_v1.pdf
                                </div>
                                <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                                  <span className="material-icons-round text-[11px]">
                                    group
                                  </span>
                                  Equipe
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              PDF / 1.1 MB
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              15/10/2023 - 13:45
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                              <div className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[8px] font-bold">
                                DR
                              </div>
                              Dra. Rita Mendes
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-1 flex-wrap">
                              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold uppercase rounded border border-primary/10">
                                EXAME
                              </span>
                              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold uppercase rounded border border-slate-200 dark:border-slate-700">
                                URGENTE
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right relative">
                            <div className="flex items-center justify-end gap-1">
                              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
                                <span className="material-icons-round text-[18px]">
                                  visibility
                                </span>
                              </button>
                              <div className="relative group inline-block">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                                  <span className="material-icons-round text-[20px]">
                                    more_vert
                                  </span>
                                </button>
                                <div className="dropdown-menu absolute right-0 mt-0 w-44 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 overflow-hidden">
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      download
                                    </span>
                                    Baixar
                                  </button>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      edit
                                    </span>
                                    Renomear
                                  </button>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      label
                                    </span>
                                    Editar tags
                                  </button>
                                  <div className="h-px bg-slate-100 dark:bg-slate-800">
                                  </div>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" onClick="document.getElementById('modal-remover').classList.remove('hidden'); document.getElementById('modal-remover').classList.add('flex')">
                                    <span className="material-icons-round text-sm">
                                      delete
                                    </span>
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors border-b-0 group relative">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="material-icons-round text-slate-400">
                                image
                              </span>
                              <div>
                                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                                  receita_medicamentos_ref.jpg
                                </div>
                                <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                                  <span className="material-icons-round text-[11px]">
                                    apartment
                                  </span>
                                  Clínica
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              JPG / 842 KB
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-tighter">
                              14/10/2023 - 10:15
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                              <div className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[8px] font-bold">
                                DR
                              </div>
                              Dra. Rita Mendes
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-1 flex-wrap">
                              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold uppercase rounded border border-slate-200 dark:border-slate-700">
                                RECEITA
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right relative">
                            <div className="flex items-center justify-end gap-1">
                              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
                                <span className="material-icons-round text-[18px]">
                                  visibility
                                </span>
                              </button>
                              <div className="relative group inline-block">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                                  <span className="material-icons-round text-[20px]">
                                    more_vert
                                  </span>
                                </button>
                                <div className="dropdown-menu absolute right-0 mt-0 w-44 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 overflow-hidden text-left">
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      download
                                    </span>
                                    Baixar
                                  </button>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      edit
                                    </span>
                                    Renomear
                                  </button>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-icons-round text-sm">
                                      label
                                    </span>
                                    Editar tags
                                  </button>
                                  <div className="h-px bg-slate-100 dark:bg-slate-800">
                                  </div>
                                  <button className="w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" onClick="document.getElementById('modal-remover').classList.remove('hidden'); document.getElementById('modal-remover').classList.add('flex')">
                                    <span className="material-icons-round text-sm">
                                      delete
                                    </span>
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Preview do Anexo
                    </h3>
                    <span className="material-icons-round text-slate-400 text-[18px] cursor-not-allowed">
                      fullscreen
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] bg-slate-50 dark:bg-slate-900/40 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-8 text-center border-dashed">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300 dark:text-slate-700 mb-4">
                      <span className="material-icons-round text-3xl">
                        pageview
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest leading-tight">
                      Selecione um anexo para visualizar
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2 max-w-[180px]">
                      Clique no ícone de visualização na lista para abrir o documento aqui.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-900 dark:bg-primary/10 border border-slate-800 dark:border-primary/20 rounded-xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-icons-round text-6xl text-white dark:text-primary">
                      security
                    </span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 text-primary">
                      <span className="material-icons-round text-[20px]">
                        lock
                      </span>
                      <h4 className="text-sm font-bold uppercase tracking-widest">
                        Permissões
                        &amp;
                        Segurança
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 dark:text-slate-200 leading-relaxed mb-4">
                      Dados sensíveis — acesso restrito por perfil. Todo acesso e download é registrado para auditoria em conformidade com a LGPD.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-black/20 dark:bg-primary/5 p-2 rounded border border-white/5">
                      <span className="material-icons-round text-[14px]">
                        history
                      </span>
                      Última visualização: Hoje, 14:10 por Dr. Arthur
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Atalhos
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800 transition-all text-left">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Ver registro de auditoria
                      </span>
                      <span className="material-icons-round text-slate-400 text-[18px]">
                        open_in_new
                      </span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800 transition-all text-left">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Exportar todos os anexos (.zip)
                      </span>
                      <span className="material-icons-round text-slate-400 text-[18px]">
                        archive
                      </span>
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:bg-white dark:hover:bg-slate-800 transition-all text-left">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Relatório de integridade
                      </span>
                      <span className="material-icons-round text-slate-400 text-[18px]">
                        verified_user
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-auto py-8 text-center text-slate-400 text-[10px] uppercase tracking-[2px]">
            ClinicOps v2.4.0 — Módulo de Anamnese Segura
          </footer>
        </body>
      </html>
    </section>
  );
}
