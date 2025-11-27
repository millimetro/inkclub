import WireframeSection from "./components/WireframeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="">
        <div className="grid place-items-center">
          <img src="/logo/Logo.svg" alt="Ink Club Logo" className="h-[12vh]" />
        </div>
        <WireframeSection title="Wireframe Section" />
      </main>
    </div>
  );
}
