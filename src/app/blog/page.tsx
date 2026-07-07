import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Latest insights on AI search, AEO, and marketing technology.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Blog posts coming soon.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
