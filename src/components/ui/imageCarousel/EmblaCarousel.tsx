import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@nextui-org/react";

type SlideType = {
  image: string;
  text: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

// Extendemos el tipo para incluir la opción stopOnInteraction
interface ExtendedAutoplayOptions {
  stopOnInteraction?: boolean;
  reset: () => void;
  stop: () => void;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ stopOnInteraction: false })]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay as unknown as ExtendedAutoplayOptions;
    if (!autoplay) return;

    const resetOrStop = autoplay.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex flex-col items-center">
                <Image src={slide.image} alt="slide" />
                <p className="font-medium text-center">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
