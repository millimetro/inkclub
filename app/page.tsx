import WireframeSection from "./components/WireframeSection";
import ImageBox from "./components/ImageBox";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="">
        <img
          src="/svg/inkclub.svg"
          alt="inkclub bergamo"
          className="absolute top-32 left-4 w-[80%] h-auto"
        />
        <section className="px-4 grid items-end justify-start h-screen w-full pb-24 border-t-2 border-b-2 border-black">
          <div className="text-black font-bold font-gambarino tracking-tight text-6xl leading-[1] stroke-black mb-4">
            Dal 2016 promuoviamo la cultura dal basso
            <br />
            offrendo iniziative artistiche e musicali,
            <br />
            creando spazi di espressione
            <br />
            per giovani talenti e realtà emergenti.
          </div>
        </section>
        <div className="absolute bottom-4 right-4 w-[20%] h-auto">
          <ImageBox
            src="/foto/ink.jpeg"
            alt="Image"
            className="w-full h-full"
          />
        </div>
      </main>
      
      {/* Club Section */}
      <section id="club" className="px-4 grid items-end justify-start h-screen w-full pb-24 bg-black border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-cream font-bold font-brand text-[15rem] uppercase mb-6 leading-none">Club</h2>
          <div className="text-cream font-bold font-gambarino tracking-tight text-6xl leading-[1] mb-4">
            Una programmazione fittissima di concerti live e dj set, con particolare attenzione alla musica emergente e alla scena underground nazionale e internazionale.
          </div>
        </div>
      </section>

      {/* Pub Section */}
      <section id="pub" className="px-4 grid items-end justify-end h-screen w-full pb-24 bg-teal-700 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-cream font-bold font-brand text-[15rem] uppercase mb-6 leading-none">Pub</h2>
          <div className="text-cream font-bold font-gambarino tracking-tight text-6xl leading-[1] mb-4">
            Il neonato spazio per la convivialità.
            <br />
            Pensato anche come spazio di decompressione durante le serate al Club.
          </div>
        </div>
      </section>

      {/* Radio Section */}
      <section id="radio" className="px-4 grid items-end justify-start h-screen w-full pb-24 bg-red-500 border-t-2 border-b-2 border-black">
        <div>
          <h2 className="text-black font-bold font-brand text-[15rem] uppercase mb-6 leading-none">Radio</h2>
          <div className="text-black font-bold font-gambarino tracking-tight text-6xl leading-[1] mb-4">
            La web radio del club, con nuove dirette e podcast ogni settimana.
          </div>
        </div>
      </section>

      <Marquee text="DIVENTA SOCIO! TESSERATI ORA (/◕ヮ◕)/" />
    </div>
  );
}
