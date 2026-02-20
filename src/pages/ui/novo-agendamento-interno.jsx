import '../../styles/ui/novo-agendamento-interno.css';

export function NovoAgendamentoInterno() {
  return (
    <div className="ui-page ui-novo-agendamento-interno bg-background-light dark:bg-background-dark font-display text-text-dark antialiased overflow-hidden selection:bg-primary selection:text-text-dark">
<div className="flex h-screen w-full overflow-hidden">
{/*Sidebar (Based on provided SideNavBar)*/}
<aside className="flex-none hidden md:flex w-64 flex-col bg-surface-light border-r border-[#e7f3f3] h-full z-20">
<div className="flex h-full flex-col justify-between p-4">
<div className="flex flex-col gap-4">
{/*Brand*/}
<div className="flex gap-3 items-center px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm" data-alt="LifeMed Logo Abstract Gradient" style={{backgroundImage: 'linear-gradient(135deg, #13ecec 0%, #0d1b1b 100%)'}}></div>
<div className="flex flex-col">
<h1 className="text-text-dark text-base font-bold leading-normal tracking-wide">LifeMed</h1>
<p className="text-text-light text-xs font-normal leading-normal tracking-wider">CLINICOPS</p>
</div>
</div>
{/*Navigation*/}
<div className="flex flex-col gap-2 mt-4">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-text-dark group-hover:text-primary-dark">dashboard</span>
<p className="text-text-dark text-sm font-medium leading-normal">Painel</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 cursor-pointer">
<span className="material-symbols-outlined text-text-dark icon-fill">calendar_today</span>
<p className="text-text-dark text-sm font-bold leading-normal">Agenda</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-text-dark group-hover:text-primary-dark">group</span>
<p className="text-text-dark text-sm font-medium leading-normal">Pacientes</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-text-dark group-hover:text-primary-dark">payments</span>
<p className="text-text-dark text-sm font-medium leading-normal">Financeiro</p>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-text-dark group-hover:text-primary-dark">settings</span>
<p className="text-text-dark text-sm font-medium leading-normal">Admin</p>
</div>
</div>
</div>
{/*Bottom User Info*/}
<div className="border-t border-[#e7f3f3] pt-4">
<div className="flex items-center gap-3 px-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="User Avatar Profile" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div className="flex flex-col">
<p className="text-text-dark text-sm font-medium leading-none">Ana Souza</p>
<p className="text-text-light text-xs font-normal">Recepcionista</p>
</div>
</div>
</div>
</div>
</aside>
{/*Main Content Wrapper*/}
<div className="flex flex-col flex-1 h-full overflow-hidden bg-background-light relative">
{/*TopNavBar (Based on provided TopNavBar)*/}
<header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7f3f3] bg-surface-light px-6 py-3 z-10">
<div className="flex items-center gap-4 text-text-dark md:hidden">
<span className="material-symbols-outlined">menu</span>
</div>
{/*Breadcrumbs Mobile/Tablet hidden mostly, shown in desktop layout container usually, but keeping header clean*/}
<div className="hidden md:flex flex-1">
{/*Top search can go here or right side*/}
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<div className="hidden md:block w-full max-w-[320px]">
<label className="flex flex-col h-10 w-full">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-background-light border border-transparent focus-within:border-primary/50 transition-all">
<div className="text-text-light flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-light/70 px-3 text-sm font-normal leading-normal" placeholder="Buscar paciente, médico ou agendamento..." value="" />
</div>
</label>
</div>
<button className="relative text-text-dark hover:text-primary-dark transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-surface-light"></span>
</button>
<div className="h-6 w-px bg-gray-200"></div>
<button className="text-text-dark hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium">
                        Ajuda
                        <span className="material-symbols-outlined text-[18px]">help</span>
</button>
</div>
</header>
{/*Scrollable Content*/}
<main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
<div className="max-w-[1200px] mx-auto flex flex-col gap-6">
{/*Header Section: Breadcrumbs + Title*/}
<div className="flex flex-col gap-4">
{/*Breadcrumbs*/}
<div className="flex flex-wrap gap-2 text-sm">
<a className="text-text-light hover:text-primary-dark transition-colors font-medium" href="#">Home</a>
<span className="text-text-light font-medium">/</span>
<a className="text-text-light hover:text-primary-dark transition-colors font-medium" href="#">Agendamentos</a>
<span className="text-text-light font-medium">/</span>
<span className="text-text-dark font-semibold">Novo</span>
</div>
{/*Page Heading*/}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div className="flex flex-col gap-1">
<h2 className="text-text-dark text-3xl font-bold leading-tight tracking-tight">Novo agendamento</h2>
<p className="text-text-light text-base font-normal">Preencha os dados abaixo para cadastrar uma nova consulta.</p>
</div>
{/*Mobile Actions could go here*/}
</div>
</div>
{/*Main Grid Layout*/}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*Left Column: Form (Span 8)*/}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*Section 1: Patient Identification*/}
<section className="bg-surface-light rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-lg text-primary-dark">
<span className="material-symbols-outlined">person_search</span>
</div>
<h3 className="text-text-dark text-lg font-bold">1. Paciente</h3>
</div>
<button className="text-primary-dark text-sm font-bold hover:underline" type="button">
                                        + Novo Paciente
                                    </button>
