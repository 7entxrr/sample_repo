import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AEOTeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AEO Teams</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Increase AI Search visibility with specialized tools and strategies.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Empower your AEO teams with comprehensive visibility tracking and optimization tools.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
