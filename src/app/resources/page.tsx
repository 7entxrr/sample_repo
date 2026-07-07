import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Center</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Guides, tutorials, and resources to help you succeed with AI search optimization.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Resources coming soon.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
