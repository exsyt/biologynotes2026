import React, { useState } from 'react';

export const EnzymeDiagram: React.FC = () => {
  const [view, setView] = useState<'lock_and_key' | 'temp_curve' | 'ph_curve'>('lock_and_key');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-violet-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            Enzyme Kinetics & Specificity
          </h4>
          <p className="text-xs text-slate-400">Lock-and-key model, thermal denaturation kinetics, and pH optima</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setView('lock_and_key')}
            className={`px-3 py-1.5 rounded-md transition-all ${view === 'lock_and_key' ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Lock & Key Action
          </button>
          <button
            onClick={() => setView('temp_curve')}
            className={`px-3 py-1.5 rounded-md transition-all ${view === 'temp_curve' ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Temperature Kinetics
          </button>
          <button
            onClick={() => setView('ph_curve')}
            className={`px-3 py-1.5 rounded-md transition-all ${view === 'ph_curve' ? 'bg-violet-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            pH Optima
          </button>
        </div>
      </div>

      {view === 'lock_and_key' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 flex justify-center">
            <svg viewBox="0 0 520 200" className="w-full max-w-lg h-auto select-none">
              {/* Step 1: Substrate & Enzyme */}
              <g transform="translate(10, 20)">
                <text x="65" y="15" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">1. Separate Molecules</text>
                {/* Substrate */}
                <path d="M 45,35 L 75,35 L 75,55 L 60,55 L 60,65 L 45,65 Z" fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />
                <text x="60" y="48" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">Substrate</text>
                {/* Enzyme */}
                <path d="M 20,95 L 45,95 L 45,115 L 60,115 L 60,105 L 75,105 L 75,95 L 110,95 C 115,140 15,140 20,95 Z" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="2.5" />
                <text x="65" y="130" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="bold">Enzyme</text>
                <text x="60" y="85" textAnchor="middle" fill="#f43f5e" fontSize="9">Active Site</text>
              </g>

              {/* Arrow 1 */}
              <path d="M 155,100 L 180,100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 2: Complex */}
              <g transform="translate(195, 20)">
                <text x="65" y="15" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">2. Enzyme-Substrate Complex</text>
                {/* Bound Substrate */}
                <path d="M 45,75 L 75,75 L 75,95 L 60,95 L 60,105 L 45,105 Z" fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />
                {/* Enzyme */}
                <path d="M 20,95 L 45,95 L 45,115 L 60,115 L 60,105 L 75,105 L 75,95 L 110,95 C 115,140 15,140 20,95 Z" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="2.5" />
                <text x="65" y="130" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="bold">Enzyme</text>
              </g>

              {/* Arrow 2 */}
              <path d="M 335,100 L 360,100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Step 3: Products released */}
              <g transform="translate(375, 20)">
                <text x="65" y="15" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">3. Products Released</text>
                {/* Products */}
                <polygon points="40,35 55,35 55,55 40,55" fill="#34d399" stroke="#a7f3d0" strokeWidth="1.5" />
                <polygon points="65,30 80,30 85,55 65,55" fill="#f59e0b" stroke="#fde68a" strokeWidth="1.5" />
                <text x="62" y="70" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="bold">Products</text>
                {/* Unchanged Enzyme */}
                <path d="M 20,95 L 45,95 L 45,115 L 60,115 L 60,105 L 75,105 L 75,95 L 110,95 C 115,140 15,140 20,95 Z" fill="#6d28d9" stroke="#c4b5fd" strokeWidth="2.5" />
                <text x="65" y="130" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="bold">Enzyme (Unchanged)</text>
              </g>
            </svg>
          </div>
          <div className="md:col-span-4 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-violet-300">Lock-and-Key Mark Points</h5>
            <p className="text-slate-300">
              1. The substrate has a <strong className="text-sky-300">complementary 3D shape</strong> that fits perfectly into the enzyme's <strong className="text-rose-400">active site</strong>.
            </p>
            <p className="text-slate-300">
              2. Forms a temporary <strong className="text-violet-300">enzyme-substrate complex</strong>.
            </p>
            <p className="text-slate-300">
              3. The reaction is catalysed and products leave the active site.
            </p>
            <p className="text-emerald-400 font-medium">
              4. The enzyme emerges chemically unchanged and can bind another substrate immediately.
            </p>
          </div>
        </div>
      )}

      {view === 'temp_curve' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 380 220" className="w-full max-w-sm h-auto select-none">
              {/* Axes */}
              <line x1="45" y1="180" x2="360" y2="180" stroke="#64748b" strokeWidth="2" />
              <line x1="45" y1="180" x2="45" y2="20" stroke="#64748b" strokeWidth="2" />
              <text x="200" y="205" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Temperature (°C)</text>
              <text x="15" y="100" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" transform="rotate(-90 15 100)">Rate of Reaction</text>

              {/* Temperature axis ticks */}
              <text x="45" y="195" textAnchor="middle" fill="#64748b" fontSize="9">0</text>
              <text x="120" y="195" textAnchor="middle" fill="#64748b" fontSize="9">20</text>
              <text x="195" y="195" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">37–40</text>
              <text x="270" y="195" textAnchor="middle" fill="#64748b" fontSize="9">60</text>
              <text x="340" y="195" textAnchor="middle" fill="#64748b" fontSize="9">80</text>

              {/* Curve */}
              <path
                d="M 45,178 Q 120,165 160,110 T 195,35 Q 215,40 230,120 T 260,180"
                fill="none"
                stroke="#a855f7"
                strokeWidth="3.5"
              />

              {/* Optimum marker */}
              <line x1="195" y1="35" x2="195" y2="180" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="195" cy="35" r="5" fill="#f59e0b" />
              <text x="195" y="25" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold">Optimum Temp (~37°C)</text>

              {/* Annotations */}
              <text x="100" y="145" fill="#38bdf8" fontSize="9">↑ Kinetic Energy</text>
              <text x="100" y="157" fill="#38bdf8" fontSize="9">More collisions</text>

              <text x="240" y="90" fill="#f43f5e" fontSize="9" fontWeight="bold">Denaturation!</text>
              <text x="240" y="102" fill="#f43f5e" fontSize="9">Bonds break</text>
              <text x="240" y="114" fill="#f43f5e" fontSize="9">Active site changes</text>
            </svg>
          </div>
          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-amber-300">Thermal Kinetics Explained:</h5>
            <p className="text-slate-300">
              • <strong className="text-sky-300">Low Temp (0–35°C):</strong> Molecules move slowly with low kinetic energy; fewer collisions between enzyme and substrate.
            </p>
            <p className="text-slate-300">
              • <strong className="text-amber-400">Optimum (37–40°C in humans):</strong> Maximum rate of successful collisions and ES-complex formation.
            </p>
            <p className="text-slate-300">
              • <strong className="text-rose-400">Above Optimum (&gt;45°C):</strong> High thermal vibration breaks hydrogen bonds maintaining 3D tertiary structure. Active site shape changes; substrate cannot fit. <strong className="text-rose-300 font-bold">Irreversibly Denatured.</strong>
            </p>
          </div>
        </div>
      )}

      {view === 'ph_curve' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 380 220" className="w-full max-w-sm h-auto select-none">
              {/* Axes */}
              <line x1="45" y1="180" x2="360" y2="180" stroke="#64748b" strokeWidth="2" />
              <line x1="45" y1="180" x2="45" y2="20" stroke="#64748b" strokeWidth="2" />
              <text x="200" y="205" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">pH</text>
              <text x="15" y="100" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" transform="rotate(-90 15 100)">Enzyme Activity</text>

              {/* pH axis ticks */}
              <text x="75" y="195" textAnchor="middle" fill="#ef4444" fontSize="9">pH 2</text>
              <text x="195" y="195" textAnchor="middle" fill="#38bdf8" fontSize="9">pH 7</text>
              <text x="265" y="195" textAnchor="middle" fill="#10b981" fontSize="9">pH 8.5</text>

              {/* Pepsin Curve (Stomach pH 2) */}
              <path d="M 45,180 Q 75,30 115,180" fill="none" stroke="#ef4444" strokeWidth="3" />
              <text x="75" y="30" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Pepsin (Stomach)</text>

              {/* Amylase Curve (Saliva pH 7) */}
              <path d="M 140,180 Q 195,40 250,180" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <text x="195" y="35" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="bold">Amylase (Saliva)</text>

              {/* Trypsin Curve (Small intestine pH 8.5) */}
              <path d="M 215,180 Q 265,50 315,180" fill="none" stroke="#10b981" strokeWidth="3" />
              <text x="270" y="45" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontWeight="bold">Trypsin (Duodenum)</text>
            </svg>
          </div>
          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-sky-300">pH Specificity:</h5>
            <p className="text-slate-300">
              Each enzyme operates within a narrow optimum pH band. Extreme pH (excess H⁺ or OH⁻ ions) alters the ionic charges of amino acids in the active site, breaking ionic bonds and denaturing the enzyme.
            </p>
            <div className="space-y-1 pt-1">
              <p><strong className="text-red-400">Pepsin (Stomach):</strong> Acidic optimum pH 1.5–2.0 (HCl environment).</p>
              <p><strong className="text-sky-400">Salivary Amylase (Mouth):</strong> Neutral optimum pH 6.8–7.0.</p>
              <p><strong className="text-emerald-400">Trypsin & Lipase (Intestine):</strong> Alkaline optimum pH 8.0–8.5 (neutralised by bile).</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
