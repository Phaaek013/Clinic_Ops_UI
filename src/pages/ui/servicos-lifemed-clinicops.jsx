import '../../styles/ui/servicos-lifemed-clinicops.css';

const screenHtml = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
<div class="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
<div class="flex items-center gap-4 text-text-main">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] hidden md:block">LifeMed ClinicOps</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-6 lg:gap-9">
<a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">Início</a>
<a class="text-primary text-sm font-bold border-b-2 border-primary pb-0.5" href="#">Agendamentos</a>
<a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">Resultados</a>
<a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">Perfil</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden lg:flex h-10 px-4 items-center justify-center rounded-lg bg-primary hover:bg-primary-hover text-text-main text-sm font-bold transition-colors">
<span>Entrar</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-border-light cursor-pointer" data-alt="Avatar do usuário logado" style='background-image: none;'></div>
<!-- Mobile Menu Trigger -->
<button class="md:hidden text-text-main">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</header>
<main class="flex-grow">
<div class="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-6 md:py-10">
<!-- Breadcrumbs -->
<div class="flex items-center gap-2 mb-4">
<a class="text-text-secondary hover:text-primary text-sm font-medium transition-colors" href="#">Início</a>
<span class="text-text-secondary text-sm material-symbols-outlined text-[16px]">chevron_right</span>
<span class="text-text-main text-sm font-semibold">Serviços</span>
</div>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
<div class="max-w-2xl">
<h1 class="text-text-main text-3xl md:text-4xl font-bold tracking-tight mb-3">Serviços Disponíveis</h1>
<p class="text-text-secondary text-base md:text-lg leading-relaxed">
                        Explore nossa lista completa de especialidades médicas e exames de diagnóstico. Agende online com facilidade e segurança.
                    </p>
</div>
<button class="hidden md:flex h-10 px-6 items-center justify-center rounded-lg bg-[#e7f3f3] hover:bg-[#d5eeee] text-text-main text-sm font-bold transition-colors whitespace-nowrap">
<span class="material-symbols-outlined text-[20px] mr-2">calendar_today</span>
                    Agendamento Rápido
                </button>
</div>
<!-- Tabs -->
<div class="mb-8 border-b border-border-light">
<div class="flex gap-8 overflow-x-auto scrollbar-hide">
<button class="group flex items-center justify-center border-b-[3px] border-primary pb-3 px-2 min-w-[100px]">
<span class="text-text-main text-sm font-bold">Consultas</span>
</button>
<button class="group flex items-center justify-center border-b-[3px] border-transparent hover:border-[#cfe7e7] pb-3 px-2 min-w-[100px] transition-colors">
<span class="text-text-secondary group-hover:text-text-main text-sm font-bold transition-colors">Exames</span>
</button>
<button class="group flex items-center justify-center border-b-[3px] border-transparent hover:border-[#cfe7e7] pb-3 px-2 min-w-[100px] transition-colors">
<span class="text-text-secondary group-hover:text-text-main text-sm font-bold transition-colors">Procedimentos</span>
</button>
</div>
</div>
<!-- Filters & Search Toolbar -->
<div class="flex flex-col lg:flex-row gap-4 mb-8">
<!-- Search -->
<div class="relative flex-grow max-w-lg">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-text-secondary">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white ring-1 ring-border-light placeholder-text-secondary text-text-main focus:ring-2 focus:ring-primary focus:outline-none sm:text-sm shadow-sm" placeholder="Buscar por especialidade, médico ou exame..." type="text"/>
</div>
<!-- Chips Filter (Scrollable on mobile) -->
<div class="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 lg:pb-0">
<button class="flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary text-primary-dark font-medium text-xs whitespace-nowrap">
                        Todos
                    </button>
<button class="flex items-center px-3 py-1.5 rounded-full bg-white border border-border-light hover:border-primary/50 text-text-secondary hover:text-text-main font-medium text-xs whitespace-nowrap transition-colors">
                        Cardiologia
                    </button>
<button class="flex items-center px-3 py-1.5 rounded-full bg-white border border-border-light hover:border-primary/50 text-text-secondary hover:text-text-main font-medium text-xs whitespace-nowrap transition-colors">
                        Dermatologia
                    </button>
