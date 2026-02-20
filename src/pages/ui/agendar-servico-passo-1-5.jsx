import '../../styles/ui/agendar-servico-passo-1-5.css';

export function UiAgendarServicoPasso15Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/agendar-servico-passo-1-5">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps - Agendar Serviço
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
          {/* Theme Configuration */}
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-hover": "#0edbdb",
            "primary-content": "#0d1b1b",
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "surface-light": "#ffffff",
            "surface-dark": "#1a2c2c",
            "border-light": "#e7f3f3",
            "border-dark": "#2a3c3c",
            "text-main": "#0d1b1b",
            "text-secondary": "#4c9a9a",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"],
            "body": ["Noto Sans", "sans-serif"],
            &#125;,
            borderRadius: &#123;"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"&#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 py-3 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md md:px-10">
            <div className="flex items-center gap-4 text-text-main dark:text-white">
              <div className="size-8 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="/placeholder.svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor">
                  </path>
                </svg>
              </div>
              <h2 className="hidden md:block text-lg font-bold leading-tight tracking-[-0.015em]">
                LifeMed ClinicOps
              </h2>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-9">
                <a className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                  Início
                </a>
                <a className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                  Meus Agendamentos
                </a>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary-hover text-primary-content text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                  <span className="truncate">
                    Entrar
                  </span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 bg-gray-200" data-alt="User profile avatar placeholder" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center w-full px-4 py-6 md:px-10 lg:px-20">
            <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1 gap-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap gap-2 items-center">
                  <li>
                    <a className="text-text-secondary hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
                      Início
                    </a>
                  </li>
                  <li>
                    <span className="text-text-secondary text-sm font-medium leading-normal">
                      /
                    </span>
                  </li>
                  <li>
                    <span aria-current="page" className="text-text-main dark:text-white text-sm font-medium leading-normal">
                      Agendar
                    </span>
                  </li>
                </ol>
              </nav>
              {/* Page Heading */}
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Agendar Atendimento
                </h1>
                <p className="text-text-secondary text-base font-normal leading-normal max-w-2xl">
                  Selecione o serviço que deseja realizar abaixo. Você poderá escolher o profissional e o horário nos próximos passos.
                </p>
              </div>
              {/* Stepper */}
              <div className="w-full bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-4 md:p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">
                      Passo 1 de 5
                    </span>
                    <span className="text-text-main dark:text-white font-bold text-sm">
                      Serviço
                    </span>
                  </div>
                  {/* Progress Bar Track */}
                  <div className="relative w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    {/* Active Step */}
                    <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out" style={{width: "20%"}}>
                    </div>
                    {/* Step Markers (Invisible but structurally implied by width) */}
                  </div>
                  {/* Step Labels (Desktop only) */}
                  <div className="hidden md:flex justify-between mt-2 px-1">
                    <span className="text-xs font-bold text-primary">
                      Serviço
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Profissional
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Data
                      &amp;
                      Hora
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Dados
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Confirmação
                    </span>
                  </div>
                </div>
              </div>
              {/* Main Content Grid */}
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-4 relative">
                {/* Left Column: Selection Area */}
                <div className="flex-1 flex flex-col gap-6 min-w-0">
                  {/* Controls: Search & Type Toggle */}
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    {/* Toggle */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex w-full md:w-auto">
                      <button className="flex-1 md:flex-none px-6 py-2 rounded-md bg-white dark:bg-surface-dark text-text-main dark:text-white shadow-sm text-sm font-bold transition-all">
                        Consultas
                      </button>
                      <button className="flex-1 md:flex-none px-6 py-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-text-main dark:hover:text-white text-sm font-medium transition-all">
                        Exames
                      </button>
                    </div>
                    {/* Search */}
                    <div className="relative w-full md:max-w-xs group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary material-symbols-outlined text-[20px]">
                        search
                      </span>
                      <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-lg text-sm text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Buscar serviço..." type="text" />
                    </div>
                  </div>
                  {/* Filter Chips */}
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold transition-colors">
                      Todos
                    </button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors">
                      Cardiologia
                    </button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors">
                      Dermatologia
                    </button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors">
                      Clínico Geral
                    </button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors">
                      Pediatria
                    </button>
                    <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-secondary hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors">
                      Ortopedia
                    </button>
                  </div>
                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1: Selected State Example */}
                    <div className="group relative cursor-pointer bg-surface-light dark:bg-surface-dark p-5 rounded-xl border-2 border-primary shadow-md transition-all">
                      <div className="absolute top-4 right-4 text-primary">
                        <span className="material-symbols-outlined text-[24px]">
                          check_circle
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                          <span className="material-symbols-outlined text-[28px]">
                            stethoscope
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-text-main dark:text-white font-bold text-lg leading-tight">
                            Consulta Geral
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-2">
                            Avaliação inicial de sintomas e encaminhamento.
                          </p>
                          <div className="flex items-center gap-2 text-xs font-bold text-text-main dark:text-gray-300 bg-gray-100 dark:bg-gray-800 self-start px-2 py-1 rounded">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            30 min
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 2: Default State */}
                    <div className="group relative cursor-pointer bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 hover:shadow-md transition-all">
                      <div className="absolute top-4 right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[24px]">
                          radio_button_unchecked
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-500 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                          <span className="material-symbols-outlined text-[28px]">
                            cardiology
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-text-main dark:text-white font-bold text-lg leading-tight">
                            Cardiologia
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-2">
                            Check-up preventivo e acompanhamento cardíaco.
                          </p>
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 self-start px-2 py-1 rounded border border-gray-100 dark:border-gray-700">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            45 min
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 3: Default State */}
                    <div className="group relative cursor-pointer bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 hover:shadow-md transition-all">
                      <div className="absolute top-4 right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[24px]">
                          radio_button_unchecked
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-500 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                          <span className="material-symbols-outlined text-[28px]">
                            dermatology
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-text-main dark:text-white font-bold text-lg leading-tight">
                            Dermatologia
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-2">
                            Tratamento de pele, unhas e cabelos.
                          </p>
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 self-start px-2 py-1 rounded border border-gray-100 dark:border-gray-700">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            30 min
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 4: Default State */}
                    <div className="group relative cursor-pointer bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 hover:shadow-md transition-all">
                      <div className="absolute top-4 right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[24px]">
                          radio_button_unchecked
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-500 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                          <span className="material-symbols-outlined text-[28px]">
                            child_care
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-text-main dark:text-white font-bold text-lg leading-tight">
                            Pediatria
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-2">
                            Atendimento especializado para crianças.
                          </p>
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 self-start px-2 py-1 rounded border border-gray-100 dark:border-gray-700">
                            <span className="material-symbols-outlined text-[16px]">
                              schedule
                            </span>
                            40 min
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 5: Skeleton Loading State */}
                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark animate-pulse">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-200 dark:bg-gray-700 size-12 rounded-lg shrink-0">
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2">
                          </div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4">
                          </div>
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 mt-1">
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 6: Skeleton Loading State */}
                    <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark animate-pulse">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-200 dark:bg-gray-700 size-12 rounded-lg shrink-0">
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2">
                          </div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4">
                          </div>
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 mt-1">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Not Found / CTA */}
                  <div className="mt-4 p-6 bg-gray-50 dark:bg-surface-dark/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                      <p className="font-bold text-text-main dark:text-white">
                        Não encontrou o que procurava?
                      </p>
                      <p className="text-sm text-text-secondary">
                        Tente buscar por outro termo ou entre em contato conosco.
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-text-main hover:text-primary transition-colors">
                      Fale com atendente
                    </button>
                  </div>
                </div>
                {/* Right Column: Sticky Summary */}
                <div className="w-full lg:w-[360px] shrink-0">
                  <div className="lg:sticky lg:top-24 flex flex-col gap-4">
                    {/* Summary Card */}
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-lg overflow-hidden flex flex-col">
                      <div className="p-5 border-b border-border-light dark:border-border-dark bg-gray-50/50 dark:bg-gray-800/50">
                        <h2 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">
                            receipt_long
                          </span>
                          Resumo do agendamento
                        </h2>
                      </div>
                      <div className="p-5 flex flex-col gap-5">
                        {/* Type */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-text-secondary">
                            Tipo de Atendimento
                          </span>
                          <span className="text-sm font-bold text-text-main dark:text-white">
                            Consulta
                          </span>
                        </div>
                        {/* Selected Service */}
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-text-secondary">
                            Serviço Selecionado
                          </span>
                          {/* Dynamic Content */}
                          <div className="flex items-center gap-2 text-primary font-bold">
                            <span className="material-symbols-outlined text-[18px]">
                              check
                            </span>
                            <span className="text-base">
                              Consulta Geral
                            </span>
                          </div>
                        </div>
                        <div className="h-px bg-border-light dark:border-border-dark w-full">
                        </div>
                        {/* Duration */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-text-secondary">
                            Duração Estimada
                          </span>
                          <span className="text-sm font-bold text-text-main dark:text-white">
                            30 min
                          </span>
                        </div>
                        {/* Price (Mock) */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-text-secondary">
                            Valor
                          </span>
                          <span className="text-sm font-bold text-text-main dark:text-white">
                            A consultar
                          </span>
                        </div>
                        {/* Next Steps Hint */}
                        <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <p className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-1">
                            Próximo passo:
                          </p>
                          <p className="text-xs text-blue-600 dark:text-blue-200">
                            Você escolherá o profissional de sua preferência.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Mobile only spacer to avoid footer overlap if content is long */}
                    <div className="h-20 md:hidden">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer Actions */}
          <footer className="sticky bottom-0 z-40 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur border-t border-border-light dark:border-border-dark p-4 md:px-10 lg:px-20">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border-light dark:border-gray-600 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                <span>
                  Voltar
                </span>
              </button>
              {/* Primary Action (Enabled state shown) */}
              <button className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-primary-content font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <span>
                  Continuar
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
