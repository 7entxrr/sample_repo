import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContentTeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Content Teams</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Drive human and bot traffic with AI-optimized content strategies.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Create content that performs well in both traditional search and AI answer engines.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
