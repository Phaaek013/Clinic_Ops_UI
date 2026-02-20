import '../../styles/ui/agendar-profissional-passo-2-5.css';

export function AgendarProfissionalPasso25() {
  return (
    <div className="ui-page ui-agendar-profissional-passo-2-5 bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-x-hidden flex flex-col min-h-screen">
{/*Header & Breadcrumbs*/}
<div className="w-full px-4 md:px-10 lg:px-40 py-5 bg-background-light dark:bg-background-dark">
<div className="max-w-[1280px] mx-auto flex flex-col gap-4">
{/*Breadcrumbs*/}
<div className="flex flex-wrap gap-2 items-center text-sm">
<a className="text-text-secondary hover:text-primary transition-colors font-medium leading-normal" href="#">Início</a>
<span className="text-text-secondary font-medium leading-normal material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-text-main dark:text-gray-200 font-medium leading-normal">Agendar</span>
</div>
{/*Page Heading*/}
<div className="flex flex-col gap-2">
<h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Agendar Consulta</h1>
<p className="text-text-secondary text-base font-normal leading-normal">Passo 2 de 5: Escolha o especialista ideal para o seu atendimento.</p>
</div>
</div>
</div>
{/*Stepper*/}
<div className="w-full px-4 md:px-10 lg:px-40 pb-8 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
<div className="max-w-[1280px] mx-auto">
<div className="flex items-center justify-between w-full max-w-3xl">
{/*Step 1: Completed*/}
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-text-main font-bold shadow-sm">
<span className="material-symbols-outlined text-lg">check</span>
</div>
<span className="text-xs font-semibold text-primary-dark dark:text-primary">Serviço</span>
</div>
<div className="step-connector active"></div>
{/*Step 2: Active*/}
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center text-text-main font-bold shadow-sm z-10">
                        2
                    </div>
<span className="text-xs font-bold text-text-main dark:text-white">Profissional</span>
</div>
<div className="step-connector"></div>
{/*Step 3: Disabled*/}
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                        3
                    </div>
<span className="text-xs font-medium text-gray-400">Data e Hora</span>
</div>
<div className="step-connector"></div>
{/*Step 4: Disabled*/}
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                        4
                    </div>
<span className="text-xs font-medium text-gray-400">Dados</span>
</div>
<div className="step-connector"></div>
{/*Step 5: Disabled*/}
<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                        5
                    </div>
<span className="text-xs font-medium text-gray-400">Fim</span>
</div>
</div>
</div>
</div>
{/*Main Content*/}
<div className="flex-grow w-full px-4 md:px-10 lg:px-40 py-8 bg-gray-50 dark:bg-[#0c1a1a]">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*Left Column: Selection Area*/}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*Context Bar: Selected Service*/}
<div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">medical_services</span>
</div>
<div>
<p className="text-xs text-text-secondary font-medium uppercase tracking-wide">Serviço Selecionado</p>
<p className="text-text-main dark:text-white text-base font-bold">Consulta Cardiológica - Primeira Vez</p>
</div>
</div>
<button className="text-sm font-semibold text-primary-dark dark:text-primary hover:underline whitespace-nowrap">Trocar serviço</button>
</div>
{/*Filters & Search*/}
<div className="flex flex-col gap-4">
<div className="flex flex-col md:flex-row gap-4">
{/*Search Bar*/}
<div className="flex-1">
<label className="relative block w-full">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary">
<span className="material-symbols-outlined">search</span>
</span>
<input className="block w-full rounded-lg border-0 bg-white dark:bg-surface-dark py-3 pl-10 pr-4 text-text-main dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:outline-none sm:text-sm sm:leading-6 shadow-sm" placeholder="Buscar profissional por nome..." type="text" />
</label>
</div>
{/*Sort Dropdown*/}
<div className="min-w-[180px]">
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-0 bg-white dark:bg-surface-dark py-3 pl-4 pr-10 text-text-main dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-primary focus:outline-none sm:text-sm shadow-sm cursor-pointer">
<option>Disponibilidade</option>
<option>Melhor Avaliação</option>
<option>Preço: Menor para Maior</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</div>
{/*Filter Chips*/}
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-sm font-medium border border-primary/20 transition-colors hover:bg-primary/20">
                            Todos
                        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark text-text-secondary text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors hover:border-gray-400">
                            Hoje
                        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark text-text-secondary text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors hover:border-gray-400">
                            Amanhã
                        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark text-text-secondary text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors hover:border-gray-400">
                            Feminino
                        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark text-text-secondary text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors hover:border-gray-400">
                            Masculino
                        </button>