<button class="flex items-center px-3 py-1.5 rounded-full bg-white border border-border-light hover:border-primary/50 text-text-secondary hover:text-text-main font-medium text-xs whitespace-nowrap transition-colors">
<span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Telemedicina
                    </button>
<button class="flex items-center px-3 py-1.5 rounded-full bg-white border border-border-light hover:border-primary/50 text-text-secondary hover:text-text-main font-medium text-xs whitespace-nowrap transition-colors">
                        Pediatria
                    </button>
</div>
<!-- Sort Dropdown -->
<div class="relative min-w-[180px]">
<select class="appearance-none block w-full pl-3 pr-10 py-3 border-none rounded-xl bg-white ring-1 ring-border-light text-text-main focus:ring-2 focus:ring-primary focus:outline-none text-sm shadow-sm cursor-pointer">
<option>Relevância</option>
<option>Preço: Menor para maior</option>
<option>Disponibilidade</option>
<option>Nome (A-Z)</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
<span class="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
<!-- Main Content: Services Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
<!-- Card 1: Cardiologia -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">cardiology</span>
</div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                            Disponível Hoje
                        </span>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Consulta Cardiológica</h3>
<p class="text-sm text-text-secondary font-medium">Dr. Ricardo Silva e Equipe</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            45 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">videocam</span>
                            Online ou Presencial
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Avaliação completa da saúde do coração, incluindo análise de pressão arterial e histórico familiar.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
<!-- Card 2: Dermatologia -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">dermatology</span>
</div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                            Telemedicina
                        </span>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Consulta Dermatológica</h3>
<p class="text-sm text-text-secondary font-medium">Dra. Ana Paula</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            30 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">videocam</span>
                            Apenas Online
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Diagnóstico e tratamento de doenças de pele, cabelos e unhas. Ideal para acompanhamentos rápidos.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
<!-- Card 3: Pediatria -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">child_care</span>
</div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800">
                            Próxima semana
                        </span>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Consulta Pediátrica</h3>
<p class="text-sm text-text-secondary font-medium">Dr. Carlos Mendes</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            60 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">local_hospital</span>
                            Presencial
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Acompanhamento do desenvolvimento infantil, vacinas e orientações gerais para pais.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
<!-- Card 4: Oftalmologia -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">visibility</span>
</div>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Exame de Vista</h3>
<p class="text-sm text-text-secondary font-medium">Clínica Visual</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            20 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                            Unidade Centro
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Teste de acuidade visual, refração e pressão intraocular para prescrição de óculos.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
<!-- Card 5: Nutrição -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">nutrition</span>
</div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                            Populares
                        </span>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Acompanhamento Nutricional</h3>
