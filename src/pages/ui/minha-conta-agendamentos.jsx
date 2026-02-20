import '../../styles/ui/minha-conta-agendamentos.css';

export function UiMinhaContaAgendamentosPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/minha-conta-agendamentos">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps - Minha Conta
          </title>
          {/* Fonts */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
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
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "surface": "#ffffff",
            "text-main": "#0d1b1b",
            "text-secondary": "#4c9a9a",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123;
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "2xl": "1rem",
            "full": "9999px"
            &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light text-text-main font-display antialiased min-h-screen flex flex-col overflow-x-hidden">
          {/* Navbar */}
          <header className="sticky top-0 z-30 w-full bg-[#f8fcfc]/80 backdrop-blur-md border-b border-[#e7f3f3]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-3 text-text-main">
                  <div className="size-8 text-primary">
                    <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="/placeholder.svg">
                      <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor">
                      </path>
                    </svg>
                  </div>
                  <span className="text-xl font-bold tracking-tight">
                    LifeMed ClinicOps
                  </span>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                    Agendamentos
                  </a>
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                    Médicos
                  </a>
                  <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                    Unidades
                  </a>
                </nav>
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-slate-100 transition-colors md:hidden">
                    <span className="material-symbols-outlined text-2xl">
                      menu
                    </span>
                  </button>
                  <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer" data-alt="User profile picture" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Main Content */}
          <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-sm font-medium text-text-secondary mb-6">
              <a className="hover:text-primary transition-colors" href="#">
                Início
              </a>
              <span className="mx-2 text-gray-300">
                /
              </span>
              <span className="text-text-main">
                Minha Conta
              </span>
            </nav>
            {/* Page Header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight mb-2">
                Minha Conta
              </h1>
              <p className="text-text-secondary text-lg">
                Gerencie seus agendamentos e mantenha seus dados atualizados.
              </p>
            </div>
            {/* Top Grid: Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Next Appointment Card */}
              <div className="lg:col-span-2 group relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary">
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary-hover">
                        <span className="material-symbols-outlined text-sm">
                          calendar_month
                        </span>
                      </span>
                      <span className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                        Próximo Agendamento
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse">
                      </span>
                      Confirmado
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-cover bg-center shadow-inner shrink-0" data-alt="Doctor portrait" style={{backgroundImage: "url(\"/placeholder.svg\")"}}>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                        Dr. Roberto Silva
                      </h3>
                      <p className="text-text-secondary font-medium">
                        Cardiologia • Check-up anual
                      </p>
                      <div className="flex flex-wrap gap-4 pt-1">
                        <div className="flex items-center gap-2 text-text-main text-sm">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            schedule
                          </span>
                          <span className="font-semibold">
                            15 Out, 14:30
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                          <span className="material-symbols-outlined text-[20px]">
                            location_on
                          </span>
                          <span>
                            Unidade Centro
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-50 flex flex-wrap gap-3">
                    <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-text-main text-sm font-bold rounded-lg hover:bg-primary-hover transition-all active:scale-95 shadow-sm shadow-primary/20">
                      <span className="material-symbols-outlined text-[18px]">
                        edit_calendar
                      </span>
                      Reagendar
                    </button>
                    <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-text-main text-sm font-bold rounded-lg hover:bg-slate-50 transition-all active:scale-95">
                      <span className="material-symbols-outlined text-[18px]">
                        close
                      </span>
                      Cancelar
                    </button>
                    <button className="w-full sm:w-auto ml-auto inline-flex items-center justify-center p-2.5 text-text-secondary hover:text-primary transition-colors" title="Adicionar ao calendário">
                      <span className="material-symbols-outlined">
                        event_available
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Preferences Card */}
              <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">
                      tune
                    </span>
                    <h3 className="text-lg font-bold text-text-main">
                      Preferências
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary mb-6">
                    Gerencie como você deseja ser notificado sobre mudanças na agenda.
                  </p>
                </div>
                <div className="bg-[#f8fcfc] rounded-xl p-4 border border-[#cfe7e7]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-main">
                        Lista de Espera
                      </span>
                      <span className="text-xs text-text-secondary mt-1">
                        Avise-me se surgir vaga antes
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input checked="" className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Tabs Navigation */}
            <div className="mb-8 border-b border-[#e7f3f3]">
              <nav aria-label="Tabs" className="flex space-x-8">
                <a className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">
                    upcoming
                  </span>
                  Próximos
                </a>
                <a className="border-transparent text-text-secondary hover:text-text-main hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">
                    history
                  </span>
                  Passados
                </a>
                <a className="border-transparent text-text-secondary hover:text-text-main hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                  Perfil
                </a>
              </nav>
            </div>
            {/* Tab Content: Upcoming List */}
            <div className="space-y-4 mb-20">
              {/* Header for List */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-text-main">
                  Seus Agendamentos (3)
                </h2>
                <button className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                  Novo Agendamento
                </button>
              </div>
              {/* List Item 1 (Highlighted as Next - Visual redundancy but useful in lists) */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4 group">
                {/* Date Box */}
                <div className="flex md:flex-col items-center justify-center md:w-20 bg-[#f8fcfc] border border-[#e7f3f3] rounded-lg p-3 md:p-2 shrink-0 gap-2 md:gap-0">
                  <span className="text-xs font-bold text-text-secondary uppercase">
                    OUT
                  </span>
                  <span className="text-2xl font-black text-text-main">
                    15
                  </span>
                  <span className="text-xs font-medium text-text-secondary">
                    14:30
                  </span>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-text-main truncate">
                      Cardiologia - Dr. Roberto Silva
                    </h4>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 uppercase tracking-wide border border-emerald-100">
                      Confirmado
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                      Unidade Centro
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        stethoscope
                      </span>
                      Check-up
                    </span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-end gap-2 w-full md:w-auto pt-3 md:pt-0 border-t md:border-none border-slate-50">
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-main hover:bg-slate-50 rounded-lg transition-colors">
                    Detalhes
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-[#e7f3f3] rounded-lg transition-colors">
                    Reagendar
                  </button>
                  <button className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Cancelar">
                    <span className="material-symbols-outlined text-[20px]">
                      block
                    </span>
                  </button>
                </div>
              </div>
              {/* List Item 2 */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex md:flex-col items-center justify-center md:w-20 bg-white border border-slate-100 rounded-lg p-3 md:p-2 shrink-0 gap-2 md:gap-0">
                  <span className="text-xs font-bold text-text-secondary uppercase">
                    NOV
                  </span>
                  <span className="text-2xl font-black text-text-main">
                    02
                  </span>
                  <span className="text-xs font-medium text-text-secondary">
                    09:00
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-text-main truncate">
                      Dermatologia - Dra. Ana Costa
                    </h4>
                    <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 uppercase tracking-wide border border-amber-100">
                      Pendente
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                      Unidade Sul
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        videocam
                      </span>
                      Teleconsulta
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-full md:w-auto pt-3 md:pt-0 border-t md:border-none border-slate-50">
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-main hover:bg-slate-50 rounded-lg transition-colors">
                    Detalhes
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-[#e7f3f3] rounded-lg transition-colors">
                    Reagendar
                  </button>
                  <button className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Cancelar">
                    <span className="material-symbols-outlined text-[20px]">
                      block
                    </span>
                  </button>
                </div>
              </div>
              {/* List Item 3 (Far Future) */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-4 opacity-75 hover:opacity-100">
                <div className="flex md:flex-col items-center justify-center md:w-20 bg-white border border-slate-100 rounded-lg p-3 md:p-2 shrink-0 gap-2 md:gap-0">
                  <span className="text-xs font-bold text-text-secondary uppercase">
                    DEZ
                  </span>
                  <span className="text-2xl font-black text-text-main">
                    10
                  </span>
                  <span className="text-xs font-medium text-text-secondary">
                    16:15
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-text-main truncate">
                      Oftalmologia - Dr. Paulo Mendes
                    </h4>
                    <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 uppercase tracking-wide border border-blue-100">
                      Agendado
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                      Unidade Centro
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                      Exame de vista
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-full md:w-auto pt-3 md:pt-0 border-t md:border-none border-slate-50">
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-main hover:bg-slate-50 rounded-lg transition-colors">
                    Detalhes
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-[#e7f3f3] rounded-lg transition-colors">
                    Reagendar
                  </button>
                  <button className="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Cancelar">
                    <span className="material-symbols-outlined text-[20px]">
                      block
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Footer Note */}
            <div className="flex justify-center text-center">
              <p className="text-sm text-text-secondary max-w-lg">
                Precisa de ajuda com seus agendamentos? Entre em contato com nossa
                <a className="text-primary font-bold hover:underline" href="#">
                  Central de Atendimento
                </a>
                ou leia nossa
                <a className="text-primary font-bold hover:underline" href="#">
                  Política de Cancelamento
                </a>
                .
              </p>
            </div>
          </main>
          {/* Modal Demonstration (Static placement for design review, typically fixed/hidden) */}
          <div className="relative py-12 px-4 flex justify-center items-center bg-slate-50 border-t border-dashed border-slate-200">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-200 rounded-full text-xs font-bold text-slate-500">
              Componente: Modal de Cancelamento (Demo)
            </div>
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[480px] overflow-hidden border border-slate-100">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-[#f8fcfc]">
                <h3 className="text-lg font-bold text-text-main">
                  Cancelar Agendamento
                </h3>
                <button className="text-text-secondary hover:text-text-main transition-colors">
                  <span className="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>
              {/* Modal Body */}
              <div className="p-6">
                {/* Warning Block */}
                <div className="flex gap-3 mb-6 bg-amber-50 p-3 rounded-lg border border-amber-100">
                  <span className="material-symbols-outlined text-amber-600 shrink-0">
                    info
                  </span>
                  <div className="text-sm text-amber-800">
                    <p className="font-bold mb-1">
                      Política de Cancelamento
                    </p>
                    <p>
                      Cancelamentos com menos de 24h de antecedência podem estar sujeitos a uma taxa de serviço.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-sm text-text-secondary">
                      Você está cancelando:
                    </p>
                    <p className="text-base font-bold text-text-main">
                      Cardiologia com Dr. Roberto Silva
                    </p>
                    <p className="text-sm text-text-secondary">
                      15 de Outubro às 14:30
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">
                      Motivo do cancelamento (opcional)
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-white border border-slate-300 text-text-main text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
                        <option>
                          Selecione um motivo...
                        </option>
                        <option>
                          Imprevisto de trabalho
                        </option>
                        <option>
                          Problemas de saúde
                        </option>
                        <option>
                          Encontrei outra clínica
                        </option>
                        <option>
                          Outro
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-text-secondary pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-text-main hover:bg-slate-50 transition-colors">
                  Voltar
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-sm shadow-red-200">
                  Confirmar Cancelamento
                </button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </section>
  );
}
