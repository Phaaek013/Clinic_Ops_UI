import '../../styles/ui/criar-conta-clinicops-corrigido.css';

export function UiCriarContaClinicopsCorrigidoPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/criar-conta-clinicops-corrigido">
      <html className="light" lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            ClinicOps | Criar Conta
          </title>
          <script src="/placeholder.svg">
          </script>
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script id="tailwind-config">
            tailwind.config = &#123;
            darkMode: "class",
            theme: &#123;
            extend: &#123;
            colors: &#123;
            "primary": "#13ecec",
            "background-light": "#f8f6f6",
            "background-dark": "#221610",
            &#125;,
            fontFamily: &#123;
            "display": ["Public Sans", "sans-serif"]
            &#125;,
            borderRadius: &#123;
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
            &#125;,
            &#125;,
            &#125;,
            &#125;
          </script>
        </head>
        <body className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display transition-colors duration-300">
          <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            {/* Logo Section */}
            <div className="mb-10 flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 text-primary">
                <div className="size-10 flex items-center justify-center bg-primary/10 rounded-xl">
                  <svg className="size-7" fill="none" viewBox="0 0 48 48" xmlns="/placeholder.svg">
                    <g clipPath="url(#clip0_6_330)">
                      <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd">
                      </path>
                    </g>
                    <defs>
                      <clippath id="clip0_6_330">
                        <rect fill="white" height="48" width="48">
                        </rect>
                      </clippath>
                    </defs>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-tight dark:text-white">
                  ClinicOps
                </h1>
              </div>
            </div>
            {/* Form Container */}
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Criar Conta
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Preencha os dados abaixo para começar
                </p>
              </div>
              <form className="space-y-5" onSubmit="event.preventDefault();">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Nome completo
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      person
                    </span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Como devemos te chamar?" type="text" />
                  </div>
                </div>
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    E-mail
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      mail
                    </span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="seu@email.com" type="email" />
                  </div>
                </div>
                {/* Password Field */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Senha
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      lock
                    </span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Mínimo 8 caracteres" type="password" />
                  </div>
                </div>
                {/* Confirm Password Field */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Confirmação de Senha
                  </label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      shield
                    </span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Repita sua senha" type="password" />
                  </div>
                </div>
                {/* Checkbox Section */}
                <div className="flex items-start gap-3 py-2">
                  <div className="flex items-center h-5">
                    <input className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50 cursor-pointer bg-white dark:bg-slate-800" id="terms" type="checkbox" />
                  </div>
                  <label className="text-sm text-slate-600 dark:text-slate-400 leading-snug cursor-pointer select-none" htmlFor="terms">
                    Li e aceito os
                    <a className="text-primary hover:underline font-medium" href="#">
                      termos de uso
                    </a>
                    e
                    <a className="text-primary hover:underline font-medium" href="#">
                      políticas de privacidade
                    </a>
                    .
                  </label>
                </div>
                {/* Primary Button */}
                <button className="w-full bg-primary hover:bg-primary/90 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-4 text-slate-900" type="submit">
                  Criar conta
                </button>
                {/* Redirect Link */}
                <div className="pt-6 text-center">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Já tem uma conta?
                    <a className="text-primary font-bold hover:underline ml-1" href="#">
                      Entrar agora
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </main>
          {/* Footer Decoration (Optional ultra-minimalist touch) */}
          <footer className="py-8 text-center">
            <div className="inline-flex items-center gap-2 opacity-30">
              <div className="h-px w-8 bg-slate-400">
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Gerenciamento Clínico Inteligente
              </span>
              <div className="h-px w-8 bg-slate-400">
              </div>
            </div>
          </footer>
        </body>
      </html>
    </section>
  );
}