<p class="text-sm text-text-secondary font-medium">Dra. Clara Campos</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            50 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">videocam</span>
                            Online
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Elaboração de planos alimentares personalizados para reeducação alimentar e saúde.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
<!-- Card 6: Ortopedia -->
<div class="group bg-white rounded-2xl p-5 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="bg-[#e7f3f3] text-primary-dark p-3 rounded-xl">
<span class="material-symbols-outlined text-[28px] text-[#0d9494]">orthopedics</span>
</div>
</div>
<div class="mb-2">
<h3 class="text-lg font-bold text-text-main group-hover:text-[#0d9494] transition-colors">Avaliação Ortopédica</h3>
<p class="text-sm text-text-secondary font-medium">Dr. Pedro Santos</p>
</div>
<div class="flex items-center gap-4 text-xs text-text-secondary mb-4">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">schedule</span>
                            40 min
                        </div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">local_hospital</span>
                            Presencial
                        </div>
</div>
<p class="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                        Diagnóstico de dores articulares, lesões esportivas e problemas de coluna.
                    </p>
<div class="mt-auto flex flex-col gap-3">
<button class="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold text-sm transition-colors flex items-center justify-center gap-2">
                            Agendar
                        </button>
<button class="w-full h-10 rounded-lg border border-border-light hover:bg-background-light text-text-main font-medium text-sm transition-colors">
                            Ver detalhes
                        </button>
</div>
</div>
</div>
<!-- UI States Demonstration Section (Visualizing Loading, Empty, Error) -->
<div class="border-t border-dashed border-border-light pt-10 mb-16">
<div class="flex items-center gap-2 mb-6">
<span class="px-2 py-1 bg-gray-100 text-xs font-mono rounded text-gray-500">UI States Preview</span>
<h3 class="text-sm font-semibold text-text-secondary">Componentes de status para feedback visual</h3>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- State: Loading Skeleton -->
<div class="bg-white rounded-2xl p-5 border border-border-light flex flex-col h-full">
<div class="animate-pulse">
<div class="flex justify-between mb-4">
<div class="w-12 h-12 bg-gray-200 rounded-xl"></div>
<div class="w-20 h-5 bg-gray-200 rounded-full"></div>
</div>
<div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
<div class="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
<div class="flex gap-4 mb-6">
<div class="w-16 h-3 bg-gray-200 rounded"></div>
<div class="w-16 h-3 bg-gray-200 rounded"></div>
</div>
<div class="h-3 bg-gray-200 rounded w-full mb-2"></div>
<div class="h-3 bg-gray-200 rounded w-5/6 mb-6"></div>
<div class="mt-auto flex flex-col gap-3">
<div class="w-full h-10 bg-gray-200 rounded-lg"></div>
<div class="w-full h-10 bg-gray-200 rounded-lg"></div>
</div>
</div>
</div>
<!-- State: Empty Results -->
<div class="bg-white rounded-2xl p-8 border border-border-light flex flex-col h-full items-center justify-center text-center">
<div class="w-16 h-16 bg-[#e7f3f3] rounded-full flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-3xl text-text-secondary">search_off</span>
</div>
<h4 class="text-lg font-bold text-text-main mb-2">Nenhum serviço encontrado</h4>
<p class="text-sm text-text-secondary mb-4 max-w-[200px]">
                            Não encontramos resultados para sua busca. Tente outros termos ou remova os filtros.
                        </p>
<button class="text-primary font-bold text-sm hover:underline">Limpar filtros</button>
</div>
<!-- State: Error -->
<div class="bg-white rounded-2xl p-8 border border-red-100 flex flex-col h-full items-center justify-center text-center relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
<div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-3xl text-red-400">error_outline</span>
</div>
<h4 class="text-lg font-bold text-text-main mb-2">Erro ao carregar serviços</h4>
<p class="text-sm text-text-secondary mb-4 max-w-[220px]">
                            Ocorreu um problema de conexão. Por favor, verifique sua internet e tente novamente.
                        </p>
<button class="px-4 py-2 rounded-lg bg-white border border-border-light hover:bg-gray-50 text-text-main text-sm font-bold shadow-sm transition-colors">
                            Tentar novamente
                        </button>
</div>
</div>
</div>
<!-- Help Section -->
<div class="bg-background-dark rounded-3xl p-8 md:p-12 relative overflow-hidden">
<!-- Abstract decorative shapes -->
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div class="max-w-xl text-center md:text-left">
<h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Precisa de ajuda para encontrar o serviço ideal?</h2>
<p class="text-gray-300 text-sm md:text-base mb-6">
                            Nossa equipe de especialistas está pronta para orientar você na escolha do melhor procedimento ou especialidade para sua necessidade.
                        </p>
<div class="flex flex-wrap justify-center md:justify-start gap-4">
<button class="h-11 px-6 rounded-lg bg-primary hover:bg-primary-hover text-text-main font-bold transition-colors">
                                Falar com atendente
                            </button>
<button class="h-11 px-6 rounded-lg border border-white/20 hover:bg-white/10 text-white font-medium transition-colors">
                                Ver perguntas frequentes
                            </button>
</div>
</div>
<!-- Image -->
<div class="hidden md:block w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0">
<div class="w-full h-full bg-cover bg-center" data-alt="Médica sorrindo oferecendo ajuda ao paciente" style='background-image: none;'></div>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-white border-t border-border-light mt-auto">
<div class="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8">
<div class="flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex items-center gap-2 text-text-main">
<div class="size-6 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<span class="font-bold text-sm">LifeMed ClinicOps</span>
</div>
<div class="text-sm text-text-secondary text-center md:text-right">
                    © 2024 LifeMed ClinicOps. Todos os direitos reservados. <br class="md:hidden"/>
<a class="hover:text-primary ml-2" href="#">Privacidade</a>
<a class="hover:text-primary ml-2" href="#">Termos</a>
</div>
</div>
</div>
</footer>`;

export function UiServicosLifemedClinicopsPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/servicos-lifemed-clinicops" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
