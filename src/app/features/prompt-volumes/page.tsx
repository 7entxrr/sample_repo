import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PromptVolumesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prompt Volumes</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            See what millions of people ask AI, and align strategy with demand.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Understand search trends and user intent across AI platforms with comprehensive prompt volume data.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
