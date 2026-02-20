import '../../styles/ui/agendar-confirmacao-passo-5-5.css';

export function UiAgendarConfirmacaoPasso55Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/agendar-confirmacao-passo-5-5">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            LifeMed ClinicOps - Confirmar Agendamento
          </title>
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script src="/placeholder.svg">
          </script>
          <script>
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "primary-dark": "#0fbDBD",
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "text-main": "#0d1b1b",
            "text-muted": "#4c9a9a",
            "card-light": "#ffffff",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"],
            "body": ["Noto Sans", "sans-serif"]
            &#125;,
            borderRadius: &#123; "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased min-h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#102222]/90 backdrop-blur-md border-b border-[#e7f3f3] dark:border-[#1e3a3a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 bg-primary/20 text-primary-dark rounded-lg">
                    <span className="material-symbols-outlined">
                      local_hospital
                    </span>
                  </div>
                  <h1 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
                    LifeMed
                    <span className="text-text-muted font-normal">
                      ClinicOps
                    </span>
                  </h1>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                  <a className="text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 transition-colors" href="#">
                    Início
                  </a>
                  <a className="text-sm font-medium text-primary-dark dark:text-primary transition-colors" href="#">
                    Meus Agendamentos
                  </a>
                  <a className="text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 transition-colors" href="#">
                    Perfil
                  </a>
                  <a className="text-sm font-medium text-text-main hover:text-primary-dark dark:text-gray-200 transition-colors" href="#">
                    Ajuda
                  </a>
                </nav>
                {/* User Profile */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-sm font-bold text-text-main dark:text-white">
                      Ana Souza
                    </span>
                    <span className="text-xs text-text-muted">
                      Paciente
                    </span>
                  </div>
                  <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white shadow-sm" data-alt="Portrait of a smiling woman used as user avatar" style={{backgroundImage: "url('/placeholder.svg')"}}>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex mb-6">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a className="inline-flex items-center text-sm font-medium text-text-muted hover:text-primary-dark dark:text-gray-400" href="#">
                    <span className="material-symbols-outlined text-[20px] mr-2">
                      home
                    </span>
                    Início
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-text-muted/50 text-sm mx-1">
                      chevron_right
                    </span>
                    <a className="text-sm font-medium text-text-muted hover:text-primary-dark dark:text-gray-400" href="#">
                      Agendar
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-text-muted/50 text-sm mx-1">
                      chevron_right
                    </span>
                    <span className="text-sm font-medium text-text-main dark:text-white">
                      Confirmação
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            {/* Stepper */}
            <div className="mb-10">
              <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200 dark:after:bg-gray-700">
                <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                  <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                    <span className="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark">
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </span>
                    <span className="hidden sm:block text-text-main dark:text-gray-300">
                      Serviço
                    </span>
                  </li>
                  <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                    <span className="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark">
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </span>
                    <span className="hidden sm:block text-text-main dark:text-gray-300">
                      Profissional
                    </span>
                  </li>
                  <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                    <span className="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark">
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </span>
                    <span className="hidden sm:block text-text-main dark:text-gray-300">
                      Data
                    </span>
                  </li>
                  <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                    <span className="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark">
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </span>
                    <span className="hidden sm:block text-text-main dark:text-gray-300">
                      Identificação
                    </span>
                  </li>
                  <li className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-2">
                    <span className="size-8 rounded-full bg-primary text-[#0d1b1b] flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark shadow-[0_0_15px_rgba(19,236,236,0.4)]">
                      <span className="font-bold text-sm">
                        5
                      </span>
                    </span>
                    <span className="font-bold text-[#0d1b1b] dark:text-primary">
                      Confirmação
                    </span>
                  </li>
                </ol>
              </div>
            </div>
            {/* Page Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight mb-2">
                Confirmar agendamento
              </h2>
              <p className="text-text-muted text-lg max-w-2xl">
                Revise os detalhes do seu agendamento abaixo antes de confirmar. Último passo!
              </p>
            </div>
            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Review Details (Span 8) */}
              <div className="lg:col-span-8 space-y-6">
                {/* Review Card */}
                <div className="bg-white dark:bg-[#1a2c2c] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary-dark dark:text-primary">
                      <span className="material-symbols-outlined">
                        assignment
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-main dark:text-white">
                      Detalhes do Agendamento
                    </h3>
                  </div>
                  <div className="space-y-8">
                    {/* Service & Pro */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase font-semibold text-text-muted tracking-wider">
                          Serviço
                        </span>
                        <div className="font-bold text-lg text-text-main dark:text-white flex items-center gap-2">
                          Consulta Cardiológica
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            30 min
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Avaliação de rotina e check-up.
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase font-semibold text-text-muted tracking-wider">
                          Profissional
                        </span>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="size-10 rounded-full bg-gray-100 bg-cover bg-center" data-alt="Doctor portrait" style={{backgroundImage: "url('/placeholder.svg')"}}>
                          </div>
                          <div>
                            <div className="font-bold text-text-main dark:text-white">
                              Dr. Roberto Silva
                            </div>
                            <div className="text-xs text-text-muted">
                              Cardiologista • CRM 123456
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Date & Location */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase font-semibold text-text-muted tracking-wider">
                          Data e Hora
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-primary-dark">
                            calendar_month
                          </span>
                          <span className="font-bold text-lg text-text-main dark:text-white">
                            14 Out, 2023
                          </span>
                        </div>
                        <div className="flex items-center gap-2 pl-8">
                          <span className="material-symbols-outlined text-gray-400 text-sm">
                            schedule
                          </span>
                          <span className="text-base text-text-main dark:text-gray-200">
                            14:30 - 15:00
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase font-semibold text-text-muted tracking-wider">
                          Local
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-primary-dark">
                            location_on
                          </span>
                          <span className="font-bold text-lg text-text-main dark:text-white">
                            Unidade Paulista
                          </span>
                        </div>
                        <div className="pl-8 text-sm text-gray-500 dark:text-gray-400">
                          Av. Paulista, 1000 - Sala 42
                          <br />
                          São Paulo - SP
                        </div>
                      </div>
                    </div>
                    {/* Patient Info */}
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                      <span className="text-xs uppercase font-semibold text-text-muted tracking-wider block mb-3">
                        Paciente
                      </span>
                      <div className="flex items-center gap-4 p-3 bg-background-light dark:bg-background-dark/50 rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">
                          AS
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-text-main dark:text-white">
                            Ana Souza
                          </div>
                          <div className="text-xs text-text-muted">
                            (11) 99999-9999 • ana.souza@email.com
                          </div>
                        </div>
                        <button className="text-primary-dark hover:text-primary text-xs font-semibold px-2 py-1 rounded hover:bg-primary/10 transition-colors">
                          Editar
                        </button>
                      </div>
                    </div>
                    {/* Waitlist Option */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                          <input className="peer sr-only" type="checkbox" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="block text-sm font-bold text-text-main dark:text-white group-hover:text-primary-dark transition-colors">
                            Quero adiantar se abrir vaga
                          </span>
                          <span className="block text-xs text-text-muted mt-1">
                            Se um horário anterior ficar disponível com este profissional, notificaremos você por SMS/WhatsApp.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Policies Card */}
                <div className="bg-gray-50 dark:bg-[#152626] rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                  <h4 className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      info
                    </span>
                    Políticas de Agendamento
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>
                          Cancelamento Gratuito:
                        </strong>
                        Você pode cancelar ou reagendar sem custos até 24 horas antes do horário marcado.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">
                        schedule
                      </span>
                      <span>
                        <strong>
                          Chegada:
                        </strong>
                        Recomendamos chegar com 15 minutos de antecedência para preenchimento de ficha cadastral.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-blue-500 text-lg mt-0.5">
                        id_card
                      </span>
                      <span>
                        <strong>
                          Documentos:
                        </strong>
                        Não esqueça de trazer um documento com foto e sua carteirinha do convênio (se aplicável).
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Actions Area */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg text-text-main dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                    Voltar
                  </button>
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <a className="text-sm font-medium text-text-muted hover:text-primary-dark underline decoration-dotted underline-offset-4" href="#">
                      Alterar data e horário
                    </a>
                    <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-[#0d1b1b] px-8 py-3.5 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                      Confirmar Agendamento
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        check
                      </span>
                    </button>
                  </div>
                </div>
                {/* Help Section */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                  <p className="text-text-muted text-sm mb-3">
                    Teve algum problema ou precisa de ajuda especial?
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-text-main dark:text-white hover:border-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-primary-dark text-lg">
                      headset_mic
                    </span>
                    Falar com Atendimento
                  </button>
                </div>
                {/* DEMO: SUCCESS STATE (Normally hidden, but showing here for design showcase requirements) */}
                <div className="mt-12 p-6 rounded-2xl border-2 border-dashed border-green-200 bg-green-50/30 dark:border-green-900/30 dark:bg-green-900/10">
                  <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-4 uppercase tracking-widest text-center">
                    [Demo: Estado de Sucesso - Pós-Click]
                  </p>
                  <div className="bg-white dark:bg-[#1a2c2c] rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
                    <div className="bg-green-500 p-6 text-center">
                      <div className="size-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <span className="material-symbols-outlined text-green-500 text-4xl filled-icon">
                          check
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-white mb-1">
                        Agendamento Confirmado!
                      </h2>
                      <p className="text-green-100">
                        Enviamos os detalhes para seu e-mail.
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Código do agendamento
                        </div>
                        <div className="text-xl font-mono font-bold text-text-main dark:text-white tracking-widest">
                          #LIF-8823
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-bold text-text-main dark:text-white">
                          <span className="material-symbols-outlined text-blue-500">
                            calendar_add_on
                          </span>
                          Add. Calendário
                        </button>
                        <button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-bold text-text-main dark:text-white">
                          <span className="material-symbols-outlined text-gray-500">
                            print
                          </span>
                          Imprimir
                        </button>
                      </div>
                      <button className="w-full bg-primary/20 hover:bg-primary/30 text-primary-dark dark:text-primary font-bold py-3 rounded-lg transition-colors">
                        Ir para Meus Agendamentos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Sticky Summary (Span 4) */}
              <div className="lg:col-span-4 relative">
                <div className="sticky top-24 space-y-4">
                  {/* Summary Card */}
                  <div className="bg-white dark:bg-[#1a2c2c] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-t-primary overflow-hidden">
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-text-main dark:text-white mb-6">
                        Resumo Final
                      </h3>
                      {/* Timeline */}
                      <div className="relative border-l-2 border-dashed border-gray-200 dark:border-gray-700 ml-3 space-y-8 pb-2">
                        {/* Item 1 */}
                        <div className="relative pl-6">
                          <div className="absolute -left-[9px] top-1 size-4 bg-primary rounded-full ring-4 ring-white dark:ring-[#1a2c2c]">
                          </div>
                          <p className="text-xs text-text-muted font-bold uppercase mb-1">
                            Serviço
                          </p>
                          <p className="text-sm font-medium text-text-main dark:text-gray-200">
                            Consulta Cardiológica
                          </p>
                          <p className="text-xs text-gray-500">
                            Particular
                          </p>
                        </div>
                        {/* Item 2 */}
                        <div className="relative pl-6">
                          <div className="absolute -left-[9px] top-1 size-4 bg-gray-200 dark:bg-gray-600 rounded-full ring-4 ring-white dark:ring-[#1a2c2c]">
                          </div>
                          <p className="text-xs text-text-muted font-bold uppercase mb-1">
                            Data
                          </p>
                          <p className="text-sm font-medium text-text-main dark:text-gray-200">
                            14 Outubro, 14:30
                          </p>
                        </div>
                        {/* Item 3 */}
                        <div className="relative pl-6">
                          <div className="absolute -left-[9px] top-1 size-4 bg-gray-200 dark:bg-gray-600 rounded-full ring-4 ring-white dark:ring-[#1a2c2c]">
                          </div>
                          <p className="text-xs text-text-muted font-bold uppercase mb-1">
                            Total Estimado
                          </p>
                          <p className="text-xl font-bold text-text-main dark:text-white">
                            R$ 350,00
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Pagamento no local
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500">
                            Status
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 flex items-center gap-1">
                            <span className="size-2 rounded-full bg-amber-500 animate-pulse">
                            </span>
                            Pendente
                          </span>
                        </div>
                        <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                          Ao confirmar, você concorda com os
                          <a className="underline hover:text-primary-dark" href="#">
                            Termos de Uso
                          </a>
                          da LifeMed. Você poderá gerenciar este agendamento em sua conta.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-600 text-xs">
                    <span className="material-symbols-outlined text-sm">
                      lock
                    </span>
                    <span>
                      Seus dados estão protegidos e seguros.
                    </span>
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
