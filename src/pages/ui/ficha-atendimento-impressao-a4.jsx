import '../../styles/ui/ficha-atendimento-impressao-a4.css';

export function UiFichaAtendimentoImpressaoA4Page() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/ficha-atendimento-impressao-a4">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            Ficha de Atendimento - LifeMed ClinicOps
          </title>
          {/* Fonts */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
          {/* Icons */}
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
            "background-light": "#f6f8f8",
            "background-dark": "#102222",
            "text-main": "#0d1b1b",
            "text-secondary": "#4c9a9a",
            "border-color": "#cfe7e7",
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
            screens: &#123;
            'print': &#123;'raw': 'print'&#125;,
            &#125;
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen flex flex-col">
          {/* Print Toolbar (Hidden on Print) */}
          <header className="no-print sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-color px-6 py-3 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Back & Title */}
              <div className="flex items-center gap-6 w-full md:w-auto">
                <a className="group flex items-center gap-2 text-text-main hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">
                    arrow_back
                  </span>
                  <span className="text-sm font-semibold">
                    Voltar
                  </span>
                </a>
                <div className="h-6 w-px bg-border-color hidden md:block">
                </div>
                <h1 className="text-lg font-bold tracking-tight text-text-main">
                  Ficha de atendimento
                </h1>
              </div>
              {/* Center: Helper Text */}
              <div className="hidden md:block text-text-secondary text-xs font-medium bg-background-light px-3 py-1 rounded-full border border-border-color">
                Na impressão, esta barra não aparece.
              </div>
              {/* Right: Actions */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                {/* Dropdown Trigger */}
                <button aria-label="Opções" className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-background-light text-text-main transition-colors">
                  <span className="material-symbols-outlined">
                    more_vert
                  </span>
                </button>
                {/* Download Button */}
                <button className="flex items-center justify-center h-10 px-4 rounded-lg bg-background-light border border-transparent hover:border-border-color text-text-main text-sm font-bold transition-all gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  <span className="hidden sm:inline">
                    Baixar PDF
                  </span>
                </button>
                {/* Print Button */}
                <button className="flex items-center justify-center h-10 px-6 rounded-lg bg-primary hover:bg-[#0fd9d9] text-text-main text-sm font-bold shadow-sm transition-colors gap-2" onClick="window.print()">
                  <span className="material-symbols-outlined text-[18px]">
                    print
                  </span>
                  <span>
                    Imprimir
                  </span>
                </button>
              </div>
            </div>
          </header>
          {/* Main Content Area (Preview Background) */}
          <main className="flex-grow flex justify-center overflow-y-auto overflow-x-hidden p-4 md:p-8">
            {/* A4 Paper Representation */}
            <div className="a4-sheet relative flex flex-col p-12 box-border">
              {/* HEADER */}
              <div className="flex justify-between items-start border-b-2 border-primary/30 pb-6 mb-6">
                <div className="flex gap-4 items-center">
                  {/* Logo Placeholder */}
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      local_hospital
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-text-main uppercase">
                      LifeMed
                      <span className="text-text-secondary font-bold">
                        ClinicOps
                      </span>
                    </h2>
                    <p className="text-sm text-text-main font-semibold">
                      Unidade Central
                    </p>
                  </div>
                </div>
                <div className="text-right text-xs text-text-secondary space-y-1">
                  <p className="font-bold text-text-main text-sm">
                    LifeMed Serviços Médicos S.A.
                  </p>
                  <p>
                    Rua das Flores, 123 - Centro
                  </p>
                  <p>
                    São Paulo, SP - CEP 01001-000
                  </p>
                  <p>
                    (11) 3214-5588 | contato@lifemed.com.br
                  </p>
                </div>
              </div>
              {/* SECTION: IDENTIFICAÇÃO DO ATENDIMENTO */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      badge
                    </span>
                    Identificação do Atendimento
                  </h3>
                  {/* Status Badge (Print Safe: Uses borders/text instead of heavy background) */}
                  <div className="border border-text-main px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
                    Agendado
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-y-4 gap-x-6 bg-background-light/50 p-4 rounded-lg border border-border-color print:bg-transparent print:border-gray-300 print:p-2">
                  {/* ID */}
                  <div className="col-span-3">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      ID Atendimento
                    </p>
                    <p className="text-base font-bold text-text-main">
                      #884291
                    </p>
                  </div>
                  {/* Date/Time */}
                  <div className="col-span-5">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Data e Hora
                    </p>
                    <p className="text-base font-bold text-text-main">
                      24/10/2023 às 14:30
                    </p>
                  </div>
                  {/* Room */}
                  <div className="col-span-4">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Sala / Guichê
                    </p>
                    <p className="text-base font-bold text-text-main">
                      Consultório 04
                    </p>
                  </div>
                  {/* Professional */}
                  <div className="col-span-6">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Profissional
                    </p>
                    <p className="text-sm font-bold text-text-main">
                      Dr. Ricardo Silva (CRM/SP 123456)
                    </p>
                  </div>
                  {/* Specialty */}
                  <div className="col-span-6">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Especialidade / Serviço
                    </p>
                    <p className="text-sm font-bold text-text-main">
                      Cardiologia - Consulta Rotina
                    </p>
                  </div>
                </div>
                {/* Manual Check-in Area */}
                <div className="mt-2 flex gap-6 items-center pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-text-main rounded-sm print:border-black">
                    </div>
                    <span className="text-xs font-bold uppercase text-text-main">
                      Compareceu
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase text-text-main">
                      Horário de Chegada:
                    </span>
                    <div className="w-24 border-b-2 border-border-color print:border-gray-400 h-5">
                    </div>
                  </div>
                </div>
              </div>
              {/* SECTION: DADOS DO PACIENTE */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary flex items-center gap-2 mb-3 border-b border-border-color pb-1">
                  <span className="material-symbols-outlined text-base">
                    person
                  </span>
                  Dados do Paciente
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <div>
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Nome Completo
                    </p>
                    <p className="text-lg font-bold text-text-main">
                      Ana Clara de Souza Mendes
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Data de Nascimento
                    </p>
                    <p className="text-sm font-medium text-text-main">
                      12/05/1985 (38 anos)
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Documento (CPF)
                    </p>
                    <p className="text-sm font-medium text-text-main">
                      123.456.789-00
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Contato
                    </p>
                    <p className="text-sm font-medium text-text-main">
                      (11) 99876-5432
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] uppercase text-text-secondary font-bold mb-0.5">
                      Convênio
                    </p>
                    <p className="text-sm font-medium text-text-main">
                      Bradesco Saúde (Plano Top Nacional)
                    </p>
                  </div>
                </div>
              </div>
              {/* SECTION: ANOTAÇÕES (MANUAL) */}
              <div className="mb-8 flex-grow">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-base">
                    edit_note
                  </span>
                  Anotações Clínicas / Observações
                </h3>
                <div className="flex flex-col gap-8 pt-2">
                  {/* Ruled lines for writing */}
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                  <div className="border-b border-gray-300 w-full">
                  </div>
                </div>
              </div>
              {/* SECTION: PROCEDIMENTOS (TABLE) */}
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-base">
                    medical_services
                  </span>
                  Procedimentos Realizados
                </h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border-color print:border-gray-800">
                      <th className="py-2 text-[10px] uppercase font-bold text-text-secondary w-3/5">
                        Descrição do Procedimento / Item
                      </th>
                      <th className="py-2 text-[10px] uppercase font-bold text-text-secondary w-1/5 text-center">
                        Qtd.
                      </th>
                      <th className="py-2 text-[10px] uppercase font-bold text-text-secondary w-1/5 text-right">
                        Valor (R$)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Empty rows for manual entry */}
                    <tr className="border-b border-border-color print:border-gray-300 h-10">
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                    </tr>
                    <tr className="border-b border-border-color print:border-gray-300 h-10">
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                    </tr>
                    <tr className="border-b border-border-color print:border-gray-300 h-10">
                      <td>
                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* SECTION: ASSINATURAS */}
              <div className="mt-auto grid grid-cols-2 gap-16 pt-8">
                <div className="flex flex-col items-center">
                  <div className="w-full border-b border-black mb-2">
                  </div>
                  <p className="text-xs font-bold uppercase text-text-main text-center">
                    Assinatura do Paciente / Responsável
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full border-b border-black mb-2">
                  </div>
                  <p className="text-xs font-bold uppercase text-text-main text-center">
                    Assinatura do Profissional
                  </p>
                </div>
              </div>
              {/* FOOTER */}
              <div className="mt-8 pt-4 border-t border-dashed border-gray-300 text-[10px] text-text-secondary flex justify-between items-center">
                <div className="flex gap-4">
                  <span>
                    Impresso em: 24/10/2023 10:15 por Admin
                  </span>
                  <span>
                    LifeMed ClinicOps v2.4
                  </span>
                </div>
                <div className="max-w-[50%] text-right">
                  Documento de uso interno. Contém dados sensíveis protegidos pela LGPD.
                </div>
              </div>
            </div>
          </main>
          {/* Floating Empty State / Error Hint (Hidden by default, just conceptual placement per prompt requirements) */}
          {/* <div class="hidden absolute inset-0 bg-white/80 z-50 flex items-center justify-center"> <div class="bg-white p-8 rounded-xl shadow-xl border border-red-100 flex flex-col items-center text-center"> <span class="material-symbols-outlined text-4xl text-red-500 mb-2">error</span> <h3 class="font-bold text-lg">Não foi possível carregar a ficha</h3> <button class="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold">Tentar novamente</button> </div> </div> */}
        </body>
      </html>
    </section>
  );
}
