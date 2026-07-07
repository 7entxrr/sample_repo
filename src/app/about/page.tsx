import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Grow Citable</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-zinc-300 leading-relaxed">
                Grow Citable helps brands gain visibility in AI-generated answers, optimize their presence in LLM-based answer engines, and stay competitive in the zero-click world. We believe every brand deserves to be discovered by AI.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-zinc-300 leading-relaxed">
                Founded in 2024, Grow Citable was born from the realization that AI search is fundamentally changing how people discover products and services. We built the first comprehensive platform to help brands optimize their presence across AI answer engines.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
              <p className="text-zinc-300 leading-relaxed">
                We provide tools and insights to help brands understand how they appear in AI conversations, track their visibility across answer engines, and create AI-optimized content that drives results.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-zinc-300 leading-relaxed">
                Our team consists of AI researchers, marketing technologists, and search experts dedicated to helping brands succeed in the age of AI search.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                For inquiries about Grow Citable, please contact us at hello@growcitable.com
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
