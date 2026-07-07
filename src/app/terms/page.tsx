import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Last updated: July 2026
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                By accessing or using Grow Citable services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-zinc-300 leading-relaxed">
                Grow Citable provides AI search optimization and analytics services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-zinc-300 leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                Subscription fees are charged in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-zinc-300 leading-relaxed">
                All content, features, and functionality of Grow Citable are owned by Grow Citable and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-zinc-300 leading-relaxed">
                Grow Citable shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p className="text-zinc-300 leading-relaxed">
                We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our sole discretion.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-zinc-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Grow Citable is headquartered.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@growcitable.com
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
