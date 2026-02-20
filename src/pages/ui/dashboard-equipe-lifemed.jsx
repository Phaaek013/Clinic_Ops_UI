import '../../styles/ui/dashboard-equipe-lifemed.css';

export function UiDashboardEquipeLifemedPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/dashboard-equipe-lifemed">
      <html className="light" lang="en">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps Dashboard
          </title>
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script src="/placeholder.svg">
          </script>
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-dark": "#0EBDBD",
            "background-light": "#f6f8f8",
            "background-dark": "#102222",
            "surface-light": "#ffffff",
            "surface-dark": "#1A2C2C",
            "text-main": "#0d1b1b",
            "text-muted": "#4c9a9a",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"],
            "body": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123; "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-text-main antialiased h-screen flex overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-surface-light border-r border-[#e7f3f3] flex flex-col justify-between h-full shrink-0 z-20 hidden lg:flex">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 pb-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/20 flex items-center justify-center rounded-lg size-10 text-primary-dark">
                    <span className="material-symbols-outlined">
                      local_hospital
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-text-main text-lg font-bold leading-tight">
                      LifeMed
                    </h1>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wide">
                      ClinicOps
                    </p>
                  </div>
                </div>
                {/* Nav Items */}
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 border-l-4 border-primary text-text-main group" href="#">
                    <span className="material-symbols-outlined text-primary-dark" style={{fontVariationSettings: "'FILL' 1"}}>
                      dashboard
                    </span>
                    <span className="text-sm font-semibold">
                      Dashboard
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                    <span className="text-sm font-medium">
                      Agenda
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      event_note
                    </span>
                    <span className="text-sm font-medium">
                      Agendamentos
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      group
                    </span>
                    <span className="text-sm font-medium">
                      Pacientes
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      hourglass_empty
                    </span>
                    <span className="text-sm font-medium">
                      Lista de espera
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      queue
                    </span>
                    <span className="text-sm font-medium">
                      Fila
                    </span>
                  </a>
                  <div className="my-2 border-t border-gray-100">
                  </div>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      event_available
                    </span>
                    <span className="text-sm font-medium">
                      Disponibilidade
                    </span>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-muted hover:bg-gray-50 hover:text-text-main transition-colors group" href="#">
                    <span className="material-symbols-outlined">
                      assessment
                    </span>
                    <span className="text-sm font-medium">
                      Relatórios
                    </span>
                  </a>
                </nav>
              </div>
              {/* Footer */}
              <div className="p-4 border-t border-[#e7f3f3]">
                <div className="flex items-center gap-3 px-3 py-2 mb-2">
                  <span className="material-symbols-outlined text-text-muted">
                    admin_panel_settings
                  </span>
                  <div className="flex flex-col">
                    <span className="text-text-main text-sm font-medium">
                      Painel Admin
                    </span>
                    <span className="text-[10px] text-text-muted bg-gray-100 px-1.5 py-0.5 rounded w-fit">
                      ADMINISTRADOR
                    </span>
                  </div>
                </div>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    logout
                  </span>
                  <span className="text-sm font-medium">
                    Sair
                  </span>
                </a>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Topbar */}
            <header className="h-16 bg-surface-light border-b border-[#e7f3f3] flex items-center justify-between px-6 shrink-0 z-10">
              {/* Mobile Menu Toggle (Visible only on mobile) */}
              <button className="lg:hidden mr-4 text-text-main">
                <span className="material-symbols-outlined">
                  menu
                </span>
              </button>
              {/* Left: Title & Date Controls */}
              <div className="flex items-center gap-6">
                <h2 className="text-xl font-bold text-text-main hidden md:block">
                  Dashboard
                </h2>
                <div className="h-6 w-px bg-gray-200 hidden md:block">
                </div>
                <div className="flex items-center gap-2 bg-background-light p-1 rounded-lg border border-gray-200">
                  <button className="px-3 py-1 bg-white shadow-sm rounded border border-gray-100 text-xs font-semibold text-text-main hover:bg-gray-50">
                    Hoje
                  </button>
                  <div className="flex items-center gap-2 px-2">
                    <span className="material-symbols-outlined text-text-muted text-[18px]">
                      calendar_today
                    </span>
                    <span className="text-sm font-medium text-text-main">
                      14 Out, 2023
                    </span>
                    <span className="material-symbols-outlined text-text-muted text-[16px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              {/* Center/Right: Actions */}
              <div className="flex items-center gap-4 flex-1 justify-end">
                {/* Pro Filter */}
                <div className="hidden md:flex items-center gap-2 max-w-[200px] w-full">
                  <div className="relative w-full group">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted text-[20px]">
                      stethoscope
                    </span>
                    <select className="w-full bg-background-light border-none rounded-lg py-2 pl-10 pr-8 text-sm font-medium text-text-main focus:ring-1 focus:ring-primary cursor-pointer hover:bg-gray-100 transition-colors">
                      <option>
                        Todos Profissionais
                      </option>
                      <option>
                        Dr. Roberto Silva
                      </option>
                      <option>
                        Dra. Ana Costa
                      </option>
                    </select>
                  </div>
                </div>
                {/* Patient Search */}
                <div className="relative w-full max-w-[240px] hidden sm:block">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted text-[20px]">
                    search
                  </span>
                  <input className="w-full bg-background-light border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary placeholder-text-muted/70" placeholder="Buscar paciente..." type="text" />
                </div>
                {/* Notifications */}
                <button className="relative p-2 text-text-muted hover:text-text-main hover:bg-gray-100 rounded-full transition-colors">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white">
                  </span>
                </button>
                {/* User Profile */}
                <div className="flex items-center gap-3 pl-2 border-l border-gray-200 ml-2">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-text-main leading-none">
                      Admin
                    </p>
                    <p className="text-xs text-text-muted leading-none mt-1">
                      Gestor
                    </p>
                  </div>
                  <button className="size-9 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white shadow-sm" data-alt="Avatar do usuário logado" style={{backgroundImage: "url('/placeholder.svg')"}}>
                  </button>
                </div>
              </div>
            </header>
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#f8fcfc]">
              <div className="max-w-7xl mx-auto flex flex-col gap-6">
                {/* ROW 1: KPI Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Stat 1 */}
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute right-[-10px] top-[-10px] p-4 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-primary text-4xl opacity-50">
                        calendar_today
                      </span>
                    </div>
                    <p className="text-text-muted text-sm font-medium z-10">
                      Agendamentos hoje
                    </p>
                    <div className="flex items-end gap-2 z-10">
                      <h3 className="text-3xl font-bold text-text-main">
                        42
                      </h3>
                      <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
                        <span className="material-symbols-outlined text-[12px] mr-0.5">
                          trending_up
                        </span>
                        +5%
                      </span>
                    </div>
                  </div>
                  {/* Stat 2 */}
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute right-[-10px] top-[-10px] p-4 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                      <span className="material-symbols-outlined text-orange-400 text-4xl opacity-50">
                        pending_actions
                      </span>
                    </div>
                    <p className="text-text-muted text-sm font-medium z-10">
                      Pendentes confirmação
                    </p>
                    <div className="flex items-end gap-2 z-10">
                      <h3 className="text-3xl font-bold text-text-main">
                        8
                      </h3>
                      <span className="text-orange-500 text-xs font-bold px-1.5 py-0.5 rounded mb-1">
                        Ação necessária
                      </span>
                    </div>
                  </div>
                  {/* Stat 3 */}
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute right-[-10px] top-[-10px] p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                      <span className="material-symbols-outlined text-blue-400 text-4xl opacity-50">
                        hourglass_top
                      </span>
                    </div>
                    <p className="text-text-muted text-sm font-medium z-10">
                      Lista de espera
                    </p>
                    <div className="flex items-end gap-2 z-10">
                      <h3 className="text-3xl font-bold text-text-main">
                        12
                      </h3>
                      <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded mb-1">
                        +2 novos
                      </span>
                    </div>
                  </div>
                  {/* Stat 4 */}
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute right-[-10px] top-[-10px] p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined text-red-400 text-4xl opacity-50">
                        event_busy
                      </span>
                    </div>
                    <p className="text-text-muted text-sm font-medium z-10">
                      Faltas ontem
                    </p>
                    <div className="flex items-end gap-2 z-10">
                      <h3 className="text-3xl font-bold text-text-main">
                        3
                      </h3>
                      <span className="text-text-muted text-xs font-medium mb-1">
                        vs 2 semana passada
                      </span>
                    </div>
                  </div>
                </div>
                {/* ROW 2: Main Grid (Agenda + Queue) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Agenda (Wider) */}
                  <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-main">
                        Agenda de hoje
                      </h3>
                      <button className="bg-primary hover:bg-primary-dark text-black text-sm font-bold py-2 px-4 rounded-lg shadow-sm shadow-primary/20 flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-[20px]">
                          add
                        </span>
                        Novo Agendamento
                      </button>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex-1 min-h-[400px]">
                      {/* Filters */}
                      <div className="px-5 py-3 border-b border-gray-100 flex gap-3 overflow-x-auto hide-scrollbar">
                        <button className="px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold whitespace-nowrap border border-primary/20">
                          Todos (42)
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-gray-50 text-text-muted hover:bg-gray-100 text-xs font-bold whitespace-nowrap border border-transparent">
                          Confirmados (24)
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-gray-50 text-text-muted hover:bg-gray-100 text-xs font-bold whitespace-nowrap border border-transparent">
                          Pendentes (8)
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-gray-50 text-text-muted hover:bg-gray-100 text-xs font-bold whitespace-nowrap border border-transparent">
                          Finalizados (10)
                        </button>
                      </div>
                      {/* Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead className="bg-gray-50/50 text-text-muted text-xs uppercase tracking-wider font-semibold">
                            <tr>
                              <th className="px-5 py-4 w-20">
                                Horário
                              </th>
                              <th className="px-5 py-4">
                                Paciente
                              </th>
                              <th className="px-5 py-4">
                                Procedimento
                              </th>
                              <th className="px-5 py-4 hidden sm:table-cell">
                                Profissional
                              </th>
                              <th className="px-5 py-4">
                                Status
                              </th>
                              <th className="px-5 py-4 text-right">
                                Ações
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {/* Row 1 */}
                            <tr className="hover:bg-[#f8fcfc] transition-colors group">
                              <td className="px-5 py-3 font-bold text-text-main text-sm">
                                08:00
                              </td>
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Avatar paciente Maria" style={{backgroundImage: "url('/placeholder.svg')"}}>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-text-main">
                                      Maria Silva
                                    </p>
                                    <p className="text-xs text-text-muted">
                                      Particular
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-3 text-sm text-text-main">
                                Consulta Cardiologia
                              </td>
                              <td className="px-5 py-3 text-sm text-text-muted hidden sm:table-cell">
                                Dr. Roberto
                              </td>
                              <td className="px-5 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                  <span className="size-1.5 rounded-full bg-emerald-500">
                                  </span>
                                  Confirmado
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right">
                                <button className="text-text-muted hover:text-text-main p-1 rounded-md hover:bg-gray-100">
                                  <span className="material-symbols-outlined">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-[#f8fcfc] transition-colors group">
                              <td className="px-5 py-3 font-bold text-text-main text-sm">
                                08:30
                              </td>
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                                    JP
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-text-main">
                                      João Pereira
                                    </p>
                                    <p className="text-xs text-text-muted">
                                      Unimed
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-3 text-sm text-text-main">
                                Retorno Exames
                              </td>
                              <td className="px-5 py-3 text-sm text-text-muted hidden sm:table-cell">
                                Dra. Ana
                              </td>
                              <td className="px-5 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                  <span className="size-1.5 rounded-full bg-blue-500">
                                  </span>
                                  Na Recepção
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right">
                                <button className="text-text-muted hover:text-text-main p-1 rounded-md hover:bg-gray-100">
                                  <span className="material-symbols-outlined">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-[#f8fcfc] transition-colors group">
                              <td className="px-5 py-3 font-bold text-text-main text-sm">
                                09:00
                              </td>
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Avatar paciente Carlos" style={{backgroundImage: "url('/placeholder.svg')"}}>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-text-main">
                                      Carlos Souza
                                    </p>
                                    <p className="text-xs text-text-muted">
                                      Particular
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-3 text-sm text-text-main">
                                Ecocardiograma
                              </td>
                              <td className="px-5 py-3 text-sm text-text-muted hidden sm:table-cell">
                                Dr. Roberto
                              </td>
                              <td className="px-5 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">
                                  <span className="size-1.5 rounded-full bg-orange-500">
                                  </span>
                                  Pendente
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right">
                                <button className="text-text-muted hover:text-text-main p-1 rounded-md hover:bg-gray-100">
                                  <span className="material-symbols-outlined">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-[#f8fcfc] transition-colors group">
                              <td className="px-5 py-3 font-bold text-text-main text-sm">
                                09:30
                              </td>
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="size-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
                                    LG
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-text-main">
                                      Luana Gomes
                                    </p>
                                    <p className="text-xs text-text-muted">
                                      Bradesco Saúde
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-3 text-sm text-text-main">
                                Consulta Dermatologia
                              </td>
                              <td className="px-5 py-3 text-sm text-text-muted hidden sm:table-cell">
                                Dra. Ana
                              </td>
                              <td className="px-5 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                                  <span className="size-1.5 rounded-full bg-gray-400">
                                  </span>
                                  Finalizado
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right">
                                <button className="text-text-muted hover:text-text-main p-1 rounded-md hover:bg-gray-100">
                                  <span className="material-symbols-outlined">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Pagination / Footer */}
                      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-center">
                        <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                          Ver agenda completa
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Right Column: Queue (Narrower) */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          queue_music
                        </span>
                        Fila agora
                      </h3>
                      <a className="text-xs font-bold text-primary hover:underline" href="#">
                        Abrir Fila
                      </a>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center relative overflow-hidden">
                      {/* Decorative background circle */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50">
                      </div>
                      <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-2">
                        Senha Atual
                      </p>
                      <div className="text-6xl font-black text-text-main tracking-tight mb-6">
                        A042
                      </div>
                      <div className="w-full grid grid-cols-2 gap-3 mb-6">
                        <button className="col-span-2 bg-primary hover:bg-primary-dark text-black font-bold py-3 px-4 rounded-lg shadow-sm shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined">
                            campaign
                          </span>
                          Chamar
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-text-main font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                          Em atendimento
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-text-main font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                          Finalizar
                        </button>
                      </div>
                      <div className="w-full pt-4 border-t border-gray-100">
                        <p className="text-xs text-text-muted font-medium text-left mb-3 pl-1">
                          Próximas senhas:
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-sm font-bold text-text-main whitespace-nowrap">
                            A043
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-sm font-bold text-text-main whitespace-nowrap">
                            A044
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-sm font-bold text-text-main whitespace-nowrap">
                            N102
                          </div>
                          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-sm font-bold text-text-muted whitespace-nowrap">
                            ...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ROW 3: Tasks Lists */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                  {/* Task 1: Pendencies */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-orange-50/30">
                      <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-400 text-[20px]">
                          mark_chat_unread
                        </span>
                        Pendências de confirmação
                      </h3>
                      <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">
                        8
                      </span>
                    </div>
                    <div className="p-2 flex-1">
                      <ul className="flex flex-col">
                        {/* Item 1 */}
                        <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs">
                              CS
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-text-main">
                                Carlos Souza
                              </p>
                              <p className="text-xs text-text-muted">
                                Hoje, 09:00 - Ecocardiograma
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="size-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Confirmar">
                              <span className="material-symbols-outlined text-[18px]">
                                check
                              </span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" title="Ver detalhes">
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </li>
                        {/* Item 2 */}
                        <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                              MA
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-text-main">
                                Mariana Alves
                              </p>
                              <p className="text-xs text-text-muted">
                                Hoje, 14:15 - Retorno
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="size-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors" title="Confirmar">
                              <span className="material-symbols-outlined text-[18px]">
                                check
                              </span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" title="Ver detalhes">
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="px-5 py-3 border-t border-gray-100 text-center">
                      <button className="text-xs font-bold text-text-muted hover:text-primary transition-colors">
                        Ver todas pendências
                      </button>
                    </div>
                  </div>
                  {/* Task 2: Waitlist */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
                    <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-blue-50/30">
                      <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-400 text-[20px]">
                          person_add
                        </span>
                        Lista de espera (Oportunidades)
                      </h3>
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                        2
                      </span>
                    </div>
                    <div className="p-2 flex-1">
                      <ul className="flex flex-col">
                        {/* Item 1 */}
                        <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition-colors border-l-2 border-transparent hover:border-blue-400">
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-text-main">
                              Fernando Torres
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 rounded">
                                Cardiologia
                              </span>
                              <span className="text-xs text-text-muted">
                                Prefere manhã
                              </span>
                            </div>
                          </div>
                          <button className="text-xs font-bold text-primary hover:text-primary-dark border border-primary/30 hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              calendar_add_on
                            </span>
                            Agendar
                          </button>
                        </li>
                        {/* Item 2 */}
                        <li className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition-colors border-l-2 border-transparent hover:border-blue-400">
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-text-main">
                              Beatriz Lima
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 rounded">
                                Dermatologia
                              </span>
                              <span className="text-xs text-text-muted">
                                Qualquer horário
                              </span>
                            </div>
                          </div>
                          <button className="text-xs font-bold text-primary hover:text-primary-dark border border-primary/30 hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              calendar_add_on
                            </span>
                            Agendar
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="px-5 py-3 border-t border-gray-100 text-center">
                      <button className="text-xs font-bold text-text-muted hover:text-primary transition-colors">
                        Gerenciar lista completa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </section>
  );
}
