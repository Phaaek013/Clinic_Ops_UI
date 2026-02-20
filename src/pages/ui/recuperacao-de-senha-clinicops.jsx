import '../../styles/ui/recuperacao-de-senha-clinicops.css';

export function RecuperacaoDeSenhaClinicops() {
  return (
    <div className="ui-page ui-recuperacao-de-senha-clinicops bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-[440px] flex flex-col items-center">
{/*Logo Header*/}
<div className="mb-12 flex flex-col items-center">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-2xl">medical_services</span>
</div>
<span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">ClinicOps</span>
</div>
</div>
{/*Main Content Card*/}
<div className="w-full bg-white dark:bg-zinc-900/50 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800">
<div className="text-center mb-8">
<h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Esqueceu sua senha?</h1>
<p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">
                    Não se preocupe, insira seu e-mail cadastrado e enviaremos as instruções para recuperação.
                </p>
</div>
{/*Forgot Password Form*/}
<form className="space-y-6" onsubmit="return false;">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">
                        E-mail
                    </label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">mail</span>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base" id="email" name="email" placeholder="seu@email.com" type="email" />
</div>
</div>
<button className="w-full bg-cta hover:brightness-95 active:scale-[0.98] text-slate-900 font-bold py-3.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm" type="submit">
<span>Enviar e-mail de recuperação</span>
</button>
</form>
{/*Navigation Link*/}
<div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group" href="#">
<span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Voltar para o login
                </a>
</div>
</div>
{/*Footer Microcopy*/}
<div className="mt-8 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium">
<span className="material-symbols-outlined text-sm">shield</span>
<span>Seus dados estão seguros.</span>
</div>
</div>
{/*Background Decoration (Ultra Minimalist)*/}
<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cta/5 blur-[120px]"></div>
</div>
    </div>
  );
}
