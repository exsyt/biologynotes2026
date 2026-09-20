import React, { useState } from 'react';
import { motion } from 'motion/react';

export const CellDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'animal' | 'plant' | 'bacterium' | 'specialised'>('animal');
  const [activeOrganelle, setActiveOrganelle] = useState<string | null>(null);

  const organelleDetails: Record<string, string> = {
    nucleus: 'Nucleus: Contains genetic material (DNA) organized into linear chromosomes; controls cell activities and protein synthesis.',
    cytoplasm: 'Cytoplasm: Jelly-like fluid where most metabolic chemical reactions take place; contains dissolved enzymes and nutrients.',
    membrane: 'Cell Membrane: Partially permeable barrier controlling the movement of substances into and out of the cell.',
    mitochondria: 'Mitochondria: Site of aerobic respiration where glucose and oxygen react to release ATP energy for the cell.',
    ribosomes: 'Ribosomes: Tiny complexes (80S in eukaryotes) responsible for translating mRNA into proteins (protein synthesis).',
    wall: 'Cell Wall: Made of cellulose in plants (peptidoglycan in bacteria); provides rigid tensile support and prevents osmotic bursting.',
    chloroplast: 'Chloroplast: Contains green pigment chlorophyll; traps sunlight energy to drive photosynthesis, producing glucose.',
    vacuole: 'Permanent Vacuole: Large central sac containing cell sap (sugars, mineral salts, water); maintains turgidity against cell wall.',
    nucleoid: 'Circular DNA (Nucleoid): Single circular strand of chromosomal DNA floating freely in cytoplasm; no nuclear membrane.',
    plasmid: 'Plasmids: Small circular rings of accessory DNA carrying extra genes (e.g. antibiotic resistance); can be transferred.'
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Interactive Microscopic Cell Structures
          </h4>
          <p className="text-xs text-slate-400">Click tabs and hover over organelles for Cambridge 5090 syllabus functions</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('animal')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'animal' ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm' : 'text-slate-300 hover:text-white'}`}
          >
            Animal Cell
          </button>
          <button
            onClick={() => setActiveTab('plant')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'plant' ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm' : 'text-slate-300 hover:text-white'}`}
          >
            Plant Cell
          </button>
          <button
            onClick={() => setActiveTab('bacterium')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'bacterium' ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm' : 'text-slate-300 hover:text-white'}`}
          >
            Bacterial Cell
          </button>
          <button
            onClick={() => setActiveTab('specialised')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'specialised' ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm' : 'text-slate-300 hover:text-white'}`}
          >
            Specialised Cells
          </button>
        </div>
      </div>

      {activeTab === 'animal' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 450 320" className="w-full max-w-md h-auto select-none">
              <defs>
                <radialGradient id="cytoGradAnimal" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                <linearGradient id="nucGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>

              {/* Cell membrane and cytoplasm */}
              <path
                d="M 60,160 C 50,80 120,40 225,45 C 330,50 400,90 395,180 C 390,260 320,290 220,285 C 110,280 70,240 60,160 Z"
                fill="url(#cytoGradAnimal)"
                stroke="#38bdf8"
                strokeWidth="4"
                className="cursor-pointer transition-colors"
                onMouseEnter={() => setActiveOrganelle('membrane')}
              />

              {/* Nucleus */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('nucleus')}>
                <circle cx="200" cy="160" r="48" fill="url(#nucGrad)" stroke="#a5b4fc" strokeWidth="2.5" opacity="0.9" />
                <circle cx="195" cy="155" r="18" fill="#312e81" stroke="#c7d2fe" strokeWidth="1.5" />
                <text x="200" y="164" textAnchor="middle" fill="#e0e7ff" fontSize="11" fontWeight="600">Nucleus</text>
              </g>

              {/* Mitochondria */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('mitochondria')}>
                <ellipse cx="110" cy="110" rx="26" ry="14" fill="#ea580c" transform="rotate(-25 110 110)" stroke="#fdba74" strokeWidth="1.5" />
                <path d="M 94,104 Q 110,110 126,116" stroke="#fed7aa" strokeWidth="1.5" fill="none" />
                <text x="110" y="140" textAnchor="middle" fill="#fdba74" fontSize="10">Mitochondria</text>

                <ellipse cx="330" cy="210" rx="28" ry="15" fill="#ea580c" transform="rotate(35 330 210)" stroke="#fdba74" strokeWidth="1.5" />
                <path d="M 314,218 Q 330,210 346,202" stroke="#fed7aa" strokeWidth="1.5" fill="none" />
              </g>

              {/* Ribosomes */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('ribosomes')}>
                <circle cx="120" cy="220" r="3.5" fill="#38bdf8" />
                <circle cx="135" cy="210" r="3.5" fill="#38bdf8" />
                <circle cx="145" cy="230" r="3.5" fill="#38bdf8" />
                <circle cx="280" cy="90" r="3.5" fill="#38bdf8" />
                <circle cx="295" cy="105" r="3.5" fill="#38bdf8" />
                <circle cx="310" cy="85" r="3.5" fill="#38bdf8" />
                <text x="315" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="10">Ribosomes</text>
              </g>

              {/* Cytoplasm label */}
              <text x="240" y="250" fill="#94a3b8" fontSize="11" onMouseEnter={() => setActiveOrganelle('cytoplasm')} className="cursor-pointer">
                Cytoplasm (site of reactions)
              </text>
              <text x="220" y="32" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="600">
                Cell Membrane (partially permeable)
              </text>
            </svg>
          </div>
          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <h5 className="text-sm font-semibold text-emerald-400 mb-2">Animal Cell Organelle Index</h5>
            <div className="space-y-2 text-xs">
              {['nucleus', 'cytoplasm', 'membrane', 'mitochondria', 'ribosomes'].map((key) => (
                <div
                  key={key}
                  onMouseEnter={() => setActiveOrganelle(key)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors ${activeOrganelle === key ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200' : 'bg-slate-900/50 hover:bg-slate-700/50 text-slate-300'}`}
                >
                  <span className="font-semibold capitalize">{key}:</span> {organelleDetails[key]}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'plant' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 450 320" className="w-full max-w-md h-auto select-none">
              {/* Outer Cell Wall */}
              <rect
                x="30"
                y="30"
                width="390"
                height="260"
                rx="20"
                fill="#064e3b"
                stroke="#10b981"
                strokeWidth="6"
                className="cursor-pointer"
                onMouseEnter={() => setActiveOrganelle('wall')}
              />
              {/* Inner Cell Membrane */}
              <rect
                x="40"
                y="40"
                width="370"
                height="240"
                rx="14"
                fill="#0f172a"
                stroke="#34d399"
                strokeWidth="2.5"
                className="cursor-pointer"
                onMouseEnter={() => setActiveOrganelle('membrane')}
              />

              {/* Large Central Vacuole */}
              <ellipse
                cx="245"
                cy="160"
                rx="110"
                ry="75"
                fill="#0284c7"
                fillOpacity="0.25"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 3"
                className="cursor-pointer"
                onMouseEnter={() => setActiveOrganelle('vacuole')}
              />
              <text x="245" y="165" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="600">
                Permanent Vacuole (Cell Sap)
              </text>

              {/* Peripheral Nucleus */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('nucleus')}>
                <circle cx="95" cy="150" r="36" fill="#4f46e5" stroke="#a5b4fc" strokeWidth="2" />
                <circle cx="95" cy="148" r="14" fill="#312e81" stroke="#c7d2fe" />
                <text x="95" y="153" textAnchor="middle" fill="#e0e7ff" fontSize="10" fontWeight="600">Nucleus</text>
              </g>

              {/* Chloroplasts */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('chloroplast')}>
                <ellipse cx="140" cy="75" rx="24" ry="14" fill="#15803d" stroke="#86efac" strokeWidth="1.5" />
                <line x1="126" y1="75" x2="154" y2="75" stroke="#bbf7d0" strokeWidth="1.5" />
                <text x="140" y="105" textAnchor="middle" fill="#86efac" fontSize="10">Chloroplast</text>

                <ellipse cx="340" cy="80" rx="24" ry="14" fill="#15803d" stroke="#86efac" strokeWidth="1.5" />
                <line x1="326" y1="80" x2="354" y2="80" stroke="#bbf7d0" strokeWidth="1.5" />

                <ellipse cx="150" cy="245" rx="24" ry="14" fill="#15803d" stroke="#86efac" strokeWidth="1.5" />
                <line x1="136" y1="245" x2="164" y2="245" stroke="#bbf7d0" strokeWidth="1.5" />
              </g>

              {/* Mitochondria */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('mitochondria')}>
                <ellipse cx="345" cy="235" rx="20" ry="11" fill="#ea580c" stroke="#fdba74" strokeWidth="1.5" />
                <text x="345" y="260" textAnchor="middle" fill="#fdba74" fontSize="9">Mitochondrion</text>
              </g>

              {/* Labels */}
              <text x="225" y="24" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="700">
                Cellulose Cell Wall (rigid support)
              </text>
            </svg>
          </div>
          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <h5 className="text-sm font-semibold text-emerald-400 mb-2">Plant-Specific Structures</h5>
            <div className="space-y-2 text-xs">
              {['wall', 'chloroplast', 'vacuole', 'nucleus', 'mitochondria'].map((key) => (
                <div
                  key={key}
                  onMouseEnter={() => setActiveOrganelle(key)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors ${activeOrganelle === key ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200' : 'bg-slate-900/50 hover:bg-slate-700/50 text-slate-300'}`}
                >
                  <span className="font-semibold capitalize">{key}:</span> {organelleDetails[key]}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bacterium' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 450 300" className="w-full max-w-md h-auto select-none">
              {/* Capsule / Cell wall */}
              <rect x="70" y="80" width="280" height="140" rx="70" fill="#1e1b4b" stroke="#6366f1" strokeWidth="6" />
              <rect x="76" y="86" width="268" height="128" rx="64" fill="#0f172a" stroke="#a855f7" strokeWidth="2.5" />

              {/* Circular DNA nucleoid */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('nucleoid')}>
                <path
                  d="M 130,150 Q 150,110 180,140 T 220,130 T 260,160 T 210,180 T 160,165 Z"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <text x="200" y="155" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="700">
                  Circular DNA (No nucleus!)
                </text>
              </g>

              {/* Plasmids */}
              <g className="cursor-pointer" onMouseEnter={() => setActiveOrganelle('plasmid')}>
                <circle cx="290" cy="120" r="14" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                <circle cx="120" cy="180" r="10" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                <text x="290" y="148" textAnchor="middle" fill="#f472b6" fontSize="10">Plasmids</text>
              </g>

              {/* Bacterial Flagellum */}
              <path d="M 350,150 Q 390,120 410,160 T 440,140" fill="none" stroke="#6366f1" strokeWidth="3" />
              <text x="400" y="180" fill="#818cf8" fontSize="10">Flagellum</text>

              {/* Ribosomes */}
              <circle cx="140" cy="120" r="3" fill="#38bdf8" />
              <circle cx="160" cy="110" r="3" fill="#38bdf8" />
              <circle cx="270" cy="170" r="3" fill="#38bdf8" />
              <circle cx="250" cy="185" r="3" fill="#38bdf8" />
              <text x="260" y="205" fill="#38bdf8" fontSize="9">70S Ribosomes</text>

              <text x="210" y="60" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="600">
                Peptidoglycan Cell Wall + Membrane
              </text>
            </svg>
          </div>
          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <h5 className="text-sm font-semibold text-purple-400 mb-2">Bacterial (Prokaryote) Key Points</h5>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/50 text-red-200">
                <span className="font-bold">CRUCIAL EXAM RULE:</span> Bacteria NEVER possess a nucleus, mitochondria, or chloroplasts. DNA floats freely in the cytoplasm!
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-700/60 text-slate-300">
                <span className="font-semibold text-amber-400">Circular DNA:</span> Controls cellular activities and encodes primary metabolic proteins.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-700/60 text-slate-300">
                <span className="font-semibold text-pink-400">Plasmids:</span> Accessory rings of DNA carrying resistance genes; utilized in genetic engineering.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'specialised' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          {/* Red Blood Cell */}
          <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/70 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 80" className="w-20 h-16 my-2">
              <ellipse cx="50" cy="40" rx="38" ry="24" fill="#dc2626" stroke="#f87171" strokeWidth="2.5" />
              <ellipse cx="50" cy="40" rx="20" ry="12" fill="#991b1b" />
            </svg>
            <h6 className="text-xs font-bold text-rose-400 mb-1">Red Blood Cell</h6>
            <p className="text-[11px] text-slate-300 leading-snug">
              • Biconcave disc (↑ surface area:vol ratio)<br/>
              • No nucleus (more room for haemoglobin)<br/>
              • Flexible membrane to squeeze through narrow capillaries.
            </p>
          </div>

          {/* Root Hair Cell */}
          <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/70 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 80" className="w-20 h-16 my-2">
              <path d="M 20,20 L 20,60 L 50,60 L 95,45 L 95,35 L 50,20 Z" fill="#065f46" stroke="#34d399" strokeWidth="2" />
              <ellipse cx="35" cy="40" rx="10" ry="8" fill="#047857" />
            </svg>
            <h6 className="text-xs font-bold text-emerald-400 mb-1">Root Hair Cell</h6>
            <p className="text-[11px] text-slate-300 leading-snug">
              • Long cytoplasmic hair extension for massive surface area<br/>
              • Thin wall for short diffusion path<br/>
              • High mitochondria for active mineral transport.
            </p>
          </div>

          {/* Palisade Cell */}
          <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/70 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 80" className="w-20 h-16 my-2">
              <rect x="30" y="10" width="40" height="60" rx="6" fill="#14532d" stroke="#4ade80" strokeWidth="2" />
              <circle cx="40" cy="20" r="3" fill="#86efac" />
              <circle cx="55" cy="20" r="3" fill="#86efac" />
              <circle cx="45" cy="35" r="3" fill="#86efac" />
              <circle cx="58" cy="45" r="3" fill="#86efac" />
              <circle cx="40" cy="55" r="3" fill="#86efac" />
            </svg>
            <h6 className="text-xs font-bold text-green-400 mb-1">Palisade Cell</h6>
            <p className="text-[11px] text-slate-300 leading-snug">
              • Packed with numerous chloroplasts<br/>
              • Located directly below transparent upper epidermis<br/>
              • Columnar vertical arrangement captures max light.
            </p>
          </div>

          {/* Ciliated Cell */}
          <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/70 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 80" className="w-20 h-16 my-2">
              <rect x="25" y="30" width="50" height="40" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
              <line x1="30" y1="30" x2="28" y2="15" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="40" y1="30" x2="39" y2="14" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="50" y1="30" x2="52" y2="15" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="60" y1="30" x2="63" y2="14" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="70" y1="30" x2="74" y2="15" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h6 className="text-xs font-bold text-cyan-400 mb-1">Ciliated Cell</h6>
            <p className="text-[11px] text-slate-300 leading-snug">
              • Hair-like cilia beat in coordinated waves<br/>
              • Moves mucus containing trapped dust & pathogens upwards away from lungs toward throat.
            </p>
          </div>

          {/* Sperm Cell */}
          <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/70 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 80" className="w-20 h-16 my-2">
              <ellipse cx="28" cy="40" rx="14" ry="10" fill="#6d28d9" stroke="#a78bfa" strokeWidth="2" />
              <path d="M 16,40 Q 20,32 25,32" stroke="#e9d5ff" strokeWidth="2" fill="none" />
              <rect x="42" y="36" width="10" height="8" rx="2" fill="#c026d3" />
              <path d="M 52,40 Q 70,25 80,48 T 98,38" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
            </svg>
            <h6 className="text-xs font-bold text-purple-400 mb-1">Sperm Cell</h6>
            <p className="text-[11px] text-slate-300 leading-snug">
              • Acrosome tip stores digestive enzymes to penetrate ovum<br/>
              • Midpiece packed with mitochondria for ATP<br/>
              • Long tail (flagellum) for motility.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