</div>
</div>
{/*"Any Professional" Option*/}
<div className="bg-gradient-to-r from-[#e0f7fa] to-[#f0fcfc] dark:from-[#0f2e2e] dark:to-[#163838] rounded-xl p-1 border border-primary/30 shadow-sm relative overflow-hidden group hover:border-primary transition-all cursor-pointer">
<div className="flex items-center p-4 gap-4 relative z-10">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-surface-dark text-primary shadow-sm shrink-0">
<span className="material-symbols-outlined text-2xl">groups</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-bold text-text-main dark:text-white">Qualquer Profissional</h3>
<p className="text-sm text-text-secondary">O horário mais próximo disponível com qualquer especialista da nossa equipe.</p>
</div>
<div className="shrink-0">
<input className="h-6 w-6 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-surface-dark" name="professional" type="radio" />
</div>
</div>
</div>
{/*Professionals Grid*/}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*Card 1: Selected State*/}
<label className="cursor-pointer relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border-2 border-primary shadow-md transition-all hover:shadow-lg p-5 gap-4 group">
<div className="absolute top-4 right-4">
<input checked="" className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-surface-dark" name="professional" type="radio" />
</div>
<div className="flex items-start gap-4">
<div className="relative shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover" data-alt="Portrait of Dr. Roberto Silva, smiling male doctor in white coat" src="/avatar.svg" />
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-surface-dark" title="Disponível agora"></div>
</div>
<div className="flex flex-col pt-1">
<h3 className="text-base font-bold text-text-main dark:text-white">Dr. Roberto Silva</h3>
<p className="text-sm text-text-secondary">Cardiologista</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
<span className="text-xs font-semibold text-text-main dark:text-gray-200">4.9</span>
<span className="text-xs text-text-secondary">(124 avaliações)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">calendar_clock</span>
                                Próximo: Hoje, 14:30
                            </div>
<button className="mt-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors text-left flex items-center gap-1" type="button">
                                Ver detalhes
                                <span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</label>
{/*Card 2*/}
<label className="cursor-pointer relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:border-primary/50 hover:shadow-md p-5 gap-4 group">
<div className="absolute top-4 right-4">
<input className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-surface-dark" name="professional" type="radio" />
</div>
<div className="flex items-start gap-4">
<div className="relative shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover" data-alt="Portrait of Dr. Ana Souza, female doctor wearing glasses and white coat" src="/avatar.svg" />
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-surface-dark"></div>
</div>
<div className="flex flex-col pt-1">
<h3 className="text-base font-bold text-text-main dark:text-white">Dra. Ana Souza</h3>
<p className="text-sm text-text-secondary">Cardiologista Intervencionista</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
<span className="text-xs font-semibold text-text-main dark:text-gray-200">5.0</span>
<span className="text-xs text-text-secondary">(89 avaliações)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-text-main dark:text-gray-300 text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                Próximo: Amanhã, 09:00
                            </div>
