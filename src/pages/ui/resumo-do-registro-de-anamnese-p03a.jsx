import '../../styles/ui/resumo-do-registro-de-anamnese-p03a.css';

export function UiResumoDoRegistroDeAnamneseP03aPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/resumo-do-registro-de-anamnese-p03a">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Resumo do Registro de Anamnese (P03a) - ClinicOps
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
        <body className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 antialiased min-h-screen">
          <nav className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-white text-xl">
                  health_and_safety
                </span>
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                ClinicOps
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-icons-outlined">
                  notifications
                </span>
              </button>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800">
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs font-semibold leading-none">
                    Dr. Ricardo Silva
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Administrador
                  </p>
                </div>
                <img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" src="/placeholder.svg" />
              </div>
            </div>
          </nav>
          <main className="max-w-[1440px] mx-auto p-6">
            <header className="mb-6">
              <nav className="flex text-xs text-slate-500 dark:text-slate-400 gap-2 mb-2">
                <span>
                  Pacientes
                </span>
                <span>
                  /
                </span>
                <span>
                  Anamnese Segura
                </span>
                <span>
                  /
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">
                  Registro #AG-4022
                </span>
              </nav>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Registro de Anamnese Segura
                  </h1>
                  <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    RASCUNHO
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                    Voltar
                  </button>
                  <button className="bg-primary hover:bg-primary/90 text-slate-900 px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/10">
                    <span className="material-icons-outlined text-lg leading-none">
                      check_circle
                    </span>
                    Finalizar registro
                  </button>
                  <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                    <span className="material-icons-outlined">
                      more_vert
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium border border-slate-200 dark:border-slate-700">
                  <span className="material-icons-outlined text-base text-slate-400">
                    person
                  </span>
                  <span className="text-slate-500">
                    Paciente:
                  </span>
                  <span className="text-slate-900 dark:text-slate-100 uppercase">
                    Carlos Eduardo Santos
                  </span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium border border-slate-200 dark:border-slate-700">
                  <span className="material-icons-outlined text-base text-slate-400">
                    calendar_today
                  </span>
                  <span className="text-slate-500">
                    Agendamento:
                  </span>
                  <span className="text-slate-900 dark:text-slate-100">
                    #9920 - 14/10/2023
                  </span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium border border-slate-200 dark:border-slate-700">
                  <span className="material-icons-outlined text-base text-slate-400">
                    medication
                  </span>
                  <span className="text-slate-500">
                    Responsável:
                  </span>
                  <span className="text-slate-900 dark:text-slate-100">
                    Dra. Helena Martins
                  </span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium border border-slate-200 dark:border-slate-700">
                  <span className="material-icons-outlined text-base text-slate-400">
                    assignment
                  </span>
                  <span className="text-slate-500">
                    Modelo:
                  </span>
                  <span className="text-slate-900 dark:text-slate-100">
                    Check-up Cardiovascular V3
                  </span>
                </div>
              </div>
            </header>
            <div className="border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
              <div className="flex gap-8 min-w-max">
                <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary transition-all">
                  Resumo
                </button>
                <button className="pb-4 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all border-b-2 border-transparent">
                  Formulário
                </button>
                <button className="pb-4 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all border-b-2 border-transparent flex items-center gap-1.5">
                  Anexos
                  <span className="bg-slate-100 dark:bg-slate-800 px-1.5 rounded text-[10px]">
                    2
                  </span>
                </button>
                <button className="pb-4 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all border-b-2 border-transparent">
                  Histórico
                  &amp;
                  Auditoria
                </button>
                <button className="pb-4 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all border-b-2 border-transparent">
                  Exportar / Imprimir
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <span className="material-icons-outlined text-primary">
                        info
                      </span>
                      Visão geral do registro
                    </h2>
                    <div className="flex items-center gap-2 text-[10px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-widest bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded border border-amber-100 dark:border-amber-900/30">
                      <span className="material-icons-outlined text-xs">
                        shield
                      </span>
                      LGPD / Dados sensíveis
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Status
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500">
                        </span>
                        <span className="text-sm font-semibold">
                          Edição em Aberto
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Criado em
                      </p>
                      <p className="text-sm font-semibold">
                        14/10/2023 - 09:12
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Última Edição
                      </p>
                      <p className="text-sm font-semibold">
                        Hoje, 10:45
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Origem
                      </p>
                      <p className="text-sm font-semibold">
                        Portal Web (Adm)
                      </p>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                    <span className="material-icons-outlined text-primary">
                      description
                    </span>
                    Resumo operacional (prévia)
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase">
                          Queixa Principal e Duração
                        </span>
                        <a className="text-primary text-[10px] font-bold uppercase hover:underline" href="#">
                          Ver no Formulário
                        </a>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Paciente relata dores precordiais leves após esforço físico há cerca de 3 semanas...
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase">
                          Alergias e Restrições
                        </span>
                        <a className="text-primary text-[10px] font-bold uppercase hover:underline" href="#">
                          Ver no Formulário
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded text-[11px] font-bold">
                          PENICILINA
                        </span>
                        <span className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded text-[11px] font-bold">
                          CONTRASTE IODADO
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                    <span className="material-icons-outlined text-primary">
                      rule
                    </span>
                    Checklist de completude
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Dados de Identificação
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Completo
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Histórico Familiar
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Completo
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Exame Físico Geral
                      </span>
                      <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Pendente
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Exames Complementares
                      </span>
                      <span className="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        N.A.
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Hábitos de Vida
                      </span>
                      <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Pendente
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Antecedentes Clínicos
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                        Completo
                      </span>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold flex items-center gap-2 mb-8">
                    <span className="material-icons-outlined text-primary">
                      history
                    </span>
                    Linha do tempo do registro
                  </h2>
                  <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                    <div className="relative flex items-center justify-between gap-10">
                      <div className="flex items-center gap-4">
                        <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-slate-900">
                          <span className="material-icons-outlined text-sm">
                            edit
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold">
                            Edição de Seção (Exame Físico)
                          </h4>
                          <p className="text-xs text-slate-500">
                            Realizado por Dra. Helena Martins
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        Hoje, 10:45
                      </span>
                    </div>
                    <div className="relative flex items-center justify-between gap-10">
                      <div className="flex items-center gap-4">
                        <div className="relative z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                          <span className="material-icons-outlined text-sm">
                            attachment
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold">
                            Anexo Adicionado
                          </h4>
                          <p className="text-xs text-slate-500">
                            Exame_Laboratorial_02.pdf
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        Hoje, 10:20
                      </span>
                    </div>
                    <div className="relative flex items-center justify-between gap-10">
                      <div className="flex items-center gap-4">
                        <div className="relative z-10 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                          <span className="material-icons-outlined text-sm">
                            add
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold">
                            Criação do Registro
                          </h4>
                          <p className="text-xs text-slate-500">
                            Fluxo de triagem inicial
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        14/10/2023, 09:12
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div className="space-y-6">
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-amber-500">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Itens pendentes (2)
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                      <span className="material-icons-outlined text-amber-500 text-lg">
                        error_outline
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                          Peso e Altura não informados
                        </p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5">
                          Obrigatório para cálculo de IMC
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                      <span className="material-icons-outlined text-amber-500 text-lg">
                        error_outline
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                          Frequência Cardíaca
                        </p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400 mt-0.5">
                          Campo em branco no exame físico
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                    Abrir no Formulário
                  </button>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Controle de versão
                  </h2>
                  <div className="flex items-center justify-between p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-500">
                        <span className="material-icons-outlined">
                          history_edu
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">
                          Versão 1.0
                        </p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">
                          Estado: Rascunho
                        </p>
                      </div>
                    </div>
                    <span className="material-icons-outlined text-slate-300">
                      chevron_right
                    </span>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                    Ações rápidas
                  </h2>
                  <div className="space-y-1">
                    <a className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group" href="#">
                      <span className="material-icons-outlined text-lg group-hover:scale-110 transition-transform">
                        attach_file
                      </span>
                      <span className="text-sm font-medium">
                        Adicionar novo anexo
                      </span>
                    </a>
                    <a className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group" href="#">
                      <span className="material-icons-outlined text-lg group-hover:scale-110 transition-transform">
                        list_alt
                      </span>
                      <span className="text-sm font-medium">
                        Ver logs de auditoria
                      </span>
                    </a>
                    <a className="flex items-center gap-3 p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group" href="#">
                      <span className="material-icons-outlined text-lg group-hover:scale-110 transition-transform">
                        file_download
                      </span>
                      <span className="text-sm font-medium">
                        Exportar como PDF
                      </span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <footer className="mt-12 py-6 border-t border-slate-200 dark:border-slate-800 px-6 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Sistema de Gestão Operacional Seguro
            </p>
          </footer>
        </body>
      </html>
    </section>
  );
}
