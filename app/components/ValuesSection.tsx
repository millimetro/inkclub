interface ValuesSectionProps {
  text: string;
}

export default function ValuesSection({ text }: ValuesSectionProps) {
  return (
    <section id="values" className="relative px-4 md:px-6 grid items-center justify-center h-screen py-12 md:py-24 w-full bg-black border-t-2 border-b-2 border-black z-20">
      <div className="text-cream font-bold font-gambarino tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] md:leading-[1] max-w-6xl text-center">
        {text}
      </div>
    </section>
  );
}

