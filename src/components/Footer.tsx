import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/enterprise" className="text-sm text-zinc-400 hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refunds" className="text-sm text-zinc-400 hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="https://x.com/growcitable" className="text-sm text-zinc-400 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="https://linkedin.com/company/growcitable" className="text-sm text-zinc-400 hover:text-white transition-colors">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 mb-4 md:mb-0">© 2026 Grow Citable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
