import React, { useState } from 'react';

export const ImmunityDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-purple-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          Primary vs Secondary Immune Response
        </h4>
        <p className="text-xs text-slate-400">Antibody concentration kinetics upon initial exposure/vaccine vs memory cell reactivation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 420 230" className="w-full max-w-sm h-auto select-none">
            {/* Axes */}
            <line x1="45" y1="190" x2="390" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="45" y1="190" x2="45" y2="25" stroke="#64748b" strokeWidth="2" />
            <text x="220" y="215" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Time (Weeks)</text>
            <text x="15" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" transform="rotate(-90 15 105)">Antibody Concentration</text>

            {/* Exposure 1 marker */}
            <line x1="80" y1="30" x2="80" y2="190" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="80" y="25" textAnchor="middle" fill="#fda4af" fontSize="9" fontWeight="bold">1st Exposure (Vaccine)</text>

            {/* Primary Curve (slow, lower peak) */}
            <path d="M 80,190 Q 110,185 140,110 Q 165,110 200,170" fill="none" stroke="#a855f7" strokeWidth="3" />
            <text x="140" y="95" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">Primary Response</text>
            <text x="140" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="8">(Slow, low antibodies)</text>

            {/* Exposure 2 marker */}
            <line x1="220" y1="30" x2="220" y2="190" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="220" y="25" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">2nd Exposure (Pathogen)</text>

            {/* Secondary Curve (very steep, huge peak, long-lasting) */}
            <path d="M 220,170 Q 235,160 255,40 Q 290,45 380,110" fill="none" stroke="#38bdf8" strokeWidth="3.5" />
            <text x="290" y="35" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Secondary Response</text>
            <text x="290" y="47" textAnchor="middle" fill="#bae6fd" fontSize="8">(Immediate, massive, long-lasting)</text>
          </svg>
        </div>

        <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
          <h5 className="font-bold text-sm text-purple-300">Immunological Memory:</h5>
          <p className="text-slate-300">
            • <strong className="text-purple-400">Vaccine introduces:</strong> Dead or attenuated pathogen, or isolated antigens.
          </p>
          <p className="text-slate-300">
            • <strong className="text-indigo-300">Primary Response:</strong> Lymphocytes take days to recognize antigen, clone into plasma cells, and secrete specific antibodies. Crucially, long-lived <strong className="text-purple-300">memory cells</strong> remain in blood.
          </p>
          <p className="text-slate-300">
            • <strong className="text-sky-300">Secondary Response:</strong> Memory cells recognize the pathogen instantly, producing thousands of times more antibodies at a much faster rate, neutralizing pathogen before symptoms appear.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ExcretionDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'nephron'>('nephron');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-teal-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            Renal Excretion & Nephron Filtration
          </h4>
          <p className="text-xs text-slate-400">Bowman's capsule ultrafiltration, selective tubule reabsorption, and urinary anatomy</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('nephron')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'nephron' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Nephron Ultrafiltration
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'system' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Urinary System Overview
          </button>
        </div>
      </div>

      {activeTab === 'nephron' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 280" className="w-full max-w-sm h-auto select-none">
              {/* Bowman's Capsule Cup */}
              <path
                d="M 60,60 C 20,90 20,170 60,200 L 110,185 C 80,165 80,95 110,75 Z"
                fill="#0f766e"
                stroke="#2dd4bf"
                strokeWidth="2"
              />
              <text x="35" y="130" fill="#99f6e4" fontSize="9" fontWeight="bold">Bowman's Capsule</text>

              {/* Glomerulus Knot of Capillaries */}
              <circle cx="105" cy="130" r="28" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
              <text x="105" y="134" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Glomerulus</text>

              {/* Afferent & Efferent Arterioles */}
              <line x1="140" y1="95" x2="115" y2="110" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
              <text x="145" y="90" fill="#fca5a5" fontSize="8" fontWeight="bold">Wide Afferent Arteriole (High Pressure)</text>

              <line x1="135" y1="165" x2="115" y2="150" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
              <text x="140" y="175" fill="#fca5a5" fontSize="8">Narrow Efferent Arteriole</text>

              {/* Proximal Convoluted Tubule */}
              <path
                d="M 60,200 C 90,230 140,190 180,230 L 180,250 C 130,220 90,260 50,215 Z"
                fill="#134e4a"
                stroke="#2dd4bf"
                strokeWidth="1.5"
              />

              {/* Loop of Henle */}
              <path
                d="M 180,230 L 220,230 L 220,270 C 220,290 260,290 260,270 L 260,180"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="4"
              />
              <text x="240" y="275" textAnchor="middle" fill="#5eead4" fontSize="8">Loop of Henle</text>

              {/* Collecting Duct */}
              <rect x="330" y="50" width="30" height="210" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="2" />
              <text x="345" y="150" textAnchor="middle" fill="#ccfbf1" fontSize="9" fontWeight="bold" transform="rotate(90 345 150)">
                Collecting Duct → Ureter
              </text>

              {/* Ultrafiltration high-pressure arrow */}
              <path d="M 85,130 L 55,130" stroke="#fef08a" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="3 2" />
              <text x="35" y="55" fill="#fde047" fontSize="9" fontWeight="bold">Ultrafiltration!</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-teal-300">Nephron Function Mark Points:</h5>
            <p className="text-slate-300">
              1. <strong className="text-amber-400">Ultrafiltration:</strong> Afferent arteriole is wider than efferent arteriole, creating high hydrostatic pressure. Small molecules (water, glucose, amino acids, urea, mineral ions) are forced through basement membrane into Bowman's capsule. Proteins and blood cells are too large and stay in blood.
            </p>
            <p className="text-slate-300">
              2. <strong className="text-teal-300">Selective Reabsorption:</strong> 100% of glucose is actively transported back into blood in convoluted tubules. Most water reabsorbed by osmosis; needed ions reabsorbed.
            </p>
            <p className="text-slate-300">
              3. <strong className="text-rose-400">Urine Formation:</strong> Concentrated fluid containing urea, excess water, and excess salts flows into collecting duct down ureter to bladder.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/70 border border-teal-500/30">
            <h5 className="text-sm font-bold text-teal-300 mb-2">Urinary Organ Pathway</h5>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
              <li><strong className="text-teal-300">Renal Artery:</strong> Delivers oxygenated blood rich in urea to kidneys.</li>
              <li><strong className="text-teal-300">Kidneys (Cortex & Medulla):</strong> Remove urea, excess ions, and water to form urine.</li>
              <li><strong className="text-teal-300">Ureters (2 tubes):</strong> Carry urine from kidneys down to urinary bladder via peristalsis.</li>
              <li><strong className="text-teal-300">Bladder:</strong> Muscular sac that temporarily stores urine.</li>
              <li><strong className="text-teal-300">Urethra:</strong> Single tube carrying urine from bladder out of body. (Controlled by sphincter muscle).</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/70 border border-emerald-500/30">
            <h5 className="text-sm font-bold text-emerald-300 mb-2">Hepatic Deamination Chain</h5>
            <p className="text-slate-300 mb-2">
              The body cannot store excess amino acids from digested proteins.
            </p>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700/60 text-emerald-300 font-mono text-center mb-2">
              Excess Amino Acids → Liver (Deamination) → Urea → Kidneys (Excretion) → Urine
            </div>
            <p className="text-slate-400">
              The liver removes the nitrogen-containing amino group (-NH₂), which is toxic, and converts it to non-toxic soluble urea. The remaining carbon skeleton is converted into carbohydrates for energy storage.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const CoordinationDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reflex_arc' | 'synapse' | 'accommodation'>('reflex_arc');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Nervous Coordination, Synapses & Eye Accommodation
          </h4>
          <p className="text-xs text-slate-400">Spinal reflex arc pathway, neurotransmitter diffusion across synaptic gap, and lens refraction</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('reflex_arc')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'reflex_arc' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Reflex Arc
          </button>
          <button
            onClick={() => setActiveTab('synapse')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'synapse' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Synaptic Cleft
          </button>
          <button
            onClick={() => setActiveTab('accommodation')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'accommodation' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Eye Accommodation
          </button>
        </div>
      </div>

      {activeTab === 'reflex_arc' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 220" className="w-full max-w-sm h-auto select-none">
              {/* Spinal Cord cross section butterfly */}
              <ellipse cx="320" cy="110" rx="75" ry="85" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              {/* Grey matter butterfly */}
              <path d="M 285,110 C 300,85 340,85 350,110 C 340,135 300,135 285,110 Z" fill="#334155" stroke="#64748b" />
              <text x="320" y="115" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">Relay Neurone (Spinal Grey Matter)</text>

              {/* Receptor (e.g. Skin pain receptor) */}
              <circle cx="45" cy="50" r="14" fill="#ea580c" stroke="#fdba74" strokeWidth="2" />
              <text x="45" y="53" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Receptor</text>
              <text x="45" y="80" textAnchor="middle" fill="#fdba74" fontSize="8">(Pain/Heat)</text>

              {/* Sensory Neurone (with dorsal root ganglion cell body) */}
              <path d="M 60,50 C 140,50 200,60 280,95" fill="none" stroke="#f97316" strokeWidth="2.5" />
              <circle cx="180" cy="55" r="7" fill="#ea580c" />
              <text x="180" y="42" textAnchor="middle" fill="#fed7aa" fontSize="8">Sensory Cell Body</text>

              {/* Motor Neurone */}
              <path d="M 285,125 C 210,165 140,170 60,170" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <text x="180" y="185" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">Motor Neurone</text>

              {/* Effector (Muscle) */}
              <rect x="25" y="155" width="40" height="30" rx="6" fill="#b91c1c" stroke="#f87171" strokeWidth="1.5" />
              <text x="45" y="173" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Muscle</text>
              <text x="45" y="200" textAnchor="middle" fill="#fca5a5" fontSize="8">Effector (Withdraws)</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-sky-300">Cambridge 5090 Reflex Chain:</h5>
            <div className="p-2 rounded bg-slate-900 border border-slate-700 font-mono text-[11px] text-sky-300">
              Stimulus → Receptor → Sensory Neurone → Relay Neurone (CNS) → Motor Neurone → Effector → Response
            </div>
            <p className="text-slate-300">
              Reflexes are <strong className="text-emerald-400">rapid, involuntary and automatic</strong> because the electrical action potential passes directly through the spinal cord (relay neurone) without waiting for conscious decision-making in the brain, thereby protecting tissues from injury.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'synapse' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 400 220" className="w-full max-w-sm h-auto select-none">
              {/* Presynaptic Knob */}
              <path d="M 40,70 L 130,70 C 180,70 180,150 130,150 L 40,150 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="80" y="115" fill="#bae6fd" fontSize="10" fontWeight="bold">Presynaptic Knob</text>

              {/* Vesicles */}
              <circle cx="120" cy="90" r="6" fill="#f59e0b" stroke="#fde68a" strokeWidth="1" />
              <circle cx="140" cy="100" r="6" fill="#f59e0b" stroke="#fde68a" strokeWidth="1" />
              <circle cx="125" cy="115" r="6" fill="#f59e0b" stroke="#fde68a" strokeWidth="1" />
              <circle cx="145" cy="125" r="6" fill="#f59e0b" stroke="#fde68a" strokeWidth="1" />
              <text x="130" y="80" fill="#fde68a" fontSize="8">Vesicles (Neurotransmitter)</text>

              {/* Synaptic Cleft Gap */}
              <rect x="185" y="50" width="30" height="120" fill="#0f172a" stroke="#475569" strokeDasharray="2 2" />
              <text x="200" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" transform="rotate(90 200 115)">
                Synaptic Gap (20 nm)
              </text>

              {/* Neurotransmitter diffusing dots */}
              <circle cx="195" cy="90" r="2.5" fill="#f59e0b" />
              <circle cx="205" cy="105" r="2.5" fill="#f59e0b" />
              <circle cx="195" cy="120" r="2.5" fill="#f59e0b" />

              {/* Postsynaptic Membrane with Receptor Cups */}
              <path d="M 270,70 C 225,70 225,150 270,150 L 360,150 L 360,70 Z" fill="#1e293b" stroke="#a855f7" strokeWidth="2.5" />
              {/* Receptor Cups */}
              <path d="M 235,90 C 240,90 240,98 235,98" stroke="#ec4899" strokeWidth="3" fill="none" />
              <path d="M 232,110 C 237,110 237,118 232,118" stroke="#ec4899" strokeWidth="3" fill="none" />
              <path d="M 235,130 C 240,130 240,138 235,138" stroke="#ec4899" strokeWidth="3" fill="none" />
              <text x="290" y="115" fill="#e9d5ff" fontSize="10" fontWeight="bold">Postsynaptic Neurone</text>
              <text x="250" y="80" fill="#f472b6" fontSize="8">Receptor Proteins</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-sky-300">Why Transmission is ONE-WAY:</h5>
            <p className="text-slate-300">
              1. Neurotransmitter vesicles are <strong className="text-amber-300">ONLY found in the presynaptic terminal</strong> knob.
            </p>
            <p className="text-slate-300">
              2. Chemical neurotransmitters diffuse across the synaptic gap down a concentration gradient.
            </p>
            <p className="text-slate-300">
              3. Receptor sites are <strong className="text-purple-300">ONLY located on the postsynaptic membrane</strong>. Binding triggers a new electrical impulse.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'accommodation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-800/70 p-4 rounded-xl border border-sky-500/30">
            <div className="flex justify-between items-center mb-2">
              <h5 className="text-sm font-bold text-sky-300">Viewing Near Object (&lt; 6 m)</h5>
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-200">Thick Lens</span>
            </div>
            <svg viewBox="0 0 160 80" className="w-32 h-16 mx-auto my-1">
              {/* Diverging light */}
              <line x1="10" y1="20" x2="80" y2="40" stroke="#fde047" strokeWidth="1.5" />
              <line x1="10" y1="60" x2="80" y2="40" stroke="#fde047" strokeWidth="1.5" />
              {/* Round fat lens */}
              <ellipse cx="80" cy="40" rx="14" ry="24" fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />
              {/* Focused rays onto retina */}
              <line x1="80" y1="40" x2="150" y2="40" stroke="#fde047" strokeWidth="2" />
            </svg>
            <ul className="space-y-1 text-slate-300 mt-2">
              <li>• <strong className="text-sky-300">Ciliary muscles:</strong> CONTRACT.</li>
              <li>• <strong className="text-sky-300">Suspensory ligaments:</strong> SLACK / LOOSEN.</li>
              <li>• <strong className="text-sky-300">Lens shape:</strong> Becomes THICKER / ROUNDER (elasticity).</li>
              <li>• <strong className="text-emerald-400">Refraction:</strong> Refracts light strongly onto the fovea.</li>
            </ul>
          </div>

          <div className="bg-slate-800/70 p-4 rounded-xl border border-indigo-500/30">
            <div className="flex justify-between items-center mb-2">
              <h5 className="text-sm font-bold text-indigo-300">Viewing Distant Object (&gt; 6 m)</h5>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-200">Thin Lens</span>
            </div>
            <svg viewBox="0 0 160 80" className="w-32 h-16 mx-auto my-1">
              {/* Parallel light */}
              <line x1="10" y1="32" x2="80" y2="35" stroke="#fde047" strokeWidth="1.5" />
              <line x1="10" y1="48" x2="80" y2="45" stroke="#fde047" strokeWidth="1.5" />
              {/* Thin flat lens */}
              <ellipse cx="80" cy="40" rx="6" ry="28" fill="#38bdf8" stroke="#bae6fd" strokeWidth="2" />
              {/* Focused rays onto retina */}
              <line x1="80" y1="40" x2="150" y2="40" stroke="#fde047" strokeWidth="2" />
            </svg>
            <ul className="space-y-1 text-slate-300 mt-2">
              <li>• <strong className="text-indigo-300">Ciliary muscles:</strong> RELAX.</li>
              <li>• <strong className="text-indigo-300">Suspensory ligaments:</strong> PULLED TAUT / TIGHT.</li>
              <li>• <strong className="text-indigo-300">Lens shape:</strong> Pulled THIN / FLAT.</li>
              <li>• <strong className="text-emerald-400">Refraction:</strong> Refracts light weakly onto the fovea.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
