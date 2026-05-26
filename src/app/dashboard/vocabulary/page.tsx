import { BookMarked, Search, Trash2 } from "lucide-react";

export default function VocabularyPage() {
  const vocabularies = [
    { word: "Resilience", pos: "noun", def: "The capacity to recover quickly from difficulties.", context: "Her resilience after the failure was inspiring." },
    { word: "Ephemeral", pos: "adjective", def: "Lasting for a very short time.", context: "Fashions are ephemeral." },
    { word: "Ubiquitous", pos: "adjective", def: "Present, appearing, or found everywhere.", context: "His ubiquitous influence was felt by all the family." }
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 dark:border-stone-800 pb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter flex items-center gap-3 mb-2">
            Vocabulary Bank.
          </h1>
          <p className="text-stone-600 dark:text-stone-400 font-medium">
            Review the words you've highlighted and saved.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-3 text-stone-400" size={18} />
          <input 
            type="text" 
            placeholder="Search saved words..." 
            className="w-full pl-12 pr-4 py-3 bg-transparent border-2 border-stone-200 dark:border-stone-800 rounded-sm focus:outline-none focus:border-stone-900 dark:focus:border-white font-medium transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularies.map((v, i) => (
          <div key={i} className="bg-background border-2 border-stone-200 dark:border-stone-800 p-8 rounded-sm group hover:border-stone-400 dark:hover:border-stone-600 transition-all relative flex flex-col">
            <button className="absolute top-6 right-6 text-stone-400 opacity-0 group-hover:opacity-100 hover:text-accent-500 transition-all">
              <Trash2 size={18} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-black capitalize tracking-tight">{v.word}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-sm">{v.pos}</span>
            </div>
            <p className="text-stone-700 dark:text-stone-300 font-medium text-sm mb-6 flex-1">
              {v.def}
            </p>
            <div className="bg-stone-50 dark:bg-stone-900 border-l-4 border-accent-500 p-4 rounded-r-sm">
              <p className="text-sm font-medium italic text-stone-600 dark:text-stone-400">
                "{v.context}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