</div>
<div className="p-6">
{/*Search State (If no patient selected)*/}
<div className="hidden flex-col gap-3">
<label className="text-sm font-semibold text-text-dark">Localizar Paciente</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none" placeholder="Nome, CPF ou Telefone..." type="text" />
</div>
</div>
{/*Selected State (Simulated)*/}
<div className="flex items-center justify-between p-4 border border-primary/30 bg-[#f0fcfc] rounded-lg">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm" data-alt="Portrait of Maria Silva" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<div>
<p className="text-text-dark font-bold text-base">Maria Silva</p>
<div className="flex gap-3 text-xs text-text-light mt-0.5">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> 123.456.789-00</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">call</span> (11) 99999-8888</span>
</div>
</div>
</div>
<button className="text-text-light hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white" title="Remover seleção">
<span className="material-symbols-outlined">close</span>
</button>
</div>
</div>
</section>
{/*Section 2: Appointment Details*/}
<section className="bg-surface-light rounded-xl shadow-sm border border-gray-100 overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
<div className="bg-primary/10 p-2 rounded-lg text-primary-dark">
<span className="material-symbols-outlined">event_note</span>
</div>
<h3 className="text-text-dark text-lg font-bold">2. Detalhes do Agendamento</h3>
</div>
<div className="p-6 flex flex-col gap-6">
{/*Row 1: Service & Professional*/}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-text-dark flex justify-between">
                                                Serviço / Procedimento
                                                <span className="text-xs font-medium text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">30 min</span>
</label>
<div className="relative">
<select className="w-full pl-4 pr-10 py-3 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none text-sm text-text-dark cursor-pointer font-medium">
<option>Cardiologia - Primeira Consulta</option>
<option>Cardiologia - Retorno</option>
<option>Eletrocardiograma</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-text-dark">Profissional</label>
<div className="relative">
<select className="w-full pl-10 pr-10 py-3 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none text-sm text-text-dark cursor-pointer">
<option>Dr. Roberto Santos</option>
<option>Dra. Juliana Almeida</option>
<option value="any">Qualquer profissional disponível</option>
</select>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none text-[20px]">stethoscope</span>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*Row 2: Date & Time*/}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-text-dark">Data</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-text-dark font-medium" type="date" value="2023-10-14" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none text-[20px]">calendar_month</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-text-dark">Hora Início</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-text-dark font-medium" type="time" value="14:00" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none text-[20px]">schedule</span>
</div>
</div>
<div className="flex flex-col gap-2 opacity-70 pointer-events-none select-none">
<label className="text-sm font-semibold text-text-dark">Hora Término (Previsto)</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-sm text-text-dark/60 font-medium" readOnly="" type="time" value="14:30" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light pointer-events-none text-[20px]">schedule</span>
</div>
</div>
</div>
{/*Row 3: Status & Options*/}
<div className="grid grid-cols-1 gap-4">
<div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
<div className="flex h-6 items-center">
<input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="waiting-list" name="waiting-list" type="checkbox" />
</div>
<div className="text-sm leading-6">
<label className="font-medium text-text-dark" htmlFor="waiting-list">Lista de espera prioritária</label>
<p className="text-text-light text-xs">Marque se o paciente deseja ser notificado caso surja uma vaga anterior a esta data.</p>
</div>
</div>
</div>
{/*Row 4: Observations*/}
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-text-dark">Observação (Opcional)</label>
<textarea className="w-full p-4 bg-background-light border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none" placeholder="Ex: Paciente precisa de acessibilidade, preferência por sala térrea..." rows="3"></textarea>
</div>
</div>
</section>
{/*Actions Footer (Desktop)*/}
<div className="flex items-center justify-between pt-2">
<a className="text-text-light text-sm font-medium hover:text-text-dark hover:underline" href="#">Ver disponibilidade completa</a>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-lg border border-gray-300 text-text-dark font-bold text-sm hover:bg-gray-50 transition-colors">
                                        Cancelar
                                    </button>
