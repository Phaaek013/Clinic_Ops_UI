import '../../styles/ui/preenchimento-de-anamnese-formulario-p02b.css';

export function UiPreenchimentoDeAnamneseFormularioP02bPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/preenchimento-de-anamnese-formulario-p02b">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            P02b - Formulário — Anamnese Segura | ClinicOps
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
            borderRadius: &#123;"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"&#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display">
          <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 dark:text-slate-400">
                    <ol className="flex items-center space-x-2">
                      <li>
                        Pacientes
                      </li>
                      <li>
                        <span className="material-icons-round text-xs">
                          chevron_right
                        </span>
                      </li>
                      <li>
                        Anamnese Segura
                      </li>
                      <li>
                        <span className="material-icons-round text-xs">
                          chevron_right
                        </span>
                      </li>
                      <li>
                        Novo registro
                      </li>
                      <li>
                        <span className="material-icons-round text-xs">
                          chevron_right
                        </span>
                      </li>
                      <li className="text-primary font-semibold">
                        Formulário
                      </li>
                    </ol>
                  </nav>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded">
                      RASCUNHO
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      Formulário — Anamnese Segura
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                      <span className="material-icons-round text-sm">
                        person
                      </span>
                      Paciente: Ricardo Silva | ID: 994.002.312-00
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium">
                      <span className="material-icons-round text-sm">
                        event
                      </span>
                      Agendamento: 24 Out 2023 • 14:30 • Consulta Geral
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium">
                      <span className="material-icons-round text-sm">
                        description
                      </span>
                      Modelo: Anamnese Geral (V1)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg text-blue-700 dark:text-blue-300 text-sm">
                  <span className="material-icons-round text-lg">
                    verified_user
                  </span>
                  <p className="font-medium text-xs sm:text-sm">
                    Dados sensíveis — acesso controlado por perfil; registros de acesso podem ser gerados conforme política.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            <div className="mb-10 max-w-md mx-auto">
              <div className="flex items-center">
                <div className="flex items-center relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-10 w-10 flex items-center justify-center py-3 border-2 border-primary bg-primary text-white">
                    <span className="material-icons-round">
                      check
                    </span>
                  </div>
                  <div className="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-bold uppercase text-slate-500">
                    Modelo
                  </div>
                </div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-primary">
                </div>
                <div className="flex items-center relative">
                  <div className="rounded-full transition duration-500 ease-in-out h-10 w-10 flex items-center justify-center py-3 border-2 border-primary text-primary font-bold">
                    2
                  </div>
                  <div className="absolute top-0 -ml-10 text-center mt-12 w-32 text-xs font-bold uppercase text-primary">
                    Formulário
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
              <div className="lg:col-span-8 space-y-6">
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" id="identificacao">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      badge
                    </span>
                    <h2 className="text-lg font-bold">
                      Identificação
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Nome Social
                      </label>
                      <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Como o paciente deseja ser chamado" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Acompanhante
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <input className="w-full bg-slate-50 dark:bg-slate-800 border-red-300 dark:border-red-900 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Nome do acompanhante" type="text" />
                      <p className="text-[11px] text-red-500 font-medium">
                        Campo obrigatório
                      </p>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" id="queixa">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      medical_information
                    </span>
                    <h2 className="text-lg font-bold">
                      Queixa Principal
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Motivo da consulta
                    </label>
                    <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Descreva sucintamente a queixa principal..." rows="3">
                    </textarea>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" id="hda">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      history_edu
                    </span>
                    <h2 className="text-lg font-bold">
                      História da Doença Atual (HDA)
                    </h2>
                  </div>
                  <div className="space-y-1.5">
                    <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Início, evolução, tratamentos prévios..." rows="5">
                    </textarea>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" id="habitos">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      self_care
                    </span>
                    <h2 className="text-lg font-bold">
                      Hábitos
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-primary/30 transition-colors">
                      <input className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Tabagismo
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-primary/30 transition-colors">
                      <input className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Etilismo
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-primary/30 transition-colors">
                      <input className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Sedentarismo
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-primary/30 transition-colors">
                      <input className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Dieta
                      </span>
                    </label>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-red-500" id="alergias">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-red-500">
                      warning
                    </span>
                    <h2 className="text-lg font-bold">
                      Alergias e Reações
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-bold">
                        DIPIRONA
                        <button className="material-icons-round text-xs hover:text-red-900">
                          close
                        </button>
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-bold">
                        PENICILINA
                        <button className="material-icons-round text-xs hover:text-red-900">
                          close
                        </button>
                      </span>
                    </div>
                    <div className="relative">
                      <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm pr-12" placeholder="Adicionar nova alergia..." type="text" />
                      <button className="absolute right-2 top-1.5 p-1 bg-slate-200 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                        <span className="material-icons-round text-sm">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm" id="medicacoes">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      medication
                    </span>
                    <h2 className="text-lg font-bold">
                      Medicações em uso
                    </h2>
                  </div>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Liste medicamentos, dosagem e frequência..." rows="3">
                  </textarea>
                </section>
                <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-20" id="observacoes">
                  <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="material-icons-round text-primary">
                      notes
                    </span>
                    <h2 className="text-lg font-bold">
                      Observações Complementares
                    </h2>
                  </div>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Informações adicionais relevantes..." rows="3">
                  </textarea>
                </section>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="sticky top-44 space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Resumo do registro
                      </h3>
                    </div>
                    <div className="p-5 space-y-5">
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Paciente
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                            <span className="material-icons-round text-slate-400 text-3xl">
                              account_circle
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">
                              Ricardo Silva
                            </p>
                            <p className="text-xs text-slate-500">
                              ID: 994.002.312-00
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <p className="text-[10px] text-slate-500 uppercase font-bold">
                              Idade
                            </p>
                            <p className="text-sm font-semibold">
                              42 anos
                            </p>
                          </div>
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <p className="text-[10px] text-slate-500 uppercase font-bold">
                              Sexo
                            </p>
                            <p className="text-sm font-semibold">
                              Masculino
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Profissional Responsável
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-icons-round text-sm">
                              medical_services
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                              Dra. Ana Costa
                            </p>
                            <p className="text-[11px] text-slate-500">
                              CRM-SP 123.456
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between text-xs py-1">
                          <span className="text-slate-500">
                            Última anamnese
                          </span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            12 Jan 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Atalhos da Seção
                      </h3>
                    </div>
                    <nav className="p-2 space-y-1">
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg group" href="#identificacao">
                        <span className="material-icons-round text-lg">
                          badge
                        </span>
                        Identificação
                        <span className="ml-auto material-icons-round text-xs opacity-0 group-hover:opacity-100">
                          arrow_forward
                        </span>
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" href="#queixa">
                        <span className="material-icons-round text-lg">
                          medical_information
                        </span>
                        Queixa Principal
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" href="#hda">
                        <span className="material-icons-round text-lg">
                          history_edu
                        </span>
                        História Atual (HDA)
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" href="#habitos">
                        <span className="material-icons-round text-lg">
                          self_care
                        </span>
                        Hábitos
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" href="#alergias">
                        <span className="material-icons-round text-lg text-red-400">
                          warning
                        </span>
                        Alergias
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" href="#medicacoes">
                        <span className="material-icons-round text-lg">
                          medication
                        </span>
                        Medicações
                      </a>
                    </nav>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
                    <div className="flex gap-3">
                      <span className="material-icons-round text-slate-400">
                        shield
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                          Permissões
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          Visibilidade restrita ao perfil assistencial e administrativo conforme política interna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                  <span className="material-icons-round text-sm">
                    cloud_done
                  </span>
                  <span className="text-xs font-medium italic">
                    Rascunho salvo há 5s
                  </span>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors uppercase tracking-wide">
                    Cancelar
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-primary border border-primary/30 hover:bg-primary/5 rounded-lg transition-colors uppercase tracking-wide">
                    Salvar rascunho
                  </button>
                  <button className="flex-1 md:flex-none px-8 py-2.5 bg-primary hover:bg-primary/90 text-slate-900 text-sm font-extrabold rounded-lg shadow-lg shadow-primary/20 transition-all uppercase tracking-wide flex items-center justify-center gap-2">
                    Finalizar Registro
                    <span className="material-icons-round text-lg">
                      check_circle
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
