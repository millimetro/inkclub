import ImageBox from "./ImageBox";

export default function HeroCentered() {
  return (
    <div className="mt-16 md:mt-[88px]">
      <section className="px-4 md:px-6 flex flex-col items-center justify-center min-h-[calc(200vh-94px)] md:min-h-[200vh] w-full pb-8 md:pb-12 border-black gap-4 md:gap-6">
        <img
          src="/svg/ink_centered.svg"
          alt="inkclub bergamo"
          className="w-[95%] md:w-[98%] h-auto"
        />
        <div className="text-black font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] stroke-black max-w-4xl text-center">
          Dal 2016 promuoviamo la cultura dal basso
          <br />
          offrendo iniziative artistiche e musicali,
          <br />
          creando spazi di espressione
          <br />
          per giovani talenti e realtà emergenti.
        </div>
        <div className="w-[60%] sm:w-[55%] md:w-[50%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Image"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}

