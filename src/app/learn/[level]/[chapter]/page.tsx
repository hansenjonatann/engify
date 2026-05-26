import { ArrowRight, ArrowLeft } from "lucide-react";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";

export default async function ChapterPage({ params }: { params: Promise<{ level: string, chapter: string }> }) {
  const { level, chapter } = await params;
  
  return (
    <div className="space-y-16">
      <header className="mb-16 border-b-2 border-stone-900 dark:border-white pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-bold uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-6 rounded-sm">
          {level} MODULE
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 capitalize leading-none">{chapter.replace('-', ' ')}.</h1>
        <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 font-medium max-w-2xl leading-relaxed">
          In this chapter, you will learn the core foundations required to structure your thoughts clearly.
        </p>
      </header>

      <section id="grammar" className="max-w-none">
        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="text-3xl font-black tracking-tight">Grammar</h2>
        </div>
        
        <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-500 hover:prose-a:text-accent-600 mb-12">
          <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            This is where the MDX content will be rendered for grammar rules. To truly master a language, you must understand the underlying architecture of its sentences.
          </p>
        </div>
        
        <div className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-8 rounded-sm">
          <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-6">Subject-Verb Agreement Matrix</h4>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300 dark:border-stone-700">
                <th className="pb-4 font-black uppercase tracking-wider text-sm">Subject</th>
                <th className="pb-4 font-black uppercase tracking-wider text-sm">Verb (to be)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              <tr className="hover:bg-white dark:hover:bg-stone-900 transition-colors"><td className="py-4 px-4 font-bold">I</td><td className="py-4 px-4 font-medium font-mono text-accent-500">am</td></tr>
              <tr className="hover:bg-white dark:hover:bg-stone-900 transition-colors"><td className="py-4 px-4 font-bold">You</td><td className="py-4 px-4 font-medium font-mono text-accent-500">are</td></tr>
              <tr className="hover:bg-white dark:hover:bg-stone-900 transition-colors"><td className="py-4 px-4 font-bold">He / She / It</td><td className="py-4 px-4 font-medium font-mono text-accent-500">is</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="quiz">
         <InteractiveQuiz />
      </section>

      {/* Navigations */}
      <div className="fixed bottom-0 left-0 right-0 md:left-72 p-6 bg-background/95 backdrop-blur-sm border-t border-stone-200 dark:border-stone-800 flex justify-between items-center z-30">
        <button className="flex items-center gap-3 px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">
          <ArrowLeft size={16} /> Previous Topic
        </button>
        <button className="flex items-center gap-3 px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider bg-primary-900 text-white hover:bg-accent-500 dark:bg-white dark:text-primary-900 dark:hover:bg-accent-500 dark:hover:text-white transition-all shadow-md">
          Next Chapter <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
