import '../../styles/ui/detalhe-paciente-lifemed.css';

const screenHtml = `<div class="flex h-screen w-full">
<!-- SIDEBAR -->
<aside class="hidden lg:flex w-[280px] flex-col border-r border-border-light bg-background-light flex-shrink-0 h-full overflow-y-auto">
<div class="p-6 flex flex-col h-full justify-between">
<div class="flex flex-col gap-8">
<!-- Brand -->
<div class="flex gap-3 items-center">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" data-alt="LifeMed Logo Abstract Gradient" style='background-image: none;'></div>
<div class="flex flex-col">
<h1 class="text-text-main text-lg font-bold leading-none">LifeMed</h1>
<p class="text-text-secondary text-xs font-medium tracking-wide">ClinicOps</p>
</div>
</div>
<!-- Navigation -->
<nav class="flex flex-col gap-2">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span class="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-text-main font-semibold" href="#">
<span class="material-symbols-outlined text-primary-dark">group</span>
<span class="text-sm">Pacientes</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span class="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">calendar_month</span>
<span class="text-sm font-medium">Agenda</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span class="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">payments</span>
<span class="text-sm font-medium">Financeiro</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-main hover:bg-border-light transition-colors group" href="#">
<span class="material-symbols-outlined text-text-secondary group-hover:text-text-main transition-colors">settings</span>
<span class="text-sm font-medium">Configurações</span>
</a>
</nav>
</div>
<!-- User Profile Snippet in Sidebar (Optional for bottom area) -->
<div class="flex items-center gap-3 px-3 py-3 rounded-xl bg-white border border-border-light shadow-sm cursor-pointer hover:shadow-md transition-shadow">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8" data-alt="User Avatar" style='background-image: none;'></div>
<div class="flex flex-col overflow-hidden">
<span class="text-sm font-bold truncate">Dra. Ana</span>
<span class="text-xs text-text-secondary truncate">Administradora</span>
</div>
</div>
</div>
</aside>
<!-- MAIN CONTENT WRAPPER -->
<div class="flex-1 flex flex-col min-w-0 h-full bg-white relative">
<!-- TOP NAVBAR -->
<header class="h-16 border-b border-border-light flex items-center justify-between px-6 lg:px-8 bg-background-light/50 backdrop-blur-sm sticky top-0 z-30">
<!-- Mobile Menu Button -->
<button class="lg:hidden p-2 -ml-2 text-text-main">
<span class="material-symbols-outlined">menu</span>
</button>
<!-- Search Bar -->
<div class="hidden md:flex max-w-md w-full ml-4">
<div class="relative w-full group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-text-secondary group-focus-within:text-primary-dark transition-colors">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-border-light text-text-main placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all sm:text-sm" placeholder="Buscar pacientes, prontuários..." type="text" value=""/>
</div>
</div>
<!-- Right Actions -->
<div class="flex items-center gap-4 ml-auto">
<button class="p-2 rounded-full hover:bg-border-light text-text-main relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button class="p-2 rounded-full hover:bg-border-light text-text-main">
<span class="material-symbols-outlined">help</span>
</button>
<!-- Mobile Avatar -->
<div class="lg:hidden bg-center bg-no-repeat bg-cover rounded-full size-8 ml-2" data-alt="User Avatar Mobile" style='background-image: none;'></div>
</div>
</header>
<!-- SCROLLABLE PAGE CONTENT -->
<main class="flex-1 overflow-y-auto bg-[#f8fcfc] p-4 md:p-8">
<div class="max-w-7xl mx-auto space-y-6">
<!-- BREADCRUMBS -->
<nav class="flex items-center text-sm text-text-secondary mb-2">
<a class="hover:text-primary-dark transition-colors" href="#">Dashboard</a>
<span class="material-symbols-outlined text-sm mx-1">chevron_right</span>
<a class="hover:text-primary-dark transition-colors" href="#">Pacientes</a>
<span class="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span class="text-text-main font-medium">João da Silva</span>
</nav>
<!-- PROFILE HEADER -->
<div class="bg-white rounded-2xl shadow-sm border border-border-light p-6 md:p-8 relative overflow-hidden group">
<!-- Background Pattern -->
<div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none -mr-16 -mt-16"></div>
<div class="flex flex-col md:flex-row gap-6 md:items-center relative z-10">
<!-- Avatar -->
<div class="relative shrink-0">
<div class="size-24 md:size-32 rounded-full border-4 border-white shadow-md bg-cover bg-center" data-alt="Patient Portrait" style='background-image: none;'></div>
<div class="absolute bottom-1 right-1 bg-green-500 border-2 border-white size-5 rounded-full" title="Online / Cadastro Ativo"></div>
</div>
<!-- Info -->
<div class="flex-1 space-y-2">
<div class="flex flex-wrap items-center gap-3">
<h1 class="text-3xl font-bold text-text-main tracking-tight">João da Silva</h1>
<span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full tracking-wide">Ativo</span>
<span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wide">VIP</span>
</div>
<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-text-secondary text-sm">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg">badge</span>
                                        ID: #84920
                                    </span>
<span class="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg">event</span>
                                        34 anos (12/05/1989)
                                    </span>
<span class="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg">corporate_fare</span>
                                        Unimed
                                    </span>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<div class="px-2 py-1 bg-background-light border border-border-light rounded text-xs text-text-main flex items-center gap-1">
<span class="material-symbols-outlined text-sm">check_circle</span>
                                        Cadastro Completo
                                    </div>
<div class="px-2 py-1 bg-background-light border border-border-light rounded text-xs text-text-main flex items-center gap-1">
<span class="material-symbols-outlined text-sm">notifications_active</span>
                                        Recebe SMS
                                    </div>
</div>
</div>
<!-- Actions -->
<div class="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 shrink-0">
<button class="flex-1 md:flex-none h-11 px-5 bg-primary hover:bg-primary-dark text-text-main font-bold rounded-xl transition-colors shadow-sm shadow-primary/20 flex items-center justify-center gap-2">
<span class="material-symbols-outlined">add_circle</span>
                                    Novo Agendamento
                                </button>
<button class="size-11 flex items-center justify-center border border-border-light rounded-xl hover:bg-background-light text-text-main transition-colors" title="Mais opções">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
<!-- LAYOUT GRID -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
<!-- LEFT COLUMN (TABS & CONTENT) -->
<div class="lg:col-span-2 space-y-6">
<!-- Tabs Navigation -->
<div class="border-b border-border-light">
<nav aria-label="Tabs" class="-mb-px flex space-x-8 overflow-x-auto hide-scrollbar">
<a class="border-primary text-primary-dark whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-lg">overview</span>
                                        Visão Geral
                                    </a>
<a class="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-lg">calendar_month</span>
                                        Agendamentos
                                        <span class="ml-1 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">12</span>
</a>
<a class="border-transparent text-text-secondary hover:text-text-main hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-lg">tune</span>
                                        Preferências
                                    </a>
</nav>
</div>
<!-- TAB CONTENT: VISÃO GERAL -->
<div class="space-y-6">
<!-- Card: Dados Cadastrais -->
<div class="bg-white rounded-xl shadow-sm border border-border-light p-6">
<div class="flex justify-between items-start mb-6">
<div class="flex flex-col">
<h3 class="text-lg font-bold text-text-main">Dados Cadastrais</h3>
<p class="text-sm text-text-secondary">Informações de contato e identificação.</p>
</div>
<button class="text-sm text-primary-dark font-semibold hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-base">edit</span>
                                            Editar
                                        </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
<!-- Field Item -->
<div class="group">
<label class="block text-xs font-medium text-text-secondary uppercase mb-1">Celular</label>
<div class="flex items-center gap-2">
<span class="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">(11) 9****-8821</span>
<button class="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span class="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
<!-- Field Item -->
<div class="group">
<label class="block text-xs font-medium text-text-secondary uppercase mb-1">E-mail</label>
<div class="flex items-center gap-2">
<span class="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">joa*****@gmail.com</span>
<button class="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span class="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
<!-- Field Item -->
<div class="group">
<label class="block text-xs font-medium text-text-secondary uppercase mb-1">CPF</label>
<div class="flex items-center gap-2">
<span class="text-text-main font-medium font-mono text-base bg-gray-50 px-2 py-1 rounded border border-transparent group-hover:border-border-light transition-colors">***.452.89*-**</span>
<button class="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Revelar dados">
<span class="material-symbols-outlined text-lg">visibility</span>
</button>
</div>
</div>
<!-- Field Item -->
<div class="group">
<label class="block text-xs font-medium text-text-secondary uppercase mb-1">Contato de Emergência</label>
<div class="flex flex-col">
<span class="text-text-main font-medium text-sm">Maria Silva (Esposa)</span>
<span class="text-text-secondary text-xs">(11) 98765-4321</span>
</div>
</div>
<!-- Field Item (Full Width) -->
<div class="md:col-span-2 group">
<label class="block text-xs font-medium text-text-secondary uppercase mb-1">Endereço</label>
<div class="flex items-center gap-2">
<span class="text-text-main font-medium text-base truncate">Rua das Flores, 123 - Jardins, São Paulo - SP</span>
<button class="text-text-secondary hover:text-primary-dark p-1 rounded hover:bg-primary/10 transition-colors" title="Copiar endereço">
<span class="material-symbols-outlined text-lg">content_copy</span>
</button>
</div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg text-xs font-medium">
<span class="material-symbols-outlined text-lg">lock</span>
                                        Nenhuma informação clínica é exibida nesta tela. Para prontuário, acesse o módulo clínico.
                                    </div>
</div>
<!-- Card: Notas Operacionais & Sinais -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Operational Notes -->
<div class="bg-white rounded-xl shadow-sm border border-border-light p-6 flex flex-col h-full">
<h3 class="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-text-secondary">sticky_note_2</span>
                                            Notas Operacionais
                                        </h3>
<div class="bg-yellow-50/50 p-4 rounded-lg border border-yellow-100 flex-1 min-h-[120px]">
<p class="text-sm text-gray-700 leading-relaxed">
                                                Paciente prefere atendimentos no período da tarde. Sempre confirmar estacionamento. 
                                                <br/><br/>
<strong>Obs:</strong> Documento atualizado em 12/01/2023.
                                            </p>
</div>
<button class="mt-3 text-xs text-text-secondary hover:text-primary-dark font-medium self-end">Adicionar nota</button>
</div>
<!-- Quick Actions / Queue Status -->
<div class="bg-white rounded-xl shadow-sm border border-border-light p-6 flex flex-col">
<h3 class="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-text-secondary">traffic</span>
                                            Status Operacional
                                        </h3>
<div class="flex-1 flex flex-col justify-center items-center py-4 gap-3 text-center">
<div class="size-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
<span class="material-symbols-outlined text-2xl">person_off</span>
</div>
<div>
<p class="text-sm font-medium text-text-main">Não está na fila hoje</p>
<p class="text-xs text-text-secondary">Nenhum agendamento para hoje.</p>
</div>
</div>
<div class="grid grid-cols-2 gap-3 mt-4">
<button class="py-2 px-3 border border-border-light rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/50 text-text-main transition-colors">
                                                Check-in
                                            </button>
<button class="py-2 px-3 border border-border-light rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/50 text-text-main transition-colors">
                                                Lista de Espera
                                            </button>
</div>
</div>
</div>
<!-- Latest Appointments Preview (Mini Table) -->
<div class="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden">
<div class="px-6 py-4 border-b border-border-light flex justify-between items-center bg-gray-50/50">
<h3 class="font-bold text-text-main text-sm uppercase tracking-wide">Últimos Agendamentos</h3>
<a class="text-xs font-bold text-primary-dark hover:underline" href="#">Ver todos</a>
</div>
<div class="overflow-x-auto">
<table class="w-full text-sm text-left">
<thead class="text-xs text-text-secondary uppercase bg-gray-50 border-b border-border-light">
<tr>
<th class="px-6 py-3 font-medium" scope="col">Data/Hora</th>
<th class="px-6 py-3 font-medium" scope="col">Serviço</th>
<th class="px-6 py-3 font-medium" scope="col">Profissional</th>
<th class="px-6 py-3 font-medium" scope="col">Status</th>
<th class="px-6 py-3 font-medium text-right" scope="col">Ação</th>
</tr>
</thead>
<tbody class="divide-y divide-border-light">
<tr class="hover:bg-gray-50/50 transition-colors">
<td class="px-6 py-4 font-medium text-text-main">
                                                        Hoje, 14:00
                                                    </td>
<td class="px-6 py-4">Consulta Rotina</td>
<td class="px-6 py-4 flex items-center gap-2">
<div class="size-6 rounded-full bg-gray-200 bg-cover" data-alt="Doctor Avatar" style='background-image: none;'></div>
                                                        Dr. House
                                                    </td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Confirmado</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-text-secondary hover:text-text-main">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>
<tr class="hover:bg-gray-50/50 transition-colors opacity-60">
<td class="px-6 py-4 font-medium text-text-main">
                                                        12/05/2023
                                                    </td>
<td class="px-6 py-4">Retorno</td>
<td class="px-6 py-4 flex items-center gap-2">
<div class="size-6 rounded-full bg-gray-200 bg-cover" data-alt="Doctor Avatar" style='background-image: none;'></div>
                                                        Dra. Grey
                                                    </td>
<td class="px-6 py-4">
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">Realizado</span>
</td>
<td class="px-6 py-4 text-right">
<button class="text-text-secondary hover:text-text-main">
<span class="material-symbols-outlined text-lg">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN (STICKY SUMMARY) -->
<div class="lg:col-span-1 space-y-6">
<!-- Next Appointment Widget -->
<div class="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg p-6 text-white relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 scale-150 transform group-hover:scale-125 transition-transform duration-500">
<span class="material-symbols-outlined text-9xl">alarm</span>
</div>
<h3 class="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">Próximo Agendamento</h3>
<div class="text-3xl font-bold mb-1">Amanhã</div>
<div class="text-lg font-medium opacity-90 mb-6">14:00 - Cardiologia</div>
<div class="flex gap-2 relative z-10">
<button class="bg-white text-primary-dark hover:bg-gray-50 text-sm font-bold py-2 px-4 rounded-lg shadow-sm flex-1 transition-colors">
                                        Ver detalhes
                                    </button>
<button class="bg-black/20 hover:bg-black/30 text-white p-2 rounded-lg transition-colors backdrop-blur-sm" title="Reagendar">
<span class="material-symbols-outlined">edit_calendar</span>
</button>
</div>
</div>
<!-- Financial Summary -->
<div class="bg-white rounded-xl shadow-sm border border-border-light p-5">
<h4 class="text-sm font-bold text-text-main mb-4 flex items-center justify-between">
                                    Resumo Financeiro
                                    <span class="material-symbols-outlined text-gray-400">arrow_forward</span>
</h4>
<div class="space-y-3">
<div class="flex justify-between items-center">
<span class="text-sm text-text-secondary">Em aberto</span>
<span class="text-sm font-bold text-red-500">R$ 150,00</span>
</div>
<div class="w-full bg-gray-100 rounded-full h-1.5">
<div class="bg-red-500 h-1.5 rounded-full" style="width: 25%"></div>
</div>
<p class="text-xs text-text-secondary mt-2">1 fatura pendente (Venc. 10/10)</p>
</div>
</div>
<!-- Activity Timeline -->
<div class="bg-white rounded-xl shadow-sm border border-border-light p-6">
<h3 class="text-lg font-bold text-text-main mb-4">Atividade Recente</h3>
<div class="relative pl-4 border-l border-border-light space-y-6">
<!-- Item 1 -->
<div class="relative">
<div class="absolute -left-[21px] top-1 bg-primary size-3 rounded-full border-2 border-white shadow-sm"></div>
<p class="text-sm font-medium text-text-main">Agendamento Confirmado</p>
<p class="text-xs text-text-secondary mt-0.5">Por <strong>Dra. Ana</strong> via Painel</p>
<p class="text-xs text-gray-400 mt-1">Hoje, 09:30</p>
</div>
<!-- Item 2 -->
<div class="relative">
<div class="absolute -left-[21px] top-1 bg-gray-300 size-3 rounded-full border-2 border-white"></div>
<p class="text-sm font-medium text-text-main">Lembrete SMS Enviado</p>
<p class="text-xs text-text-secondary mt-0.5">Sistema Automático</p>
<p class="text-xs text-gray-400 mt-1">Ontem, 14:00</p>
</div>
<!-- Item 3 -->
<div class="relative">
<div class="absolute -left-[21px] top-1 bg-gray-300 size-3 rounded-full border-2 border-white"></div>
<p class="text-sm font-medium text-text-main">Dados atualizados</p>
<p class="text-xs text-text-secondary mt-0.5">Alteração de endereço</p>
<p class="text-xs text-gray-400 mt-1">12/05/2023</p>
</div>
<button class="text-xs text-primary-dark font-semibold hover:underline mt-2">Ver todo o histórico</button>
</div>
</div>
</div>
</div> <!-- End Grid -->
<!-- Footer Info -->
<div class="text-center py-6">
<p class="text-xs text-gray-400">© 2023 LifeMed Systems. Dados protegidos por criptografia de ponta a ponta.</p>
</div>
</div>
</main>
</div>
</div>`;

export function UiDetalhePacienteLifemedPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/detalhe-paciente-lifemed" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
