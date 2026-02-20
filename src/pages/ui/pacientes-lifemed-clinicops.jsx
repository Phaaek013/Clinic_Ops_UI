import '../../styles/ui/pacientes-lifemed-clinicops.css';

export function UiPacientesLifemedClinicopsPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/pacientes-lifemed-clinicops">
      <html className="light" lang="en">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Pacientes - LifeMed ClinicOps
          </title>
          {/* Tailwind CSS */}
          <script src="/placeholder.svg">
          </script>
          {/* Material Symbols */}
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Google Fonts */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Theme Configuration */}
          <script>
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-hover": "#0ed9d9",
            "background-light": "#f6f8f8",
            "background-dark": "#102222",
            "text-main": "#0d1b1b",
            "text-secondary": "#4c9a9a",
            "border-color": "#cfe7e7",
            "surface": "#ffffff",
            "surface-highlight": "#e7f3f3"
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123;"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"&#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light text-text-main font-display antialiased overflow-hidden">
          <div className="flex h-screen w-full">
            {/* SIDEBAR */}
            <aside className="w-72 bg-background-light flex flex-col border-r border-border-color shrink-0 h-full overflow-y-auto hidden lg:flex">
              <div className="p-6 flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="/placeholder.svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z">
                    </path>
                  </svg>
                </div>
                <h1 className="text-xl font-bold tracking-tight">
                  LifeMed
                </h1>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of Dr. Silva" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-text-main text-sm font-bold">
                      Dr. Silva
                    </h2>
                    <p className="text-text-secondary text-xs">
                      Admin
                    </p>
                  </div>
                </div>
              </div>
              <nav className="flex flex-col gap-1 px-4 mt-4">
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    dashboard
                  </span>
                  <span className="text-sm font-medium">
                    Dashboard
                  </span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-highlight text-text-main shadow-sm ring-1 ring-black/5" href="#">
                  <span className="material-symbols-outlined icon-filled">
                    group
                  </span>
                  <span className="text-sm font-bold">
                    Pacientes
                  </span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  <span className="text-sm font-medium">
                    Agenda
                  </span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    description
                  </span>
                  <span className="text-sm font-medium">
                    Prontuários
                  </span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    payments
                  </span>
                  <span className="text-sm font-medium">
                    Financeiro
                  </span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-colors" href="#">
                  <span className="material-symbols-outlined">
                    settings
                  </span>
                  <span className="text-sm font-medium">
                    Configurações
                  </span>
                </a>
              </nav>
              <div className="mt-auto p-4">
                <div className="bg-surface-highlight p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      headset_mic
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-main">
                        Precisa de ajuda?
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        Fale com nosso suporte técnico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light relative">
              {/* TOP NAVBAR */}
              <header className="h-16 border-b border-border-color bg-background-light/80 backdrop-blur-md px-6 flex items-center justify-between shrink-0 sticky top-0 z-30">
                {/* Mobile Menu Button (Visible only on small screens) */}
                <button className="lg:hidden p-2 text-text-main">
                  <span className="material-symbols-outlined">
                    menu
                  </span>
                </button>
                <div className="hidden lg:flex flex-1 max-w-lg">
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary material-symbols-outlined text-[20px]">
                      search
                    </span>
                    <input className="w-full h-10 pl-10 pr-4 bg-surface-highlight border-none rounded-lg text-sm text-text-main placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Buscar em todo o sistema..." type="text" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="relative p-2 text-text-main hover:bg-surface-highlight rounded-lg transition-colors">
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white">
                    </span>
                  </button>
                  <button className="p-2 text-text-main hover:bg-surface-highlight rounded-lg transition-colors">
                    <span className="material-symbols-outlined">
                      chat
                    </span>
                  </button>
                  <div className="h-8 w-px bg-border-color mx-2">
                  </div>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white shadow-sm cursor-pointer" data-alt="User profile picture" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                  </div>
                </div>
              </header>
              {/* SCROLLABLE PAGE CONTENT */}
              <div className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-10">
                  {/* BREADCRUMBS & HEADING */}
                  <div className="flex flex-col gap-6">
                    <nav className="flex items-center gap-2 text-sm">
                      <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                        Dashboard
                      </a>
                      <span className="text-text-secondary">
                        /
                      </span>
                      <span className="text-text-main font-semibold">
                        Pacientes
                      </span>
                    </nav>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-text-main tracking-tight">
                          Pacientes
                        </h1>
                        <p className="text-text-secondary max-w-xl">
                          Gerencie o cadastro e visualize o status de agendamento dos seus pacientes.
                        </p>
                      </div>
                      {/* Quick Stats Filter Cards */}
                      <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
                        <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-surface border border-border-color hover:border-primary hover:shadow-md transition-all cursor-pointer text-left">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                            Agendados Hoje
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                              12
                            </span>
                            <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
                              +2
                            </span>
                          </div>
                        </button>
                        <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-surface border border-border-color hover:border-primary hover:shadow-md transition-all cursor-pointer text-left">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                            Futuro
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                              450
                            </span>
                          </div>
                        </button>
                        <button className="group flex flex-col items-start min-w-[160px] p-4 rounded-xl bg-surface border border-border-color hover:border-primary hover:shadow-md transition-all cursor-pointer text-left">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                            Sem Agendamento
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                              89
                            </span>
                            <span className="material-symbols-outlined text-orange-400 text-lg">
                              warning
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* MAIN CARD CONTAINER (Filter + Table) */}
                  <div className="bg-surface rounded-xl border border-border-color shadow-sm flex flex-col">
                    {/* FILTER BAR */}
                    <div className="p-5 border-b border-border-color flex flex-col lg:flex-row gap-4 items-center justify-between">
                      {/* Left: Search & Filters */}
                      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
                        {/* Search */}
                        <div className="relative w-full sm:w-64">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary material-symbols-outlined text-[20px]">
                            search
                          </span>
                          <input className="w-full h-10 pl-10 pr-4 bg-background-light border-transparent focus:bg-white focus:border-primary rounded-lg text-sm text-text-main placeholder:text-text-secondary focus:ring-0 transition-all" placeholder="Buscar nome, CPF ou tel..." type="text" />
                        </div>
                        {/* Filter Chips / Dropdowns */}
                        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto">
                          <button className="h-10 px-3 py-1.5 rounded-lg border border-border-color bg-white text-text-main text-sm font-medium hover:bg-background-light flex items-center gap-2 whitespace-nowrap">
                            <span className="material-symbols-outlined text-[18px]">
                              filter_list
                            </span>
                            Status
                            <span className="material-symbols-outlined text-[18px] text-text-secondary">
                              arrow_drop_down
                            </span>
                          </button>
                          <button className="h-10 px-3 py-1.5 rounded-lg border border-border-color bg-white text-text-main text-sm font-medium hover:bg-background-light flex items-center gap-2 whitespace-nowrap">
                            Tags
                            <span className="material-symbols-outlined text-[18px] text-text-secondary">
                              arrow_drop_down
                            </span>
                          </button>
                          <button className="h-10 px-3 py-1.5 rounded-lg border border-border-color bg-white text-text-main text-sm font-medium hover:bg-background-light flex items-center gap-2 whitespace-nowrap hidden md:flex">
                            <span className="material-symbols-outlined text-[18px]">
                              sort
                            </span>
                            Ordernar por
                          </button>
                        </div>
                      </div>
                      {/* Right: Action */}
                      <div className="w-full lg:w-auto flex justify-end">
                        <button className="h-10 bg-primary hover:bg-primary-hover text-text-main text-sm font-bold px-5 rounded-lg flex items-center gap-2 shadow-sm transition-colors whitespace-nowrap w-full sm:w-auto justify-center" onClick="document.getElementById('newPatientDrawer').classList.remove('translate-x-full')">
                          <span className="material-symbols-outlined text-[20px]">
                            add
                          </span>
                          Novo Paciente
                        </button>
                      </div>
                    </div>
                    {/* DATA TABLE */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-background-light text-text-secondary text-xs font-semibold uppercase tracking-wider border-b border-border-color">
                            <th className="p-4 w-10">
                              <input className="rounded border-gray-300 text-primary focus:ring-0 cursor-pointer size-4" type="checkbox" />
                            </th>
                            <th className="p-4 min-w-[200px]">
                              Paciente
                            </th>
                            <th className="p-4 min-w-[180px]">
                              Contato
                            </th>
                            <th className="p-4 min-w-[160px]">
                              Próximo Agendamento
                            </th>
                            <th className="p-4 min-w-[140px] hidden md:table-cell">
                              Última Visita
                            </th>
                            <th className="p-4 min-w-[120px] hidden lg:table-cell">
                              Tags
                            </th>
                            <th className="p-4 w-14">
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-color bg-surface text-sm">
                          {/* Row 1 */}
                          <tr className="group hover:bg-background-light transition-colors">
                            <td className="p-4">
                              <input className="rounded border-gray-300 text-primary focus:ring-0 cursor-pointer size-4" type="checkbox" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                                  AS
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-text-main group-hover:text-primary transition-colors cursor-pointer">
                                    Ana Silva
                                  </span>
                                  <span className="text-xs text-text-secondary">
                                    ID: #49201
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <span className="text-text-main">
                                  (11) 9****-1234
                                </span>
                                <span className="text-xs text-text-secondary">
                                  ana.silva@email.com
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500">
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-medium text-text-main">
                                    14 Out, 10:00
                                  </span>
                                  <span className="text-xs text-green-600 font-medium">
                                    Confirmado
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <span className="text-text-secondary">
                                10 Set 2023
                              </span>
                            </td>
                            <td className="p-4 hidden lg:table-cell">
                              <div className="flex gap-1 flex-wrap">
                                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
                                  VIP
                                </span>
                                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">
                                  Particular
                                </span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <button className="p-1.5 rounded-lg text-text-secondary hover:bg-white hover:shadow-sm hover:text-text-main transition-all">
                                <span className="material-symbols-outlined">
                                  more_vert
                                </span>
                              </button>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="group hover:bg-background-light transition-colors">
                            <td className="p-4">
                              <input className="rounded border-gray-300 text-primary focus:ring-0 cursor-pointer size-4" type="checkbox" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Portrait of Carlos Mendez" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-text-main group-hover:text-primary transition-colors cursor-pointer">
                                    Carlos Mendez
                                  </span>
                                  <span className="text-xs text-text-secondary">
                                    ID: #49205
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <span className="text-text-main">
                                  (21) 9****-9876
                                </span>
                                <span className="text-xs text-text-secondary">
                                  carlos.m@email.com
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-orange-400">
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-medium text-text-main">
                                    15 Out, 14:30
                                  </span>
                                  <span className="text-xs text-orange-600 font-medium">
                                    Aguardando Confirmação
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <span className="text-text-secondary">
                                02 Ago 2023
                              </span>
                            </td>
                            <td className="p-4 hidden lg:table-cell">
                              <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200">
                                Convênio
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <button className="p-1.5 rounded-lg text-text-secondary hover:bg-white hover:shadow-sm hover:text-text-main transition-all">
                                <span className="material-symbols-outlined">
                                  more_vert
                                </span>
                              </button>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="group hover:bg-background-light transition-colors">
                            <td className="p-4">
                              <input className="rounded border-gray-300 text-primary focus:ring-0 cursor-pointer size-4" type="checkbox" />
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold shrink-0">
                                  MJ
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-text-main group-hover:text-primary transition-colors cursor-pointer">
                                    Mariana Jones
                                  </span>
                                  <span className="text-xs text-text-secondary">
                                    ID: #49210
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <span className="text-text-main">
                                  (41) 9****-5544
                                </span>
                                <span className="text-xs text-text-secondary">
                                  mari.jones@email.com
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-text-secondary italic text-sm">
                                --
                              </span>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <span className="text-text-secondary">
                                Ontem
                              </span>
                            </td>
                            <td className="p-4 hidden lg:table-cell">
                              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold border border-red-200">
                                Débito Pendente
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <button className="p-1.5 rounded-lg text-text-secondary hover:bg-white hover:shadow-sm hover:text-text-main transition-all">
                                <span className="material-symbols-outlined">
                                  more_vert
                                </span>
                              </button>
                            </td>
                          </tr>
                          {/* Skeleton Loading State Example (Visual only) */}
                          <tr className="animate-pulse">
                            <td className="p-4">
                              <div className="h-4 w-4 bg-gray-200 rounded">
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="size-10 bg-gray-200 rounded-full">
                                </div>
                                <div className="flex flex-col gap-1">
                                  <div className="h-4 w-24 bg-gray-200 rounded">
                                  </div>
                                  <div className="h-3 w-16 bg-gray-200 rounded">
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="h-4 w-32 bg-gray-200 rounded">
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="h-4 w-24 bg-gray-200 rounded">
                              </div>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <div className="h-4 w-20 bg-gray-200 rounded">
                              </div>
                            </td>
                            <td className="p-4 hidden lg:table-cell">
                              <div className="h-6 w-16 bg-gray-200 rounded">
                              </div>
                            </td>
                            <td className="p-4">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* PAGINATION */}
                    <div className="p-4 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm text-text-secondary">
                        Mostrando
                        <span className="font-bold text-text-main">
                          1-3
                        </span>
                        de
                        <span className="font-bold text-text-main">
                          492
                        </span>
                        pacientes
                      </p>
                      <div className="flex items-center gap-2">
                        <button className="size-9 flex items-center justify-center rounded-lg border border-border-color text-text-secondary hover:bg-background-light disabled:opacity-50" disabled="">
                          <span className="material-symbols-outlined text-sm">
                            chevron_left
                          </span>
                        </button>
                        <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-text-main font-bold text-sm shadow-sm">
                          1
                        </button>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-border-color text-text-secondary hover:bg-background-light text-sm font-medium">
                          2
                        </button>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-border-color text-text-secondary hover:bg-background-light text-sm font-medium">
                          3
                        </button>
                        <span className="text-text-secondary px-1">
                          ...
                        </span>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-border-color text-text-secondary hover:bg-background-light text-sm font-medium">
                          10
                        </button>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-border-color text-text-secondary hover:bg-background-light">
                          <span className="material-symbols-outlined text-sm">
                            chevron_right
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* DRAWER / MODAL (Slide-over) */}
            {/* Initially hidden with translate-x-full, toggled via JS logic (simulated here) */}
            <div aria-labelledby="slide-over-title" aria-modal="true" className="fixed inset-0 z-50 flex justify-end transition-transform duration-300 translate-x-full" id="newPatientDrawer" role="dialog">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-background-dark/20 backdrop-blur-sm transition-opacity" onClick="document.getElementById('newPatientDrawer').classList.add('translate-x-full')">
              </div>
              {/* Drawer Panel */}
              <div className="relative z-10 w-full max-w-md bg-surface h-full shadow-2xl flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border-color flex items-center justify-between bg-surface-highlight">
                  <h2 className="text-lg font-bold text-text-main">
                    Novo Paciente
                  </h2>
                  <button className="text-text-secondary hover:text-text-main transition-colors" onClick="document.getElementById('newPatientDrawer').classList.add('translate-x-full')">
                    <span className="material-symbols-outlined">
                      close
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
                  {/* Avatar Upload Placeholder */}
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <div className="size-20 rounded-full bg-background-light border-2 border-dashed border-border-color flex items-center justify-center text-text-secondary cursor-pointer hover:border-primary hover:text-primary transition-all">
                      <span className="material-symbols-outlined text-3xl">
                        add_a_photo
                      </span>
                    </div>
                    <span className="text-xs text-text-secondary font-medium">
                      Adicionar foto
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-text-main">
                        Nome Completo
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm" placeholder="Ex: Maria Silva" type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-text-main">
                          Celular
                          <span className="text-red-500">
                            *
                          </span>
                        </label>
                        <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm" placeholder="(00) 00000-0000" type="tel" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-text-main">
                          Data de Nasc.
                        </label>
                        <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm text-text-secondary" type="date" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-text-main">
                        E-mail
                      </label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm" placeholder="nome@exemplo.com" type="email" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-text-main">
                        CPF / Documento
                      </label>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm" placeholder="000.000.000-00" type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-text-main">
                        Tags iniciais
                      </label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/20 text-text-main text-xs font-bold rounded flex items-center gap-1">
                          Novo
                          <button className="hover:text-red-500">
                            <span className="material-symbols-outlined text-[14px]">
                              close
                            </span>
                          </button>
                        </span>
                      </div>
                      <input className="w-full h-11 px-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm" placeholder="Digite e pressione enter..." type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-text-main">
                        Observações (Admin)
                      </label>
                      <textarea className="w-full p-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-0 text-sm resize-none" placeholder="Informações internas..." rows="3">
                      </textarea>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="p-6 border-t border-border-color bg-surface flex gap-3">
                  <button className="flex-1 h-12 rounded-lg border border-border-color text-text-main font-bold hover:bg-background-light transition-colors" onClick="document.getElementById('newPatientDrawer').classList.add('translate-x-full')">
                    Cancelar
                  </button>
                  <button className="flex-1 h-12 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">
                      check
                    </span>
                    Salvar Paciente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </section>
  );
}
