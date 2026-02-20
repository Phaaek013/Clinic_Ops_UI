import '../../styles/ui/disponibilidade-bloqueios.css';

export function UiDisponibilidadeBloqueiosPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/disponibilidade-bloqueios">
      <html className="light" lang="en">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps - Disponibilidade: Bloqueios
          </title>
          {/* Material Symbols */}
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Tailwind CSS */}
          <script src="/placeholder.svg">
          </script>
          {/* Theme Configuration */}
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-content": "#0d1b1b",
            "secondary": "#4c9a9a",
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "surface-light": "#ffffff",
            "surface-dark": "#1a2c2c",
            "border-light": "#e7f3f3",
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
          {/* Google Fonts */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
        </head>
        <body className="bg-background-light text-[#0d1b1b] overflow-hidden">
          <div className="flex h-screen w-full flex-row overflow-hidden">
            {/* SideNavBar */}
            <aside className="flex w-72 flex-col justify-between border-r border-border-light bg-background-light p-4 overflow-y-auto hidden md:flex shrink-0">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 px-2">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="LifeMed Logo" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#0d1b1b] text-base font-bold leading-normal">
                      LifeMed
                    </h1>
                    <p className="text-secondary text-xs font-normal leading-normal">
                      ClinicOps Admin
                    </p>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 mt-4">
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
                    <span className="material-symbols-outlined text-[#0d1b1b]">
                      dashboard
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-medium">
                      Dashboard
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
                    <span className="material-symbols-outlined text-[#0d1b1b]">
                      calendar_month
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-medium">
                      Agenda
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
                    <span className="material-symbols-outlined text-[#0d1b1b]">
                      groups
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-medium">
                      Pacientes
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#e7f3f3] text-primary-content transition-colors" href="#">
                    <span className="material-symbols-filled text-[#0d1b1b]">
                      schedule
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-bold">
                      Disponibilidade
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
                    <span className="material-symbols-outlined text-[#0d1b1b]">
                      payments
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-medium">
                      Financeiro
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-border-light group transition-colors" href="#">
                    <span className="material-symbols-outlined text-[#0d1b1b]">
                      settings
                    </span>
                    <p className="text-[#0d1b1b] text-sm font-medium">
                      Configurações
                    </p>
                  </a>
                </nav>
              </div>
              <div className="px-3">
                <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#0fd6d6] transition-colors text-primary-content text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="material-symbols-outlined text-lg">
                    add
                  </span>
                  <span className="truncate">
                    Novo Agendamento
                  </span>
                </button>
              </div>
            </aside>
            {/* Main Content */}
            <main className="flex flex-1 flex-col h-full overflow-hidden relative">
              {/* TopNavBar */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-background-light px-8 py-3 shrink-0">
                <div className="flex items-center gap-4 lg:hidden">
                  <button className="text-[#0d1b1b]">
                    <span className="material-symbols-outlined">
                      menu
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-4 flex-1 max-w-xl">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xl">
                      search
                    </span>
                    <input className="w-full bg-[#e7f3f3] border-none rounded-lg py-2 pl-10 pr-4 text-sm text-[#0d1b1b] placeholder-secondary focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="Buscar pacientes, médicos ou agendamentos..." />
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-8">
                  <button className="relative p-2 rounded-lg hover:bg-[#e7f3f3] text-[#0d1b1b] transition-colors">
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white">
                    </span>
                  </button>
                  <div className="h-8 w-[1px] bg-border-light">
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-[#0d1b1b]">
                        Dra. Ana Costa
                      </p>
                      <p className="text-xs text-secondary">
                        Administradora
                      </p>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-sm" data-alt="User Avatar" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                    </div>
                  </div>
                </div>
              </header>
              {/* Scrollable Page Content */}
              <div className="flex-1 overflow-y-auto bg-background-light">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
                  {/* Breadcrumbs & Heading */}
                  <div className="flex flex-col gap-1">
                    <nav className="flex items-center gap-2 text-sm">
                      <a className="text-secondary hover:text-primary hover:underline transition-colors" href="#">
                        Dashboard
                      </a>
                      <span className="text-secondary">
                        /
                      </span>
                      <a className="text-secondary hover:text-primary hover:underline transition-colors" href="#">
                        Disponibilidade
                      </a>
                      <span className="text-secondary">
                        /
                      </span>
                      <span className="text-[#0d1b1b] font-semibold">
                        Bloqueios
                      </span>
                    </nav>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <div className="flex flex-col">
                        <h2 className="text-3xl font-bold text-[#0d1b1b] tracking-tight">
                          Bloqueios
                        </h2>
                        <p className="text-secondary text-sm mt-1">
                          Gerencie exceções e dias sem atendimento na clínica.
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f3f3] text-secondary text-xs font-bold uppercase tracking-wider border border-[#d0eaea]">
                        <span className="material-symbols-outlined text-[16px]">
                          lock
                        </span>
                        Somente ADMIN
                      </span>
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="border-b border-border-light">
                    <div className="flex gap-8">
                      <a className="pb-3 text-sm font-medium text-secondary hover:text-[#0d1b1b] border-b-[3px] border-transparent transition-all" href="#">
                        Regras semanais
                      </a>
                      <a className="pb-3 text-sm font-bold text-[#0d1b1b] border-b-[3px] border-primary" href="#">
                        Bloqueios
                      </a>
                      <a className="pb-3 text-sm font-medium text-secondary hover:text-[#0d1b1b] border-b-[3px] border-transparent transition-all" href="#">
                        Políticas
                      </a>
                    </div>
                  </div>
                  {/* Scope Controls */}
                  <div className="bg-surface-light rounded-xl p-5 shadow-sm border border-border-light flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center flex-1">
                      <div className="flex flex-col gap-1.5 w-full md:w-auto min-w-[280px]">
                        <label className="text-xs font-bold text-secondary uppercase tracking-wide">
                          Aplicar bloqueio em
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#0d1b1b]">
                            domain
                          </span>
                          <select className="w-full bg-[#f8fcfc] border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block pl-10 p-2.5 font-medium cursor-pointer">
                            <option value="clinic">
                              Clínica LifeMed (Todos)
                            </option>
                            <option value="professional">
                              Profissional Específico
                            </option>
                          </select>
                        </div>
                      </div>
                      {/* Separator for visual structure */}
                      <div className="hidden md:block w-px h-10 bg-border-light">
                      </div>
                      <div className="flex items-center gap-2 text-secondary text-xs bg-[#f8fcfc] px-3 py-2 rounded-lg border border-border-light">
                        <span className="material-symbols-outlined text-[16px]">
                          public
                        </span>
                        Horário de Brasília (GMT-3)
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-secondary hover:text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#e7f3f3] transition-colors border border-dashed border-secondary/30 hover:border-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        content_copy
                      </span>
                      Copiar do padrão da clínica
                    </button>
                  </div>
                  {/* Main Workspace Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full pb-10">
                    {/* Left Column: Calendar Visualization */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      <div className="bg-surface-light rounded-xl shadow-sm border border-border-light p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-[#0d1b1b]">
                            Calendário
                          </h3>
                          <div className="flex gap-1">
                            <button className="p-1 rounded-md hover:bg-[#e7f3f3] text-secondary">
                              <span className="material-symbols-outlined">
                                chevron_left
                              </span>
                            </button>
                            <span className="text-sm font-semibold text-[#0d1b1b] pt-1">
                              Outubro 2023
                            </span>
                            <button className="p-1 rounded-md hover:bg-[#e7f3f3] text-secondary">
                              <span className="material-symbols-outlined">
                                chevron_right
                              </span>
                            </button>
                          </div>
                        </div>
                        {/* Calendar Grid Mockup */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                          <span className="text-xs font-medium text-secondary py-1">
                            D
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            S
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            T
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            Q
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            Q
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            S
                          </span>
                          <span className="text-xs font-medium text-secondary py-1">
                            S
                          </span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                          <span className="p-2 text-gray-300">
                            29
                          </span>
                          <span className="p-2 text-gray-300">
                            30
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            1
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            2
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            3
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            4
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            5
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            6
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            7
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            8
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            9
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            10
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            11
                          </span>
                          <div className="relative group cursor-pointer">
                            <span className="flex items-center justify-center w-full h-full text-white bg-red-400 rounded-lg shadow-sm font-bold">
                              12
                            </span>
                          </div>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            13
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            14
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            15
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            16
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            17
                          </span>
                          <div className="relative group cursor-pointer">
                            <span className="flex items-center justify-center w-full h-full text-[#0d1b1b] bg-amber-200 rounded-lg shadow-sm font-bold">
                              18
                            </span>
                          </div>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            19
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            20
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            21
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            22
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            23
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            24
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            25
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            26
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            27
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            28
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            29
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            30
                          </span>
                          <span className="p-2 text-[#0d1b1b] hover:bg-[#e7f3f3] rounded-lg cursor-pointer">
                            31
                          </span>
                          <span className="p-2 text-gray-300">
                            1
                          </span>
                          <span className="p-2 text-gray-300">
                            2
                          </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 text-xs text-secondary bg-[#f8fcfc] px-2 py-1 rounded border border-border-light cursor-pointer hover:border-primary">
                            Hoje
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-secondary bg-[#f8fcfc] px-2 py-1 rounded border border-border-light cursor-pointer hover:border-primary">
                            Próx. 7 dias
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-white bg-primary px-2 py-1 rounded border border-transparent shadow-sm font-bold">
                            Este mês
                          </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border-light flex gap-4 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-400">
                            </div>
                            <span className="text-secondary">
                              Bloqueio Total
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-amber-200">
                            </div>
                            <span className="text-secondary">
                              Parcial
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Mini Stats or Info */}
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <h4 className="text-sm font-bold text-[#0d1b1b] mb-2">
                          Resumo de Outubro
                        </h4>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-secondary">
                            Dias bloqueados:
                          </span>
                          <span className="font-bold text-[#0d1b1b]">
                            2 dias
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Right Column: List */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-[#0d1b1b]">
                          Bloqueios Cadastrados
                        </h3>
                        <button className="flex items-center gap-2 bg-primary hover:bg-[#0fd6d6] text-primary-content text-sm font-bold px-4 py-2 rounded-lg shadow-sm shadow-primary/20 transition-all active:scale-95">
                          <span className="material-symbols-outlined text-[20px]">
                            add
                          </span>
                          Novo bloqueio
                        </button>
                      </div>
                      <div className="bg-surface-light rounded-xl shadow-sm border border-border-light overflow-hidden flex flex-col h-full">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead className="bg-[#f8fcfc] border-b border-border-light">
                              <tr>
                                <th className="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider w-[240px]">
                                  Data / Período
                                </th>
                                <th className="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">
                                  Tipo
                                </th>
                                <th className="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">
                                  Escopo
                                </th>
                                <th className="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider">
                                  Motivo
                                </th>
                                <th className="py-3 px-4 text-xs font-bold text-secondary uppercase tracking-wider text-right">
                                  Ações
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light">
                              {/* Row 1 */}
                              <tr className="hover:bg-[#f8fcfc] group transition-colors">
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-start gap-3">
                                    <div className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-lg p-2 min-w-[48px]">
                                      <span className="text-xs font-bold uppercase">
                                        OUT
                                      </span>
                                      <span className="text-lg font-bold leading-none">
                                        12
                                      </span>
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="text-sm font-bold text-[#0d1b1b]">
                                        12 Out 2023
                                      </p>
                                      <span className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px]">
                                          history_toggle_off
                                        </span>
                                        Dia inteiro
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                    Bloqueio Total
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary bg-[#e7f3f3] p-1 rounded text-[18px]">
                                      domain
                                    </span>
                                    <span className="text-sm text-[#0d1b1b]">
                                      Clínica (Todos)
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="text-sm text-secondary">
                                    Feriado Nacional
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top text-right">
                                  <button className="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                      more_vert
                                    </span>
                                  </button>
                                </td>
                              </tr>
                              {/* Row 2 */}
                              <tr className="hover:bg-[#f8fcfc] group transition-colors">
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-start gap-3">
                                    <div className="flex flex-col items-center justify-center bg-amber-50 text-amber-600 rounded-lg p-2 min-w-[48px]">
                                      <span className="text-xs font-bold uppercase">
                                        OUT
                                      </span>
                                      <span className="text-lg font-bold leading-none">
                                        18
                                      </span>
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="text-sm font-bold text-[#0d1b1b]">
                                        18 Out 2023
                                      </p>
                                      <span className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px]">
                                          schedule
                                        </span>
                                        08:00 - 12:00
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                                    Parcial
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-cover bg-center" data-alt="Doctor Avatar" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                                    </div>
                                    <span className="text-sm text-[#0d1b1b]">
                                      Dr. Roberto
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="text-sm text-secondary">
                                    Reunião Externa
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top text-right">
                                  <button className="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                      more_vert
                                    </span>
                                  </button>
                                </td>
                              </tr>
                              {/* Row 3 */}
                              <tr className="hover:bg-[#f8fcfc] group transition-colors">
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-start gap-3">
                                    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-500 rounded-lg p-2 min-w-[48px]">
                                      <span className="text-xs font-bold uppercase">
                                        NOV
                                      </span>
                                      <span className="text-lg font-bold leading-none">
                                        02
                                      </span>
                                    </div>
                                    <div className="flex flex-col">
                                      <p className="text-sm font-bold text-[#0d1b1b]">
                                        02 Nov 2023
                                      </p>
                                      <span className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                                        <span className="material-symbols-outlined text-[14px]">
                                          history_toggle_off
                                        </span>
                                        Dia inteiro
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                                    Bloqueio Total
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary bg-[#e7f3f3] p-1 rounded text-[18px]">
                                      domain
                                    </span>
                                    <span className="text-sm text-[#0d1b1b]">
                                      Clínica (Todos)
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 align-top">
                                  <span className="text-sm text-secondary">
                                    Finados
                                  </span>
                                </td>
                                <td className="py-4 px-4 align-top text-right">
                                  <button className="text-secondary hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3] transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">
                                      more_vert
                                    </span>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Pagination */}
                        <div className="mt-auto border-t border-border-light bg-[#f8fcfc] p-3 flex items-center justify-between">
                          <span className="text-xs text-secondary">
                            Mostrando 1-3 de 12 bloqueios
                          </span>
                          <div className="flex gap-1">
                            <button className="px-2 py-1 rounded border border-border-light bg-white text-secondary text-xs disabled:opacity-50" disabled="">
                              Anterior
                            </button>
                            <button className="px-2 py-1 rounded border border-border-light bg-white text-[#0d1b1b] hover:border-primary text-xs">
                              Próximo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          {/* MODAL OVERLAY: New Block */}
          {/* This modal simulates the "Novo Bloqueio" action being active */}
          <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b1b]/60 backdrop-blur-sm p-4 animate-fade-in" role="dialog">
            <div className="bg-surface-light w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-[#f8fcfc]">
                <div>
                  <h3 className="text-lg font-bold text-[#0d1b1b]">
                    Novo Bloqueio
                  </h3>
                  <p className="text-xs text-secondary">
                    Defina uma exceção na agenda.
                  </p>
                </div>
                <button className="text-secondary hover:text-[#0d1b1b] p-1 rounded-full hover:bg-border-light transition-colors">
                  <span className="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>
              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                {/* Scope Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0d1b1b]">
                    Onde aplicar?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer relative">
                      <input checked="" className="peer sr-only" name="scope" type="radio" />
                      <div className="p-3 rounded-lg border border-border-light bg-white hover:bg-[#f8fcfc] peer-checked:border-primary peer-checked:bg-[#e7f3f3] peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-secondary peer-checked:text-[#0d1b1b]">
                          domain
                        </span>
                        <span className="text-sm font-medium text-[#0d1b1b]">
                          Clínica Inteira
                        </span>
                      </div>
                    </label>
                    <label className="cursor-pointer relative">
                      <input className="peer sr-only" name="scope" type="radio" />
                      <div className="p-3 rounded-lg border border-border-light bg-white hover:bg-[#f8fcfc] peer-checked:border-primary peer-checked:bg-[#e7f3f3] peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-secondary peer-checked:text-[#0d1b1b]">
                          person
                        </span>
                        <span className="text-sm font-medium text-[#0d1b1b]">
                          Profissional
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Date & Time */}
                <div className="flex flex-col gap-3 p-4 rounded-lg bg-[#f8fcfc] border border-border-light">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-[#0d1b1b]">
                      Data
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                        calendar_today
                      </span>
                      <input className="w-full bg-white border border-border-light rounded-lg pl-10 pr-3 py-2 text-sm text-[#0d1b1b] focus:ring-primary focus:border-primary" type="text" value="25/12/2023" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <label className="text-sm font-medium text-[#0d1b1b] flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">
                        history_toggle_off
                      </span>
                      Dia inteiro
                    </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input checked="" className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                      </div>
                    </label>
                  </div>
                  {/* Time Range (Hidden if All Day is checked, but shown dimmed for design context) */}
                  <div className="grid grid-cols-2 gap-4 opacity-50 pointer-events-none">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-secondary">
                        Início
                      </label>
                      <input className="w-full bg-white border border-border-light rounded-lg p-2 text-sm" type="time" value="08:00" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-secondary">
                        Fim
                      </label>
                      <input className="w-full bg-white border border-border-light rounded-lg p-2 text-sm" type="time" value="18:00" />
                    </div>
                  </div>
                </div>
                {/* Reason */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0d1b1b]">
                    Motivo
                  </label>
                  <select className="w-full bg-white border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
                    <option>
                      Feriado
                    </option>
                    <option>
                      Manutenção
                    </option>
                    <option>
                      Ausência Médica
                    </option>
                    <option>
                      Outro
                    </option>
                  </select>
                </div>
                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-[#0d1b1b]">
                    Observação
                    <span className="text-secondary font-normal text-xs">
                      (Opcional)
                    </span>
                  </label>
                  <textarea className="w-full bg-white border border-border-light text-[#0d1b1b] text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 resize-none h-20" placeholder="Detalhes adicionais sobre este bloqueio...">
                  </textarea>
                </div>
                {/* Notification */}
                <div className="flex items-start gap-2 pt-2">
                  <input className="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary mt-0.5" id="notify" type="checkbox" />
                  <label className="text-sm text-[#0d1b1b] cursor-pointer select-none" htmlFor="notify">
                    Notificar recepção e médicos afetados por e-mail.
                  </label>
                </div>
              </div>
              {/* Footer */}
              <div className="px-6 py-4 border-t border-border-light bg-[#f8fcfc] flex justify-end gap-3">
                <button className="px-4 py-2 text-sm font-bold text-[#0d1b1b] hover:bg-border-light rounded-lg transition-colors">
                  Cancelar
                </button>
                <button className="px-6 py-2 text-sm font-bold text-primary-content bg-primary hover:bg-[#0fd6d6] rounded-lg shadow-sm transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    check
                  </span>
                  Salvar Bloqueio
                </button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </section>
  );
}
