import React, { useState } from 'react';

export const HumanNutritionDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'digestive_tract' | 'villus'>('digestive_tract');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-rose-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            Alimentary Canal & Villus Architecture
          </h4>
          <p className="text-xs text-slate-400">Digestive organ pathway and microscopic villus absorption adaptations</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('digestive_tract')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'digestive_tract' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Alimentary Canal
          </button>
          <button
            onClick={() => setActiveTab('villus')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'villus' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Villus Micro-Anatomy
          </button>
        </div>
      </div>

      {activeTab === 'digestive_tract' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex justify-center">
            <svg viewBox="0 0 320 380" className="w-full max-w-xs h-auto select-none">
              {/* Mouth & Salivary Glands */}
              <circle cx="150" cy="30" r="14" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
              <text x="175" y="34" fill="#fca5a5" fontSize="11" fontWeight="bold">Mouth (Amylase, pH 7)</text>

              {/* Oesophagus */}
              <line x1="150" y1="44" x2="150" y2="105" stroke="#f43f5e" strokeWidth="8" strokeLinecap="round" />
              <text x="170" y="80" fill="#fda4af" fontSize="10">Oesophagus (Peristalsis)</text>

              {/* Stomach */}
              <path d="M 150,105 C 130,110 110,140 145,160 C 180,150 170,120 150,105 Z" fill="#b91c1c" stroke="#f87171" strokeWidth="2.5" />
              <text x="75" y="135" fill="#fca5a5" fontSize="11" fontWeight="bold">Stomach</text>
              <text x="65" y="148" fill="#fda4af" fontSize="9">(HCl pH 2 + Pepsin)</text>

              {/* Liver & Gallbladder */}
              <path d="M 195,115 C 230,115 240,145 200,155 Z" fill="#854d0e" stroke="#ca8a04" strokeWidth="2" />
              <text x="245" y="130" fill="#fde047" fontSize="10" fontWeight="bold">Liver (Makes Bile)</text>
              <circle cx="195" cy="148" r="6" fill="#15803d" />
              <text x="210" y="152" fill="#86efac" fontSize="9">Gallbladder (Stores Bile)</text>

              {/* Pancreas */}
              <ellipse cx="160" cy="168" rx="26" ry="8" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="195" y="172" fill="#fde68a" fontSize="10">Pancreas (Enzymes + NaHCO₃)</text>

              {/* Small Intestine */}
              <rect x="120" y="185" width="70" height="75" rx="20" fill="#701a75" stroke="#c026d3" strokeWidth="2.5" />
              <text x="50" y="215" fill="#f5d0fe" fontSize="11" fontWeight="bold">Small Intestine</text>
              <text x="35" y="228" fill="#e879f9" fontSize="9">(Duodenum & Ileum Villi)</text>

              {/* Large Intestine (Colon) */}
              <rect x="95" y="175" width="120" height="110" rx="28" fill="none" stroke="#ea580c" strokeWidth="5" />
              <text x="225" y="235" fill="#fdba74" fontSize="10" fontWeight="bold">Colon</text>
              <text x="225" y="248" fill="#fed7aa" fontSize="9">(Absorbs Water)</text>

              {/* Rectum & Anus */}
              <line x1="155" y1="285" x2="155" y2="330" stroke="#c2410c" strokeWidth="7" strokeLinecap="round" />
              <text x="170" y="315" fill="#fdba74" fontSize="10">Rectum (Stores faeces)</text>
              <circle cx="155" cy="335" r="5" fill="#ea580c" />
              <text x="170" y="340" fill="#fdba74" fontSize="10">Anus (Egestion)</text>
            </svg>
          </div>

          <div className="md:col-span-6 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-rose-300">Tract Highlights for Cambridge 5090:</h5>
            <div className="space-y-1.5 text-slate-300">
              <p><strong className="text-amber-400">Bile action:</strong> Produced by liver, stored in gallbladder, alkaline (neutralises acidic stomach chyme to pH ~8), mechanically emulsifies fats into droplets to vastly increase surface area for lipase. Bile is NOT an enzyme!</p>
              <p><strong className="text-rose-400">Peristalsis:</strong> Circular muscles contract behind food while longitudinal muscles relax, creating rhythmic involuntary waves moving bolus along oesophagus and intestines.</p>
              <p><strong className="text-emerald-400">Absorption vs Assimilation:</strong> Absorption is moving soluble digested molecules into bloodstream/lymph; assimilation is incorporating them into cell tissues.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'villus' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 380 280" className="w-full max-w-sm h-auto select-none">
              {/* Outer Villus Epithelium */}
              <path
                d="M 120,260 L 120,90 C 120,40 240,40 240,90 L 240,260 Z"
                fill="#1e293b"
                stroke="#f43f5e"
                strokeWidth="4"
              />
              {/* Microvilli fringe representation */}
              <path
                d="M 115,260 L 115,90 C 115,35 245,35 245,90 L 245,260"
                fill="none"
                stroke="#fda4af"
                strokeWidth="2"
                strokeDasharray="2 3"
              />
              <text x="180" y="25" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Microvilli Brush Border (Massive Surface Area)</text>

              {/* Central Lacteal */}
              <path
                d="M 165,260 L 165,110 C 165,95 195,95 195,110 L 195,260 Z"
                fill="#155e75"
                stroke="#22d3ee"
                strokeWidth="2"
              />
              <text x="180" y="150" textAnchor="middle" fill="#cffafe" fontSize="9" fontWeight="bold" transform="rotate(-90 180 150)">
                Lacteal (Absorbs Fats)
              </text>

              {/* Blood Capillary Network */}
              {/* Arteriole side (red) */}
              <path d="M 140,260 L 140,110 C 140,90 160,85 180,85" fill="none" stroke="#ef4444" strokeWidth="2.5" />
              {/* Venule side (blue) */}
              <path d="M 180,85 C 200,85 220,90 220,110 L 220,260" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              {/* Capillary loops */}
              <line x1="140" y1="130" x2="165" y2="130" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="195" y1="130" x2="220" y2="130" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="140" y1="180" x2="165" y2="180" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="195" y1="180" x2="220" y2="180" stroke="#3b82f6" strokeWidth="1.5" />

              {/* Epithelium label */}
              <text x="70" y="100" fill="#f43f5e" fontSize="9" fontWeight="bold">Single-Cell Thin</text>
              <text x="70" y="112" fill="#fda4af" fontSize="8">Epithelium</text>
              <line x1="105" y1="105" x2="120" y2="105" stroke="#f43f5e" strokeWidth="1.5" />

              {/* Capillary label */}
              <text x="250" y="145" fill="#60a5fa" fontSize="9" fontWeight="bold">Capillaries</text>
              <text x="250" y="157" fill="#93c5fd" fontSize="8">Glucose & Amino acids</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-rose-300">Villus 4 Mark-Scheme Adaptations:</h5>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
              <li><strong className="text-rose-400">Huge Surface Area:</strong> Millions of villi lined with microvilli increase surface area thousands of times for fast diffusion and active transport.</li>
              <li><strong className="text-emerald-400">Single-Cell Thin Epithelium:</strong> Epithelial wall is only ONE cell thick, providing an extremely short diffusion distance into capillaries.</li>
              <li><strong className="text-sky-400">Dense Capillary Network:</strong> Continuous rapid blood flow carries glucose and amino acids away directly to the liver via the hepatic portal vein, maintaining steep concentration gradients.</li>
              <li><strong className="text-cyan-400">Central Lacteal:</strong> Blind-ended lymphatic vessel absorbs fatty acids and glycerol, transporting them via lymph to the bloodstream.</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export const GasExchangeDiagram: React.FC = () => {
  const [mode, setMode] = useState<'ventilation' | 'alveolus'>('alveolus');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Gas Exchange & Ventilation Mechanics
          </h4>
          <p className="text-xs text-slate-400">Alveolus diffusion across single-cell barrier and inspiration vs expiration mechanics</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setMode('alveolus')}
            className={`px-3 py-1.5 rounded-md transition-all ${mode === 'alveolus' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Alveolus & Capillary
          </button>
          <button
            onClick={() => setMode('ventilation')}
            className={`px-3 py-1.5 rounded-md transition-all ${mode === 'ventilation' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Inspiration vs Expiration
          </button>
        </div>
      </div>

      {mode === 'alveolus' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 280" className="w-full max-w-sm h-auto select-none">
              {/* Alveolar air sac */}
              <circle cx="160" cy="140" r="90" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <text x="160" y="110" textAnchor="middle" fill="#bae6fd" fontSize="12" fontWeight="bold">Alveolar Air Space</text>
              <text x="160" y="126" textAnchor="middle" fill="#38bdf8" fontSize="10">High O₂ (21%) | Low CO₂ (0.04%)</text>

              {/* Capillary wrapping around alveolus */}
              <path
                d="M 40,240 C 90,260 230,260 280,180 C 310,120 280,40 180,30"
                fill="none"
                stroke="#dc2626"
                strokeWidth="28"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M 40,240 C 90,260 230,260 280,180 C 310,120 280,40 180,30"
                fill="none"
                stroke="#1e293b"
                strokeWidth="20"
                strokeLinecap="round"
              />

              {/* Red blood cells in capillary */}
              <circle cx="70" cy="235" r="7" fill="#dc2626" />
              <circle cx="140" cy="245" r="7" fill="#dc2626" />
              <circle cx="210" cy="235" r="7" fill="#dc2626" />
              <circle cx="270" cy="180" r="7" fill="#dc2626" />
              <circle cx="280" cy="110" r="7" fill="#dc2626" />
              <circle cx="220" cy="45" r="7" fill="#dc2626" />

              {/* O2 Diffusion Arrow */}
              <path d="M 180,150 L 220,195" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="3 2" />
              <text x="210" y="170" fill="#4ade80" fontSize="10" fontWeight="bold">O₂ Diffuses IN</text>

              {/* CO2 Diffusion Arrow */}
              <path d="M 235,175 L 195,130" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="3 2" />
              <text x="145" y="180" fill="#fde68a" fontSize="10" fontWeight="bold">CO₂ Diffuses OUT</text>

              <text x="40" y="275" fill="#f87171" fontSize="9">From Pulmonary Artery</text>
              <text x="220" y="25" fill="#f87171" fontSize="9">To Pulmonary Vein</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-sky-300">Alveolar Adaptations Checklist:</h5>
            <p className="text-slate-300">1. <strong className="text-sky-300">Huge surface area:</strong> Hundreds of millions of spherical alveoli provide ~100 m² for gas exchange.</p>
            <p className="text-slate-300">2. <strong className="text-emerald-400">Short diffusion distance:</strong> Alveolus wall is 1 cell thick, capillary wall is 1 cell thick (total distance = 2 squamous epithelial cells!).</p>
            <p className="text-slate-300">3. <strong className="text-rose-400">Dense capillary network:</strong> Continuous blood flow maintains steep concentration gradients for rapid O₂ and CO₂ diffusion.</p>
            <p className="text-slate-300">4. <strong className="text-amber-400">Moist lining:</strong> Allows respiratory gases to dissolve before diffusing across cell membranes.</p>
          </div>
        </div>
      )}

      {mode === 'ventilation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-800/70 p-4 rounded-xl border border-sky-500/30">
            <h5 className="text-sm font-bold text-sky-300 mb-2">Inspiration (Breathing In) — ACTIVE</h5>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
              <li><strong className="text-sky-300">External intercostal muscles contract</strong> (internal relax).</li>
              <li>Ribs move <strong className="text-sky-300">UP and OUT</strong>.</li>
              <li><strong className="text-sky-300">Diaphragm contracts and FLATTENS</strong> downwards.</li>
              <li>Volume of the thorax (chest cavity) <strong className="text-emerald-400">INCREASES</strong>.</li>
              <li>Pressure inside thorax drops <strong className="text-emerald-400">BELOW atmospheric pressure</strong>.</li>
              <li>Air is forced/sucked into the lungs down the pressure gradient.</li>
            </ol>
          </div>

          <div className="bg-slate-800/70 p-4 rounded-xl border border-indigo-500/30">
            <h5 className="text-sm font-bold text-indigo-300 mb-2">Expiration (Breathing Out) — PASSIVE</h5>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
              <li><strong className="text-indigo-300">External intercostal muscles relax</strong> (internal contract only during forced expiration).</li>
              <li>Ribs move <strong className="text-indigo-300">DOWN and IN</strong> under gravity.</li>
              <li><strong className="text-indigo-300">Diaphragm relaxes and DOMES</strong> upwards.</li>
              <li>Volume of the thorax <strong className="text-rose-400">DECREASES</strong>.</li>
              <li>Pressure inside thorax rises <strong className="text-rose-400">ABOVE atmospheric pressure</strong>.</li>
              <li>Air is expelled outwards into the atmosphere.</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export const RespirationDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-amber-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Respiration Pathways & Oxygen Debt Recovery
        </h4>
        <p className="text-xs text-slate-400">Comparing aerobic vs anaerobic yields, lactic acid accumulation and post-exercise oxygen debt repayment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Oxygen debt curve */}
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 400 230" className="w-full max-w-sm h-auto select-none">
            {/* Axes */}
            <line x1="40" y1="190" x2="380" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="190" x2="40" y2="25" stroke="#64748b" strokeWidth="2" />
            <text x="210" y="215" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Time (Minutes)</text>
            <text x="15" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" transform="rotate(-90 15 105)">Oxygen Consumption</text>

            {/* Exercise phase block */}
            <rect x="80" y="30" width="120" height="160" fill="#f59e0b" fillOpacity="0.08" />
            <text x="140" y="45" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Exercise Period</text>

            {/* Oxygen Deficit / Debt Area */}
            <path
              d="M 80,170 Q 110,60 140,60 L 200,60 L 200,170 Z"
              fill="#ef4444"
              fillOpacity="0.25"
            />
            <text x="145" y="110" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Oxygen Deficit</text>
            <text x="145" y="122" textAnchor="middle" fill="#fda4af" fontSize="8">(Lactic acid accumulates)</text>

            {/* Oxygen Debt Repaid Area (Recovery) */}
            <path
              d="M 200,60 Q 250,65 300,140 T 360,170 L 200,170 Z"
              fill="#38bdf8"
              fillOpacity="0.25"
            />
            <text x="270" y="110" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">Oxygen Debt Repaid</text>
            <text x="270" y="122" textAnchor="middle" fill="#bae6fd" fontSize="8">(Breathing elevated; liver breaks down lactic acid)</text>

            {/* Baseline resting */}
            <line x1="40" y1="170" x2="380" y2="170" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="70" y="185" fill="#64748b" fontSize="8">Resting rate</text>
          </svg>
        </div>

        <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
          <h5 className="font-bold text-sm text-amber-300">Exam Mark-Scheme Rules:</h5>
          <p className="text-slate-300">
            • <strong className="text-emerald-400">Aerobic:</strong> Complete glucose breakdown in mitochondria with oxygen. Produces CO₂ + H₂O + maximum ATP.
          </p>
          <p className="text-slate-300">
            • <strong className="text-rose-400">Anaerobic in Humans:</strong> Incomplete breakdown without oxygen in cytoplasm: Glucose → Lactic acid + small ATP.
          </p>
          <p className="text-slate-300">
            • <strong className="text-sky-300">Oxygen Debt Repayment:</strong> After exercise, heart rate and ventilation remain elevated so blood delivers surplus oxygen to the liver. The liver oxidises lactic acid into glucose or CO₂ and water.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CirculationDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'heart' | 'vessels'>('heart');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-rose-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            Heart Anatomy & Blood Vessel Histology
          </h4>
          <p className="text-xs text-slate-400">Four chambers, double circulation route, thick left ventricle, and vessel cross-sections</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('heart')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'heart' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            4-Chambered Heart
          </button>
          <button
            onClick={() => setActiveTab('vessels')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'vessels' ? 'bg-rose-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Artery vs Vein vs Capillary
          </button>
        </div>
      </div>

      {activeTab === 'heart' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 300" className="w-full max-w-sm h-auto select-none">
              {/* Outer Heart Silhouette */}
              <path
                d="M 120,70 C 50,70 50,220 210,285 C 370,220 370,70 300,70 C 260,70 230,100 210,120 C 190,100 160,70 120,70 Z"
                fill="#881337"
                stroke="#f43f5e"
                strokeWidth="4"
              />

              {/* Central Septum */}
              <rect x="200" y="115" width="20" height="150" rx="6" fill="#be123c" stroke="#fda4af" strokeWidth="1.5" />
              <text x="210" y="270" textAnchor="middle" fill="#ffe4e6" fontSize="9" fontWeight="bold">Septum</text>

              {/* Right Atrium (Deoxygenated - Blue) */}
              <rect x="100" y="90" width="85" height="60" rx="10" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
              <text x="142" y="120" textAnchor="middle" fill="#bfdbfe" fontSize="10" fontWeight="bold">Right Atrium</text>
              <text x="142" y="134" textAnchor="middle" fill="#93c5fd" fontSize="8">(From Vena Cava)</text>

              {/* Right Ventricle (Deoxygenated - Blue) */}
              <path d="M 100,165 L 185,165 L 185,240 L 130,225 Z" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
              <text x="142" y="195" textAnchor="middle" fill="#bfdbfe" fontSize="10" fontWeight="bold">Right Ventricle</text>
              <text x="142" y="208" textAnchor="middle" fill="#93c5fd" fontSize="8">(To Pulm. Artery)</text>

              {/* Left Atrium (Oxygenated - Red) */}
              <rect x="235" y="90" width="85" height="60" rx="10" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <text x="277" y="120" textAnchor="middle" fill="#fecaca" fontSize="10" fontWeight="bold">Left Atrium</text>
              <text x="277" y="134" textAnchor="middle" fill="#fca5a5" fontSize="8">(From Pulm. Veins)</text>

              {/* Left Ventricle (Oxygenated - Thick Wall Red) */}
              <path d="M 235,165 L 320,165 L 290,225 L 235,240 Z" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <text x="277" y="195" textAnchor="middle" fill="#fecaca" fontSize="10" fontWeight="bold">Left Ventricle</text>
              <text x="277" y="208" textAnchor="middle" fill="#fca5a5" fontSize="8">(Thickest wall; To Aorta)</text>

              {/* Valves representation */}
              <line x1="115" y1="155" x2="170" y2="155" stroke="#fef08a" strokeWidth="3" strokeDasharray="4 2" />
              <line x1="250" y1="155" x2="305" y2="155" stroke="#fef08a" strokeWidth="3" strokeDasharray="4 2" />
              <text x="70" y="158" fill="#fef08a" fontSize="8">Tricuspid</text>
              <text x="330" y="158" fill="#fef08a" fontSize="8">Bicuspid</text>

              {/* Aorta Arch */}
              <path d="M 235,80 C 235,30 180,20 170,10" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
              <text x="215" y="35" fill="#fca5a5" fontSize="10" fontWeight="bold">Aorta (to body)</text>

              {/* Vena Cava */}
              <line x1="90" y1="10" x2="90" y2="90" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
              <text x="50" y="55" fill="#93c5fd" fontSize="9" fontWeight="bold">Vena Cava</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-rose-300">Key Heart Marking Points:</h5>
            <p className="text-slate-300">
              • <strong className="text-rose-400">Left Ventricle Muscle:</strong> Has a substantially thicker muscular wall than the right ventricle because it must generate high hydrostatic pressure to pump blood all the way around the entire systemic body, whereas the right ventricle only pumps short-distance to the lungs.
            </p>
            <p className="text-slate-300">
              • <strong className="text-indigo-300">Septum:</strong> Completely separates oxygenated blood (left) from deoxygenated blood (right), preventing mixing and maximising oxygen delivery.
            </p>
            <p className="text-slate-300">
              • <strong className="text-amber-400">Valves:</strong> Atrioventricular and semilunar valves prevent backflow of blood, ensuring strict unidirectional circulation.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'vessels' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Artery */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-red-500/40 text-center">
            <h5 className="text-sm font-bold text-red-400 mb-2">Artery</h5>
            <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto my-1">
              <circle cx="60" cy="60" r="50" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <circle cx="60" cy="60" r="30" fill="#7f1d1d" stroke="#f87171" strokeWidth="2" />
              <circle cx="60" cy="60" r="14" fill="#0f172a" />
              <text x="60" y="64" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Lumen</text>
            </svg>
            <ul className="text-xs text-slate-300 text-left space-y-1 mt-2">
              <li>• Thick muscular & elastic wall.</li>
              <li>• Small / narrow lumen.</li>
              <li>• Withstands high pulsating pressure.</li>
              <li>• No valves (except exit of heart).</li>
            </ul>
          </div>

          {/* Vein */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-blue-500/40 text-center">
            <h5 className="text-sm font-bold text-blue-400 mb-2">Vein</h5>
            <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto my-1">
              <circle cx="60" cy="60" r="50" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="60" cy="60" r="40" fill="#172554" stroke="#60a5fa" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="32" fill="#0f172a" />
              {/* Pocket valve flaps */}
              <path d="M 45,60 C 52,50 68,50 75,60" fill="none" stroke="#93c5fd" strokeWidth="2" />
              <text x="60" y="75" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Wide Lumen</text>
            </svg>
            <ul className="text-xs text-slate-300 text-left space-y-1 mt-2">
              <li>• Thin muscular wall.</li>
              <li>• Large / wide lumen (low resistance).</li>
              <li>• Low blood pressure.</li>
              <li>• Semilunar pocket valves prevent backflow.</li>
            </ul>
          </div>

          {/* Capillary */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-purple-500/40 text-center">
            <h5 className="text-sm font-bold text-purple-400 mb-2">Capillary</h5>
            <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto my-1">
              <circle cx="60" cy="60" r="28" fill="#581c87" stroke="#a855f7" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="22" fill="#0f172a" />
              {/* Single cell nucleus in wall */}
              <ellipse cx="60" cy="34" rx="6" ry="3" fill="#c084fc" />
              {/* Single RBC inside */}
              <circle cx="60" cy="60" r="10" fill="#dc2626" />
              <text x="60" y="63" textAnchor="middle" fill="#ffffff" fontSize="7">RBC</text>
            </svg>
            <ul className="text-xs text-slate-300 text-left space-y-1 mt-2">
              <li>• Wall is ONE endothelial cell thick!</li>
              <li>• Microscopic lumen (~7 µm).</li>
              <li>• Allows rapid exchange of gases & nutrients with surrounding tissue fluid.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
