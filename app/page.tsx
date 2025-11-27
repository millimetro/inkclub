import WireframeSection from "./components/WireframeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="">
        <div className="grid place-items-center">
          <img src="/logo/Logo.svg" alt="Ink Club Logo" className="h-[12vh]" />
        </div>
        <section className="px-4 grid place-items-end  h-screen w-full">
          <div className="text-black font-bold font-gambarino tracking-tight text-6xl leading-[1] stroke-black">
          Dal 2016 promuoviamo la cultura dal basso 
          <br />
          offrendo iniziative artistiche e musicali, 
          <br />
          creando spazi di espressione 
          <br />
          per giovani talenti e realtà emergenti.
        </div>
      </section>
    </main>
  </div>
);
}
