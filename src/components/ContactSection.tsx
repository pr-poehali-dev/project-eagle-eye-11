export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 border-t border-border">
      <div className="container text-center">
        <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">— Контакты —</p>
        <h2 className="text-4xl md:text-5xl font-sentient mb-6">
          Готовы <i className="font-light">продать?</i>
        </h2>
        <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-12">
          Напишите нам удобным способом — ответим и оценим вашу технику быстро
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/"
            className="font-mono text-sm uppercase tracking-wide border border-border px-8 py-4 hover:bg-white/5 transition-colors duration-200 text-foreground/80 hover:text-foreground w-full sm:w-auto"
          >
            Написать в Telegram
          </a>
          <a
            href="https://wa.me/"
            className="font-mono text-sm uppercase tracking-wide border border-primary px-8 py-4 text-primary hover:bg-primary/10 transition-colors duration-200 w-full sm:w-auto"
          >
            Написать в WhatsApp
          </a>
        </div>

        <p className="font-mono text-xs text-foreground/30 mt-16">
          © {new Date().getFullYear()} СкупкаGo — быстрый выкуп техники
        </p>
      </div>
    </section>
  );
}
