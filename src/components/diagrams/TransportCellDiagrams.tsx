import React, { useState } from 'react';

export const TransportCellDiagram: React.FC = () => {
  const [cellType, setCellType] = useState<'plant' | 'animal' | 'active_transport'>('plant');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-cyan-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Osmosis & Transport Across Membranes
          </h4>
          <p className="text-xs text-slate-400">Comparing plant turgor vs animal cell lysis and active transport mechanisms</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setCellType('plant')}
            className={`px-3 py-1.5 rounded-md transition-all ${cellType === 'plant' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Plant Cells (Osmosis)
          </button>
          <button
            onClick={() => setCellType('animal')}
            className={`px-3 py-1.5 rounded-md transition-all ${cellType === 'animal' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Animal Cells (Osmosis)
          </button>
          <button
            onClick={() => setCellType('active_transport')}
            className={`px-3 py-1.5 rounded-md transition-all ${cellType === 'active_transport' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Active Transport Carrier
          </button>
        </div>
      </div>

      {cellType === 'plant' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Turgid */}
            <div className="bg-slate-800/60 p-3.5 rounded-xl border border-emerald-500/30 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">1. Pure Water (Hypotonic)</span>
              <svg viewBox="0 0 160 140" className="w-40 h-36 my-1">
                {/* Wall */}
                <rect x="15" y="15" width="130" height="110" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="4" />
                {/* Membrane tightly pushed against wall */}
                <rect x="21" y="21" width="118" height="98" rx="8" fill="#022c22" stroke="#34d399" strokeWidth="2" />
                {/* Swollen vacuole */}
                <ellipse cx="80" cy="70" rx="50" ry="40" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="80" y="74" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="bold">Swollen Vacuole</text>
                {/* Inward arrows */}
                <path d="M 5,70 L 16,70" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
                <path d="M 155,70 L 144,70" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
              <h5 className="font-bold text-sm text-emerald-300">Turgid Cell</h5>
              <p className="text-xs text-slate-300 mt-1 text-left">
                • High outside water potential.<br/>
                • Water enters cell by osmosis.<br/>
                • Vacuole swells; membrane pushes firmly against strong cellulose cell wall.<br/>
                • Turgor pressure supports the plant.
              </p>
            </div>

            {/* Flaccid */}
            <div className="bg-slate-800/60 p-3.5 rounded-xl border border-amber-500/30 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">2. Equal Potential (Isotonic)</span>
              <svg viewBox="0 0 160 140" className="w-40 h-36 my-1">
                <rect x="15" y="15" width="130" height="110" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="4" />
                <rect x="25" y="25" width="110" height="90" rx="6" fill="#022c22" stroke="#f59e0b" strokeWidth="1.5" />
                <ellipse cx="80" cy="70" rx="38" ry="30" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="80" y="74" textAnchor="middle" fill="#bae6fd" fontSize="9">Vacuole Normal</text>
              </svg>
              <h5 className="font-bold text-sm text-amber-300">Flaccid Cell</h5>
              <p className="text-xs text-slate-300 mt-1 text-left">
                • Equal water potential inside and outside.<br/>
                • No net water movement.<br/>
                • Cell contents lose some firmness.<br/>
                • Tissues become limp (wilting initiates).
              </p>
            </div>

            {/* Plasmolysed */}
            <div className="bg-slate-800/60 p-3.5 rounded-xl border border-rose-500/30 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">3. Concentrated Solute (Hypertonic)</span>
              <svg viewBox="0 0 160 140" className="w-40 h-36 my-1">
                <rect x="15" y="15" width="130" height="110" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="4" />
                {/* Shrunken membrane detached from wall */}
                <ellipse cx="80" cy="70" rx="36" ry="28" fill="#881337" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
                <ellipse cx="80" cy="70" rx="20" ry="15" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
                <text x="80" y="73" textAnchor="middle" fill="#fecdd3" fontSize="8" fontWeight="bold">Detached</text>
                <text x="35" y="40" fill="#fda4af" fontSize="8">External solution</text>
              </svg>
              <h5 className="font-bold text-sm text-rose-300">Plasmolysed Cell</h5>
              <p className="text-xs text-slate-300 mt-1 text-left">
                • Lower outside water potential.<br/>
                • Water leaves vacuole by osmosis.<br/>
                • Cytoplasm and membrane shrink away from cell wall.<br/>
                • Irreversible tissue collapse if prolonged.
              </p>
            </div>
          </div>
        </div>
      )}

      {cellType === 'animal' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-rose-500/30 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Dilute Solution (Pure Water)</span>
            <svg viewBox="0 0 160 120" className="w-36 h-28 my-2">
              <path d="M 50,20 Q 80,10 110,30 Q 140,60 120,90 Q 90,115 55,100 Q 20,80 35,50 Z" fill="#991b1b" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="80" cy="60" r="4" fill="#fca5a5" />
              <line x1="80" y1="60" x2="130" y2="35" stroke="#f87171" strokeWidth="2" />
              <text x="135" y="35" fill="#fca5a5" fontSize="9">Burst!</text>
            </svg>
            <h5 className="font-bold text-sm text-rose-300">Lysis (Cell Bursts)</h5>
            <p className="text-xs text-slate-300 mt-1 text-left">
              Animal cells lack a cell wall! Water enters rapidly by osmosis down water potential gradient until internal hydrostatic pressure bursts the delicate membrane.
            </p>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-xl border border-cyan-500/30 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Isotonic (Blood Plasma)</span>
            <svg viewBox="0 0 160 120" className="w-36 h-28 my-2">
              <ellipse cx="80" cy="60" rx="45" ry="30" fill="#dc2626" stroke="#f87171" strokeWidth="2.5" />
              <ellipse cx="80" cy="60" rx="22" ry="14" fill="#991b1b" />
            </svg>
            <h5 className="font-bold text-sm text-cyan-300">Normal (Biconcave Disc)</h5>
            <p className="text-xs text-slate-300 mt-1 text-left">
              Equal water potential in plasma and cytoplasm. Rate of water entry equals rate of exit; volume and biconcave geometry remain stable.
            </p>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-xl border border-amber-500/30 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Concentrated Solute (Hypertonic)</span>
            <svg viewBox="0 0 160 120" className="w-36 h-28 my-2">
              <path d="M 60,35 L 75,30 L 90,38 L 105,32 L 115,48 L 110,65 L 118,80 L 100,92 L 85,88 L 70,95 L 55,80 L 45,65 L 52,48 Z" fill="#7f1d1d" stroke="#fca5a5" strokeWidth="2" />
            </svg>
            <h5 className="font-bold text-sm text-amber-300">Crenated (Shrivelled)</h5>
            <p className="text-xs text-slate-300 mt-1 text-left">
              Higher water potential inside cell. Water rushes out by osmosis into concentrated solution; cytoplasm shrinks, membrane crinkles, cell cannot carry oxygen.
            </p>
          </div>
        </div>
      )}

      {cellType === 'active_transport' && (
        <div className="bg-slate-800/60 p-4 rounded-xl border border-indigo-500/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 flex justify-center">
              <svg viewBox="0 0 400 220" className="w-full max-w-sm h-auto select-none">
                {/* Low concentration outside */}
                <rect x="10" y="10" width="380" height="60" fill="#0f172a" />
                <text x="20" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold">Outside Soil (LOW mineral ion conc)</text>
                <circle cx="60" cy="50" r="5" fill="#38bdf8" />
                <circle cx="120" cy="35" r="5" fill="#38bdf8" />
                <circle cx="340" cy="45" r="5" fill="#38bdf8" />

                {/* Lipid Bilayer Membrane */}
                <rect x="10" y="75" width="380" height="50" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <text x="20" y="105" fill="#94a3b8" fontSize="10">Cell Membrane</text>

                {/* Carrier Protein */}
                <path d="M 180,75 C 175,100 170,125 180,125 L 220,125 C 230,125 225,100 220,75 Z" fill="#6366f1" stroke="#a5b4fc" strokeWidth="2" />
                <circle cx="200" cy="100" r="7" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />

                {/* ATP Energy */}
                <rect x="235" y="90" width="55" height="20" rx="4" fill="#d97706" />
                <text x="262" y="104" textAnchor="middle" fill="#fef3c7" fontSize="10" fontWeight="bold">ATP Energy</text>

                {/* High concentration inside */}
                <rect x="10" y="130" width="380" height="80" fill="#064e3b" fillOpacity="0.3" />
                <text x="20" y="150" fill="#34d399" fontSize="11" fontWeight="bold">Inside Root Hair Cytoplasm (HIGH mineral ion conc)</text>
                <circle cx="50" cy="180" r="5" fill="#38bdf8" />
                <circle cx="80" cy="190" r="5" fill="#38bdf8" />
                <circle cx="110" cy="170" r="5" fill="#38bdf8" />
                <circle cx="150" cy="185" r="5" fill="#38bdf8" />
                <circle cx="190" cy="165" r="5" fill="#38bdf8" />
                <circle cx="230" cy="180" r="5" fill="#38bdf8" />
                <circle cx="280" cy="195" r="5" fill="#38bdf8" />
                <circle cx="320" cy="175" r="5" fill="#38bdf8" />
                <circle cx="360" cy="185" r="5" fill="#38bdf8" />

                {/* Arrow against gradient */}
                <path d="M 200,55 L 200,145" stroke="#a855f7" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4 2" />
              </svg>
            </div>
            <div className="md:col-span-5 space-y-2 text-xs">
              <h5 className="font-bold text-sm text-indigo-300">Active Transport Mark Points:</h5>
              <p className="text-slate-300">
                1. Particles move <strong className="text-indigo-300">AGAINST the concentration gradient</strong> (from low to high concentration).
              </p>
              <p className="text-slate-300">
                2. Requires <strong className="text-amber-400">energy (ATP) from cellular respiration</strong>.
              </p>
              <p className="text-slate-300">
                3. Carried out by specialized <strong className="text-sky-300">carrier proteins</strong> embedded in the cell membrane.
              </p>
              <p className="text-slate-400 pt-1">
                Root hair cells have high numbers of mitochondria to supply ATP for active uptake of nitrate and magnesium ions from dilute soil.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
