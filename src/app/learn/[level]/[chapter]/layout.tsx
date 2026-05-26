import { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function LearnLayout({ children }: { children: ReactNode }) {
  const pillars = ["1. Grammar", "2. Reading", "3. Writing", "4. Listening", "5. Conversation", "6. Speaking", "7. Vocabulary"];
  
  return (
    <div className="min-h-screen flex bg-background font-sans text-foreground">
      <aside className="w-72 border-r border-stone-200 dark:border-stone-800 hidden md:flex flex-col bg-stone-50 dark:bg-stone-950 h-screen sticky top-0">
        <div className="p-6 border-b border-stone-200 dark:border-stone-800">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-foreground transition-colors">
            <ChevronLeft size={16} /> Exit to Dashboard
          </Link>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="font-black text-sm text-stone-400 uppercase tracking-widest mb-6">Chapter Navigation</h3>
          <nav className="space-y-1 relative">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-800 -z-10"></div>
            {pillars.map((item, i) => (
              <a href={`#${item.split('. ')[1].toLowerCase()}`} key={i} className="flex items-center gap-4 py-3 group">
                <div className="w-5 h-5 rounded-full bg-stone-100 dark:bg-stone-900 border-2 border-stone-300 dark:border-stone-700 group-hover:border-accent-500 transition-colors flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-accent-500 transition-colors"></div>
                </div>
                <span className="text-sm font-bold text-stone-600 dark:text-stone-400 group-hover:text-foreground transition-colors">
                  {item}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 max-w-4xl w-full mx-auto p-8 md:p-16 pb-40 relative">
        {children}
      </main>
    </div>
  );
}
