import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ShoppingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Track your products in AI shopping recommendations.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300">
              Monitor and optimize your product visibility in AI-powered shopping experiences.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
