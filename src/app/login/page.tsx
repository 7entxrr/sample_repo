import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-16">
        <section className="px-4 py-20 max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome back</h1>
          <p className="text-zinc-400 mb-8 text-center">
            Sign in to your Grow Citable account
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                  placeholder="••••••••"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-zinc-400">
                Don't have an account?{" "}
                <Link href="/get-started" className="text-white hover:underline">
                  Get started
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
