import '../../styles/ui/home-institucional-lifemed.css';

export function UiHomeInstitucionalLifemedPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/home-institucional-lifemed">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps - Home Institucional
          </title>
          <script src="/placeholder.svg">
          </script>
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script>
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-dark": "#0ebaba",
            "background-light": "#ffffff",
            "background-subtle": "#f8fcfc",
            "background-dark": "#102222",
            "text-main": "#0d1b1b",
            "text-subtle": "#4c9a9a",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"],
            "body": ["Manrope", "sans-serif"],
            &#125;,
            borderRadius: &#123;
            "DEFAULT": "0.5rem",
            "lg": "0.75rem",
            "xl": "1rem",
            "full": "9999px"
            &#125;,
            animation: &#123;
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            &#125;
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light text-text-main antialiased selection:bg-primary/30">
          {/* Navbar */}
          <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-background-light/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary-dark">
                  <span className="material-symbols-outlined text-[28px]">
                    medical_services
                  </span>
                </div>
                <span className="text-xl font-bold tracking-tight text-text-main">
                  LifeMed ClinicOps
                </span>
              </div>
              <div className="hidden items-center gap-8 md:flex">
                <a className="text-sm font-semibold text-text-main transition hover:text-primary-dark" href="#">
                  Início
                </a>
                <a className="text-sm font-semibold text-text-main transition hover:text-primary-dark" href="#servicos">
                  Serviços
                </a>
                <a className="text-sm font-semibold text-text-main transition hover:text-primary-dark" href="#profissionais">
                  Profissionais
                </a>
                <a className="text-sm font-semibold text-text-main transition hover:text-primary-dark" href="#agendar">
                  Agendar
                </a>
              </div>
              <div className="flex items-center gap-4">
                <button className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-text-main hover:bg-gray-50 md:block">
                  Entrar
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-text-main transition hover:bg-primary-dark/20 hover:shadow-lg hover:shadow-primary/20">
                  <span>
                    Minha Conta
                  </span>
                </button>
              </div>
            </div>
          </nav>
          {/* Hero Section */}
          <header className="relative overflow-hidden bg-background-subtle py-12 sm:py-24 lg:py-32" id="inicio">
            {/* Decorative Background elements */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl">
            </div>
            <div className="absolute top-1/2 right-0 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl">
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark">
                    <span className="h-2 w-2 rounded-full bg-primary">
                    </span>
                    Novo App Disponível
                  </div>
                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl xl:text-6xl">
                    Sua saúde simplificada e organizada.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-text-subtle">
                    Agende consultas e exames com facilidade na LifeMed. Cuidamos de você com tecnologia avançada e atendimento humanizado.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-text-main shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:text-white">
                      <span className="material-symbols-outlined text-[20px]">
                        calendar_month
                      </span>
                      Agendar agora
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-bold text-text-main transition hover:bg-gray-50">
                      Ver serviços
                    </button>
                  </div>
                  <div className="mt-10 flex items-center gap-4 text-sm text-text-subtle">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center" data-alt="Female patient portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center" data-alt="Male patient portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center" data-alt="Male doctor portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-bold">
                        +2k
                      </div>
                    </div>
                    <p>
                      Pacientes atendidos este mês
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center lg:justify-end">
                  {/* Quick Schedule Widget Mock */}
                  <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/5 backdrop-blur-sm sm:p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-main">
                        Agendamento Rápido
                      </h3>
                      <span className="material-symbols-outlined text-primary-dark">
                        bolt
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-text-subtle">
                          Especialidade
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">
                              search
                            </span>
                          </div>
                          <input className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-10 text-sm focus:border-primary focus:ring-primary" placeholder="Ex: Cardiologia" type="text" />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-text-subtle">
                          Data Preferencial
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">
                              event
                            </span>
                          </div>
                          <input className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-10 text-sm focus:border-primary focus:ring-primary" placeholder="Selecione uma data" type="text" />
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg bg-text-main py-3.5 text-sm font-bold text-white transition hover:bg-black">
                        Buscar Horários
                      </button>
                    </div>
                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-2 w-2 rounded-full bg-green-500">
                        </span>
                        <p className="text-xs font-medium text-gray-500">
                          Médicos disponíveis agora
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Bento Grid Benefits */}
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                  Por que escolher a LifeMed?
                </h2>
                <p className="mt-4 text-lg text-text-subtle">
                  Tecnologia que trabalha a favor da sua saúde.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                {/* Card 1: Large */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-background-subtle p-8 transition hover:shadow-lg sm:col-span-2 lg:row-span-2 border border-gray-100">
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-dark">
                      <span className="material-symbols-outlined">
                        calendar_clock
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">
                      Agendamento Online 24/7
                    </h3>
                    <p className="mt-2 text-text-subtle">
                      Marque suas consultas a qualquer hora, de qualquer lugar, sem precisar ligar. Liberdade total para sua agenda.
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-primary/10 transition group-hover:scale-150">
                  </div>
                </div>
                {/* Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl bg-background-subtle p-6 transition hover:shadow-lg sm:col-span-1 border border-gray-100">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined">
                      notifications_active
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-main">
                    Lembretes Automáticos
                  </h3>
                  <p className="mt-1 text-sm text-text-subtle">
                    Receba confirmações via WhatsApp e não perca seus horários.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="group relative overflow-hidden rounded-2xl bg-background-subtle p-6 transition hover:shadow-lg sm:col-span-1 border border-gray-100">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <span className="material-symbols-outlined">
                      hourglass_empty
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-main">
                    Lista de Espera
                  </h3>
                  <p className="mt-1 text-sm text-text-subtle">
                    Seja avisado automaticamente se surgir uma vaga antes.
                  </p>
                </div>
                {/* Card 4: Wide */}
                <div className="group relative flex items-center gap-6 overflow-hidden rounded-2xl bg-background-subtle p-6 transition hover:shadow-lg sm:col-span-2 border border-gray-100">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">
                      Recepção Organizada
                    </h3>
                    <p className="mt-1 text-sm text-text-subtle">
                      Check-in digital rápido para evitar filas na chegada à clínica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section with Loading State */}
          <section className="bg-background-subtle py-20" id="servicos">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-text-main">
                    Nossas Especialidades
                  </h2>
                  <p className="mt-2 text-text-subtle">
                    Cuidados completos para você e sua família.
                  </p>
                </div>
                <a className="group flex items-center gap-2 font-bold text-primary-dark hover:text-text-main" href="#">
                  Ver todos os serviços
                  <span className="material-symbols-outlined transition group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
              {/* Grid Layout */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service Card 1 */}
                <div className="relative overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md border border-gray-100">
                  <div className="h-48 w-full bg-cover bg-center" data-alt="Medical consultation with stethoscope" style={{backgroundImage: "url('/placeholder.svg')"}}>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-main">
                        Cardiologia
                      </h3>
                      <span className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                        Consulta
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-2 text-sm text-text-subtle">
                      Acompanhamento completo da saúde do seu coração com especialistas.
                    </p>
                    <button className="w-full rounded-lg border border-gray-200 bg-white py-2 text-sm font-bold text-text-main hover:border-primary hover:text-primary-dark">
                      Agendar
                    </button>
                  </div>
                </div>
                {/* Service Card 2 */}
                <div className="relative overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md border border-gray-100">
                  <div className="h-48 w-full bg-cover bg-center" data-alt="Laboratory blood test tubes" style={{backgroundImage: "url('/placeholder.svg')"}}>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-text-main">
                        Exames Laboratoriais
                      </h3>
                      <span className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        Exame
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-2 text-sm text-text-subtle">
                      Coleta rápida e resultados online para sua comodidade.
                    </p>
                    <button className="w-full rounded-lg border border-gray-200 bg-white py-2 text-sm font-bold text-text-main hover:border-primary hover:text-primary-dark">
                      Agendar
                    </button>
                  </div>
                </div>
                {/* Skeleton Loader Card (Simulating loading state for 3rd item) */}
                <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100">
                  <div className="h-48 w-full animate-pulse bg-gray-200">
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200">
                      </div>
                      <div className="h-5 w-16 animate-pulse rounded bg-gray-200">
                      </div>
                    </div>
                    <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200">
                    </div>
                    <div className="mb-4 h-4 w-2/3 animate-pulse rounded bg-gray-200">
                    </div>
                    <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200">
                    </div>
                  </div>
                </div>
                {/* Empty State Placeholder (Hidden by default, shown if no services) */}
                {/* <div class="col-span-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-16 text-center"> <div class="mb-4 rounded-full bg-gray-100 p-4"> <span class="material-symbols-outlined text-gray-400">search_off</span> </div> <h3 class="text-lg font-bold text-text-main">Nenhum serviço encontrado</h3> <p class="text-text-subtle">Tente ajustar seus filtros ou volte mais tarde.</p> </div> */}
              </div>
            </div>
          </section>
          {/* How It Works */}
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-text-main">
                  Agende em 3 passos simples
                </h2>
              </div>
              <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="absolute left-0 top-12 hidden h-0.5 w-full -translate-y-1/2 bg-gray-100 lg:block">
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white ring-8 ring-background-subtle shadow-sm border border-gray-100">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        stethoscope
                      </span>
                      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-text-main text-sm font-bold text-white">
                        1
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">
                      Escolha o serviço
                    </h3>
                    <p className="mt-2 max-w-xs text-text-subtle">
                      Selecione a especialidade médica ou o tipo de exame que você precisa.
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white ring-8 ring-background-subtle shadow-sm border border-gray-100">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        calendar_add_on
                      </span>
                      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-text-main text-sm font-bold text-white">
                        2
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">
                      Escolha o horário
                    </h3>
                    <p className="mt-2 max-w-xs text-text-subtle">
                      Veja a disponibilidade em tempo real e escolha o melhor momento.
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white ring-8 ring-background-subtle shadow-sm border border-gray-100">
                      <span className="material-symbols-outlined text-4xl text-primary">
                        verified
                      </span>
                      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-text-main text-sm font-bold text-white">
                        3
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">
                      Confirme
                    </h3>
                    <p className="mt-2 max-w-xs text-text-subtle">
                      Receba a confirmação instantânea e prepare-se para sua consulta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Trust / Professionals Section */}
          <section className="bg-background-subtle py-20" id="profissionais">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Professionals List */}
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-text-main">
                    Quem cuida de você
                  </h2>
                  <p className="mt-4 text-lg text-text-subtle">
                    Nossa equipe é formada por especialistas renomados, prontos para oferecer o melhor atendimento.
                  </p>
                  <div className="mt-8 space-y-4">
                    {/* Professional Mock 1 */}
                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                      <div className="h-16 w-16 rounded-full bg-cover bg-center" data-alt="Male Doctor Portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-main">
                          Dr. Carlos Silva
                        </h4>
                        <p className="text-sm text-primary-dark font-medium">
                          Cardiologista
                        </p>
                        <div className="mt-1 flex items-center text-xs text-yellow-500">
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="ml-1 text-gray-400">
                            (120 avaliações)
                          </span>
                        </div>
                      </div>
                      <button className="ml-auto rounded-full bg-gray-50 p-2 text-text-main hover:bg-primary hover:text-black transition">
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                    {/* Skeleton Loader for Professional */}
                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 border border-gray-100">
                      <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse">
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-1/3 rounded bg-gray-200 animate-pulse">
                        </div>
                        <div className="h-3 w-1/4 rounded bg-gray-200 animate-pulse">
                        </div>
                      </div>
                    </div>
                    <a className="mt-4 inline-block font-bold text-primary-dark hover:text-text-main" href="#">
                      Ver toda a equipe →
                    </a>
                  </div>
                </div>
                {/* Testimonials */}
                <div className="relative">
                  <div className="absolute -right-4 top-0 hidden h-full w-px bg-gray-200 lg:block">
                  </div>
                  <h3 className="mb-6 text-xl font-bold text-text-main">
                    O que dizem nossos pacientes
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                      <div className="mb-4 text-primary">
                        <span className="material-symbols-outlined text-3xl">
                          format_quote
                        </span>
                      </div>
                      <p className="text-text-subtle italic">
                        "O atendimento foi excelente desde a recepção até a consulta. O sistema de agendamento é muito prático!"
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" data-alt="Patient woman portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main">
                            Mariana Costa
                          </p>
                          <p className="text-xs text-text-subtle">
                            Paciente desde 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                      <div className="mb-4 text-primary">
                        <span className="material-symbols-outlined text-3xl">
                          format_quote
                        </span>
                      </div>
                      <p className="text-text-subtle italic">
                        "Gostei muito da pontualidade. Recebi o lembrete no WhatsApp e fui atendido na hora marcada."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-300 bg-cover bg-center" data-alt="Patient man portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main">
                            Roberto Almeida
                          </p>
                          <p className="text-xs text-text-subtle">
                            Paciente desde 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Location and Contact */}
          <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl bg-background-dark shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="p-10 lg:p-16">
                    <h2 className="text-3xl font-bold text-white">
                      Venha nos visitar
                    </h2>
                    <p className="mt-4 text-gray-400">
                      Estamos localizados em um ponto estratégico para facilitar seu acesso.
                    </p>
                    <ul className="mt-10 space-y-6">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined rounded-lg bg-primary/20 p-2 text-primary">
                          location_on
                        </span>
                        <div>
                          <h4 className="font-bold text-white">
                            Endereço
                          </h4>
                          <p className="text-sm text-gray-400">
                            Av. Paulista, 1000 - Bela Vista
                            <br />
                            São Paulo - SP
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined rounded-lg bg-primary/20 p-2 text-primary">
                          call
                        </span>
                        <div>
                          <h4 className="font-bold text-white">
                            Telefone
                          </h4>
                          <p className="text-sm text-gray-400">
                            (11) 99999-9999
                          </p>
                          <p className="text-sm text-gray-400">
                            (11) 3333-3333
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined rounded-lg bg-primary/20 p-2 text-primary">
                          schedule
                        </span>
                        <div>
                          <h4 className="font-bold text-white">
                            Horário de Atendimento
                          </h4>
                          <p className="text-sm text-gray-400">
                            Seg - Sex: 08:00 - 18:00
                          </p>
                          <p className="text-sm text-gray-400">
                            Sáb: 08:00 - 12:00
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#20bd5a] sm:w-auto">
                        <span className="material-symbols-outlined">
                          chat
                        </span>
                        Falar no WhatsApp
                      </button>
                    </div>
                  </div>
                  <div className="relative min-h-[300px] w-full bg-gray-800">
                    <img alt="Mapa" className="absolute h-full w-full object-cover opacity-80" data-alt="Map location placeholder with blurred streets" data-location="São Paulo" src="/placeholder.svg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-text-main shadow-lg">
                        Abrir no Maps
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="bg-background-subtle py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-12 text-center text-3xl font-bold text-text-main">
                Dúvidas Frequentes
              </h2>
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Aceitam convênios médicos?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                  <div className="mt-2 hidden text-sm text-text-subtle">
                    Sim, aceitamos os principais convênios do mercado. Consulte nossa lista completa na página de convênios ou entre em contato.
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Como cancelo um agendamento?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                </div>
                {/* FAQ Item 3 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Quais documentos preciso levar?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                </div>
                {/* FAQ Item 4 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Realizam exames de imagem?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                </div>
                {/* FAQ Item 5 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Existe estacionamento no local?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                </div>
                {/* FAQ Item 6 */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <button className="flex w-full items-center justify-between text-left font-bold text-text-main">
                    <span>
                      Posso agendar para outra pessoa?
                    </span>
                    <span className="material-symbols-outlined text-text-subtle">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="bg-background-dark pt-16 pb-8 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-4">
                <div className="col-span-1 lg:col-span-1">
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      medical_services
                    </span>
                    <span className="text-xl font-bold">
                      LifeMed ClinicOps
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    Compromisso com a sua saúde através de tecnologia e atendimento humanizado.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                    Institucional
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Sobre nós
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Corpo Clínico
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Carreiras
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Imprensa
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                    Pacientes
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Agendar Consulta
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Resultados de Exames
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Convênios
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Central de Ajuda
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                    Legal
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Política de Privacidade
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Termos de Uso
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary transition" href="#">
                        Política de Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row">
                <p className="text-sm text-gray-500">
                  © 2024 LifeMed ClinicOps. Todos os direitos reservados.
                </p>
                <div className="mt-4 flex gap-4 sm:mt-0">
                  <a className="text-gray-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">
                      public
                    </span>
                  </a>
                  <a className="text-gray-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                  </a>
                  <a className="text-gray-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">
                      share
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
