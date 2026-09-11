export default function CTA() {
  return (
    <section id="contato" className="bg-contour text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Vamos mapear o seu desafio?
          </h2>
          <p className="mt-2 max-w-md text-white/85">
            Conte-nos o que você precisa. Respondemos com um caminho claro — do levantamento em campo ao mapa que sustenta a sua decisão.
          </p>
        </div>
        <a
          href="https://wa.me/5583988016010?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20cartogeo%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-none items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
