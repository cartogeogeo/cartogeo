import { useRef, useState } from "react";

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function VolumeOnIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16.5 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M19 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function VolumeOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function FullscreenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </svg>
  );
}

/**
 * VideoSection
 * Seção de vídeo local, exibida logo após o Hero.
 * Espera o arquivo de vídeo em /public/videos/ (ex: /videos/cartogeo-showreel.mp4)
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function VideoSection({
  src = `${BASE}/videos/cartogeo-showreel.mp4`,
  poster,
  title = "Precisão em cada camada do território",
  description,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    }
  };

  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate font-mono text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div
          ref={containerRef}
          className="group relative overflow-hidden rounded-2xl border border-line shadow-lg bg-ink"
        >
          {/* contour motif overlay, sutil, no canto */}
          <svg
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-10 text-contour"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
          </svg>

          <video
            ref={videoRef}
            className="aspect-video w-full bg-ink object-cover"
            src={src}
            poster={poster}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Botão central de play — some quando o vídeo está tocando */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              aria-label="Reproduzir vídeo"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         flex h-16 w-16 items-center justify-center rounded-full
                         bg-beacon text-paper shadow-md transition-transform
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-beacon/50"
            >
              <PlayIcon className="ml-1" />
            </button>
          )}

          {/* Barra de controles — volume e fullscreen, visível ao passar o mouse (ou sempre no touch) */}
          <div
            className="absolute bottom-3 right-3 flex items-center gap-2
                       opacity-0 transition-opacity duration-200
                       group-hover:opacity-100 focus-within:opacity-100"
          >
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Ativar som" : "Silenciar"}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         bg-ink/70 text-paper backdrop-blur-sm transition-colors
                         hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-beacon/50"
            >
              {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
            </button>
            <button
              onClick={toggleFullscreen}
              aria-label="Tela cheia"
              className="flex h-9 w-9 items-center justify-center rounded-full
                         bg-ink/70 text-paper backdrop-blur-sm transition-colors
                         hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-beacon/50"
            >
              <FullscreenIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
