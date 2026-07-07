import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Last updated: July 2026
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-zinc-300 leading-relaxed">
                Grow Citable collects information you provide directly, such as name, email address, company information, and payment details. We also collect technical data about your use of our services, including IP address, browser type, and usage patterns.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                We use your information to provide, maintain, and improve our services; process transactions; communicate with you; and comply with legal obligations. We do not sell your personal data to third parties.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-zinc-300 leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. However, no method of transmission over the internet is completely secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-zinc-300 leading-relaxed">
                We retain your data for as long as necessary to provide our services and comply with legal requirements. You may request deletion of your account and associated data at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-zinc-300 leading-relaxed">
                You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications and request data portability.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may use third-party services for payment processing, analytics, and email delivery. These services have their own privacy policies and may collect data according to their terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
              <p className="text-zinc-300 leading-relaxed">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-zinc-300 leading-relaxed">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-zinc-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website and sending you an email notification.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                For privacy-related questions, please contact us at privacy@growcitable.com
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
