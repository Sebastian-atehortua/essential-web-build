import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/norax-logo.png.asset.json";
import serverRoom from "@/assets/norax-server-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Norax Technology | Soluciones TI en Medellín" },
      { name: "description", content: "Infraestructura, redes, seguridad informática y soporte técnico para empresas en Medellín y Colombia." },
      { property: "og:title", content: "Norax Technology | Soluciones TI" },
      { property: "og:description", content: "Tecnología confiable y escalable para empresas que avanzan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Server, title: "Infraestructura tecnológica", text: "Diseño, implementación y mantenimiento de servidores, almacenamiento, virtualización y centros de datos." },
  { icon: Network, title: "Redes empresariales", text: "Redes cableadas e inalámbricas seguras, estables y eficientes para toda tu organización." },
  { icon: Wrench, title: "Soporte técnico", text: "Soporte remoto y presencial para equipos, software y usuarios, con resolución rápida y efectiva." },
  { icon: Headphones, title: "Mesa de ayuda TI", text: "Gestión de incidencias y requerimientos con seguimiento claro y atención oportuna para tu equipo." },
  { icon: ShieldCheck, title: "Seguridad informática", text: "Firewalls, copias de seguridad, buenas prácticas y protección de los datos críticos de tu empresa." },
  { icon: Zap, title: "Asesoría y proyectos", text: "Planeación y ejecución de proyectos tecnológicos que impulsan la transformación digital." },
];

