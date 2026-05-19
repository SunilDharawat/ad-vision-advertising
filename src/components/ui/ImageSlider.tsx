"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cloudinaryUrl } from "@/src/lib/cloudinary";

type ImageSliderProps = {
  publicIds: string[];
  alt: string;
  aspectRatio?: "4/3" | "16/9" | "1/1";
  autoplayDelay?: number;
};

export default function ImageSlider({
  publicIds,
  alt,
  aspectRatio = "4/3",
  autoplayDelay = 3000,
}: ImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const aspectClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
  }[aspectRatio];

  // If only one image, render it statically — no carousel overhead
  if (publicIds.length === 1) {
    return (
      <div className={`${aspectClass} relative w-full`}>
        <Image
          src={cloudinaryUrl(publicIds[0], {
            width: 600,
            height: 450,
            crop: "fill",
          })}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Embla viewport */}
      <div className={`${aspectClass} overflow-hidden`} ref={emblaRef}>
        <div className="flex h-full">
          {publicIds.map((id, i) => (
            <div key={id} className="relative flex-[0_0_100%] h-full">
              <Image
                src={cloudinaryUrl(id, {
                  width: 600,
                  height: 450,
                  crop: "fill",
                })}
                alt={`${alt} — slide ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons — visible on group hover */}
      <button
        onClick={scrollPrev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                   flex items-center justify-center
                   w-8 h-8 rounded-full
                   bg-black/50 border border-white/10 text-white
                   opacity-0 group-hover:opacity-100
                   hover:bg-brand-orange hover:border-brand-orange
                   transition-all duration-200
                   disabled:opacity-20"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                   flex items-center justify-center
                   w-8 h-8 rounded-full
                   bg-black/50 border border-white/10 text-white
                   opacity-0 group-hover:opacity-100
                   hover:bg-brand-orange hover:border-brand-orange
                   transition-all duration-200
                   disabled:opacity-20"
        disabled={!canScrollNext}
      >
        <ChevronRight size={16} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {publicIds.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full
              ${
                i === selectedIndex
                  ? "w-5 h-1.5 bg-brand-orange"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Slide counter (top-right badge) */}
      <div className="absolute top-3 right-3 z-10 text-xs text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
        {selectedIndex + 1} / {publicIds.length}
      </div>
    </div>
  );
}
