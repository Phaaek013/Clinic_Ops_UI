import '../../styles/ui/disponibilidade-regras-seman.css';

export function UiDisponibilidadeRegrasSemanPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/disponibilidade-regras-seman">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Disponibilidade - Regras Semanais | LifeMed ClinicOps
          </title>
          {/* Google Fonts */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Material Symbols */}
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Tailwind CSS */}
          <script src="/placeholder.svg">
          </script>
          <script>
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
            "display": ["Manrope", "sans-serif"],
            "body": ["Noto Sans", "sans-serif"],
            &#125;,
            borderRadius: &#123;"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"&#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="font-display bg-background-light text-[#0d1b1b] overflow-hidden">
          <div className="flex h-screen w-full bg-[#f8fcfc]">
            {/* SIDEBAR */}
            <aside className="flex w-72 flex-col justify-between border-r border-[#e7f3f3] bg-[#f8fcfc] p-4 hidden md:flex shrink-0 z-30">
              <div className="flex flex-col gap-6">
                {/* Brand */}
                <div className="flex gap-3 px-2">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm border border-white" data-alt="LifeMed abstract medical cross logo in teal and cyan gradient" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[#0d1b1b] text-lg font-bold leading-tight tracking-tight">
                      LifeMed
                    </h1>
                    <p className="text-[#4c9a9a] text-xs font-semibold uppercase tracking-wider">
                      ClinicOps
                    </p>
                  </div>
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors group" href="#">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">
                      dashboard
                    </span>
                    <p className="text-sm font-semibold leading-normal">
                      Dashboard
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors group" href="#">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">
                      calendar_month
                    </span>
                    <p className="text-sm font-semibold leading-normal">
                      Agenda
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors group" href="#">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">
                      group
                    </span>
                    <p className="text-sm font-semibold leading-normal">
                      Pacientes
                    </p>
                  </a>
                  {/* Active Item */}
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#e7f3f3] text-[#0d1b1b] shadow-sm ring-1 ring-[#d0e8e8]" href="#">
                    <span className="material-symbols-outlined text-2xl text-teal-700 font-variation-fill">
                      schedule
                    </span>
                    <p className="text-sm font-bold leading-normal">
                      Disponibilidade
                    </p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] hover:bg-[#e7f3f3] hover:text-[#0d1b1b] transition-colors group" href="#">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">
                      settings
                    </span>
                    <p className="text-sm font-semibold leading-normal">
                      Configurações
                    </p>
                  </a>
                </nav>
              </div>
              <div className="flex flex-col gap-1 border-t border-[#e7f3f3] pt-4">
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#4c9a9a] hover:bg-[#fee2e2] hover:text-red-600 transition-colors" href="#">
                  <span className="material-symbols-outlined text-2xl">
                    logout
                  </span>
                  <p className="text-sm font-semibold leading-normal">
                    Sair
                  </p>
                </a>
              </div>
            </aside>
            {/* MAIN CONTENT AREA */}
            <main className="flex-1 flex flex-col relative min-w-0">
              {/* TOP NAVBAR */}
              <header className="flex items-center justify-between border-b border-[#e7f3f3] bg-white/80 backdrop-blur-md px-6 py-3 sticky top-0 z-20">
                <div className="flex items-center gap-4 text-[#0d1b1b]">
                  {/* Mobile Menu Button */}
                  <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 text-[#4c9a9a]">
                    <span className="material-symbols-outlined">
                      menu
                    </span>
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#13ecec]">
                      admin_panel_settings
                    </span>
                    <h2 className="text-[#0d1b1b] text-lg font-bold leading-tight">
                      Admin Console
                    </h2>
                  </div>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                  <div className="hidden sm:flex items-center bg-[#f8fcfc] rounded-full px-3 py-1.5 border border-[#e7f3f3]">
                    <span className="material-symbols-outlined text-[#4c9a9a] text-lg">
                      search
                    </span>
                    <input className="bg-transparent border-none text-sm text-[#0d1b1b] placeholder-[#9ca3af] focus:ring-0 w-32 lg:w-48" placeholder="Buscar..." type="text" />
                  </div>
                  <div className="flex gap-3">
                    <button className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:text-[#0d1b1b] hover:border-[#13ecec] transition-all relative">
                      <span className="material-symbols-outlined text-[20px]">
                        notifications
                      </span>
                      <span className="absolute top-0 right-0 size-2.5 bg-[#13ecec] rounded-full border-2 border-white">
                      </span>
                    </button>
                    <button className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white border border-[#e7f3f3] text-[#4c9a9a] hover:text-[#0d1b1b] hover:border-[#13ecec] transition-all">
                      <span className="material-symbols-outlined text-[20px]">
                        chat_bubble
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 pl-3 border-l border-[#e7f3f3]">
                    <div className="text-right hidden lg:block">
                      <p className="text-sm font-bold text-[#0d1b1b]">
                        Dra. Ana Silva
                      </p>
                      <p className="text-xs text-[#4c9a9a]">
                        Administradora
                      </p>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-offset-1 ring-[#13ecec]" data-alt="Portrait of a female doctor smiling" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                    </div>
                  </div>
                </div>
              </header>
              {/* CONTENT SCROLLABLE */}
              <div className="flex-1 overflow-y-auto bg-[#f8fcfc] pb-24">
                <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-6">
                  {/* Breadcrumbs */}
                  <div className="flex items-center flex-wrap gap-2 text-sm">
                    <a className="text-[#4c9a9a] hover:text-[#13ecec] font-medium transition-colors" href="#">
                      Home
                    </a>
                    <span className="text-[#cbd5e1] font-medium">
                      /
                    </span>
                    <a className="text-[#4c9a9a] hover:text-[#13ecec] font-medium transition-colors" href="#">
                      Disponibilidade
                    </a>
                    <span className="text-[#cbd5e1] font-medium">
                      /
                    </span>
                    <span className="text-[#0d1b1b] font-bold bg-[#e7f3f3] px-2 py-0.5 rounded text-xs tracking-wide">
                      REGRAS
                    </span>
                  </div>
                  {/* Page Heading */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[#0d1b1b] text-3xl font-extrabold tracking-tight">
                        Regras semanais
                      </h1>
                      <p className="text-[#4c9a9a] text-base max-w-xl">
                        Defina os horários de atendimento padrão. Estas configurações alimentam a agenda e o sistema de autoagendamento online.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#102222] px-3 py-1 text-xs font-bold text-white shadow-lg shadow-[#102222]/10 whitespace-nowrap self-start">
                      <span className="material-symbols-outlined text-[16px] text-[#13ecec]">
                        lock
                      </span>
                      Somente ADMIN
                    </span>
                  </div>
                  {/* Tabs */}
                  <div className="border-b border-[#e7f3f3]">
                    <nav aria-label="Tabs" className="flex gap-8">
                      <a className="border-b-[3px] border-[#13ecec] py-4 text-sm font-bold text-[#0d1b1b] flex items-center gap-2" href="#">
                        <span className="material-symbols-outlined text-[20px]">
                          edit_calendar
                        </span>
                        Regras semanais
                      </a>
                      <a className="border-b-[3px] border-transparent py-4 text-sm font-medium text-[#4c9a9a] hover:text-[#0d1b1b] hover:border-[#e7f3f3] transition-all flex items-center gap-2" href="#">
                        <span className="material-symbols-outlined text-[20px]">
                          block
                        </span>
                        Bloqueios
                      </a>
                      <a className="border-b-[3px] border-transparent py-4 text-sm font-medium text-[#4c9a9a] hover:text-[#0d1b1b] hover:border-[#e7f3f3] transition-all flex items-center gap-2" href="#">
                        <span className="material-symbols-outlined text-[20px]">
                          policy
                        </span>
                        Políticas
                      </a>
                    </nav>
                  </div>
                  {/* Scope Card */}
                  <div className="rounded-xl border border-[#e7f3f3] bg-white p-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                      <div className="md:col-span-4 flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-[#4c9a9a] tracking-wider" htmlFor="scope-select">
                          Configurar Para
                        </label>
                        <div className="relative">
                          <select className="w-full rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] font-medium py-2.5 pl-10 pr-10 focus:border-[#13ecec] focus:ring-[#13ecec] sm:text-sm" id="scope-select">
                            <option value="clinic">
                              Padrão da Clínica
                            </option>
                            <option selected="" value="professional">
                              Profissional Específico
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#4c9a9a]">
                            domain
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-[#4c9a9a] tracking-wider" htmlFor="professional-select">
                          Selecionar Profissional
                        </label>
                        <div className="relative">
                          <select className="w-full rounded-lg border-[#e7f3f3] bg-white text-[#0d1b1b] font-medium py-2.5 pl-10 pr-10 focus:border-[#13ecec] focus:ring-[#13ecec] sm:text-sm shadow-sm ring-1 ring-inset ring-[#e7f3f3]" id="professional-select">
                            <option>
                              Dr. João Silva (Cardiologia)
                            </option>
                            <option>
                              Dra. Maria Oliveira (Pediatria)
                            </option>
                            <option>
                              Dr. Pedro Santos (Ortopedia)
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#4c9a9a] text-[20px]">
                            person
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex justify-between items-center gap-4 h-full pb-1">
                        <button className="text-xs font-bold text-[#13ecec] hover:text-[#0fbkbk] hover:underline flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[16px]">
                            content_copy
                          </span>
                          Copiar do padrão
                        </button>
                        <div className="flex items-center gap-3 bg-[#f8fcfc] px-3 py-1.5 rounded-lg border border-[#e7f3f3]">
                          <label className="text-sm font-medium text-[#0d1b1b] cursor-pointer" htmlFor="online-booking">
                            Online
                          </label>
                          <button aria-checked="true" className="bg-[#13ecec] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#13ecec] focus:ring-offset-2" role="switch" type="button">
                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-[#4c9a9a]">
                      <span className="material-symbols-outlined text-[16px]">
                        public
                      </span>
                      <span>
                        Fuso horário:
                        <strong>
                          America/Sao_Paulo (GMT-03:00)
                        </strong>
                      </span>
                    </div>
                  </div>
                  {/* Weekly Grid */}
                  <div className="rounded-xl border border-[#e7f3f3] bg-white shadow-sm overflow-hidden">
                    <div className="bg-[#f8fcfc] px-6 py-4 border-b border-[#e7f3f3] flex justify-between items-center">
                      <h3 className="text-lg font-bold text-[#0d1b1b]">
                        Grade de Horários
                      </h3>
                      <button className="text-sm font-semibold text-[#13ecec] hover:text-[#0d1b1b] transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">
                          copy_all
                        </span>
                        Replicar Segunda para todos
                      </button>
                    </div>
                    <div className="divide-y divide-[#e7f3f3]">
                      {/* Day Row: Active */}
                      <div className="p-4 sm:p-6 hover:bg-[#fafdfd] transition-colors group">
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                          {/* Toggle & Label */}
                          <div className="flex items-center sm:w-48 gap-3 pt-1">
                            <button aria-checked="true" className="bg-[#13ecec] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" type="button">
                              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                              </span>
                            </button>
                            <div>
                              <span className="block text-sm font-bold text-[#0d1b1b]">
                                Segunda-feira
                              </span>
                              <span className="block text-xs text-[#4c9a9a] font-medium">
                                3 faixas
                              </span>
                            </div>
                          </div>
                          {/* Time Slots */}
                          <div className="flex-1 flex flex-col gap-3">
                            {/* Slot 1 */}
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                              <div className="flex items-center gap-2 bg-[#f8fcfc] border border-[#e7f3f3] rounded-md px-2 py-1 focus-within:ring-1 focus-within:ring-[#13ecec] focus-within:border-[#13ecec]">
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="08:00" />
                                <span className="text-[#4c9a9a]">
                                  -
                                </span>
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="12:00" />
                              </div>
                              <button className="text-[#9ca3af] hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                <span className="material-symbols-outlined text-[20px]">
                                  delete
                                </span>
                              </button>
                            </div>
                            {/* Slot 2 */}
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                              <div className="flex items-center gap-2 bg-[#f8fcfc] border border-[#e7f3f3] rounded-md px-2 py-1 focus-within:ring-1 focus-within:ring-[#13ecec] focus-within:border-[#13ecec]">
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="13:30" />
                                <span className="text-[#4c9a9a]">
                                  -
                                </span>
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="17:00" />
                              </div>
                              <button className="text-[#9ca3af] hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                <span className="material-symbols-outlined text-[20px]">
                                  delete
                                </span>
                              </button>
                            </div>
                            {/* Add Button */}
                            <button className="flex items-center gap-1 text-xs font-bold text-[#13ecec] hover:text-[#0d1b1b] mt-1 w-fit px-2 py-1 rounded hover:bg-[#e7f3f3] transition-colors">
                              <span className="material-symbols-outlined text-[16px]">
                                add_circle
                              </span>
                              Adicionar intervalo
                            </button>
                          </div>
                          {/* Row Actions */}
                          <div className="sm:ml-auto pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-[#4c9a9a] hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3]">
                              <span className="material-symbols-outlined">
                                more_vert
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Day Row: Active with Error */}
                      <div className="p-4 sm:p-6 bg-red-50/30 hover:bg-red-50/50 transition-colors group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400">
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                          <div className="flex items-center sm:w-48 gap-3 pt-1">
                            <button aria-checked="true" className="bg-[#13ecec] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" type="button">
                              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                              </span>
                            </button>
                            <div>
                              <span className="block text-sm font-bold text-[#0d1b1b]">
                                Terça-feira
                              </span>
                              <span className="block text-xs text-red-500 font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">
                                  error
                                </span>
                                Conflito
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col gap-3">
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                              <div className="flex items-center gap-2 bg-white border border-red-300 rounded-md px-2 py-1 shadow-sm ring-1 ring-red-100">
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="09:00" />
                                <span className="text-[#4c9a9a]">
                                  -
                                </span>
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="11:00" />
                              </div>
                              <button className="text-[#9ca3af] hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                <span className="material-symbols-outlined text-[20px]">
                                  delete
                                </span>
                              </button>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                              <div className="flex items-center gap-2 bg-white border border-red-300 rounded-md px-2 py-1 shadow-sm ring-1 ring-red-100">
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="10:30" />
                                <span className="text-[#4c9a9a]">
                                  -
                                </span>
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="13:00" />
                              </div>
                              <span className="text-xs text-red-500 font-bold px-2 py-1 bg-white rounded-md border border-red-100">
                                Sobreposição detectada
                              </span>
                              <button className="text-[#9ca3af] hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                <span className="material-symbols-outlined text-[20px]">
                                  delete
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Day Row: Inactive */}
                      <div className="p-4 sm:p-6 hover:bg-[#fafdfd] transition-colors group opacity-60 hover:opacity-100">
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                          <div className="flex items-center sm:w-48 gap-3">
                            <button aria-checked="false" className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out hover:bg-gray-300" role="switch" type="button">
                              <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                              </span>
                            </button>
                            <div>
                              <span className="block text-sm font-medium text-[#4c9a9a]">
                                Quarta-feira
                              </span>
                              <span className="block text-xs text-[#9ca3af]">
                                Fechado
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-[#9ca3af] italic">
                              Não há atendimento neste dia.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Day Row: Active */}
                      <div className="p-4 sm:p-6 hover:bg-[#fafdfd] transition-colors group">
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                          <div className="flex items-center sm:w-48 gap-3 pt-1">
                            <button aria-checked="true" className="bg-[#13ecec] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" type="button">
                              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                              </span>
                            </button>
                            <div>
                              <span className="block text-sm font-bold text-[#0d1b1b]">
                                Quinta-feira
                              </span>
                              <span className="block text-xs text-[#4c9a9a] font-medium">
                                1 faixa
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col gap-3">
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                              <div className="flex items-center gap-2 bg-[#f8fcfc] border border-[#e7f3f3] rounded-md px-2 py-1 focus-within:ring-1 focus-within:ring-[#13ecec] focus-within:border-[#13ecec]">
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="08:00" />
                                <span className="text-[#4c9a9a]">
                                  -
                                </span>
                                <input className="border-none bg-transparent p-0 text-sm font-medium text-[#0d1b1b] focus:ring-0 w-[60px] text-center" type="time" value="18:00" />
                              </div>
                              <button className="text-[#9ca3af] hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50">
                                <span className="material-symbols-outlined text-[20px]">
                                  delete
                                </span>
                              </button>
                            </div>
                            <button className="flex items-center gap-1 text-xs font-bold text-[#13ecec] hover:text-[#0d1b1b] mt-1 w-fit px-2 py-1 rounded hover:bg-[#e7f3f3] transition-colors">
                              <span className="material-symbols-outlined text-[16px]">
                                add_circle
                              </span>
                              Adicionar intervalo
                            </button>
                          </div>
                          <div className="sm:ml-auto pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-[#4c9a9a] hover:text-[#0d1b1b] p-1 rounded hover:bg-[#e7f3f3]">
                              <span className="material-symbols-outlined">
                                more_vert
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Scheduling Rules Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl border border-[#e7f3f3] bg-white p-6 shadow-sm">
                      <h3 className="text-sm font-bold text-[#0d1b1b] uppercase tracking-wider mb-4 border-b border-[#e7f3f3] pb-2">
                        Regras de Agendamento
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#4c9a9a] mb-1">
                            Antecedência mínima
                          </label>
                          <div className="flex gap-2">
                            <input className="w-20 rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] font-bold focus:border-[#13ecec] focus:ring-[#13ecec]" type="number" value="2" />
                            <select className="rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] flex-1 focus:border-[#13ecec] focus:ring-[#13ecec]">
                              <option>
                                Horas
                              </option>
                              <option>
                                Dias
                              </option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#4c9a9a] mb-1">
                            Janela máxima de agendamento
                          </label>
                          <div className="flex gap-2">
                            <input className="w-20 rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] font-bold focus:border-[#13ecec] focus:ring-[#13ecec]" type="number" value="30" />
                            <select className="rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] flex-1 focus:border-[#13ecec] focus:ring-[#13ecec]">
                              <option>
                                Dias
                              </option>
                              <option>
                                Meses
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#e7f3f3] bg-white p-6 shadow-sm">
                      <h3 className="text-sm font-bold text-[#0d1b1b] uppercase tracking-wider mb-4 border-b border-[#e7f3f3] pb-2">
                        Política de Cancelamento
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#4c9a9a] mb-1">
                            Permitir cancelamento pelo paciente?
                          </label>
                          <select className="w-full rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] focus:border-[#13ecec] focus:ring-[#13ecec]">
                            <option>
                              Sim, até 24h antes
                            </option>
                            <option>
                              Sim, até 48h antes
                            </option>
                            <option>
                              Não, apenas ligando
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#4c9a9a] mb-1">
                            Mensagem personalizada
                          </label>
                          <textarea className="w-full rounded-lg border-[#e7f3f3] bg-[#f8fcfc] text-[#0d1b1b] text-sm focus:border-[#13ecec] focus:ring-[#13ecec]" placeholder="Ex: Para reagendar sem custo..." rows="2">
                          </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* STICKY ACTION FOOTER */}
              <div className="fixed bottom-0 right-0 left-0 md:left-72 z-40 bg-white border-t border-[#e7f3f3] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] p-4">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 w-full sm:w-auto justify-center sm:justify-start">
                    <span className="material-symbols-outlined text-[18px] animate-pulse">
                      warning
                    </span>
                    <span className="text-sm font-bold">
                      Você tem alterações não salvas
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-[#4c9a9a] hover:bg-gray-100 hover:text-[#0d1b1b] transition-colors flex-1 sm:flex-none">
                      Descartar
                    </button>
                    <button className="px-6 py-2.5 rounded-lg text-sm font-bold bg-[#13ecec] text-[#0d1b1b] shadow-md shadow-[#13ecec]/20 hover:shadow-lg hover:shadow-[#13ecec]/30 hover:brightness-105 transition-all flex items-center gap-2 justify-center flex-1 sm:flex-none">
                      <span className="material-symbols-outlined text-[20px]">
                        save
                      </span>
                      Salvar Regras
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </body>
      </html>
    </section>
  );
}
