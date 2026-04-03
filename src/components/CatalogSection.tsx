import Icon from "@/components/ui/icon";

const categories: { icon: string; label: string; desc: string }[] = [
  { icon: "Monitor", label: "Компьютеры и ПК", desc: "Системные блоки, моноблоки, рабочие станции" },
  { icon: "Cpu", label: "Комплектующие", desc: "Видеокарты, процессоры, оперативная память, SSD" },
  { icon: "Laptop", label: "Ноутбуки", desc: "Любые марки: Apple, Lenovo, ASUS, HP и другие" },
  { icon: "Smartphone", label: "Телефоны", desc: "iPhone, Samsung, Xiaomi и прочие смартфоны" },
  { icon: "Gamepad2", label: "Игровые приставки", desc: "PlayStation, Xbox, Nintendo Switch" },
  { icon: "Tablet", label: "Планшеты", desc: "iPad, Galaxy Tab, любые Android-планшеты" },
];

export function CatalogSection() {
  return (
    <section id="catalog" className="relative z-10 py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">— Категории —</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Что мы <i className="font-light">принимаем</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Выкупаем технику в любом состоянии — рабочую, сломанную, после ремонта
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-background p-8 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mb-4 text-primary">
                <Icon name={cat.icon} size={28} />
              </div>
              <h3 className="font-mono text-base font-semibold text-foreground mb-2 uppercase tracking-wide">
                {cat.label}
              </h3>
              <p className="font-mono text-sm text-foreground/50">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
