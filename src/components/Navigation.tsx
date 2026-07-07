"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-white">
              Grow Citable
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                  onMouseEnter={() => setPlatformOpen(true)}
                  onMouseLeave={() => setPlatformOpen(false)}
                >
                  Platform
                  <ChevronDown className="w-4 h-4" />
                </button>
                {platformOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setPlatformOpen(true)}
                    onMouseLeave={() => setPlatformOpen(false)}
                  >
                    <Link href="/features/answer-engine-insights" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Answer Engine Insights</Link>
                    <Link href="/features/prompt-volumes" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Prompt Volumes</Link>
                    <Link href="/features/shopping" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Shopping</Link>
                    <Link href="/features/agent-analytics" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Agent Analytics</Link>
                    <Link href="/features/agents" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Agents</Link>
                    <Link href="/features/aim" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Aim</Link>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                {resourcesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <Link href="/customers" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Customers</Link>
                    <Link href="/integrations" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Integrations</Link>
                    <Link href="/aeo-report" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">AEO Report</Link>
                    <Link href="/resources" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Resource Center</Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Blog</Link>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </button>
                {solutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <Link href="/solutions/aeo-teams" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">AEO Teams</Link>
                    <Link href="/solutions/content-teams" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Content Teams</Link>
                    <Link href="/solutions/pr-teams" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">PR & Brand Teams</Link>
                    <Link href="/solutions/agencies" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800">Agencies</Link>
                  </div>
                )}
              </div>

              <Link href="/enterprise" className="text-sm text-zinc-400 hover:text-white transition-colors">Enterprise</Link>
              <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get a Demo
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link href="/features/answer-engine-insights" className="text-sm text-zinc-400 hover:text-white">Answer Engine Insights</Link>
            <Link href="/features/prompt-volumes" className="text-sm text-zinc-400 hover:text-white">Prompt Volumes</Link>
            <Link href="/features/agents" className="text-sm text-zinc-400 hover:text-white">Agents</Link>
            <Link href="/features/aim" className="text-sm text-zinc-400 hover:text-white">Aim</Link>
            <Link href="/customers" className="text-sm text-zinc-400 hover:text-white">Customers</Link>
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white">Pricing</Link>
            <Link href="/enterprise" className="text-sm text-zinc-400 hover:text-white">Enterprise</Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800">
              <Link href="/login" className="text-sm text-zinc-400 hover:text-white">Log in</Link>
              <Link href="/contact" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full text-center">Get a Demo</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
