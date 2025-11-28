import WireframeSection from "./components/WireframeSection";
import ImageBox from "./components/ImageBox";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="relative mt-16 md:mt-[88px]">
        <img
          src="/svg/inkclub.svg"
          alt="inkclub bergamo"
          className="absolute top-16 md:top-28 left-1/2 -translate-x-1/2 w-[95%] md:w-[98%] h-auto"
        />
        <section className="px-4 md:px-6 grid items-end justify-start min-h-screen w-full pb-12 border-t-2 border-b-2 border-black">
          <div className="text-black font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] stroke-black mb-4 md:mb-6 max-w-4xl">
            Dal 2016 promuoviamo la cultura dal basso
            <br />
            offrendo iniziative artistiche e musicali,
            <br />
            creando spazi di espressione
            <br />
            per giovani talenti e realtà emergenti.
          </div>
        </section>
        <div className="absolute bottom-8 md:bottom-16 right-2 md:right-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Image"
            className="w-full h-full"
          />
        </div>
      </main>
      
      {/* Club Section */}
      <section id="club" className="relative px-4 md:px-6 grid items-end justify-start min-h-screen w-full pt-24 md:pt-0 pb-12 md:pb-24 bg-black border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-cream font-bold font-brand text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter">Club</h2>
          <div className="text-cream font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl">
            Una programmazione fittissima di concerti live e dj set, con particolare attenzione alla musica emergente e alla scena underground nazionale e internazionale.
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-16 right-2 md:right-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Club"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Pub Section */}
      <section id="pub" className="relative px-4 md:px-6 grid items-end justify-end min-h-screen w-full pt-24 md:pt-0 pb-12 md:pb-24 bg-teal-700 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-cream font-bold font-brand text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter">Pub</h2>
          <div className="text-cream font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl">
            Il neonato spazio per la convivialità.
            <br />
            Pensato anche come spazio di decompressione durante le serate al Club.
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-16 left-2 md:left-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Pub"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Radio Section */}
      <section id="radio" className="relative px-4 md:px-6 grid items-end justify-start min-h-screen w-full pt-24 md:pt-0 pb-12 md:pb-24 bg-red-500 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-black font-bold font-brand text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[15rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter">Radio</h2>
          <div className="text-black font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl">
            La web radio del club, con nuove dirette e podcast ogni settimana.
          </div>
        </div>
        <div className="absolute bottom-8 md:bottom-16 right-2 md:right-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Radio"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="relative px-4 md:px-6 grid items-end justify-end min-h-screen w-full pt-24 md:pt-0 pb-12 md:pb-24 bg-sky-600 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-pink-300 font-bold font-brand text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter">Academy</h2>
          <div className="text-pink-300 font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl">
            Un percorso formativo dedicato alla musica e alle arti performative.
          </div>
          <a
            href="#academy"
            className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 border-2 border-pink-300 rounded-full text-pink-300 font-bold font-gambarino text-lg sm:text-xl md:text-2xl hover:bg-pink-300 hover:text-sky-600 transition-colors duration-300"
          >
            Scopri di più
          </a>
        </div>
        <div className="absolute bottom-8 md:bottom-16 left-2 md:left-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Academy"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Clamore Section */}
      <section id="clamore" className="relative px-4 md:px-6 grid items-end justify-start min-h-screen w-full pt-24 md:pt-0 pb-12 md:pb-24 bg-orange-600 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-cream font-bold font-brand text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] uppercase mb-4 md:mb-6 leading-none tracking-tighter">Clamore</h2>
          <div className="text-cream font-bold font-gambarino tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] md:leading-[1] mb-4 max-w-4xl">
            Un festival che celebra la cultura underground e la scena emergente.
          </div>
          <a
            href="#clamore"
            className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 border-2 border-cream rounded-full text-cream font-bold font-gambarino text-lg sm:text-xl md:text-2xl hover:bg-cream hover:text-orange-600 transition-colors duration-300"
          >
            Scopri di più
          </a>
        </div>
        <div className="absolute bottom-8 md:bottom-16 right-2 md:right-4 w-[25%] sm:w-[20%] md:w-[15%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Clamore"
            className="w-full h-full"
          />
        </div>
      </section>

      <Marquee text="DIVENTA SOCIO! TESSERATI ORA (/◕ヮ◕)/" />

      {/* Values Section */}
      <section className="relative px-4 md:px-6 grid items-center justify-center min-h-[60vh] py-12 md:py-24 w-full bg-black border-t-2 border-b-2 border-black z-20">
        <div className="text-cream font-bold font-gambarino tracking-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-[1.2] md:leading-[1] max-w-4xl text-center">
          Ink Club crede fermamente nei valori di antifascismo, antirazzismo, antisessismo, ed è schierato dalla parte della pace, dei diritti, dell'uguaglianza, della solidarietà, del libero accesso alla cultura, della giustizia sociale, dei valori democratici.
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 md:px-6 py-12 md:py-16 bg-black border-t-2 border-black z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
            <img
              src="/logo/Logo_cream.svg"
              alt="Ink Club Logo"
              className="h-auto w-auto max-w-[200px] md:max-w-xs mb-2"
            />
            <div className="flex flex-col items-center gap-2 md:gap-3 text-cream">
              <a href="mailto:info@inkclub.bergamo.it" className="text-cream font-apfel text-sm md:text-lg hover:opacity-80 transition-opacity text-center break-all">
                info@inkclub.bergamo.it
              </a>
              <p className="text-cream font-apfel text-sm md:text-lg text-center">
                Via Carducci 4/b – Bergamo
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-cream text-sm md:text-base">
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Facebook</a>
              <span className="text-cream/60">–</span>
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Instagram</a>
              <span className="text-cream/60">–</span>
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Youtube</a>
              <span className="text-cream/60">–</span>
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Flickr</a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-cream text-sm md:text-base">
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Trasparenza</a>
              <span className="text-cream/60">–</span>
              <a href="#" className="text-cream font-apfel hover:opacity-80 transition-opacity">Statuto</a>
            </div>
          </div>
          
          {/* Supporters Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-8 md:pt-12 border-t border-cream/30 w-full">
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <h3 className="text-cream font-apfel text-sm md:text-base font-medium tracking-wide">Con il sostegno di</h3>
              <img
                src="/supporters/conilsostegnodi.png"
                alt="Con il sostegno di"
                className="h-auto w-2/3 md:w-1/2 max-w-xs object-contain opacity-90"
              />
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <h3 className="text-cream font-apfel text-sm md:text-base font-medium tracking-wide">Collaborazioni</h3>
              <img
                src="/supporters/collaborazioni.png"
                alt="Collaborazioni"
                className="h-auto w-2/3 md:w-1/2 max-w-xs object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
