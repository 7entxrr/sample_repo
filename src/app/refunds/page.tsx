import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Last updated: July 2026
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. General Refund Policy</h2>
              <p className="text-zinc-300 leading-relaxed">
                Grow Citable offers subscription-based services. All subscription fees are non-refundable except as specifically outlined in this policy or as required by applicable law.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Trial Period</h2>
              <p className="text-zinc-300 leading-relaxed">
                New customers may be eligible for a free trial period. If you cancel during the trial period, you will not be charged. Once the trial period ends and you are charged, standard refund terms apply.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Service Issues</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you experience significant service issues that prevent you from using our platform as intended, please contact our support team. We may issue refunds or credits at our discretion for verified service outages or technical issues.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cancellation</h2>
              <p className="text-zinc-300 leading-relaxed">
                You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period. You will continue to have access to the service until the end of your billing period.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Billing Errors</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you believe you have been charged in error, please contact us within 30 days of the charge. We will investigate and issue a refund if the charge is determined to be erroneous.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Refund Process</h2>
              <p className="text-zinc-300 leading-relaxed">
                To request a refund, contact our support team with your account details and reason for the request. Refund requests are typically processed within 5-10 business days.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Exceptions</h2>
              <p className="text-zinc-300 leading-relaxed">
                Refunds will not be issued for: partial months of service, failure to use the service, or cancellation after the current billing period has begun.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-zinc-300 leading-relaxed">
                We reserve the right to modify this refund policy at any time. Changes will be posted on our website and will apply to future purchases.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                For refund requests or questions, please contact us at refunds@growcitable.com
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
