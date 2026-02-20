import '../../styles/ui/generated-screen.css';

const screenHtml = `<!-- BEGIN: MainContainer -->
<main class="w-full max-w-md" data-purpose="login-container">
<!-- BEGIN: LoginCard -->
<section class="bg-white rounded-ROUND_EIGHT card-shadow p-8 md:p-10" data-purpose="login-card">
<!-- BEGIN: HeaderSection -->
<header class="text-center mb-8">
<!-- Logo Placeholder -->
<div class="flex justify-center mb-6" data-purpose="logo-container">
<div class="flex items-center gap-2">
<div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-extrabold text-xl">V</div>
<span class="text-2xl font-extrabold text-slate-800 tracking-tight">Clinic<span class="text-slate-500">Ops</span></span>
</div>
</div>
<h1 class="text-2xl font-bold text-slate-900 mb-2">Entrar no Portal</h1>
<p class="text-sm text-slate-500">Acesse sua conta para continuar.</p>
</header>
<!-- END: HeaderSection -->
<!-- BEGIN: LoginForm -->
<form action="#" class="space-y-5" data-purpose="login-form" method="POST">
<!-- Field: Email -->
<div class="space-y-1.5">
<label class="block text-sm font-semibold text-slate-700" for="email">E-mail Corporativo ou do Paciente</label>
<input class="block w-full px-4 py-3 rounded-ROUND_EIGHT border-slate-200 focus:border-accent focus:ring-accent transition-colors text-slate-900" id="email" name="email" placeholder="exemplo@clinicops.com.br" required="" type="email"/>
</div>
<!-- Field: Password -->
<div class="space-y-1.5">
<label class="block text-sm font-semibold text-slate-700" for="password">Senha</label>
<div class="relative">
<input class="block w-full px-4 py-3 rounded-ROUND_EIGHT border-slate-200 focus:border-accent focus:ring-accent transition-colors text-slate-900" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<!-- Toggle Password Visibility Icon -->
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none" data-purpose="toggle-password" type="button">
<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.789 0 8.601 3.049 9.964 7.322a1.012 1.012 0 010 .644C20.601 15.95 16.79 19 12 19c-4.79 0-8.399-3.049-9.964-7.322z" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
</div>
</div>
<!-- Options: Remember and Forgot Password -->
<div class="flex items-center justify-between py-1">
<div class="flex items-center">
<input class="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent" id="remember-me" name="remember-me" type="checkbox"/>
<label class="ml-2 block text-sm text-slate-600" for="remember-me">
              Manter conectado
            </label>
</div>
<div class="text-sm">
<a class="font-medium text-slate-600 hover:text-accent transition-colors" href="#">
              Esqueci minha senha
            </a>
</div>
</div>
<!-- Submit Button -->
<button class="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-ROUND_EIGHT shadow-sm text-base font-bold text-slate-900 bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all uppercase tracking-wide" type="submit">
          Entrar
        </button>
</form>
<!-- END: LoginForm -->
<!-- BEGIN: FooterSection -->
<footer class="mt-8 pt-6 border-t border-slate-100 text-center">
<div class="inline-flex items-center text-xs font-medium text-slate-400 uppercase tracking-widest" data-purpose="security-badge">
<svg class="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
          Acesso seguro e auditado.
        </div>
</footer>
<!-- END: FooterSection -->
</section>
<!-- END: LoginCard -->
<!-- Optional: Support/Links outside the card -->
<div class="mt-8 text-center">
<p class="text-xs text-slate-400">
        © 2024 Vortix Technologies. Todos os direitos reservados.
      </p>
</div>
</main>
<!-- END: MainContainer -->`;

export function UiGeneratedScreenPage() {
  return (
    <section className="ui-stitch-screen" data-route="/ui/generated-screen" dangerouslySetInnerHTML={{ __html: screenHtml }} />
  );
}
