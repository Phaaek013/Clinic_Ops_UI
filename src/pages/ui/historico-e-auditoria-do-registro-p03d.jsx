import '../../styles/ui/historico-e-auditoria-do-registro-p03d.css';

export function UiHistoricoEAuditoriaDoRegistroP03dPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/historico-e-auditoria-do-registro-p03d">
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Histórico e Auditoria - ClinicOps
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
        <body className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 antialiased min-h-screen">
          {/* Header Section */}
          <header className="bg-white dark:bg-[#152a2a] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
            <div className="max-w-screen-2xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-1">
                    <span>
                      Pacientes
                    </span>
                    <span className="material-icons-round text-sm">
                      chevron_right
                    </span>
                    <span>
                      Anamnese Segura
                    </span>
                    <span className="material-icons-round text-sm">
                      chevron_right
                    </span>
                    <span className="text-primary font-medium underline underline-offset-4">
                      Registro #AG-4022
                    </span>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                      Registro de Anamnese Segura
                    </h1>
                    <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded">
                      Rascunho
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-round mr-2 text-lg">
                      arrow_back
                    </span>
                    Voltar
                  </button>
                  <button className="flex items-center px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold hover:brightness-105 transition-all shadow-sm shadow-primary/20">
                    Finalizar registro
                    <span className="material-icons-round ml-2 text-lg">
                      check_circle
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Tabs Navigation */}
            <div className="max-w-screen-2xl mx-auto px-6">
              <div className="flex space-x-8">
                <button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  Resumo
                </button>
                <button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  Formulário
                </button>
                <button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  Anexos
                </button>
                <button className="py-3 text-sm font-bold border-b-2 border-primary text-slate-900 dark:text-white">
                  Histórico
                  &amp;
                  Auditoria
                </button>
                <button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  Exportar/Imprimir
                </button>
              </div>
            </div>
          </header>
          <main className="max-w-screen-2xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Left Column: Main Audit Trail */}
              <div className="flex-grow space-y-6">
                {/* Filters Bar */}
                <div className="bg-white dark:bg-[#152a2a] p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-end">
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Período
                    </label>
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-10">
                      <input className="bg-transparent border-none text-xs focus:ring-0 w-full px-3" type="date" />
                      <span className="text-slate-300 px-1">
                        —
                      </span>
                      <input className="bg-transparent border-none text-xs focus:ring-0 w-full px-3" type="date" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Tipo de Evento
                    </label>
                    <select className="w-full bg-transparent border-slate-200 dark:border-slate-700 rounded-lg text-xs h-10 focus:ring-primary focus:border-primary">
                      <option>
                        Todos os eventos
                      </option>
                      <option>
                        Acesso / Visualização
                      </option>
                      <option>
                        Edição de Conteúdo
                      </option>
                      <option>
                        Exportação de Dados
                      </option>
                      <option>
                        Mudança de Status
                      </option>
                    </select>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Usuário
                    </label>
                    <div className="relative">
                      <span className="material-icons-round absolute left-3 top-2.5 text-slate-400 text-sm">
                        search
                      </span>
                      <input className="w-full pl-9 bg-transparent border-slate-200 dark:border-slate-700 rounded-lg text-xs h-10 focus:ring-primary focus:border-primary" placeholder="Nome ou cargo..." type="text" />
                    </div>
                  </div>
                  <button className="h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
                    Limpar Filtros
                  </button>
                </div>
                {/* Audit Table */}
                <div className="bg-white dark:bg-[#152a2a] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Evento
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Usuário
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Data / Hora
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          Origem
                        </th>
                        <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {/* Row 1 */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                              <span className="material-icons-round text-sm">
                                visibility
                              </span>
                            </span>
                            <span className="text-xs font-semibold">
                              Visualização de Registro
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">
                              Dr. Ricardo Silva
                            </span>
                            <span className="text-[10px] text-slate-500">
                              Médico (CRM-SP 123456)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs">
                              15 Jun 2024
                            </span>
                            <span className="text-[10px] text-slate-400">
                              14:22:10
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-medium rounded-full">
                            Web App
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-primary hover:underline">
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                              <span className="material-icons-round text-sm">
                                edit
                              </span>
                            </span>
                            <span className="text-xs font-semibold">
                              Alteração de Campo
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">
                              Dr. Ricardo Silva
                            </span>
                            <span className="text-[10px] text-slate-500">
                              Médico (CRM-SP 123456)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs">
                              15 Jun 2024
                            </span>
                            <span className="text-[10px] text-slate-400">
                              14:18:05
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-medium rounded-full">
                            Web App
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-primary hover:underline">
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                              <span className="material-icons-round text-sm">
                                picture_as_pdf
                              </span>
                            </span>
                            <span className="text-xs font-semibold">
                              Exportação de PDF
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">
                              Mariana Costa
                            </span>
                            <span className="text-[10px] text-slate-500">
                              Coord. Administrativa
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs">
                              14 Jun 2024
                            </span>
                            <span className="text-[10px] text-slate-400">
                              09:45:33
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-medium rounded-full">
                            Portal Admin
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-primary hover:underline">
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                              <span className="material-icons-round text-sm">
                                create_new_folder
                              </span>
                            </span>
                            <span className="text-xs font-semibold">
                              Criação do Registro
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">
                              Dr. Ricardo Silva
                            </span>
                            <span className="text-[10px] text-slate-500">
                              Médico (CRM-SP 123456)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs">
                              14 Jun 2024
                            </span>
                            <span className="text-[10px] text-slate-400">
                              08:30:12
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-medium rounded-full">
                            Web App
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-xs font-bold text-primary hover:underline">
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p className="text-[10px] text-slate-500 italic flex items-center">
                    <span className="material-icons-round text-sm mr-2">
                      security
                    </span>
                    Todas as interações são registradas para fins de auditoria e conformidade com a LGPD.
                  </p>
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 disabled:opacity-50" disabled="">
                      <span className="material-icons-round text-sm">
                        chevron_left
                      </span>
                    </button>
                    <span className="text-xs font-medium px-2">
                      Página 1 de 1
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 disabled:opacity-50" disabled="">
                      <span className="material-icons-round text-sm">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Right Column: Sidebar Panels */}
              <aside className="w-80 space-y-6 flex-shrink-0">
                {/* Compliance Summary Card */}
                <div className="bg-white dark:bg-[#152a2a] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <span className="material-icons-round text-primary mr-2 text-lg">
                      verified_user
                    </span>
                    Resumo de Conformidade
                  </h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-lg">
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                        Acesso Controlado
                      </p>
                      <p className="text-[10px] text-emerald-600/70 dark:text-emerald-400/60 mt-1">
                        Este registro possui restrição de nível 3. Apenas usuários autorizados acessaram.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Acessos (24h)
                        </span>
                        <span className="text-xs font-bold">
                          12
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Modificações
                        </span>
                        <span className="text-xs font-bold">
                          04
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Eventos Críticos
                        </span>
                        <span className="text-xs font-bold text-emerald-500">
                          Nenhum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Version History Card */}
                <div className="bg-white dark:bg-[#152a2a] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <span className="material-icons-round text-primary mr-2 text-lg">
                      history
                    </span>
                    Histórico de Versões
                  </h3>
                  <div className="space-y-3">
                    <div className="relative pl-6 pb-4 border-l-2 border-primary/30">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20">
                      </div>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-xs font-bold">
                          v1.1 (Atual)
                        </span>
                        <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[9px] rounded font-bold uppercase">
                          Rascunho
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500">
                        15 Jun 2024 às 14:18
                      </p>
                      <p className="text-[10px] font-medium mt-1">
                        Dr. Ricardo Silva
                      </p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700">
                      </div>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-xs font-bold text-slate-500">
                          v1.0
                        </span>
                        <button className="text-[10px] font-bold text-primary hover:underline">
                          Comparar
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400">
                        14 Jun 2024 às 08:30
                      </p>
                      <p className="text-[10px] font-medium text-slate-400">
                        Sistema (Auto-save)
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary rounded-xl text-xs font-bold transition-all group">
                  <span className="material-icons-round text-lg group-hover:scale-110 transition-transform">
                    download
                  </span>
                  <span>
                    Exportar log completo (CSV)
                  </span>
                </button>
                {/* Security Reinforcement */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl">
                  <div className="flex items-center text-slate-400 mb-2">
                    <span className="material-icons-round text-sm mr-1">
                      no_encryption
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Segurança
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-slate-500">
                    Nenhuma informação clínica é exibida nesta aba. Este log armazena metadados estruturais para conformidade regulatória e trilha de auditoria clínica.
                  </p>
                </div>
              </aside>
            </div>
          </main>
          {/* Details Overlay Mockup (Simple) */}
          <div className="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-96 bg-white dark:bg-background-dark h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold">
                  Detalhes do Evento
                </h2>
                <button className="material-icons-round text-slate-400 hover:text-slate-600 transition-colors">
                  close
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">
                    Metadados Técnicos
                  </label>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg font-mono text-[10px] space-y-1">
                    <p>
                      <span className="text-primary">
                        "ip":
                      </span>
                      "189.120.45.10"
                    </p>
                    <p>
                      <span className="text-primary">
                        "session_id":
                      </span>
                      "vrtx_9921_abc8"
                    </p>
                    <p>
                      <span className="text-primary">
                        "user_agent":
                      </span>
                      "Chrome/125.0.0.0"
                    </p>
                    <p>
                      <span className="text-primary">
                        "origin":
                      </span>
                      "Brazil/São Paulo"
                    </p>
                    <p>
                      <span className="text-primary">
                        "request_id":
                      </span>
                      "req_7a1b92"
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">
                    Alterações de Dados
                  </label>
                  <div className="space-y-2">
                    <div className="p-2 border border-slate-100 dark:border-slate-800 rounded">
                      <p className="text-[10px] font-bold">
                        campo_alergias
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[10px] line-through text-red-400">
                          "Nenhuma"
                        </span>
                        <span className="material-icons-round text-xs text-slate-300">
                          arrow_forward
                        </span>
                        <span className="text-[10px] text-emerald-500">
                          "Penicilina"
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </section>
  );
}
