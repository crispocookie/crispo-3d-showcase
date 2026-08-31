import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { featuredProducts } from "@/data/products";
import chocolateVid from "@/assets/chocolate vid.mp4";
import dryseedVid from "@/assets/dryseed vid.mp4";
import pineappleVid from "@/assets/pineapple vid.mp4";
import roseVid from "@/assets/rose-vid.mp4";

const reelVideos = [
  { id: "double-chocolate", src: chocolateVid, label: "Double Chocolate" },
  { id: "rose", src: roseVid, label: "Rose" },
  { id: "pineapple", src: pineappleVid, label: "Pineapple" },
  { id: "dry-seed", src: dryseedVid, label: "Dry Seed" },
];

export function FeaturedCarousel({ variant = "favorites" }: { variant?: "favorites" | "reels" }) {
  const track = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);

  const [mutedById, setMutedById] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(reelVideos.map((reel) => [reel.id, true])),
  );
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<(typeof reelVideos)[number] | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewMuted, setPreviewMuted] = useState(true);
  const [previewPlaying, setPreviewPlaying] = useState(true);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;
      const shouldMute = mutedById[id] ?? true;
      video.muted = shouldMute;
      if (shouldMute) {
        video.volume = 0;
      }
      if (!shouldMute && activeAudioId === id) {
        video.play().catch(() => undefined);
      }
    });
  }, [activeAudioId, mutedById]);

  useEffect(() => {
    if (!previewOpen || !previewVideo) return;

    const video = previewVideoRef.current;
    if (!video) return;

    video.muted = previewMuted;
    video.volume = previewMuted ? 0 : 1;
    video.currentTime = 0;
    video.play().catch(() => undefined);
    setPreviewPlaying(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewOpen, previewVideo, previewMuted]);

  const updateAudioState = (id: string, nextMuted: boolean) => {
    setMutedById((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((videoId) => {
        next[videoId] = videoId === id ? nextMuted : true;
      });
      return next;
    });

    setActiveAudioId(nextMuted ? null : id);

    Object.entries(videoRefs.current).forEach(([videoId, video]) => {
      if (!video) return;
      const shouldMute = videoId === id ? nextMuted : true;
      video.muted = shouldMute;
      video.volume = shouldMute ? 0 : 1;
      if (!shouldMute) {
        video.play().catch(() => undefined);
      }
    });
  };

  const toggleAudio = (id: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const isMuted = mutedById[id] ?? true;
    updateAudioState(id, !isMuted);
  };

  const openPreview = (reel: (typeof reelVideos)[number]) => {
    setPreviewVideo(reel);
    setPreviewMuted(true);
    setPreviewPlaying(true);
    setPreviewOpen(true);
  };

  const handlePreviewMuteToggle = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setPreviewMuted((prev) => !prev);
  };

  const handlePreviewPlayToggle = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const video = previewVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => undefined);
      setPreviewPlaying(true);
    } else {
      video.pause();
      setPreviewPlaying(false);
    }
  };

  if (variant === "reels") {
    return (
      <>
        <section className="py-12 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              align="left"
              eyebrow="From Our Oven"
              title="From Our Oven"
              subtitle="Watch the goodness come to life."
            />
          </div>

          <div className="mt-6 px-4 sm:mt-10 sm:px-6">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 sm:gap-5">
              {reelVideos.map((reel) => {
                const isMuted = mutedById[reel.id] ?? true;

                return (
                  <div
                    key={reel.id}
                    className="group relative w-[42vw] min-w-[150px] max-w-[220px] shrink-0 snap-start sm:w-[23%] sm:max-w-none"
                  >
                    <div
                      className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#2a211d] shadow-soft"
                      onClick={() => openPreview(reel)}
                    >
                      <video
                        ref={(node) => {
                          videoRefs.current[reel.id] = node;
                        }}
                        src={reel.src}
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                        preload="metadata"
                        className="h-[300px] w-full cursor-pointer object-cover sm:h-[380px] md:h-[430px]"
                        aria-label={`${reel.label} reel video`}
                        onClick={(event) => {
                          event.stopPropagation();
                          openPreview(reel);
                        }}
                        onPlay={() => setActiveAudioId((current) => (current === reel.id ? reel.id : current))}
                        onVolumeChange={() => {
                          if (!videoRefs.current[reel.id]?.muted) {
                            setActiveAudioId(reel.id);
                          }
                        }}
                      />

                      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                        <span className="rounded-full border border-white/20 bg-black/25 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                          {reel.label}
                        </span>
                        <button
                          type="button"
                          aria-label={isMuted ? `Unmute ${reel.label} video` : `Mute ${reel.label} video`}
                          onClick={(event) => toggleAudio(reel.id, event)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-sm transition hover:bg-black/40"
                        >
                          {isMuted ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
                        </button>
                      </div>

                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                        <div className="pointer-events-none rounded-full border border-white/20 bg-black/25 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                          {reel.label}
                        </div>
                        <button
                          type="button"
                          aria-label={`Preview ${reel.label} video`}
                          onClick={(event) => {
                            event.stopPropagation();
                            openPreview(reel);
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/25 px-2.5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm transition hover:bg-black/40"
                        >
                          <Play className="size-3" aria-hidden />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {previewOpen && previewVideo ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1714]/80 p-3 backdrop-blur-sm sm:p-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setPreviewOpen(false);
              }
            }}
          >
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1413] shadow-2xl">
              <button
                type="button"
                aria-label="Close video preview"
                onClick={() => setPreviewOpen(false)}
                className="absolute top-3 right-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/50"
              >
                <X className="size-4" aria-hidden />
              </button>

              <div className="relative bg-[#1a1413]">
                <video
                  ref={previewVideoRef}
                  src={previewVideo.src}
                  controls
                  playsInline
                  autoPlay
                  muted={previewMuted}
                  loop
                  className="block max-h-[78vh] w-full bg-[#1a1413] object-contain"
                  onPause={() => setPreviewPlaying(false)}
                  onPlay={() => setPreviewPlaying(true)}
                />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#201b19] px-4 py-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={previewPlaying ? "Pause preview video" : "Play preview video"}
                    onClick={handlePreviewPlayToggle}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white transition hover:bg-black/35"
                  >
                    {previewPlaying ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
                  </button>

                  <button
                    type="button"
                    aria-label={previewMuted ? "Unmute preview video" : "Mute preview video"}
                    onClick={handlePreviewMuteToggle}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white transition hover:bg-black/35"
                  >
                    {previewMuted ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
                  </button>
                </div>

                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {previewVideo.label}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <section className="py-12 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Most Loved"
            title="Crispo Favourites"
            subtitle="The bites our customers reach for first."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll favourites left"
              className="rounded-full border border-plum/30 bg-card/70 p-3 text-primary transition-colors hover:border-gold"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll favourites right"
              className="rounded-full border border-plum/30 bg-card/70 p-3 text-primary transition-colors hover:border-gold"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mt-10 sm:gap-6 sm:px-6"
      >
        {featuredProducts.map((p) => (
          <div key={p.id} className="w-[46vw] shrink-0 snap-start sm:w-[22rem]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
