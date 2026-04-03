import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <a href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "Что принимаем", href: "#catalog" },
            { label: "Как это работает", href: "#how" },
            { label: "Цены", href: "#prices" },
            { label: "Контакты", href: "#contact" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex max-lg:hidden items-center gap-x-6">
          <a
            href="tel:+79208999100"
            className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors ease-out duration-150"
          >
            +7 920 899-91-00
          </a>
          <a
            href="https://t.me/gogarud"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          >
            Telegram
          </a>
          <a
            href="https://www.avito.ru/vladimir/predlozheniya_uslug/vykup_pk_i_komplektuyuschih_7952039168"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase transition-colors ease-out duration-150 font-mono text-foreground/60 hover:text-foreground"
          >
            Авито
          </a>
        </div>
        <MobileMenu />
      </header>
    </div>
  );
};