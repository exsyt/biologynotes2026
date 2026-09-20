import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share, PlusSquare, CheckCircle, HelpCircle, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA
  if (isInstalled) {
    return (
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-semibold text-emerald-400">
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Installed Offline</span>
      </div>
    );
  }

  // Chromium / Android / Desktop flow (with beforeinstallprompt)
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-950/50 animate-pulse hover:animate-none"
        title="Install app to your device for 100% offline study"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Download / Install</span>
      </button>
    );
  }

  // iOS Safari flow or generic browser guide fallback
  return (
    <>
      <button
        onClick={() => setShowGuide(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-emerald-300 text-xs font-semibold transition-all"
        title="Download for offline access"
      >
        <Download className="w-3.5 h-3.5 text-emerald-400" />
        <span className="hidden sm:inline">Offline App</span>
      </button>

      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Download className="w-4 h-4" />
                <span>Offline App Installation</span>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              This app is a <strong>Progressive Web App (PWA)</strong> with a built-in offline service worker. All 19 syllabus topics, diagrams, and revision tools work <strong>completely offline without internet</strong> once installed or loaded!
            </p>

            {isIOS ? (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="text-emerald-400 font-bold block">For iPhone & iPad (Safari):</span>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-1.5">
                    Tap the <Share className="w-3.5 h-3.5 text-sky-400 shrink-0" /> <strong>Share</strong> icon in the bottom Safari bar.
                  </li>
                  <li className="flex items-center gap-1.5">
                    Scroll down and tap <PlusSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> <strong>Add to Home Screen</strong>.
                  </li>
                  <li>Tap <strong>Add</strong> at the top right. Launch from your home screen anytime without wifi!</li>
                </ol>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="text-emerald-400 font-bold block">For Chrome, Edge & Android:</span>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-300">
                  <li>Open the browser options menu (the 3 dots <strong>⋮</strong> in the top right).</li>
                  <li>Click <strong>"Install app"</strong> or <strong>"Install O Level Biology"</strong> (or the computer/arrow icon in the address bar).</li>
                  <li>Confirm installation. The app will open in its own standalone window and work offline!</li>
                </ol>
              </div>
            )}

            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-200">
              💡 <strong>Pro Tip:</strong> Once loaded in your browser, the service worker caches all assets automatically, so even if you lose connectivity right now, every diagram and note will remain available.
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors"
            >
              Got it, let's revise!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