const steps = [
  ["01", "Analizamos", "Entendemos tus necesidades, operación y objetivos."],
  ["02", "Diseñamos", "Proponemos una solución tecnológica a la medida."],
  ["03", "Implementamos", "Ejecutamos con calidad, tiempos y estándares claros."],
  ["04", "Acompañamos", "Brindamos soporte y optimización continua."],
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const message = String(form.get("message") ?? "");
    const text = `Hola Norax Technology, soy ${name}${company ? ` de ${company}` : ""}. ${message}`;
    window.open(`https://wa.me/573004857022?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
          <a href="#inicio" aria-label="Norax Technology, inicio" className="shrink-0">
            <img src={logoAsset.url} alt="Norax Technology" className="h-14 w-auto max-w-[190px] object-contain" width="500" height="500" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="transition-colors hover:text-primary" href="#servicios">Servicios</a>
            <a className="transition-colors hover:text-primary" href="#metodologia">Cómo trabajamos</a>
            <a className="transition-colors hover:text-primary" href="#nosotros">Nosotros</a>
            <Button variant="brand" asChild><a href="#contacto">Hablemos <ArrowRight /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 font-semibold">
              <a className="rounded-md px-3 py-3 hover:bg-muted" href="#servicios" onClick={closeMenu}>Servicios</a>
              <a className="rounded-md px-3 py-3 hover:bg-muted" href="#metodologia" onClick={closeMenu}>Cómo trabajamos</a>
              <a className="rounded-md px-3 py-3 hover:bg-muted" href="#nosotros" onClick={closeMenu}>Nosotros</a>
              <a className="rounded-md bg-primary px-3 py-3 text-primary-foreground" href="#contacto" onClick={closeMenu}>Hablemos</a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative bg-muted/70 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-rise">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-bold uppercase text-primary">
              <span className="size-2 rounded-full bg-primary" /> Expertos en TI · Medellín, Colombia
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Soluciones TI <span className="text-primary">confiables</span> para empresas que avanzan.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Diseñamos, implementamos y cuidamos la tecnología de tu empresa para que puedas enfocarte en hacerla crecer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild><a href="#contacto">Iniciar un proyecto <ArrowRight /></a></Button>
              <Button variant="light" size="xl" asChild><a href="#servicios">Ver servicios</a></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-muted-foreground">
              {["Atención personalizada", "Respuesta rápida", "Soluciones escalables"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />{item}</span>
              ))}
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-primary/20" />
            <img src={serverRoom} alt="Centro de datos empresarial con infraestructura organizada" className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-2xl" width={1200} height={800} />
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase text-primary">Lo que hacemos</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Soluciones para cada necesidad tecnológica</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Un portafolio integral para mantener tu infraestructura segura, conectada y operando al máximo.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="mb-6 grid size-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon /></div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="border-y border-border bg-foreground py-20 text-background sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-primary">Tu aliado tecnológico</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Tecnología que conecta y hace crecer tu empresa</h2>
            <p className="mt-5 max-w-xl leading-7 text-background/65">Entendemos tu negocio y convertimos sus retos tecnológicos en soluciones claras, seguras y sostenibles.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Experiencia y conocimiento en soluciones TI", "Atención cercana y comunicación clara", "Seguridad y continuidad de la operación", "Calidad y mejora continua"].map((item) => (
              <div key={item} className="flex gap-3 border-t border-background/15 py-5 text-sm font-semibold"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase text-primary">Nuestro enfoque</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Entendemos tu negocio, impulsamos tu futuro</h2>
          </div>
          <div className="grid border-y border-border md:grid-cols-4">
            {steps.map(([number, title, text], index) => (
              <article key={number} className={`py-8 md:px-6 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
                <span className="text-sm font-extrabold text-primary">{number}</span>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-7 rounded-lg bg-muted p-8 sm:flex-row sm:items-center">
            <div><p className="text-sm font-bold uppercase text-primary">Sectores que atendemos</p><p className="mt-2 text-xl font-bold">Comercio · Servicios · Educación · Profesionales</p></div>
            <Button variant="brand" size="lg" asChild><a href="#contacto">Cuéntanos tu necesidad <ChevronRight /></a></Button>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-primary">Hablemos</p>
              <h2 className="max-w-lg text-3xl font-extrabold sm:text-4xl">¿Listo para fortalecer la tecnología de tu empresa?</h2>
              <p className="mt-5 max-w-lg leading-7 text-background/60">Cuéntanos qué necesitas. Te responderemos con una orientación clara y una solución ajustada a tu operación.</p>
              <address className="mt-10 grid gap-5 not-italic">
                <a href="mailto:norax.technology@outlook.com" className="flex items-center gap-4 text-sm transition-colors hover:text-primary"><Mail className="size-5 text-primary" /> norax.technology@outlook.com</a>
                <a href="tel:+573004857022" className="flex items-center gap-4 text-sm transition-colors hover:text-primary"><Phone className="size-5 text-primary" /> +57 300 485 7022</a>
                <span className="flex items-center gap-4 text-sm"><MapPin className="size-5 text-primary" /> Medellín, Colombia</span>
                <a href="https://instagram.com/norax.technology" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm transition-colors hover:text-primary"><Instagram className="size-5 text-primary" /> @norax.technology</a>
              </address>
            </div>
            <form onSubmit={sendToWhatsApp} className="rounded-lg border border-background/10 bg-background/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold">Escríbenos por WhatsApp</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">Nombre<input required name="name" className="h-12 rounded-md border border-background/15 bg-background/10 px-4 text-background outline-none transition focus:border-primary" placeholder="Tu nombre" /></label>
                <label className="grid gap-2 text-sm font-semibold">Empresa<input name="company" className="h-12 rounded-md border border-background/15 bg-background/10 px-4 text-background outline-none transition focus:border-primary" placeholder="Nombre de tu empresa" /></label>
                <label className="grid gap-2 text-sm font-semibold sm:col-span-2">¿Cómo podemos ayudarte?<textarea required name="message" rows={5} className="resize-none rounded-md border border-background/15 bg-background/10 p-4 text-background outline-none transition focus:border-primary" placeholder="Describe brevemente tu necesidad tecnológica" /></label>
              </div>
              <Button type="submit" variant="brand" size="xl" className="mt-5 w-full">Enviar mensaje <ArrowRight /></Button>
            </form>
          </div>
          <div className="mt-16 flex flex-col gap-6 border-t border-background/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <img src={logoAsset.url} alt="Norax Technology" className="h-12 w-auto max-w-[170px] object-contain" width="500" height="500" />
            <p className="text-xs text-background/45">© 2026 Norax Technology. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}