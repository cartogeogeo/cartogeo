/**
 * Fundo de linhas de contorno (topografia abstrata).
 *
 * Elemento de assinatura da página: curvas de nível desenhadas à mão,
 * remetendo a uma carta topográfica, posicionadas atrás do conteúdo
 * do hero. O drift é bem lento e sutil — não deve competir com o texto.
 * Respeita prefers-reduced-motion (ver src/index.css).
 */
export default function ContourBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] animate-drift"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#3C6E55" strokeWidth="1.1">
        <path d="M-50 620 C 150 560, 300 680, 480 600 C 660 520, 820 660, 1000 580 C 1120 530, 1220 560, 1300 540" />
        <path d="M-50 540 C 130 500, 280 600, 470 520 C 650 450, 810 580, 1010 500 C 1130 460, 1230 480, 1300 460" />
        <path d="M-50 460 C 140 430, 290 510, 460 440 C 640 380, 800 490, 1020 420 C 1140 390, 1230 400, 1300 390" />
      </g>
      <g stroke="#3C6E55" strokeWidth="1">
        <path d="M-50 700 C 160 660, 320 740, 520 670 C 700 600, 850 720, 1050 650 C 1150 610, 1230 630, 1300 620" />
        <path d="M-50 380 C 150 360, 320 420, 500 370 C 690 320, 840 400, 1040 350 C 1150 330, 1230 340, 1300 330" />
      </g>
      <g stroke="#3C6E55" strokeWidth="0.8" opacity="0.7">
        <path d="M-50 300 C 160 280, 330 330, 510 290 C 700 250, 850 320, 1050 280 C 1150 260, 1230 270, 1300 260" />
      </g>
    </svg>
  );
}
