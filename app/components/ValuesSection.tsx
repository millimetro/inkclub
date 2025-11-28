interface ValuesSectionProps {
  text: string;
}

export default function ValuesSection({ text }: ValuesSectionProps) {
  return (
    <section id="values" className="relative px-4 md:px-6 grid items-center justify-center h-[80vh] py-12 md:py-24 w-full bg-black border-t-2 border-b-2 border-black z-20">
      <div className="text-cream font-bold font-gambarino tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-[1.2] md:leading-[1] max-w-4xl text-center">
        {text}
      </div>
    </section>
  );
}