<button className="px-8 py-3 rounded-lg bg-primary text-text-dark font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/30 transition-all transform active:scale-95 flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">check</span>
                                        Salvar Agendamento
                                    </button>
</div>
</div>
</div>
{/*Right Column: Sticky Summary (Span 4)*/}
<div className="lg:col-span-4 relative">
<div className="sticky top-6 flex flex-col gap-6">
{/*Summary Card*/}
<div className="bg-surface-light rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
<div className="p-5 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
<h4 className="text-text-dark font-bold text-base flex items-center gap-2">
<span className="material-symbols-outlined text-primary-dark">assignment</span>
                                            Resumo
                                        </h4>
</div>
<div className="p-5 flex flex-col gap-5">
{/*Patient Summary*/}
<div className="flex flex-col gap-1">
<p className="text-xs font-bold text-text-light uppercase tracking-wider">Paciente</p>
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-cover bg-center" data-alt="Small avatar of Maria Silva" style={{backgroundImage: 'url(\'/logo.svg\')'}}></div>
<p className="text-text-dark font-semibold text-sm">Maria Silva</p>
</div>
</div>
<div className="h-px w-full bg-gray-100"></div>
{/*Service Summary*/}
<div className="flex flex-col gap-1">
<p className="text-xs font-bold text-text-light uppercase tracking-wider">Serviço</p>
<p className="text-text-dark font-semibold text-sm">Cardiologia</p>
<p className="text-text-light text-xs">Primeira Consulta • 30 min</p>
</div>
{/*Professional Summary*/}
<div className="flex flex-col gap-1">
<p className="text-xs font-bold text-text-light uppercase tracking-wider">Profissional</p>
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">DR</div>
<p className="text-text-dark font-semibold text-sm">Dr. Roberto Santos</p>
</div>
</div>
<div className="h-px w-full bg-gray-100"></div>
{/*Date Summary*/}
<div className="flex flex-col gap-1">
<p className="text-xs font-bold text-text-light uppercase tracking-wider">Data e Hora</p>
<div className="flex items-center gap-2 text-text-dark font-bold text-lg">
<span>14/10</span>
<span className="text-gray-300">•</span>
<span>14:00</span>
</div>
<p className="text-text-light text-xs">Segunda-feira</p>
</div>
{/*Validation State: Success/Available*/}
<div className="mt-2 p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-start gap-3">
<div className="text-emerald-500 mt-0.5">
<span className="material-symbols-outlined icon-fill text-[20px]">check_circle</span>
</div>
<div>
<p className="text-emerald-800 text-sm font-bold">Horário Disponível</p>
<p className="text-emerald-600 text-xs mt-0.5">Nenhum conflito encontrado na agenda do Dr. Roberto.</p>
</div>
</div>
{/*Example of Conflict State (Hidden but present in code for reference)*/}
{/*<div className="mt-2 p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-start gap-3">
                                            <div className="text-amber-500 mt-0.5">
                                                <span className="material-symbols-outlined icon-fill text-[20px]">warning</span>
                                            </div>
                                            <div>
                                                <p className="text-amber-800 text-sm font-bold">Conflito de Horário</p>
                                                <p className="text-amber-600 text-xs mt-0.5">Dr. Roberto já possui agendamento.</p>
                                                <button className="mt-2 text-xs font-bold text-amber-700 underline">Sugerir 14:30</button>
                                            </div>
                                        </div>*/}
</div>
<div className="bg-gray-50 px-5 py-3 border-t border-gray-100 text-center">
<p className="text-[10px] text-text-light font-medium">Última atualização: Agora mesmo</p>
</div>
</div>
{/*Helper Info*/}
<div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
<div className="flex gap-2 items-start">
<span className="material-symbols-outlined text-blue-400 text-[20px]">info</span>
<p className="text-xs text-blue-800 leading-relaxed">
<span className="font-bold">Dica:</span> Utilize o atalho <kbd className="px-1.5 py-0.5 rounded bg-white border border-blue-200 text-[10px] font-mono mx-1">Alt + N</kbd> para iniciar um novo cadastro rápido de paciente sem sair desta tela.
                                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
    </div>
  );
}