<button className="mt-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors text-left flex items-center gap-1" type="button">
                                Ver detalhes
                                <span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</label>
{/*Card 3*/}
<label className="cursor-pointer relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:border-primary/50 hover:shadow-md p-5 gap-4 group">
<div className="absolute top-4 right-4">
<input className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-white dark:bg-surface-dark" name="professional" type="radio" />
</div>
<div className="flex items-start gap-4">
<div className="relative shrink-0">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover" data-alt="Portrait of Dr. Carlos Mendes, older male doctor with grey hair" src="/avatar.svg" />
</div>
{/*No availability dot = unavailable or later*/}
</div>
<div className="flex flex-col pt-1">
<h3 className="text-base font-bold text-text-main dark:text-white">Dr. Carlos Mendes</h3>
<p className="text-sm text-text-secondary">Cardiologista Pediátrico</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
<span className="text-xs font-semibold text-text-main dark:text-gray-200">4.8</span>
<span className="text-xs text-text-secondary">(210 avaliações)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-text-main dark:text-gray-300 text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                Próximo: 14/Out, 10:00
                            </div>
<button className="mt-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors text-left flex items-center gap-1" type="button">
                                Ver detalhes
                                <span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</label>
{/*Loading Skeleton (Example of what user might see while loading more)*/}
<div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 gap-4 animate-pulse">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0"></div>
<div className="flex flex-col pt-1 flex-1 gap-2">
<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
</div>
</div>
<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full mt-auto"></div>
</div>
</div>
{/*Pagination / Load More*/}
<div className="flex justify-center pt-4">
<button className="text-sm font-semibold text-text-secondary hover:text-primary-dark transition-colors">Carregar mais profissionais</button>
</div>
</div>
{/*Right Column: Sticky Summary*/}
<div className="lg:col-span-4">
<div className="sticky top-6 flex flex-col gap-4">
<div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-6">
<div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
<h2 className="text-lg font-bold text-text-main dark:text-white">Resumo</h2>
<span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Em andamento</span>
</div>
<div className="flex flex-col gap-4">
{/*Service Info*/}
<div className="flex gap-3 items-start">
<div className="mt-1 text-text-secondary">
<span className="material-symbols-outlined text-[20px]">medical_services</span>
</div>
<div>
<p className="text-xs text-text-secondary uppercase font-semibold">Serviço</p>
<p className="text-sm font-bold text-text-main dark:text-white">Consulta Cardiológica</p>
<p className="text-xs text-text-secondary mt-0.5">Duração estimada: 30 min</p>
</div>
</div>
{/*Professional Info (Dynamic)*/}
<div className="flex gap-3 items-start">
<div className="mt-1 text-text-secondary">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
<div className="flex-1">
<p className="text-xs text-text-secondary uppercase font-semibold">Profissional</p>
{/*Selected state mock*/}
<div className="flex items-center gap-2 mt-1">
<div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 shrink-0">
<img className="w-full h-full object-cover" data-alt="Mini portrait of Dr. Roberto" src="/avatar.svg" />
</div>
<p className="text-sm font-bold text-text-main dark:text-white">Dr. Roberto Silva</p>
</div>
</div>
</div>
{/*Date Info (Empty)*/}
<div className="flex gap-3 items-start opacity-50">
<div className="mt-1 text-text-secondary">
<span className="material-symbols-outlined text-[20px]">event</span>
</div>
<div>
<p className="text-xs text-text-secondary uppercase font-semibold">Data e Hora</p>
<p className="text-sm text-text-main dark:text-white italic">A selecionar no próximo passo</p>
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
<p className="text-sm text-text-secondary">Valor da consulta</p>
<p className="text-xl font-black text-text-main dark:text-white">R$ 350,00</p>
</div>
</div>
{/*Helper/Support Box*/}
<div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
<div className="flex gap-3">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400">info</span>
<p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
<strong>Dúvida na escolha?</strong><br />
                                Selecione "Qualquer Profissional" para visualizar os horários mais próximos disponíveis na clínica independente do médico.
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*Fixed Footer Actions*/}
<div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 py-4 px-4 md:px-10 lg:px-40 z-50">
<div className="max-w-[1280px] mx-auto flex justify-between items-center">
<button className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Voltar
            </button>
<button className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-text-main font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                Continuar
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/*Spacer for fixed footer*/}
<div className="h-24 bg-gray-50 dark:bg-[#0c1a1a]"></div>
    </div>
  );
}
