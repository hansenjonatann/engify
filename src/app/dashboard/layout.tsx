import { ReactNode } from "react";
import Link from "next/link";
import { LogOut, SunMoon, BookOpen } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-stone-200 dark:border-stone-800 bg-background px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <BookOpen size={20} className="text-accent-500" />
            ENGIFY.
          </Link>
          <div className="hidden sm:flex space-x-6 text-sm font-bold uppercase tracking-widest">
            <Link href="/dashboard" className="text-foreground border-b-2 border-accent-500 pb-1">Overview</Link>
            <Link href="/dashboard/vocabulary" className="text-stone-500 hover:text-foreground transition-colors pb-1">Vocabulary</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 border border-stone-200 dark:border-stone-800 rounded-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
            <SunMoon size={18} className="text-stone-600 dark:text-stone-300" />
          </button>
          <div className="flex items-center gap-4 pl-4 border-l border-stone-200 dark:border-stone-800">
            <div className="w-8 h-8 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-sm flex items-center justify-center font-bold text-sm">
              U
            </div>
            <button className="text-stone-500 hover:text-red-600 transition-colors">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}
