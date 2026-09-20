import React from 'react';
import { Search, Sparkles, Eye, Maximize2, Minimize2, CheckCircle2 } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenToolkit: () => void;
  fontSize: 'normal' | 'large' | 'xl';
  onChangeFontSize: (size: 'normal' | 'large' | 'xl') => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
  completedCount: number;
  totalTopics: number;
  onOpenSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onOpenToolkit,
  fontSize,
  onChangeFontSize,
  isFocusMode,
  onToggleFocusMode,
  completedCount,
  totalTopics,
  onOpenSidebar
}) => {
  const percent = Math.round((completedCount / totalTopics) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Branding & Mobile Menu */}
        <div className="flex items-center gap-3">
          {onOpenSidebar && (
            <button
              onClick={onOpenSidebar}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Open Topics Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-950/50">
              <span className="text-lg font-mono">5090</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold tracking-tight text-slate-100 hidden sm:inline-block">
                  O Level Biology
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                  Illustrated Edition
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Cambridge GCE 5090 Complete Syllabus</p>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md mx-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts (e.g. osmosis, enzymes, villus, DNA)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs px-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right: Actions & Tools */}
        <div className="flex items-center gap-2">
          {/* Progress Pill */}
          <div className="hidden md:flex items-center gap-2 bg-slate-900/90 border border-slate-800/80 px-2.5 py-1 rounded-lg text-xs">
            <CheckCircle2 className={`w-3.5 h-3.5 ${completedCount > 0 ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span className="text-slate-300 font-medium">{completedCount}/{totalTopics}</span>
            <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${percent}%` }}></div>
            </div>
          </div>

          {/* Eye Comfort Font Size Selector */}
          <div className="hidden sm:flex items-center bg-slate-900/90 border border-slate-800/80 rounded-lg p-0.5 text-xs">
            <span className="px-2 text-slate-500 text-[10px] font-semibold flex items-center gap-1">
              <Eye className="w-3 h-3 text-slate-400" />
              Size
            </span>
            {(['normal', 'large', 'xl'] as const).map((s) => (
              <button
                key={s}
                onClick={() => onChangeFontSize(s)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  fontSize === s
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s === 'normal' ? 'A' : s === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Exam Toolkit Button */}
          <button
            onClick={onOpenToolkit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Exam Toolkit</span>
          </button>

          {/* Download / Offline PWA Install Button */}
          <PWAInstallButton />

          {/* Focus Mode Toggle */}
          <button
            onClick={onToggleFocusMode}
            title={isFocusMode ? "Show Sidebar" : "Focus Reading Mode (Hide Sidebar)"}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            {isFocusMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
