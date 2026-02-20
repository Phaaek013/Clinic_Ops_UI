import '../../styles/ui/profissionais-lifemed-clinicops.css';

export function UiProfissionaisLifemedClinicopsPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/profissionais-lifemed-clinicops">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Profissionais - LifeMed ClinicOps
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
          {/* Tailwind Config */}
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "text-dark": "#0d1b1b",
            "text-light": "#f8fcfc",
            "accent-teal": "#4c9a9a",
            "surface-light": "#ffffff",
            "surface-dark": "#1A2C2C",
            "border-light": "#e7f3f3",
            "border-dark": "#2A3C3C",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123; "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-text-light transition-colors duration-200">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-light dark:border-b-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 lg:px-10 py-3">
            <div className="flex items-center gap-4 text-text-dark dark:text-white">
              <div className="size-8 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  local_hospital
                </span>
              </div>
              <h2 className="text-text-dark dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                LifeMed ClinicOps
              </h2>
            </div>
            <div className="hidden lg:flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-9">
                <a className="text-text-dark dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">
                  Início
                </a>
                <a className="text-text-dark dark:text-gray-200 text-sm font-bold text-primary" href="#">
                  Especialidades
                </a>
                <a className="text-text-dark dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">
                  Exames
                </a>
                <a className="text-text-dark dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">
                  Profissionais
                </a>
                <a className="text-text-dark dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">
                  Contato
                </a>
              </nav>
              <div className="flex gap-2">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 transition-colors text-text-dark text-sm font-bold tracking-[0.015em]">
                  <span className="truncate">
                    Agendar
                  </span>
                </button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-text-dark dark:text-white text-sm font-bold tracking-[0.015em]">
                  <span className="truncate">
                    Login
                  </span>
                </button>
              </div>
            </div>
            {/* Mobile Menu Icon */}
            <button className="lg:hidden text-text-dark dark:text-white">
              <span className="material-symbols-outlined">
                menu
              </span>
            </button>
          </header>
          <main className="flex-grow flex flex-col items-center w-full px-4 md:px-10 py-6">
            <div className="w-full max-w-[1200px] flex flex-col gap-6">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 px-1">
                <a className="text-accent-teal hover:underline text-sm font-medium" href="#">
                  Início
                </a>
                <span className="text-accent-teal text-sm font-medium">
                  /
                </span>
                <span className="text-text-dark dark:text-white text-sm font-medium">
                  Profissionais
                </span>
              </div>
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border-light dark:border-border-dark">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h1 className="text-text-dark dark:text-white text-3xl md:text-4xl font-black tracking-tight">
                    Profissionais
                  </h1>
                  <p className="text-accent-teal text-base md:text-lg">
                    Encontre o especialista ideal para o seu atendimento e agende sua consulta com praticidade.
                  </p>
                </div>
                <button className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-text-dark dark:text-white text-sm font-bold">
                  Agendar agora
                </button>
              </div>
              {/* Search and Filter Bar */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-accent-teal">
                        search
                      </span>
                    </div>
                    <input className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 bg-border-light dark:bg-surface-dark text-text-dark dark:text-white placeholder:text-accent-teal focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#233333] transition-all" placeholder="Buscar por nome ou especialidade" type="text" />
                  </div>
                  {/* Sort Dropdown */}
                  <div className="relative min-w-[200px]">
                    <button className="flex w-full items-center justify-between rounded-lg bg-border-light dark:bg-surface-dark py-3 px-4 text-text-dark dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <span>
                        Ordenar por: Relevância
                      </span>
                      <span className="material-symbols-outlined text-accent-teal">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary text-text-dark px-4 font-bold text-sm shadow-sm transition-transform active:scale-95">
                    Todos
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-dark dark:text-white px-4 font-medium text-sm transition-colors border border-transparent hover:border-accent-teal/30">
                    Cardiologia
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-dark dark:text-white px-4 font-medium text-sm transition-colors border border-transparent hover:border-accent-teal/30">
                    Dermatologia
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-dark dark:text-white px-4 font-medium text-sm transition-colors border border-transparent hover:border-accent-teal/30">
                    Pediatria
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-dark dark:text-white px-4 font-medium text-sm transition-colors border border-transparent hover:border-accent-teal/30">
                    Ortopedia
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-border-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 text-text-dark dark:text-white px-4 font-medium text-sm transition-colors border border-transparent hover:border-accent-teal/30">
                    Ginecologia
                  </button>
                </div>
              </div>
              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {/* Card 1 */}
                <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                          <img className="w-full h-full object-cover" data-alt="Female doctor smiling portrait" src="/placeholder.svg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight group-hover:text-primary transition-colors">
                            Dra. Ana Costa
                          </h3>
                          <p className="text-accent-teal font-medium text-sm">
                            Cardiologia
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 hover:text-primary cursor-pointer">
                        favorite
                      </span>
                    </div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse">
                        </span>
                        Agendável
                      </span>
                      <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Consultas e Exames
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Especialista em ecocardiografia e prevenção cardiovascular com foco em hipertensão arterial.
                    </p>
                    {/* Availability Mock */}
                    <div className="mt-auto pt-3 border-t border-dashed border-border-light dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Próxima disponibilidade:
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark dark:text-white">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          calendar_clock
                        </span>
                        Hoje, 14:30
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3">
                    <button className="flex-1 h-10 rounded-lg border border-border-light dark:border-gray-600 bg-white dark:bg-transparent text-text-dark dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Ver detalhes
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                      Agendar
                    </button>
                  </div>
                </article>
                {/* Card 2 */}
                <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                          <img className="w-full h-full object-cover" data-alt="Male doctor portrait with glasses" src="/placeholder.svg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight group-hover:text-primary transition-colors">
                            Dr. Carlos Mendes
                          </h3>
                          <p className="text-accent-teal font-medium text-sm">
                            Pediatria
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 hover:text-primary cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse">
                        </span>
                        Agendável
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Atendimento humanizado para crianças e adolescentes. Experiência em puericultura e doenças respiratórias.
                    </p>
                    <div className="mt-auto pt-3 border-t border-dashed border-border-light dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Próxima disponibilidade:
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark dark:text-white">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          calendar_clock
                        </span>
                        Amanhã, 09:00
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3">
                    <button className="flex-1 h-10 rounded-lg border border-border-light dark:border-gray-600 bg-white dark:bg-transparent text-text-dark dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Ver detalhes
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                      Agendar
                    </button>
                  </div>
                </article>
                {/* Card 3 */}
                <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                          <img className="w-full h-full object-cover" data-alt="Female dermatologist portrait" src="/placeholder.svg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight group-hover:text-primary transition-colors">
                            Dra. Sofia Lima
                          </h3>
                          <p className="text-accent-teal font-medium text-sm">
                            Dermatologia
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 hover:text-primary cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                        Poucas Vagas
                      </span>
                      <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                        Telemedicina
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Tratamentos estéticos e clínicos para saúde da pele. Especialista em procedimentos a laser e rejuvenescimento.
                    </p>
                    <div className="mt-auto pt-3 border-t border-dashed border-border-light dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Próxima disponibilidade:
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark dark:text-white">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          calendar_clock
                        </span>
                        25 Out, 16:00
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3">
                    <button className="flex-1 h-10 rounded-lg border border-border-light dark:border-gray-600 bg-white dark:bg-transparent text-text-dark dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Ver detalhes
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                      Agendar
                    </button>
                  </div>
                </article>
                {/* Card 4 */}
                <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                          <img className="w-full h-full object-cover" data-alt="Male orthopedist portrait" src="/placeholder.svg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight group-hover:text-primary transition-colors">
                            Dr. Ricardo Silva
                          </h3>
                          <p className="text-accent-teal font-medium text-sm">
                            Ortopedia
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 hover:text-primary cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse">
                        </span>
                        Agendável
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Cirurgia de joelho e medicina esportiva. Reabilitação de lesões e traumas ortopédicos complexos.
                    </p>
                    <div className="mt-auto pt-3 border-t border-dashed border-border-light dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Próxima disponibilidade:
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark dark:text-white">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          calendar_clock
                        </span>
                        Hoje, 17:00
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3">
                    <button className="flex-1 h-10 rounded-lg border border-border-light dark:border-gray-600 bg-white dark:bg-transparent text-text-dark dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Ver detalhes
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                      Agendar
                    </button>
                  </div>
                </article>
                {/* Card 5 */}
                <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5 flex flex-col gap-4 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 rounded-full overflow-hidden bg-gray-100">
                          <img className="w-full h-full object-cover" data-alt="Female nurse or doctor portrait" src="/placeholder.svg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark dark:text-white leading-tight group-hover:text-primary transition-colors">
                            Enf. Julia Santos
                          </h3>
                          <p className="text-accent-teal font-medium text-sm">
                            Enfermagem
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 hover:text-primary cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Coletas
                      </span>
                      <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Vacinação
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      Atendimento especializado em vacinação infantil e adulta, curativos e coletas laboratoriais.
                    </p>
                    <div className="mt-auto pt-3 border-t border-dashed border-border-light dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Próxima disponibilidade:
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-text-dark dark:text-white">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          calendar_clock
                        </span>
                        Amanhã, 08:30
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3">
                    <button className="flex-1 h-10 rounded-lg border border-border-light dark:border-gray-600 bg-white dark:bg-transparent text-text-dark dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Ver detalhes
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
                      Agendar
                    </button>
                  </div>
                </article>
                {/* Skeleton Loader Card (Demonstration) */}
                <article className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm">
                  <div className="p-5 flex flex-col gap-4 flex-grow animate-pulse">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 w-full">
                        <div className="size-14 rounded-full bg-gray-200 dark:bg-gray-700">
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4">
                          </div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded">
                      </div>
                      <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded">
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full">
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6">
                      </div>
                    </div>
                    <div className="mt-auto pt-3 border-t border-dashed border-gray-100 dark:border-gray-800">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2">
                      </div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2">
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-background-light dark:bg-[#152626] border-t border-border-light dark:border-border-dark flex gap-3 animate-pulse">
                    <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg">
                    </div>
                    <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg">
                    </div>
                  </div>
                </article>
              </div>
              {/* CTA Block: Undecided */}
              <div className="mt-8 rounded-xl bg-surface-dark dark:bg-surface-light overflow-hidden relative">
                {/* Abstract pattern background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 rounded-l-full blur-3xl opacity-30 transform translate-x-1/3">
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                  <div className="flex flex-col gap-3 md:max-w-xl">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-primary-dark">
                        <span className="material-symbols-outlined">
                          help
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white dark:text-text-dark">
                        Não sabe com quem agendar?
                      </h2>
                    </div>
                    <p className="text-gray-300 dark:text-gray-600 text-lg">
                      Nossa equipe pode ajudar você a encontrar o especialista certo. Navegue pelos nossos serviços ou entre em contato.
                    </p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-500 dark:border-gray-400 text-white dark:text-text-dark text-sm font-bold hover:bg-white/10 dark:hover:bg-black/5 transition-colors">
                      Ver serviços
                    </button>
                    <button className="flex min-w-[140px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-dark text-sm font-bold hover:bg-primary/90 transition-colors">
                      Fale conosco
                    </button>
                  </div>
                </div>
              </div>
              {/* Empty State (Hidden by default, just showing code structure) */}
              {/* <div class="flex flex-col items-center justify-center py-20 text-center hidden"> <div class="size-20 bg-border-light dark:bg-surface-dark rounded-full flex items-center justify-center mb-4"> <span class="material-symbols-outlined text-4xl text-gray-400">person_off</span> </div> <h3 class="text-xl font-bold text-text-dark dark:text-white mb-2">Nenhum profissional encontrado</h3> <p class="text-gray-500 dark:text-gray-400 max-w-md">Não encontramos profissionais com os filtros selecionados. Tente buscar por outra especialidade ou limpe os filtros.</p> <button class="mt-6 text-primary font-bold hover:underline">Limpar filtros</button> </div> */}
            </div>
          </main>
          <footer className="mt-auto py-8 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
            <div className="w-full max-w-[1200px] mx-auto px-10 text-center">
              <p className="text-sm text-gray-400">
                © 2024 LifeMed ClinicOps. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
