const steps = [
  { num: "01", title: "Опишите устройство", desc: "Напишите нам или позвоните — расскажите что продаёте, модель и состояние" },
  { num: "02", title: "Получите оценку", desc: "Называем цену в течение 5 минут после описания — без скрытых условий" },
  { num: "03", title: "Привезите или вызовите курьера", desc: "Удобно для вас: привезите сами или мы приедем к вам" },
  { num: "04", title: "Получите деньги сразу", desc: "Оплата наличными или переводом на карту — в момент передачи техники" },
];

export function HowSection() {
  return (
    <section id="how" className="relative z-10 py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">— Процесс —</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Как это <i className="font-light">работает</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.num} className="bg-background p-8 hover:bg-white/5 transition-colors duration-300">
              <p className="font-mono text-4xl font-bold text-primary/30 mb-6">{step.num}</p>
              <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
