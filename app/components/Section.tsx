import ImageBox from "./ImageBox";

interface ButtonProps {
  href: string;
  text: string;
  borderColor: string;
  textColor: string;
  hoverBgClass: string; // e.g., "hover:bg-black"
  hoverTextClass: string; // e.g., "hover:text-red-500"
  target?: string;
  rel?: string;
}

interface SectionProps {
  id: string;
  bgColor: string;
  textColor: string;
  title: string | { type: "svg"; src: string; alt: string };
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean; // true = image left on desktop, false = image right on desktop
  button?: ButtonProps;
}

export default function Section({
  id,
  bgColor,
  textColor,
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft = true,
  button,
}: SectionProps) {
  const imageOrder = imageLeft ? "order-1 md:order-1" : "order-1 md:order-2";
  const contentOrder = imageLeft ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <section
      id={id}
      className={`relative px-4 md:px-6 h-[calc(100vh-64px)] md:h-[calc(100vh-88px)] w-full pt-0 pb-12 md:pb-24 ${bgColor} border-t-2 border-b-2 border-black`}
    >
      <div className="flex flex-col md:grid md:grid-cols-10 gap-6 md:gap-8 h-full items-center justify-center">
        {/* Image - 70% on mobile, 30% on desktop */}
        <div
          className={`w-full md:col-span-3 ${imageOrder} flex-[0.7] md:flex-none md:h-full min-h-0 flex items-center`}
        >
          <ImageBox
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content - 30% on mobile, 70% on desktop */}
        <div
          className={`w-full md:col-span-7 ${contentOrder} flex-[0.3] md:flex-none flex flex-col justify-center md:h-full min-h-0`}
        >
          {typeof title === "string" ? (
            <h2
              className={`${textColor} font-bold font-brand text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter`}
            >
              {title}
            </h2>
          ) : (
            <img
              src={title.src}
              alt={title.alt}
              className="w-full max-w-[95%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] h-auto mb-4 md:mb-6"
            />
          )}
          <div
            className={`${textColor} font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl`}
          >
            {description}
          </div>
          {button && (
            <a
              href={button.href}
              target={button.target}
              rel={button.rel}
              className={`inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 border-2 ${button.borderColor} rounded-full ${button.textColor} font-bold font-gambarino text-lg sm:text-xl md:text-2xl ${button.hoverBgClass} ${button.hoverTextClass} transition-colors duration-300 max-w-max`}
            >
              {button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

