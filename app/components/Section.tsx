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
  imageBorderClass?: string; // e.g., "border-white" to override default border-black
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
  imageBorderClass,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-4 md:px-6 h-[calc(100vh-6vh)] md:h-[calc(100vh-8vh)] w-full ${bgColor} border-t-2 border-b-2 border-black`}
    >
      <div className="max-w-[95vw] mx-auto py-20 border-[white] flex flex-col md:grid md:grid-cols-10 gap-8 md:gap-12 h-full items-center">
        <div className={`w-full md:col-span-4 flex-[0.4] md:flex-none md:h-full flex items-center ${imageLeft ? "md:order-1" : "md:order-2"}`}>
          <ImageBox src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" borderColor={imageBorderClass} />
        </div>
        <div className={`w-full md:col-span-6 flex-[0.6] md:flex-none flex flex-col justify-center md:h-full ${imageLeft ? "md:order-2" : "md:order-1"}`}>
          {typeof title === "string" ? (
            <h2 className={`${textColor} font-bold font-brand text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter`}>
              {title}
            </h2>
          ) : (
            <img src={title.src} alt={title.alt} className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] h-auto mb-4 md:mb-6" />
          )}
          <div className={`${textColor} font-bold font-gambarino tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl`}>
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

