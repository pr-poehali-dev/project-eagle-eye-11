const prices = [
  { category: "Видеокарты", range: "от 3 000 ₽", note: "RTX / AMD / Intel Arc" },
  { category: "Процессоры", range: "от 1 000 ₽", note: "Intel Core / AMD Ryzen" },
  { category: "Ноутбуки", range: "от 2 000 ₽", note: "Рабочие и на запчасти" },
  { category: "Смартфоны", range: "от 500 ₽", note: "iPhone, Samsung и другие" },
  { category: "Игровые приставки", range: "от 2 000 ₽", note: "PS4/PS5, Xbox, Switch" },
  { category: "Оперативная память", range: "от 200 ₽", note: "DDR3 / DDR4 / DDR5" },
];

export function PricesSection() {
  return (
    <section id="prices" className="relative z-10 py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">— Ориентир —</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Примерные <i className="font-light">цены</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Финальная стоимость зависит от модели и состояния — уточняем индивидуально
          </p>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-border border border-border">
          {prices.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between px-8 py-5 hover:bg-white/5 transition-colors duration-200"
            >
              <div>
                <p className="font-mono text-sm font-semibold text-foreground uppercase tracking-wide">
                  {item.category}
                </p>
                <p className="font-mono text-xs text-foreground/40 mt-1">{item.note}</p>
              </div>
              <p className="font-mono text-base text-primary font-bold">{item.range}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-xs text-foreground/30 mt-8">
          Цены актуальны на дату просмотра. Напишите нам для точной оценки.
        </p>
      </div>
    </section>
  );
}
