
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
      className={`relative w-full h-[calc(100vh-6vh)] md:h-[calc(100vh-8vh)] ${bgColor} border-t-2 border-black flex flex-col md:flex-row`}
    >
      <div className={`w-full md:w-1/2 h-full ${imageLeft ? "md:order-1 md:border-r-2 border-black" : "md:order-2"}`}>
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 lg:px-12 ${imageLeft ? "md:order-2" : "md:order-1 md:border-r-2 border-black"}`}>
        {typeof title === "string" ? (
          <h2 className={`${textColor} font-bold font-brand text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter`}>
            {title}
          </h2>
        ) : (
          <img src={title.src} alt={title.alt} className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] h-auto mb-4 md:mb-6" />
        )}
        <div className={`${textColor} font-bold font-gambarino tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.1] md:leading-[1] mb-4`}>
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
    </section>
  );
}

