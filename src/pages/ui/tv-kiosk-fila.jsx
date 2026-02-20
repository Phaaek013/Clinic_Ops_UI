import '../../styles/ui/tv-kiosk-fila.css';

export function UiTvKioskFilaPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/tv-kiosk-fila">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            TV Kiosk Fila - LifeMed
          </title>
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
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
            "background-light": "#f8fcfc",
            "background-dark": "#102222",
            "text-main": "#0d1b1b",
            "text-muted": "#4c9a9a",
            "card-light": "#ffffff",
            "card-dark": "#162e2e",
            &#125;,
            fontFamily: &#123;
            "display": ["Manrope", "sans-serif"]
            &#125;,
            borderRadius: &#123;"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"&#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-text-main dark:text-white h-screen w-screen overflow-hidden flex flex-col selection:bg-primary selection:text-text-main">
          {/* Minimalist Header */}
          <header className="flex-none h-16 px-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#102222]/50 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4">
              {/* Logo Area */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-text-main shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined font-bold">
                    local_hospital
                  </span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
                  LifeMed
                  <span className="font-normal opacity-70">
                    ClinicOps
                  </span>
                </h1>
              </div>
              {/* Vertical Divider */}
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2">
              </div>
              {/* Screen Title */}
              <span className="text-lg font-semibold tracking-wide uppercase text-text-muted dark:text-primary/80">
                Fila de Atendimento
              </span>
            </div>
            {/* System Info Area */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white dark:bg-card-dark px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-primary" style={{fontSize: "20px"}}>
                  schedule
                </span>
                <span className="text-lg font-bold tabular-nums text-text-main dark:text-gray-100">
                  14:35
                </span>
                <span className="text-sm font-medium text-text-muted opacity-80 border-l border-gray-300 dark:border-gray-600 pl-2 ml-1">
                  24 Out
                </span>
              </div>
              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full text-sm font-bold border border-emerald-100 dark:border-emerald-900/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75">
                  </span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500">
                  </span>
                </span>
                AO VIVO
              </div>
            </div>
          </header>
          {/* Main Content Split Layout */}
          <main className="flex-1 flex overflow-hidden">
            {/* Primary Area: "Calling Now" (60%) */}
            <section className="flex-[1.6] relative flex flex-col items-center justify-center p-8 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#102222] z-0">
              {/* Subtle Background Gradient/Decoration */}
              <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden" data-alt="Abstract subtle gradient background">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[100px]">
                </div>
                <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[80px]">
                </div>
              </div>
              {/* Content Container */}
              <div className="relative w-full max-w-4xl flex flex-col items-center text-center z-10 animate-[fadeIn_0.5s_ease-out]">
                <div className="mb-6 flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-full">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping inline-flex h-full w-full rounded-full bg-red-500 opacity-75">
                    </span>
                  </span>
                  <h2 className="text-xl font-bold tracking-[0.2em] text-red-600 dark:text-red-400 uppercase">
                    Chamando Agora
                  </h2>
                </div>
                {/* Active Ticket Display */}
                <div className="bg-white dark:bg-[#162e2e] rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-gray-700 w-full mb-8 blink-soft relative overflow-hidden">
                  {/* Accent Strip */}
                  <div className="absolute top-0 left-0 w-3 h-full bg-primary">
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {/* Huge Ticket Number */}
                    <span className="text-[12rem] md:text-[14rem] leading-[0.85] font-black text-text-main dark:text-white tracking-tighter mb-6 selection:bg-primary/30">
                      A-102
                    </span>
                    <div className="h-px w-32 bg-gray-200 dark:bg-gray-600 mb-8">
                    </div>
                    {/* Destination */}
                    <h3 className="text-5xl md:text-6xl font-bold text-text-main dark:text-gray-100 tracking-tight">
                      Consultório 05
                    </h3>
                    {/* Optional Patient Initials (Privacy Friendly) */}
                    <p className="mt-6 text-2xl font-medium text-text-muted dark:text-gray-400">
                      Paciente: M. S. A.
                    </p>
                  </div>
                </div>
                {/* Action Badge */}
                <div className="bg-primary text-text-main px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 transform scale-100 transition-transform flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl font-bold">
                    directions_walk
                  </span>
                  <span className="text-3xl font-black tracking-wide uppercase">
                    Dirija-se à sala
                  </span>
                </div>
              </div>
            </section>
            {/* Secondary Area: "Upcoming" (40%) */}
            <section className="flex-1 flex flex-col bg-background-light dark:bg-[#0c1a1a] p-6 relative border-l border-gray-100 dark:border-gray-800">
              {/* List Header */}
              <div className="flex items-center justify-between mb-6 px-2 pt-2">
                <h2 className="text-2xl font-bold text-text-main dark:text-white flex items-center gap-3">
                  <span className="p-2 bg-primary/20 rounded-lg text-primary material-symbols-outlined">
                    format_list_bulleted
                  </span>
                  PRÓXIMOS
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-muted bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
                    5 na fila
                  </span>
                </div>
              </div>
              {/* Scrollable List Container */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-20 scroll-smooth">
                {/* Queue Item 1 */}
                <div className="bg-white dark:bg-[#162e2e] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-300 dark:border-l-gray-600 flex justify-between items-center transform transition hover:scale-[1.01]">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-text-main dark:text-white tracking-tight">
                      A-103
                    </span>
                    <span className="text-xs font-bold text-text-muted mt-1 uppercase tracking-wider">
                      Aguardando
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      Triagem
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                      Sala 02
                    </span>
                  </div>
                </div>
                {/* Queue Item 2 (Priority) */}
                <div className="bg-white dark:bg-[#162e2e] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-amber-400 flex justify-between items-center bg-amber-50/30 dark:bg-amber-900/10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-text-main dark:text-white flex items-center gap-2 tracking-tight">
                      P-005
                      <span className="material-symbols-outlined text-amber-500 text-3xl" title="Preferencial">
                        accessible
                      </span>
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-500 mt-1 uppercase tracking-wider">
                      Preferencial
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      Recepção
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                      Balcão 1
                    </span>
                  </div>
                </div>
                {/* Queue Item 3 */}
                <div className="bg-white dark:bg-[#162e2e] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-300 dark:border-l-gray-600 flex justify-between items-center opacity-90">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-text-main dark:text-white tracking-tight">
                      A-104
                    </span>
                    <span className="text-xs font-bold text-text-muted mt-1 uppercase tracking-wider">
                      Aguardando
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      Consultório 02
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                      Sala 02
                    </span>
                  </div>
                </div>
                {/* Queue Item 4 */}
                <div className="bg-white dark:bg-[#162e2e] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-300 dark:border-l-gray-600 flex justify-between items-center opacity-70 grayscale-[0.5]">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-text-main dark:text-white tracking-tight">
                      B-012
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      Raio-X
                    </span>
                  </div>
                </div>
                {/* Queue Item 5 */}
                <div className="bg-white dark:bg-[#162e2e] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 border-l-gray-300 dark:border-l-gray-600 flex justify-between items-center opacity-50 grayscale">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-text-main dark:text-white tracking-tight">
                      A-105
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      Triagem
                    </span>
                  </div>
                </div>
              </div>
              {/* Gradient Fade at bottom for smooth list end */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-light dark:from-[#0c1a1a] to-transparent pointer-events-none z-10">
              </div>
            </section>
          </main>
          {/* Info/Ticker Footer */}
          <footer className="flex-none bg-white dark:bg-[#0c1a1a] border-t border-gray-200 dark:border-gray-800 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
            <div className="w-full flex items-center justify-between px-4">
              {/* Rotating Message Area */}
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-primary/20 p-2.5 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    info
                  </span>
                </div>
                <div className="overflow-hidden relative flex-1">
                  <p className="text-xl text-text-main dark:text-gray-300 font-medium whitespace-nowrap animate-marquee">
                    Por favor, mantenha o silêncio na sala de espera. Para sua comodidade, tenha em mãos seu documento com foto. Dúvidas? Fale com a recepção.
                  </p>
                </div>
              </div>
              {/* Mobile Check-in QR */}
              <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-6 ml-6 py-1">
                <div className="text-right hidden xl:block">
                  <p className="text-base font-bold text-text-main dark:text-white leading-tight">
                    Acompanhe pelo celular
                  </p>
                  <p className="text-sm text-text-muted font-medium">
                    lifemed.com/painel
                  </p>
                </div>
                <div className="h-14 w-14 bg-white p-1 rounded-lg shadow-sm border border-gray-200 flex-shrink-0">
                  <img alt="QR Code for mobile tracking" className="w-full h-full object-contain mix-blend-multiply" data-alt="QR Code linking to patient mobile panel" src="/placeholder.svg" />
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
