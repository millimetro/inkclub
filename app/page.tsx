import WireframeSection from "./components/WireframeSection";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import ValuesSection from "./components/ValuesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroCentered from "./components/HeroCentered";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroCentered />
      {/* <Hero /> */}
      
      {/* Club Section */}
      <Section
        id="club"
        bgColor="bg-black"
        textColor="text-cream"
        title="Club"
        description="Una programmazione fittissima di concerti live e dj set, con particolare attenzione alla musica emergente e alla scena underground nazionale e internazionale."
        imageSrc="/imgs/club/club.png"
        imageAlt="Club"
        imageLeft={true}
      />

      {/* Pub Section */}
      <Section
        id="pub"
        bgColor="bg-teal-700"
        textColor="text-cream"
        title="Pub"
        description={
          <>
            Il neonato spazio per la convivialità.
            <br />
            Pensato anche come spazio di decompressione durante le serate al Club.
          </>
        }
        imageSrc="/imgs/pub/pub.png"
        imageAlt="Pub"
        imageLeft={false}
      />

      {/* Radio Section */}
      <Section
        id="radio"
        bgColor="bg-red-500"
        textColor="text-black"
        title="Radio"
        description="La web radio del club, con nuove dirette e podcast ogni settimana."
        imageSrc="/imgs/radio/radio.png"
        imageAlt="Radio"
        imageLeft={true}
        button={{
          href: "https://www.mixcloud.com/InkClubRadio/",
          text: "Ascolta ora",
          borderColor: "border-black",
          textColor: "text-black",
          hoverBgClass: "hover:bg-black",
          hoverTextClass: "hover:text-red-500",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      />

      {/* Academy Section */}
      <Section
        id="academy"
        bgColor="bg-sky-600"
        textColor="text-pink-300"
        title="Academy"
        description="Un percorso formativo dedicato alla musica e alle arti performative."
        imageSrc="/imgs/academy/academy.png"
        imageAlt="Academy"
        imageLeft={false}
        button={{
          href: "#academy",
          text: "Scopri di più",
          borderColor: "border-pink-300",
          textColor: "text-pink-300",
          hoverBgClass: "hover:bg-pink-300",
          hoverTextClass: "hover:text-sky-600",
        }}
      />

      {/* Clamore Section */}
      <Section
        id="clamore"
        bgColor="bg-orange-600"
        textColor="text-cream"
        title={{ type: "svg", src: "/svg/clamore.svg", alt: "Clamore" }}
        description="Un festival che celebra la cultura underground e la scena emergente."
        imageSrc="/imgs/clamore/live.png"
        imageAlt="Clamore"
        imageLeft={true}
        button={{
          href: "#clamore",
          text: "Scopri di più",
          borderColor: "border-cream",
          textColor: "text-cream",
          hoverBgClass: "hover:bg-cream",
          hoverTextClass: "hover:text-orange-600",
        }}
      />

      <Marquee text="DIVENTA SOC*! TESSERATI ORA (/◕ヮ◕)/" />

      {/* Values Section */}
      <ValuesSection text="Ink Club crede fermamente nei valori di antifascismo, antirazzismo, antisessismo, ed è schierato dalla parte della pace, dei diritti, dell'uguaglianza, della solidarietà, del libero accesso alla cultura, della giustizia sociale, dei valori democratici." />

      {/* Footer */}
      <Footer
        email="info@inkclub.bergamo.it"
        address="Via Carducci 4/b – Bergamo"
        socialLinks={[
          { name: "Facebook", href: "https://www.facebook.com/InkClubBergamo/" },
          { name: "Instagram", href: "https://www.instagram.com/inkclub_bergamo/" },
          { name: "Youtube", href: "https://www.youtube.com/inkclubbergamo/" },
          { name: "Flickr", href: "#" },
        ]}
        transparencyLink="/pdf/Modello-Trasparenza-2023-Ink-Club.pdf"
        statuteLink="/pdf/Statuto-depositato-2020.pdf"
        supportersImage="/supporters/conilsostegnodi.png"
        supportersAlt="Con il sostegno di"
        collaborationsImage="/supporters/collaborazioni.png"
        collaborationsAlt="Collaborazioni"
      />
    </main>
  );
}
