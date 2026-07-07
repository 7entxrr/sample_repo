import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Your Purchase</h1>
          <p className="text-zinc-400 mb-8 text-lg">
            Choose your plan and get started with Grow Citable
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-6">
                <h2 className="text-xl font-semibold mb-4">Plan Selection</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                    <h3 className="font-semibold">Starter Plan</h3>
                    <p className="text-2xl font-bold mt-2">$99<span className="text-sm text-zinc-400">/month</span></p>
                    <p className="text-sm text-zinc-400 mt-2">ChatGPT tracking, 50 prompts, Email support</p>
                  </div>
                  <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                    <h3 className="font-semibold">Growth Plan</h3>
                    <p className="text-2xl font-bold mt-2">$399<span className="text-sm text-zinc-400">/month</span></p>
                    <p className="text-sm text-zinc-400 mt-2">3 Answer Engines, 100 prompts, 400 credits</p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-zinc-800 pb-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVC</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-zinc-800 pb-6">
                <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm text-zinc-400">
                  I agree to the <Link href="/terms" className="text-white hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
