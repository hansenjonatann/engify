import Link from "next/link";
import { Play, Check, Lock } from "lucide-react";

export default function DashboardPage() {
  const levels = [
    {
      id: "beginner",
      title: "Beginner (A1 - A2)",
      description: "Master the foundations of English grammar, basic vocabulary, and everyday conversations.",
      progress: 35,
      unlocked: true,
      accent: "bg-stone-900 text-white dark:bg-white dark:text-stone-900",
    },
    {
      id: "intermediate",
      title: "Intermediate (B1 - B2)",
      description: "Expand your vocabulary, understand complex texts, and express yourself fluently.",
      progress: 0,
      unlocked: true,
      accent: "bg-stone-200 dark:bg-stone-800 text-foreground",
    },
    {
      id: "advanced",
      title: "Advanced (C1 - C2)",
      description: "Achieve native-like fluency, understand abstract topics, and write professionally.",
      progress: 0,
      unlocked: false,
      accent: "bg-stone-100 dark:bg-stone-900 text-stone-400 dark:text-stone-600",
    }
  ];

  return (
    <div className="space-y-12">
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8">
        <h1 className="text-4xl font-black tracking-tighter mb-2">Welcome back.</h1>
        <p className="text-stone-600 dark:text-stone-400 font-medium">Continue your structured curriculum.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {levels.map((level) => (
          <div key={level.id} className="border-2 border-stone-200 dark:border-stone-800 rounded-sm p-8 relative flex flex-col transition-all hover:border-stone-400 dark:hover:border-stone-600 bg-background">
            {!level.unlocked && (
              <div className="absolute inset-0 bg-stone-50/50 dark:bg-stone-950/50 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 rounded-sm shadow-sm flex items-center gap-2 font-bold text-sm">
                  <Lock size={16} /> Locked
                </div>
              </div>
            )}
            
            <div className={`w-12 h-12 flex items-center justify-center mb-8 rounded-sm ${level.accent}`}>
              {level.progress > 0 ? <Play size={20} className="ml-1" /> : <Check size={20} />}
            </div>
            
            <h3 className="text-2xl font-bold tracking-tight mb-3">{level.title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-8 flex-1 font-medium leading-relaxed">
              {level.description}
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-stone-500">Completion</span>
                <span className={level.progress > 0 ? "text-accent-500" : "text-stone-400"}>{level.progress}%</span>
              </div>
              <div className="w-full bg-stone-200 dark:bg-stone-800 rounded-sm h-1.5 overflow-hidden">
                <div className="bg-accent-500 h-full rounded-sm" style={{ width: `${level.progress}%` }}></div>
              </div>
            </div>

            <Link 
              href={`/learn/${level.id}/chapter-1`}
              className={`w-full py-4 text-center font-bold text-sm uppercase tracking-widest rounded-sm transition-colors border ${
                level.unlocked 
                  ? 'bg-primary-900 text-white border-primary-900 hover:bg-accent-500 hover:border-accent-500 dark:bg-white dark:text-primary-900 dark:border-white dark:hover:bg-accent-500 dark:hover:text-white dark:hover:border-accent-500' 
                  : 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed dark:bg-stone-900 dark:border-stone-800 dark:text-stone-600'
              }`}
            >
              {level.progress > 0 ? 'Continue' : 'Start'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
