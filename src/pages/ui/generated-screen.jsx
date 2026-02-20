import '../../styles/ui/generated-screen.css';

export function UiGeneratedScreenPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/generated-screen">
      <html lang="pt-br">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>
            ClinicOps - Entrar no Portal
          </title>
          {/* Tailwind CSS v3 CDN */}
          <script src="/placeholder.svg">
          </script>
          {/* Google Fonts: Manrope */}
          <link href="/placeholder.svg" rel="preconnect" />
          <link crossOrigin="" href="/placeholder.svg" rel="preconnect" />
          <link href="/placeholder.svg" rel="stylesheet" />
          <script>
            tailwind.config = &#123;
            theme: &#123;
            extend: &#123;
            fontFamily: &#123;
            sans: ['Manrope', 'sans-serif'],
            &#125;,
            colors: &#123;
            accent: '#13ecec',
            'accent-dark': '#10d1d1',
            &#125;,
            borderRadius: &#123;
            'ROUND_EIGHT': '8px',
            &#125;
            &#125;
            &#125;
            &#125;
          </script>
        </head>
        <body className="min-h-screen flex items-center justify-center p-4">
          {/* BEGIN: MainContainer */}
          <main className="w-full max-w-md" data-purpose="login-container">
            {/* BEGIN: LoginCard */}
            <section className="bg-white rounded-ROUND_EIGHT card-shadow p-8 md:p-10" data-purpose="login-card">
              {/* BEGIN: HeaderSection */}
              <header className="text-center mb-8">
                {/* Logo Placeholder */}
                <div className="flex justify-center mb-6" data-purpose="logo-container">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-extrabold text-xl">
                      V
                    </div>
                    <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
                      Clinic
                      <span className="text-slate-500">
                        Ops
                      </span>
                    </span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  Entrar no Portal
                </h1>
                <p className="text-sm text-slate-500">
                  Acesse sua conta para continuar.
                </p>
              </header>
              {/* END: HeaderSection */}
              {/* BEGIN: LoginForm */}
              <form action="#" className="space-y-5" data-purpose="login-form" method="POST">
                {/* Field: Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
                    E-mail Corporativo ou do Paciente
                  </label>
                  <input className="block w-full px-4 py-3 rounded-ROUND_EIGHT border-slate-200 focus:border-accent focus:ring-accent transition-colors text-slate-900" id="email" name="email" placeholder="exemplo@clinicops.com.br" required="" type="email" />
                </div>
                {/* Field: Password */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
                    Senha
                  </label>
                  <div className="relative">
                    <input className="block w-full px-4 py-3 rounded-ROUND_EIGHT border-slate-200 focus:border-accent focus:ring-accent transition-colors text-slate-900" id="password" name="password" placeholder="••••••••" required="" type="password" />
                    {/* Toggle Password Visibility Icon */}
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none" data-purpose="toggle-password" type="button">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="/placeholder.svg">
                        <path d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.789 0 8.601 3.049 9.964 7.322a1.012 1.012 0 010 .644C20.601 15.95 16.79 19 12 19c-4.79 0-8.399-3.049-9.964-7.322z" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Options: Remember and Forgot Password */}
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center">
                    <input className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent" id="remember-me" name="remember-me" type="checkbox" />
                    <label className="ml-2 block text-sm text-slate-600" htmlFor="remember-me">
                      Manter conectado
                    </label>
                  </div>
                  <div className="text-sm">
                    <a className="font-medium text-slate-600 hover:text-accent transition-colors" href="#">
                      Esqueci minha senha
                    </a>
                  </div>
                </div>
                {/* Submit Button */}
                <button className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-ROUND_EIGHT shadow-sm text-base font-bold text-slate-900 bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all uppercase tracking-wide" type="submit">
                  Entrar
                </button>
              </form>
              {/* END: LoginForm */}
              {/* BEGIN: FooterSection */}
              <footer className="mt-8 pt-6 border-t border-slate-100 text-center">
                <div className="inline-flex items-center text-xs font-medium text-slate-400 uppercase tracking-widest" data-purpose="security-badge">
                  <svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="/placeholder.svg">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    </path>
                  </svg>
                  Acesso seguro e auditado.
                </div>
              </footer>
              {/* END: FooterSection */}
            </section>
            {/* END: LoginCard */}
            {/* Optional: Support/Links outside the card */}
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400">
                © 2024 Vortix Technologies. Todos os direitos reservados.
              </p>
            </div>
          </main>
          {/* END: MainContainer */}
          <script data-purpose="interactivity">
            // Simple toggle functionality for the password field
            document.querySelector('[data-purpose="toggle-password"]').addEventListener('click', function() &#123;
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            &#125;);
          </script>
        </body>
      </html>
    </section>
  );
}
